let nombre = prompt("nombre completo");
let nacimiento = prompt("año de nacimiento cuatro cifras");
//const ANO = new Date().getFullYear();
//let edad = (ANO - nacimiento);
//let salida = `hola ${nombre} tienes ${edad}`;

function x(nombre, nacimiento) {
  const ANO = new Date().getFullYear();
  let edad = (ANO - nacimiento);
  let salida = `hola ${nombre} tienes ${edad}`;
  if (edad < 10) {
    alert(`${salida} que bueno que puedas dedicar tiempo a jugar`);
  } else if (edad <= 18) {
    alert(`${salida}  tienes toda una vida por delante`)
  } else if (edad > 18 && edad <= 35) {
    alert(`${salida} que grande que estas`);
  } else if (edad > 35 && edad <= 65) {
    alert(`${salida} estas muy grande para andar con jueguitos`);
  } else { alert(`camara prro`) }
}
x(nombre, nacimiento);