// Capturar evento de submit do formulário
const frm = document.querySelector('form');


frm.addEventListener('submit', function (e) {
  e.preventDefault();

  const peso = Number(frm.inPeso.value);
  const altura = Number(frm.inAltura.value);

  if (!peso) {
    setResultado('Peso inválido', false);
    return;
  }

  if (!altura) {
    setResultado('Altura inválida', false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);
  const nClassImc = getClassNivel(imc);
  const msg = `Seu IMC é <b>${imc}</b> (${nivelImc}).`;

  setResultado(msg, true, nClassImc);
});


function getNivelImc (imc) {
  const nivel = ['Abaixo do peso', 'Peso Ideal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.4) return nivel[0];
}

function getClassNivel (imc) {
  const nivelClass = ['abaixo','normal','sobrepeso',
    'obesidade','obesidade2','Obesidade3'];

  if (imc >= 39.9) return nivelClass[5];
  if (imc >= 34.9) return nivelClass[4];
  if (imc >= 29.9) return nivelClass[3];
  if (imc >= 24.9) return nivelClass[2];
  if (imc >= 18.5) return nivelClass[1];
  if (imc < 18.4) return nivelClass[0];
  return nivelClass;
}


function getImc (peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criaP () {
  const p = document.createElement('p');
  return p;
}

function setResultado (msg, isValid, nClassImc) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  const p = criaP();

  if (isValid) {
    p.classList.add(nClassImc);
  } else {
    p.classList.add('bad');
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}

