function probarValidarCantIntegrantesMayorACero(){
    console.assert (
        validarCantidadIntegrantes(0)==='Se debe ingresar un valor mayor a 0',
        'Validar cantidad de integrantes mayor a cero no funcionó asignandole el valor de 0')
}

function probarValidarCantIntegrantesEsEntero(){
    console.assert (
        validarCantIntegrantesEsEntero(1.1111)==='El numero no puede contener decimales',
        'Validar cantidad de integrantes = numero entero no funcionó asignandole el valor 1.1111'
    )
}

probarValidarCantIntegrantesMayorACero();
probarValidarCantIntegrantesEsEntero();
