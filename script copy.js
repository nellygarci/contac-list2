

// Definir las variables y matrices
let letrasMi = "abcdefghijklmnñopqrstuvwxyz";
let letrasMa = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
let nroRegistro;
let x = 0;
let i = 0;
let y = 0;
let contador = 0;
let sw; 
let resp;
let menuSi;
let opcion;
let nombre = " ";
let nro;
baseDatos = [];
class Registro 
          { constructor(id,nombre, apellidos,telefono,ubicacion,ciudad,dirección,order){
             this.id = id;
             this.nombre = nombre;
             this.apellidos = apellidos;
             this.telefono = telefono;
             this.ubicacion = ubicacion;
             this.ciudad = ciudad;
             this.dirección = dirección;
             this.order = order;
             }
             
          }

//funcion para llenar la lista de datos
const llenarLista = function (){
    nroRegistro = parseInt(prompt("Introduzca el Nro. de registros  a agregar"))
    for ( x = 1; x <= nroRegistro; x++){
       let id = x;
       let nombre = prompt("Intrduzca Nombres: ", "Nelly") 
       let apellidos = prompt("Intrduzca Apellidos: ", "García" ) 
       let telefono = prompt("Intrduzca Telefono: ", "0992880146" ) 
       let ubicacion = prompt("Intrduzca Ubicación: ", "Ecuador" ) 
       let ciudad = prompt("Intrduzca ciudad: ", "Guayaquil" ) 
       let dirección= prompt("Intrduzca dirección: ", "Alborada") 
       let order = Math.floor(Math.random()*10);
      
       
        let nuevo = new Registro(id,nombre, apellidos,telefono,ubicacion,ciudad,dirección,order)
        baseDatos.push(nuevo);
        alert(`${nuevo.nombre}  agregado satisfactoriamente`);
        
        
       
         
           
          }

          console.table(baseDatos);
          }
          

             
// Imprimir el encabezado

function  imprmirEncabezado  (){
  /* document.write("********************************************************");
   document.write("<br>")
   document.write("       " +  "Registro de contacto");
   document.write("<br>")
   document.write("********************************************************");
   document.write("<br>")
  // document.write("          " + "Id" + "Nombre      " + "Apellido    " + "Teléfono    " + "Ubicación   " + "Ciudad    " + "Dirección     ")
       */     
           } 
     
 
///  ordenar lista
    


 // Funcion para imprimir la lista 
 function imprimirLista(baseDatos){

//generar registros para imprimir
 //baseDatos.splice(0)
 


     nroRegistro = 20


     for ( x = 1; x <= nroRegistro; x++){
       let id = x;
       
       let apellidos =  "García" 
       let telefono =  "0992880146" 
       let ubicacion =   "Ecuador" 
       let ciudad = "Guayaquil" 
       let dirección=  "Alborada"
       let order = Math.floor(Math.random()*1000)
   // generar un nombre diferente

        nro = Math.floor(Math.random()* (27))+0;
        contador ++;
        if (nro < 20)
          nombre = contador + letrasMa[nro]+letrasMi[nro+1]+ letrasMi[nro+2]+letrasMi[nro+5] +letrasMi[nro+3]
         
          else{
           nombre = contador+letrasMa[nro]+letrasMi[nro-1]+ letrasMi[nro-2] + letrasMi[nro-4] + letrasMi[nro-2] 
      
           }
                         
        let nuevo = new Registro(id,nombre, apellidos,telefono,ubicacion,ciudad,dirección,order)
        baseDatos.push(nuevo);
        
        }

        console.table(baseDatos)
// ordenar por order

// burbuja
/*
let aux;

for(let i =0; i<baseDatos.length-1; i++){
   for (let j = 0; j<baseDatos.length-1 ; j++){
      
     
   
      if (baseDatos[j].order > baseDatos[j+1].order){
         aux = baseDatos[j].order;
         auxId = baseDatos[j].id;
         auxape = baseDatos[j].apellido;
         auxNom = baseDatos[j].nombre;
         auxtel = baseDatos[j].telefono;
         auxUbi = baseDatos[j].ubicacion;
         auxCiu = baseDatos[j].ciudad;
         auxDir = baseDatos[j].dirección;
         
        baseDatos[j].order = baseDatos[j+1].order;
        baseDatos[j+1].order = aux;
        baseDatos[j].id = baseDatos[j+1].id;
        baseDatos[j+1].id = auxId;
        baseDatos[j].nombre = baseDatos[j+1].nombre
        baseDatos[j].apellido = baseDatos[j+1].apellido
        baseDatos[j].telefono = baseDatos[j+1].telefono
        baseDatos[j].ubicacion = baseDatos[j+1].ubicacion
        baseDatos[j].ciudad = baseDatos[j+1].ciudad
        baseDatos[j].dirección = baseDatos[j+1].dirección
        baseDatos[j+1].nombre = auxNom;
        baseDatos[j+1].apellido = auxape;
        baseDatos[j+1].telefono = auxtel;
        baseDatos[j+1].ubicacion = auxUbi;
        baseDatos[j+1].ciudad= auxCiu;
        baseDatos[j+1].dirección = auxDir;
     
      }
   }


}


   
   number.sort ((a, b) => {
      console.log("hola")
          if (a ==b)
            return(0)
          if (a<b)
          return(-1)
          return(1)
     // todo esto se simplifica a return(a-b)
    
       })
       */
  
    
      baseDatos.sort ((a, b) => {
         
    /*    if (a.order == b.order)
           return(0)
        if (a.order < b.order)
           return(-1)
        else 
          return(1)*/
    return (a.order - b.order)



       
          })
          console.table(baseDatos)
    
       
       



//************************************ 
/*
    baseDatos.forEach(contacto => {
   //    console.log("entre a imprimir inventados")
       document.write("<br>")
       document.write(contacto.id + "    "+ contacto.nombre + "    " + contacto.apellidos + "    " + contacto.telefono + "    " + contacto.ubicacion + "    " + contacto.ciudad + "    " + contacto.dirección + "  "+ contacto.order);
       document.write("<br>")
    });*/
          
     
       }

/* funcion imprimir la lista despues de creada por el usuario */
function imprimirListaC(baseDatos){
   baseDatos.forEach(contacto => {
 
      document.write("<br>")
    //  document.write(contacto.id + "    "+ contacto.nombre + "    " + contacto.apellidos + "    " + contacto.telefono + "    " + contacto.ubicacion + "    " + contacto.ciudad + "    " + contacto.dirección + "  "+ contacto.order);
      document.write("<br>")
   });
}

/* funcion eliminar registro */
function eliminaRegistro(baseDatos){
  let numEli = parseInt(prompt("Intrduzca el id a eliminar: " ))
  for (x=0; x < baseDatos.length; x++){
      if  (baseDatos[x].id == numEli){
         sw = "s"
         resp = prompt("Es este el nombre que desea eliminar? s/n: ", baseDatos[x].id) 
         {
               baseDatos = baseDatos.filter(contact => contact.id != numEli)
               alert("registro eliminado exitosamente");
              }
         
         }
         if (sw != "s"){
             alert(" Registro no existe")

         }

      }
   }         


 function modificarRegistro(baseDatos){
     baseDatos.forEach(contacto => {
    //   document.write(contacto.id + "    "+ contacto.nombre + "    " + contacto.apellidos + "    " + contacto.telefono + "    " + contacto.ubicacion + "    " + contacto.ciudad + "    " + contacto.dirección);
    //   document.write("<br>")
           })
       numEli = parseInt(prompt("Introduzca id a modificar: "));
       for (x=0; x < baseDatos.length; x++){
          if  (baseDatos[x].id == numEli){
              baseDatos[x].nombre = prompt("Intrduzca Nombres: ", baseDatos[x].nombre) 
              baseDatos[x].apellidos = prompt("Intrduzca Apellidos: ", baseDatos[x].apellidos) 
              baseDatos[x].telefono = prompt("Intrduzca Telefono: ", baseDatos[x].telefono) 
              baseDatos[x].ubicacion = prompt("Intrduzca Ubicación: ", baseDatos[x].ubicacion) 
              baseDatos[x].ciudad = prompt("Intrduzca ciudad: ", baseDatos[x].ciudad ) 
              baseDatos[x].dirección= prompt("Intrduzca dirección: ", baseDatos[x].dirección) 
              alert("registro modificado exitosamente");
                  
          }
            
       }
  }
            
       
 function mostrarMenu(){
          let sw = "2";
          while(sw != "1") {
              opcion = parseInt(prompt(`
              Menu Principal \n
                 1.- Crear. \n
                 2.- Modificar  \n
                 3.- Eliminar \n
                 4.- Imprimir contactos con ordenamiento\n
                 5.- imprimir contactos creados por  por consola\n
                 6.- Salir\n
                 Introduzca opción`))
                 if (opcion != 5){
                    if(opcion != 1 && opcion != 2 && opcion != 3 && opcion != 4 && opcion != 5 && opcion != 6){
                       alert("opcion invalida")
                      }
                     
                     else
                     { 
                       sw = "1"
                     
                     }
                    
                 }
                 else 
                  sw = "1"
                   
               } 
               
               
              
      }
            
           
   
   
   

   // Menu Principal 
  function opercionesMenu(){

     menuSi = "si"
    
     while (menuSi == "si"){
       mostrarMenu()
       
      
       if (opcion != 6){
         if (opcion == "1"){

            llenarLista();
            
           }
         else
           if (opcion ==2){
              modificarRegistro(baseDatos)
              imprmirEncabezado();
              imprimirListaC (baseDatos)
              }
           else
             if (opcion == 3){
               eliminaRegistro(baseDatos); 
              
             }
             
             else
                if (opcion == 4){
                  imprmirEncabezado();
                  imprimirLista (baseDatos)
                 
                  }
                else 
                imprmirEncabezado();
                imprimirListaC (baseDatos)
                
  
         menuSi = prompt("Desea continuar si/no: ")
       }
       else {
         alert("El programa ha terminado satisfctoriamente")
         menuSi = "no"
       }
         
       
  
    }
       
   }
   

   
         
  
   
       
     

  
  

  //  mostrarMenu();
   opercionesMenu()

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