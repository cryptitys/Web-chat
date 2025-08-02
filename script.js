document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('message-form');
  const input = document.getElementById('message-input');
  const container = document.getElementById('message-container');

  function addMessage(text, type = 'sent') {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const div = document.createElement('div');
    div.className = `message ${type}`;
    div.innerHTML = `<p>${text}</p><span>${time}</span>`;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;

    addMessage(text, 'sent');
    input.value = '';

    setTimeout(() => {
      addMessage('Esta é uma resposta automática.', 'received');
    }, 1000);
  });
});
