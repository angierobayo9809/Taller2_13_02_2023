/*2.	Haz un programa de nombre main.js y otro llamado index.html incluir el archivo JavaScript en el 
<head></ head>, que has de grabar en una carpeta llamada condicionales_Edad_Switch_Case_FechaActual, por 
medio del prompt pedir la edad y verificar si la edad ingresada es de 18 mostrar que “Es mayor de edad” 
del caso contrario mostrar un mensaje por medio de la consola o de la ventana emergente que diga “La edad 
ingresada no cumple con los parámetros “, usando el condicional Switch Case.*/

let numero = prompt("Ingrese su edad");
switch (numero)
{
    case "18": 
        console.log("Es mayor de edad.");
    break;
    default:
        console.log("La edad ingresada no cumple con los parámetros ");
    break;
}