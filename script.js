function alterarStt(btn) {
  const armario = btn.parentElement;
  const stt = armario.querySelector('.stt');
  const h5 = armario.querySelector('#h5stt');

  if (stt.style.backgroundColor === 'lightgreen') {
    stt.style.backgroundColor = 'lightcoral';
    h5.textContent = 'Ocupado';
  } else {
    stt.style.backgroundColor = 'lightgreen';
    h5.textContent = 'Disponível';
  }
}