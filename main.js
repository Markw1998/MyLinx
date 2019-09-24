document.addEventListener('DOMContentLoaded', () => {
  let deferredPrompt;

  window.addEventListener('beforeinstallprompt', (e) => {
    deferredPrompt = e;
  });
});
