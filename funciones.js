function mostrarFormulario() {
  const tipoCalculo = document.getElementById('tipo-calculo').value;
  const formulario = document.getElementById('formulario');
  formulario.innerHTML = '';

  if (tipoCalculo) {
    const calculos = {
      'velocidad': {
        'titulo': 'Velocidad (v = d / t)',
        'campos': [
          { 'id': 'velocidad-d', 'label': 'Distancia (d):' },
          { 'id': 'velocidad-t', 'label': 'Tiempo (t):' }
        ],
        'resultadoId': 'resultado-velocidad',
        'funcion': calcularVelocidad
      },
      'aceleracion': {
        'titulo': 'Aceleración (a = Δv / Δt)',
        'campos': [
          { 'id': 'aceleracion-dv', 'label': 'Cambio de velocidad (Δv):' },
          { 'id': 'aceleracion-dt', 'label': 'Cambio de tiempo (Δt):' }
        ],
        'resultadoId': 'resultado-aceleracion',
        'funcion': calcularAceleracion
      },
      'fuerza': {
        'titulo': 'Fuerza (F = m · a)',
        'campos': [
          { 'id': 'fuerza-m', 'label': 'Masa (m):' },
          { 'id': 'fuerza-a', 'label': 'Aceleración (a):' }
        ],
        'resultadoId': 'resultado-fuerza',
        'funcion': calcularFuerza
      },
      'trabajo': {
        'titulo': 'Trabajo (W = F · d · cos(θ))',
        'campos': [
          { 'id': 'trabajo-f', 'label': 'Fuerza (F):' },
          { 'id': 'trabajo-d', 'label': 'Distancia (d):' },
          { 'id': 'trabajo-angulo', 'label': 'Ángulo (θ en grados):' }
        ],
        'resultadoId': 'resultado-trabajo',
        'funcion': calcularTrabajo
      },
      'energia-cinetica': {
        'titulo': 'Energía Cinética (K = ½ · m · v²)',
        'campos': [
          { 'id': 'ec-m', 'label': 'Masa (m):' },
          { 'id': 'ec-v', 'label': 'Velocidad (v):' }
        ],
        'resultadoId': 'resultado-energia-cinetica',
        'funcion': calcularEnergiaCinetica
      },
      'energia-potencial': {
        'titulo': 'Energía Potencial (U = m · g · h)',
        'campos': [
          { 'id': 'ep-m', 'label': 'Masa (m):' },
          { 'id': 'ep-h', 'label': 'Altura (h):' }
        ],
        'resultadoId': 'resultado-energia-potencial',
        'funcion': calcularEnergiaPotencial
      },
      'densidad': {
        'titulo': 'Densidad (ρ = m / V)',
        'campos': [
          { 'id': 'densidad-m', 'label': 'Masa (m):' },
          { 'id': 'densidad-v', 'label': 'Volumen (V):' }
        ],
        'resultadoId': 'resultado-densidad',
        'funcion': calcularDensidad
      },
      'presion': {
        'titulo': 'Presión (P = F / A)',
        'campos': [
          { 'id': 'presion-f', 'label': 'Fuerza (F):' },
          { 'id': 'presion-a', 'label': 'Área (A):' }
        ],
        'resultadoId': 'resultado-presion',
        'funcion': calcularPresion
      },
      'carga': {
        'titulo': 'Carga Eléctrica (q = I · t)',
        'campos': [
          { 'id': 'carga-i', 'label': 'Corriente (I):' },
          { 'id': 'carga-t', 'label': 'Tiempo (t):' }
        ],
        'resultadoId': 'resultado-carga',
        'funcion': calcularCarga
      },
      'ohm': {
        'titulo': 'Ley de Ohm (V = I · R)',
        'campos': [
          { 'id': 'ohm-i', 'label': 'Corriente (I):' },
          { 'id': 'ohm-r', 'label': 'Resistencia (R):' }
        ],
        'resultadoId': 'resultado-ohm',
        'funcion': calcularOhm
      }
    };

    const calculo = calculos[tipoCalculo];
    if (calculo) {
      formulario.innerHTML = `
        <h3>${calculo.titulo}</h3>
        ${calculo.campos.map(campo => `
          <label for="${campo.id}">${campo.label}</label>
          <input type="number" id="${campo.id}" placeholder="Ej. 100" />
        `).join('')}
        <button type="button" onclick="${calculo.funcion.name}()">Calcular</button>
        <p id="${calculo.resultadoId}"></p>
      `;
    }
  }
}

function calcularVelocidad() {
  const d = parseFloat(document.getElementById('velocidad-d').value);
  const t = parseFloat(document.getElementById('velocidad-t').value);
  const resultado = document.getElementById('resultado-velocidad');

  if (isNaN(d) || isNaN(t) || t === 0) {
    resultado.textContent = 'Por favor, ingresa valores válidos y asegúrate de que el tiempo no sea cero.';
  } else {
    const v = d / t;
    resultado.textContent = `Velocidad: ${v.toFixed(2)} unidades`;
  }
}

function calcularAceleracion() {
  const dv = parseFloat(document.getElementById('aceleracion-dv').value);
  const dt = parseFloat(document.getElementById('aceleracion-dt').value);
  const resultado = document.getElementById('resultado-aceleracion');

  if (isNaN(dv) || isNaN(dt) || dt === 0) {
    resultado.textContent = 'Por favor, ingresa valores válidos y asegúrate de que el tiempo no sea cero.';
  } else {
    const a = dv / dt;
    resultado.textContent = `Aceleración: ${a.toFixed(2)} unidades`;
  }
}

function calcularFuerza() {
  const m = parseFloat(document.getElementById('fuerza-m').value);
  const a = parseFloat(document.getElementById('fuerza-a').value);
  const resultado = document.getElementById('resultado-fuerza');

  if (isNaN(m) || isNaN(a)) {
    resultado.textContent = 'Por favor, ingresa valores válidos.';
  } else {
    const f = m * a;
    resultado.textContent = `Fuerza: ${f.toFixed(2)} N`;
  }
}

function calcularTrabajo() {
  const f = parseFloat(document.getElementById('trabajo-f').value);
  const d = parseFloat(document.getElementById('trabajo-d').value);
  const angulo = parseFloat(document.getElementById('trabajo-angulo').value);
  const resultado = document.getElementById('resultado-trabajo');

  if (isNaN(f) || isNaN(d) || isNaN(angulo)) {
    resultado.textContent = 'Por favor, ingresa valores válidos.';
  } else {
    const thetaRad = angulo * (Math.PI / 180);
    const w = f * d * Math.cos(thetaRad);
    resultado.textContent = `Trabajo: ${w.toFixed(2)} J`;
  }
}

function calcularEnergiaCinetica() {
  const m = parseFloat(document.getElementById('ec-m').value);
  const v = parseFloat(document.getElementById('ec-v').value);
  const resultado = document.getElementById('resultado-energia-cinetica');

  if (isNaN(m) || isNaN(v)) {
    resultado.textContent = 'Por favor, ingresa valores válidos.';
  } else {
    const k = 0.5 * m * v * v;
    resultado.textContent = `Energía Cinética: ${k.toFixed(2)} J`;
  }
}

function calcularEnergiaPotencial() {
  const m = parseFloat(document.getElementById('ep-m').value);
  const h = parseFloat(document.getElementById('ep-h').value);
  const resultado = document.getElementById('resultado-energia-potencial');

  if (isNaN(m) || isNaN(h)) {
    resultado.textContent = 'Por favor, ingresa valores válidos.';
  } else {
    const g = 9.81; // Aceleración debido a la gravedad en m/s²
    const u = m * g * h;
    resultado.textContent = `Energía Potencial: ${u.toFixed(2)} J`;
  }
}

function calcularDensidad() {
  const m = parseFloat(document.getElementById('densidad-m').value);
  const v = parseFloat(document.getElementById('densidad-v').value);
  const resultado = document.getElementById('resultado-densidad');

  if (isNaN(m) || isNaN(v) || v === 0) {
    resultado.textContent = 'Por favor, ingresa valores válidos y asegúrate de que el volumen no sea cero.';
  } else {
    const rho = m / v;
    resultado.textContent = `Densidad: ${rho.toFixed(2)} kg/m³`;
  }
}

function calcularPresion() {
  const f = parseFloat(document.getElementById('presion-f').value);
  const a = parseFloat(document.getElementById('presion-a').value);
  const resultado = document.getElementById('resultado-presion');

  if (isNaN(f) || isNaN(a) || a === 0) {
    resultado.textContent = 'Por favor, ingresa valores válidos y asegúrate de que el área no sea cero.';
  } else {
    const p = f / a;
    resultado.textContent = `Presión: ${p.toFixed(2)} Pa`;
  }
}

function calcularCarga() {
  const i = parseFloat(document.getElementById('carga-i').value);
  const t = parseFloat(document.getElementById('carga-t').value);
  const resultado = document.getElementById('resultado-carga');

  if (isNaN(i) || isNaN(t)) {
    resultado.textContent = 'Por favor, ingresa valores válidos.';
  } else {
    const q = i * t;
    resultado.textContent = `Carga Eléctrica: ${q.toFixed(2)} C`;
  }
}

function calcularOhm() {
  const i = parseFloat(document.getElementById('ohm-i').value);
  const r = parseFloat(document.getElementById('ohm-r').value);
  const resultado = document.getElementById('resultado-ohm');

  if (isNaN(i) || isNaN(r) || r === 0) {
    resultado.textContent = 'Por favor, ingresa valores válidos y asegúrate de que la resistencia no sea cero.';
  } else {
    const v = i * r;
    resultado.textContent = `Voltaje: ${v.toFixed(2)} V`;
  }
}
