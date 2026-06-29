const board = document.getElementById('board');
const template = document.getElementById('soundButtonTemplate');
const volumeSlider = document.getElementById('volume');
const stopAllButton = document.getElementById('stopAll');
const searchInput = document.getElementById('search');
const categoryFilter = document.getElementById('categoryFilter');

let sounds = [];
let activeAudio = [];

function normalize(value) {
  return String(value || '').toLowerCase().trim();
}

async function loadSounds() {
  try {
    const response = await fetch('sounds.json', { cache: 'no-store' });
    if (!response.ok) throw new Error(`sounds.json kon niet geladen worden (${response.status})`);
    sounds = await response.json();
    setupCategories();
    renderBoard();
  } catch (error) {
    board.innerHTML = `<p class="error">Fout: ${error.message}</p>`;
  }
}

function setupCategories() {
  const categories = [...new Set(sounds.map(sound => sound.category || 'Overig'))].sort();
  for (const category of categories) {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  }
}

function filteredSounds() {
  const query = normalize(searchInput.value);
  const category = categoryFilter.value;

  return sounds.filter(sound => {
    const matchesQuery = !query || normalize(`${sound.title} ${sound.category} ${sound.shortcut}`).includes(query);
    const matchesCategory = category === 'all' || (sound.category || 'Overig') === category;
    return matchesQuery && matchesCategory;
  });
}

function renderBoard() {
  board.innerHTML = '';

  const list = filteredSounds();
  if (!list.length) {
    board.innerHTML = '<p>Geen geluiden gevonden.</p>';
    return;
  }

  for (const sound of list) {
    const node = template.content.cloneNode(true);
    const button = node.querySelector('button');
    button.dataset.file = sound.file;
    button.dataset.shortcut = sound.shortcut || '';
    button.querySelector('.emoji').textContent = sound.emoji || '🔊';
    button.querySelector('.title').textContent = sound.title || sound.file;
    button.querySelector('.meta').textContent = [sound.category, sound.shortcut ? `toets ${sound.shortcut}` : ''].filter(Boolean).join(' · ');
    button.addEventListener('click', () => playSound(sound, button));
    board.appendChild(node);
  }
}

function playSound(sound, button) {
  const audio = new Audio(sound.file);
  audio.volume = Number(volumeSlider.value);
  activeAudio.push(audio);

  button.classList.add('playing');

  audio.addEventListener('ended', () => {
    activeAudio = activeAudio.filter(item => item !== audio);
    button.classList.remove('playing');
  });

  audio.addEventListener('error', () => {
    alert(`Kan geluid niet afspelen: ${sound.file}\nControleer de bestandsnaam in sounds.json.`);
    button.classList.remove('playing');
  });

  audio.play().catch(() => {
    alert('De browser blokkeerde het afspelen. Klik eerst ergens op de pagina en probeer opnieuw.');
    button.classList.remove('playing');
  });
}

function stopAll() {
  for (const audio of activeAudio) {
    audio.pause();
    audio.currentTime = 0;
  }
  activeAudio = [];
  document.querySelectorAll('.sound-button.playing').forEach(button => button.classList.remove('playing'));
}

stopAllButton.addEventListener('click', stopAll);
searchInput.addEventListener('input', renderBoard);
categoryFilter.addEventListener('change', renderBoard);

volumeSlider.addEventListener('input', () => {
  for (const audio of activeAudio) audio.volume = Number(volumeSlider.value);
});

document.addEventListener('keydown', event => {
  if (event.target.matches('input, select, textarea')) return;

  if (event.key === 'Escape') {
    stopAll();
    return;
  }

  const key = event.key.toLowerCase();
  const sound = sounds.find(item => normalize(item.shortcut) === key);
  if (!sound) return;

  const button = [...document.querySelectorAll('.sound-button')]
    .find(item => item.dataset.file === sound.file);
  playSound(sound, button || document.createElement('button'));
});

loadSounds();
