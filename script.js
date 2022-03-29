// Definir las variables y matrices

let nroRegistro;
let lista = new Array();

//funcion para llenar la lista de datos
const llenarLista = function (){
    contadorMina = 0;
    nroRegistro = parseInt(prompt("Introduzca el Nro. de registros  a agregar"))
    

    

  for ( let x = 0; x < nroRegistro; x++){
      
    for (i=0; i<6; i++){

      }
    let id = prompt("Intrduzca identificacion: " ) 
    let nombres = prompt("Intrduzca Nombres: " ) 
    let apellidos = prompt("Intrduzca Apellidos: " ) 
    let telefono = prompt("Intrduzca Telefono: " ) 
    let ubicacion = prompt("Intrduzca Ubicación: " ) 
    let ciudad = prompt("Intrduzca ciudad: " ) 
    let dirección= prompt("Intrduzca dirección: " ) 
    let contenedor = id + nombres + apellidos + telefono + ciudad + ubicacion + dirección
    let nuevaLongitud = lista.push(contenedor)   
  

     }
      
     console.log(lista)   
    }


    /* Funcion para imprimir la lista */
     function imprimirLista (lista){
         console.log(lista)
     
       }

   /* funcion eliminar registro */
   function eliminaRegistro(){
    let nomEli = prompt("Intrduzca nombre del registro a eliminar: " ) 
   let pos = lista.indexOf('nomEli');
   let elementoEliminado = lista.splice(pos, 7)   
   }
   




    llenarLista()
    console.log("imprime lista llena")
    imprimirLista(lista)
  
   /* eliminaRegistro()*/
    console.log("imprime lista restada")
    imprimirLista(lista)

/*

    Ajusta las funciones de crear y eliminar un contacto para que puedan almacenar la siguiente información como objetos:
id
nombres
apellidos
teléfono
ubicaciones
ciudad
dirección
Publica tu código en Github, en tu repositorio contact-list crea un branch llamado project-2 y compártelo con nosotros. 👍🏼⬇️
*/