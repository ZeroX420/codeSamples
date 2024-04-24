function validar(){

    cantidadNumeros = document.querySelectorAll('.numeros')
    let listaNumeros = []

    for(let i = 0; i < cantidadNumeros.length; i++){

        input = "input"+("%d",i+1)
        numeroTemp = document.getElementById(input)
        listaNumeros[i] = Number(numeroTemp.value)
    }

    orden = document.getElementById('orden')
    console.log("It has been selected %s", orden.value)

    esNaN = confirmarNaN(listaNumeros)

    if(esNaN[0] == 0){

        cumpleRequisito = validarTresCifras(listaNumeros)

        if((cumpleRequisito[0] == 1)){

            if (orden.value == "ASCENDING"){
                
                modoOrden = document.getElementById('modoOrden')
                modoOrden.textContent = ''
                modoOrden.textContent = `Numbers arranged in ${orden.value} order:`

                ordenAscendente(listaNumeros)
                mostrarNumerosOrdenados(listaNumeros)
            }

            else if(orden.value == "DESCENDING"){

                modoOrden = document.getElementById('modoOrden')
                modoOrden.textContent = ''
                modoOrden.textContent = `Numbers arranged in ${orden.value} order:`

                ordenDescendente(listaNumeros)
                mostrarNumerosOrdenados(listaNumeros)                
            }
        }

        else{

            alert("The number entered in the box " + (cumpleRequisito[1]+1) + " is not between 0 and 100.")
        }
    }

    else{

        alert("The number entered in the box " + (esNaN[1]+1) + " is not a number.")
    }
}

function confirmarNaN(arreglo){

    let numTemp
    let i

    for(i = 0; i < arreglo.length; i++){

        numTemp = arreglo[i]

        if(isNaN(numTemp)){

            esNaN = 1
            break
        }

        else{

            esNaN = 0
        }
    }

    return [esNaN, i]
}

function validarTresCifras(arreglo){

    let numTemp
    let i

    for(i = 0; i < arreglo.length; i++){

        numTemp = arreglo[i]

        if((numTemp >= 0) && (numTemp <= 100)){

            cumpleRequisito = 1
        }

        else{

            cumpleRequisito = 0
            break
        }
    }

    return [cumpleRequisito, i]
}

function ordenAscendente(arreglo){

    let numeroTemp

    for(let i = 0; i < arreglo.length; i++){

        for(let j = 0; j < arreglo.length - i; j++){

            if(arreglo[j] > arreglo[j+1]){

                numeroTemp = arreglo[j]
                arreglo[j] = arreglo[j+1]
                arreglo[j+1] = numeroTemp
            }
        }
    }
}

function ordenDescendente(arreglo){

    let numeroTemp

    for(let i = 0; i < arreglo.length; i++){

        for(let j = 0; j < arreglo.length - i; j++){

            if(arreglo[j] < arreglo[j+1]){

                numeroTemp = arreglo[j+1]
                arreglo[j+1] = arreglo[j]
                arreglo[j] = numeroTemp
            }
        }
    }
}

function mostrarNumerosOrdenados(arreglo){

    listaNumerosOrdenados = document.getElementById('listaNumerosOrdenados')
    listaNumerosOrdenados.innerHTML = ''

    for(let i = 0; i < arreglo.length; i++){

        temp = String(arreglo[i])
        listaNumerosOrdenados.innerHTML = listaNumerosOrdenados.innerHTML + `<li>${temp}</li>`
    }
}