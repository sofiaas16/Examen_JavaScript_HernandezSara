document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('FormdeEmprendimiento');
  const feriasRegistradas = [];


  function cargarDesdeStorage() {
      const datos = localStorage.getItem('ferias');
      if (datos) {
          feriasRegistradas.push(...JSON.parse(datos));
      }
  }


  function guardarEnStorage() {
      localStorage.setItem('ferias', JSON.stringify(feriasRegistradas));
  }

  function actualizarSelect() {
      const select = document.getElementById('feriaSelect');
      if (!select) return;

      select.innerHTML = '';
      feriasRegistradas.forEach((feria, i) => {
          const option = document.createElement('option');
          option.value = i;
          option.textContent = `${feria.nombre || 'Sin lugar'} - ${feria.fechaInicio || 'Sin fecha'} hasta ${feria.fechaFin || 'Sin fecha'}`;
          select.appendChild(option);
      });
  }

  form.addEventListener('submit', function(event) {
      event.preventDefault();

      const nuevoEmprendimiento = {
          nombre: document.getElementById('empnombre').value,
          categoria: document.getElementById('categoria').value,
          descripcion: document.getElementById('descripcion').value,
          redSocial: document.getElementById('enlace').value,
          fechaInicio: document.getElementById('fechadeInicio').value, 
          fechaFin: document.getElementById('fechadelFin').value, 
          producto: {
              nombre: document.getElementById('productname').value,
              precio: document.getElementById('priceproduct').value,
              descripcion: document.getElementById('descripcionproduct').value,
              foto: document.getElementById('fotoProd').value
          }
      };

      feriasRegistradas.push(nuevoEmprendimiento);
      guardarEnStorage();
      actualizarSelect();
      console.log();
      
  });


  cargarDesdeStorage();
  actualizarSelect();
});

