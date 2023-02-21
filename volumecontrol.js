window.addEventListener('DOMContentLoaded', () => {
  const audio = document.querySelector('audio');
  const volume = localStorage.getItem('volume') || 1;
  const currentTime = localStorage.getItem('currentTime') || 0;

  audio.volume = volume;
  audio.currentTime = currentTime;

  audio.addEventListener('volumechange', () => {
    localStorage.setItem('volume', audio.volume);
  });

  window.addEventListener('beforeunload', () => {
    localStorage.setItem('currentTime', audio.currentTime);
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const audio = document.querySelector('audio');
  const savedVolume = localStorage.getItem('savedVolume');

  if (savedVolume !== null) {
    audio.volume = savedVolume;
  }

  audio.addEventListener('volumechange', () => {
    localStorage.setItem('savedVolume', audio.volume);
  });
});