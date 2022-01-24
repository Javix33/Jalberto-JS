/*let nombre = prompt("nombre completo");
let nacimiento = prompt("año de nacimiento cuatro cifras");
//const ANO = new Date().getFullYear();
//let edad = (ANO - nacimiento);
//let salida = `hola ${nombre} tienes ${edad}`;

function x(nombre, nacimiento) {
  const ANO = new Date().getFullYear();
  let edad = (ANO - nacimiento);
  let salida = `hola ${nombre} tienes ${edad}`;
  if (edad < 10) {
    console.log(`${salida} que bueno que puedas dedicar tiempo a jugar`);
  } else if (edad <= 18) {
    console.log(`${salida}  tienes toda una vida por delante`)
  } else if (edad > 18 && edad <= 35) {
    console.log(`${salida} que grande que estas`);
  } else if (edad > 35 && edad <= 65) {
    console.log(`${salida} estas muy grande para andar con jueguitos`);
  } else { console.log(`camara prro`) }
}
x(nombre, nacimiento);*/

/*for (i = 0; i < 100; i++) {
  let salida = `se vendio la entrada ${i}`;
  if (i <= 50) {
    console.log(`${salida} quedan mas de la mitad de entradas`);
  } else if (i > 50 && i < 75) {
    console.log(`${salida} quedan pocas entradas`)
  } else if (i >= 75 && i < 99) {
    console.log(`${salida} las entradas estan apunto de agotarse`)
  } else { console.log(`${salida} esta es la ultima entrada`) }
}*/
let caballitos = prompt("¿cuantos caballitos serviras?");
let mlCaballito = caballitos * 30;
for (let i = 750, r = 1; i > 30; i -= mlCaballito, r++) {
  let rondas = (i / mlCaballito) - 1;
  let salida = `Ronda ${r} serviste ${caballitos} caballitos de mezcal te quedan ${rondas} rondas`;
  if (i >= 500) {
    console.log(`${salida} eso es mas de la mitad, la noche es joven`);
  } else if (i < 500 && i >= 300) {
    console.log(`${salida} tu mezcal se esta agotando`);
  } else { console.log(`${salida} es momento de conseguir mas elixir`); }
}