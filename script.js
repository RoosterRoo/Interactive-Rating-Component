const options = document.querySelector('.options');
let value;
document.querySelector('button').disabled = true;

options.innerHTML = [1, 2, 3, 4, 5]
  .map((num) => {
    const option = `<div class="option">${num}</div>`;
    return option;
  })
  .join('');

document.querySelectorAll('.option').forEach((el) => {
  el.addEventListener('click', function () {
    document.querySelectorAll('.option').forEach((el) => {
      el.classList.remove('selected');
    });
    value = this.textContent;
    this.classList.add('selected');
    document.querySelector('button').disabled = false;
  });
});

document.querySelector('button').addEventListener('click', function () {
  document.querySelector(
    '.selection'
  ).textContent = `You selected ${value} out of 5`;
  document.getElementById('container-1').style.display = 'none';
  document.getElementById('container-2').style.display = 'flex';
});
