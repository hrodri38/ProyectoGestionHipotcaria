// LOGIN
function loginUser() {
  const correo = document.getElementById("correo").value;
  const password = document.getElementById("password").value;

  const user = mockUsers.find(
    (u) => u.correo === correo && u.password === password
  );

  if (!user) {
    document.getElementById("error").innerText = "Credenciales incorrectas";
    return;
  }

  localStorage.setItem("sesion", JSON.stringify(user));
  window.location.href = "consulta.html";
}

// REGISTRO
function registrar() {
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const password = document.getElementById("password").value;

  mockUsers.push({ nombre, correo, password });
  alert("Usuario registrado correctamente");
  window.location.href = "index.html";
}

// CONSULTA DE CRÉDITOS
function buscarCreditos() {
  const filtro = document.getElementById("busqueda").value.toLowerCase();
  const contenedor = document.getElementById("resultados");
  contenedor.innerHTML = "";

  const encontrados = mockCreditos.filter((c) =>
    c.cliente.toLowerCase().includes(filtro)
  );

  encontrados.forEach((c) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${c.cliente}</h3>
      <p>Monto: $${c.monto.toLocaleString()}</p>
      <p>Estado: ${c.estado}</p>
    `;
    contenedor.appendChild(card);
  });
}

function cerrarSesion() {
  localStorage.removeItem("sesion");
  window.location.href = "index.html";
}

function cargarResumen() {
  document.getElementById("total").innerText = mockCreditos.length;

  document.getElementById("activos").innerText =
    mockCreditos.filter(c => c.estado === "activo").length;

  document.getElementById("mora").innerText =
    mockCreditos.filter(c => c.estado === "en mora").length;

  document.getElementById("cancelados").innerText =
    mockCreditos.filter(c => c.estado === "cancelado").length;
}


