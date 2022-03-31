
/* Funiona el ingreso, la modificación y la eliminación 
falta por coloacrle el menú principal, 
pero tengo que copiar el link ya que debo ver la clase de hoy 
proximamente estará completo*/






// Definir las variables y matrices
let nroRegistro;
let x;
baseDatos = [];
class Registro 
          { constructor(id,nombre, apellidos,telefono,ubicacion,ciudad,dirección){
             this.id = id;
             this.nombre = nombre;
             this.apellidos = apellidos;
             this.telefono = telefono;
             this.ubicacion = ubicacion;
             this.ciudad = ciudad;
             this.dirección = dirección;
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
       
        let nuevo = new Registro(id,nombre, apellidos,telefono,ubicacion,ciudad,dirección)
        baseDatos.push(nuevo)
        alert(`${nuevo.nombre}  agregado satisfactoriamente`)
        
       
         
           
          }

          
          }
          
             


         function  imprmirEncabezado  (){
            document.write("********************************************************");
            document.write("<br>")
            document.write("       " +  "Registro de contacto");
            document.write("<br>")
            document.write("********************************************************");
            document.write("<br>")
            document.write("          " + "Id" + "Nombre      " + "Apellido    " + "Teléfono    " + "Ubicación   " + "Ciudad    " + "Dirección     ")
            
           } 
     
 
    


    // Funcion para imprimir la lista 
     function imprimirLista (baseDatos){
         baseDatos.forEach(contacto => {
         document.write("<br>")
         document.write(contacto.id + "    "+ contacto.nombre + "    " + contacto.apellidos + "    " + contacto.telefono + "    " + contacto.ubicacion + "    " + contacto.ciudad + "    " + contacto.dirección);
         document.write("<br>")
         
          });
     
       }

   /* funcion eliminar registro */
   function eliminaRegistro(baseDatos){
      let numEli = parseInt(prompt("Intrduzca el id a eliminar: " ))
      
      
      
      baseDatos = baseDatos.filter(contact => contact.id != numEli)
      console.table(baseDatos);
        /*
         baseDatos.forEach(contacto => {
            if (contacto.id == numEli); 
            const baseDatos = baseDatos.splice(numEli,7)
           console.log(baseDatos2)
            
             });
        */
      
       
}

       function modificarRegistro(baseDatos){
          baseDatos.forEach(contacto => {
            document.write(contacto.id + "    "+ contacto.nombre + "    " + contacto.apellidos + "    " + contacto.telefono + "    " + contacto.ubicacion + "    " + contacto.ciudad + "    " + contacto.dirección);
            document.write("<br>")
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
               
            }
            
           }

                             
           
            }
            
       
       
   
   
   

   // Menu Principal 
  function mostrarMenu(){
   

   opcion = prompt("Introduzca opción")

   if (opcion == "1"){
      llenarLista();
   }
   else
     if (opcion ==2){
        imprmirEncabezado();
        imprimirLista (baseDatos)
        }
      else
         if (opcion == 4){
            eliminaRegistro(); 
         }
         
  }
   
       
     

  function imprimeMenu(){
   document.write("\"Menu Principal \"")
   document.write("1.- Crear");
   document.write("2.- Modificar");
   document.write("3.- Modificar");
   document.write("4.- Eliminar");
   document.write("4.- salir"); 
  }   
  

  //  mostrarMenu();
     llenarLista();
     imprmirEncabezado();
  imprimirLista (baseDatos)
   console.table(baseDatos)
 //   eliminaRegistro(baseDatos);
     imprimirLista (baseDatos)
    

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