const form = document.querySelector('form');
const result = document.querySelector('#result');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const q1 = Number(event.target.q1.value);
  const q2 = Number(event.target.q2.value);
  const q3 = Number(event.target.q3.value);

  let v1 = '';
  if (q1 < 4) {
    v1 = 'Jobless';
  } else if (q1 >= 4 && q1 <= 8) {
    v1 = 'Lazy';
  } else {
    v1 = 'Enthusiastic';
  }

  let v2 = '';
  if (q2 < 2) {
    v2 = 'Regressive';
  } else if (q2 >= 2 && q2 <= 4) {
    v2 = 'Staying';
  } else {
    v2 = 'Progressive';
  }

  let v3 = '';
  if (q3 > 80) {
    v3 = 'Fat';
  } else if (q3 >= 76 && q3 <= 80) {
    v3 = 'Chubby';
  } else {
    v3 = 'Fit';
  }

  result.textContent = `You are ${v1}, ${v2}, and ${v3} today!`;
});
