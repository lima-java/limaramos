// Función para aplicar estilos con validación
function applyBodyStyles() {
  try {
    // Verificar que el DOM esté cargado
    if (!document.body) {
      console.error('El elemento body no está disponible');
      return false;
    }
  console.log('Estilos aplicados:');
  console.log('Text shadow:', styles.textShadow);
  console.log('Text align:', styles.textAlign);
  console.log('Filter:', styles.filter);
  console.log('Justify content:', styles.justifyContent);
  console.log('Background color:', styles.backgroundColor);
  console.log('Color:', styles.color);
  console.log('Padding:', styles.padding);
  console.log('Width:', styles.width);
}
   

    console.log('Estilos aplicados correctamente');
    return true;

  } catch (error) {
    console.error('Error al aplicar estilos:', error);
    return false;
  }


// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', applyBodyStyles);
} else {
  applyBodyStyles();
}

// Función para verificar que los estilos se aplicaron
function validateStyles() {
  const styles = window.getComputedStyle(document.body);
  
  console.log('Estilos aplicados:');
  console.log('Text align:', styles.textAlign);
  console.log('Filter:', styles.filter);
  console.log('Background color:', styles.backgroundColor);
  console.log('Color:', styles.color);
  console.log('Padding:', styles.padding);
  console.log('Width:', styles.width);
}

// Validar después de 100ms para asegurar que se aplicaron
setTimeout(validateStyles, 100);