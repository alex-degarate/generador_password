let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let password =  document.getElementById("contrasena");
let letterChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let digitChars  = '01234567890123456789';    // al duplicar los digitos sube probabilidad  
let specialChars = "!@#$%^&*()!@#$%^&*()";   // que este presente, idem caract especiales


function generar() 
/*-----------------------------
   == DESAFIO ==
   agregar:
   A) caracteres especiales => OK

   B) boton de limpiar      => OK

   C) Indicar si la contraseña es debil o fuerte
      para contraseña fuerte agregar minimo:
       1 letra mayuscula
       2 letra minuscula
       3 numero
       4 char especial
 -------------------------------*/
{
  let password = "";
  let nroDigitado = parseInt(cantidad.value);

  if( nroDigitado < 8) {
      alert("la Longitud de la contraseña debe ser mayor de " + cantidad);
  }

  cadenaChars = specialChars + digitChars + letterChars ;

    // first char must be a letter
    password = letterChars[ Math.floor( Math.random() * letterChars.length )];   
 
    for( let i=1; i < nroDigitado; i++) 
    {       
        charAleatorio = cadenaChars[ Math.floor( Math.random() * cadenaChars.length )];
        // console.log(charAleatorio);
        password += charAleatorio;
    }

  console.log(password);

  if( validarPassw( password ))
      console.log("Contraseña fuerte");
  else
      console.log("Contraseña débil");
 

 contrasena.value = password;
 
}// eof



function validarPassw( contrasena)
/*-----------------------------------------------------------------------------
   La función devuelve true si se cumplen todas las condiciones, y false en
   caso contrario. Si devuelve true la contraseña es fuerte, debil de otro modo.
   Ejemplo de uso:
   const contrasena = "Ejemplo123!";

   if( validarPassw( contrasena)) 
       console.log("La contraseña es válida.");
   else 
       console.log("La contraseña no es válida.");
 -----------------------------------------------------------------------------*/
{
    const empiezaLetra = /^[A-Za-z]/.test(contrasena);
    const tieneMayuscula = /[A-Z]/.test(contrasena);
    const tieneMinuscula = /[a-z]/.test(contrasena);
    const tieneNumero = /[0-9]/.test(contrasena);
    const tieneCaracterEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(contrasena);
    let cMsg = '';
/* msg por consola
  if( !tieneMayuscula)
      console.log("\nDebe contener al menos una letra Mayúscula");
  if( !tieneMinuscula)
      console.log("\nDebe contener al menos una letra Minúscula");
  if( !tieneNumero)
      console.log("\nDebe contener al menos un digito Numérico");
  if( !tieneCaracterEspecial)
      console.log("\nDebe contener al menos un caracter Especial");
*/
  if( !tieneMayuscula)
      cMsg += "<br>Debe contener al menos una letra Mayúscula";
  if( !tieneMinuscula)
      cMsg += "<br>Debe contener al menos una letra Minúscula";
  if( !tieneNumero)
      cMsg += "<br>Debe contener al menos un digito Numérico";
  if( !tieneCaracterEspecial)
      cMsg += "<br>Debe contener al menos un caracter Especial";
   
  if(cMsg.length > 0)
     cMsg += "<br>Contraseña débil";
  else
     cMsg = "Contraseña fuerte !";

   document.getElementById("info").innerHTML = cMsg
  return empiezaLetra && tieneMayuscula && tieneMinuscula && tieneNumero && tieneCaracterEspecial;
}




