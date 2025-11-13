const range = document.getElementById('clientRange');
const clientCount = document.getElementById('clientCount');
const income = document.getElementById('income');

range.addEventListener('input', () => {
  const value = parseInt(range.value);
  const total = value * 33600;
  clientCount.textContent = value;
  income.textContent = total.toLocaleString('ru-RU') + ' ₽';
});
