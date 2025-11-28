const iframe = document.getElementById('cygnisFrame');
const placeholder = document.getElementById('placeholder');
const reloadBtn = document.getElementById('reload');
const openBtn = document.getElementById('open');

// Quand l'iframe est chargée, cacher le placeholder
iframe.addEventListener('load', () => {
  setTimeout(() => {
    placeholder.classList.add('hidden');
  }, 400);
});

// Recharger l'iframe
reloadBtn.addEventListener('click', () => {
  placeholder.classList.remove('hidden');
  iframe.contentWindow.location.reload();
});

// Ouvrir l'iframe dans un nouvel onglet
openBtn.addEventListener('click', () => {
  window.open(iframe.src, '_blank', 'noopener');
});

// Timeout si l'iframe ne charge pas
setTimeout(() => {
  if(!iframe.contentWindow || !placeholder.classList.contains('hidden')){
    placeholder.querySelector('.title').textContent = 'Impossible de charger';
    placeholder.querySelector('.desc').textContent = "Si la page est bloquée (cookies/ngrok), clique sur 'Ouvrir' pour l'afficher dans un nouvel onglet.";
    placeholder.classList.remove('hidden');
  }
}, 7000);
