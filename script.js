let user = prompt("¿Cual es tu nombre?");
let date = new Date();
let today = date.getDay();
let weekDays = [
  "domingo",
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado"
];
let dayName = weekDays[today];
let welcome = `Bienvenido ${user} hoy es ${dayName},`;
switch (today) {
  case today = 0:
    console.log(`${welcome} quiza no es el mejor día para beber.`);
    break;
  case today = 1:
    console.log(`${welcome} inicio de semana, ten cuidado con tu consumo.`);
    break;
  case today = 2:
    console.log(`${welcome} recupera energia, con moderación.`);
    break;
  case today = 3:
    console.log(`${welcome} ombligo de semana un par de copas ayudarán.`);
    break;
  case today = 4:
    console.log(`${welcome} ya casi es fin de semana, fuerza.`);
    break;
  case today = 5:
    console.log(`${welcome} es viernes y el cuerpo lo sabe, si tomas no conduzcas.`);
    break;
  case today = 6:
    console.log(`${welcome} se nos fue la semana, tiempo de celebrar.`);
    break;
  default:
    console.log(`${welcome} no parece un mal dia para un poco de mezcal.`);
};

let