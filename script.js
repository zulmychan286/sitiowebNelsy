document.getElementById('pedidoForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const pedido = document.getElementById('pedido').value.trim();
    const nombre = document.getElementById('nombre').value.trim();
    const direccion = document.getElementById('direccion').value.trim();
    const referencia = document.getElementById('referencia').value.trim();
    const pago = document.getElementById('pago').value.trim();
    const hora = new Date().toLocaleTimeString();
  
    if (!pedido || !nombre || !direccion || !pago) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }
  
    const mensaje = `Hola, quiero pedir:\n- ${pedido}\n- Nombre: ${nombre}\n- Dirección: ${direccion}\n- Referencia: ${referencia}\n- Pago con: ${pago}\n- Hora del pedido: ${hora}`;
    const telefono = '9881037642'; // <-- Cambia por tu número
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
  
    window.open(url, '_blank');
  });
  