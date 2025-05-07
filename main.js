document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('FormdeEmprendimiento');
  const ferias = []; 

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nuevo = {
      nombre: document.getElementById('empnombre').value,
      categoria: document.getElementById('categoria').value,
      descripcion: document.getElementById('descripcion').value,
      redSocial: document.getElementById('enlace').value,
      producto: {
        nombre: document.getElementById('productname').value,
        precio: document.getElementById('priceproduct').value,
        descripcion: document.getElementById('descripcionproduct').value,
        foto: document.getElementById('fotoProd').value
      }
    };

    ferias.push(nuevo);
    guardarEnStorage();
    actualizarSelect();
  });

  function guardarEnStorage() {
    localStorage.setItem('ferias', JSON.stringify(ferias));
  }

  function actualizarSelect() {
    const select = document.getElementById('feriaSelect');
    select.innerHTML = '';
    ferias.forEach((feria, i) => {
      const option = document.createElement('option');
      option.value = i;
      option.textContent = `${feria.lugar || 'Sin lugar'} - ${feria.fechaInicio || 'Sin fecha'}`;
      select.appendChild(option);
    });
  }
});
