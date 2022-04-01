
/* Funiona el ingreso, la modificación y la eliminación 
falta por coloacrle el menú principal, 
pero tengo que copiar el link ya que debo ver la clase de hoy 
proximamente estará completo*/






// Definir las variables y matrices
let nroRegistro;
let x;
let sw;
let resp;
let MenuSi;
let opcion;
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
        baseDatos.push(nuevo)=
        alert(`${nuevo.nombre}  agregado satisfactoriamente`);
        mostrarMenu();
        
       
         
           
          }

          console.table(baseDatos);
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
     
 
    //  ordenar lista
    


    // Funcion para imprimir la lista 
     function imprimirLista (baseDatos){
         baseDatos.forEach(contacto => {
         document.write("<br>")
         document.write(contacto.id + "    "+ contacto.nombre + "    " + contacto.apellidos + "    " + contacto.telefono + "    " + contacto.ubicacion + "    " + contacto.ciudad + "    " + contacto.dirección + "  "+ contacto.order);
         document.write("<br>")
         
          });
          mostrarMenu()
     
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
               mostrarMenu()
              }
              
           }
         
        }
      if (sw != "s"){
         alert(" Registro no existe")

      }

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
               alert("registro modificado exitosamente");
               mostrarMenu()

               
            }
            
           }

                             
           
            }
            
       
            function mostrarMenu(){
              /* alert("\"Menu Principal \"")
   
               alert("1.- Crear");
               document.write("<br>")
               alert("2.- Imprimir lista de  contactos");
               document.write("<br>")
               alert("3.- Modificar");
               document.write("<br>")
               alert("4.- Eliminar");
               document.write("<br>")
               */
               
               let sw ="2"
               do {
                  opcion = parseInt(prompt(`
                   Menu Principal \n
                   1.- Crear. \n
                   2.- Imprimir lista de contactos \n
                   3.- Modificar \n
                   4.- Eliminar\n
                   Introduzca opción`))
                   
                   alert(opcion) 
                 //  if (opcion != 1 || opcion != 2 || opcion !=  3 ||  opcion != 4 ){
                    if(opcion <= 1 || opcion >= 4){

                    
                     alert("opcion invalida")
                   }
                     
                   else
                     sw = "1"
               } while (sw == "1")
               return(opcion)
               alert("retornado")
            }
            
           
   
   
   

   // Menu Principal 
  function opercionesMenuu(opcion){
    MenuSi = "si"
    while (MenuSi == "si")
      mostrarMenu()
   console.log(opcion)
         if (opcion == "1"){
           llenarLista();
          }
      else
        if (opcion ==2){
           imprmirEncabezado();
           imprimirLista (baseDatos)
           }
         else
            if (opcion == 3)
               modificarRegistro(baseDatos)
            else
               if (opcion == 4){
                eliminaRegistro(); 
                 }
               else
                 salida()

     let MenuSi = prompt("Desea continuar si/no: ")
   
   }
   

   
         
  
   
       
     

  
  

  //  mostrarMenu();
   mostrarMenu()

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