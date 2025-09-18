
function validarDNIoNIE(identificacion) {
    const regex = /^([XYZ]?\d{7,8})([A-Za-z])$/;
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    
    if (!regex.test(identificacion)) {
        return false;
    }
    
    const [, numero, letra] = regex.exec(identificacion.toUpperCase());
    
    // Procesar NIE (reemplazar X, Y, Z por 0, 1, 2)
    let num = numero.replace(/^X/, '0')
                   .replace(/^Y/, '1')
                   .replace(/^Z/, '2');
    
    const resto = parseInt(num) % 23;
    const letraCorrecta = letras.charAt(resto);
    
    return letra.toUpperCase() === letraCorrecta;
}
