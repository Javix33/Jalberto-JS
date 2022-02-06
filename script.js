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

let userBebida = prompt("¿Qué bebida de elixir utilizaras? (espadin o algun sabor 'Naranja, Maracuya o lichi'");
userBebida = userBebida.toLowerCase();
if (userBebida == "naranja") {
  console.log(`Solo añade hielo, algunos trozos de fruta y disfruta de tu Mezcal Elixir sabor Naranja`);
} else if (userBebida == "maracuya") {
  console.log(`Solo añade hielo, algunos trozos de fruta y disfruta de tu Mezcal Elixir sabor Maracuya`);
} else if (userBebida == "lichi") {
  console.log(`Solo añade hielo, algunos trozos de fruta y disfruta de tu Mezcal Elixir sabor Lichi`);
} else {
  console.log(`procedamos a preparar algo con tu Mezcal Espadin de Elixir`);
};

let volumen = prompt("¿Que cantidad quieres preparar?(ingresala en mililitros y solo números)");
volumen = parseInt(volumen);
volumen = volumen / 1000;

class proporcion {
  constructor(x) {
    this.agua = x.agua * volumen;
    this.mezcal = x.mezcal * volumen;
    this.jamaica = x.jamaica * volumen;
    this.tamarindo = x.tamarindo * volumen;
    this.jugo_limon = x.jugo_limon * volumen;
    this.miel = x.miel * volumen;
    this.pepino = x.pepino * volumen;
  };

  recetaNueva() {
    console.log(`para preparar ${volumen}l. de esta bebida necesitaras los siguientes ingredientes: Agua: ${this.agua}ml., Mezcal: ${this.mezcal}ml., Jamaica: ${this.jamaica}gr., Tamarindo: ${this.tamarindo}gr., Jugo de limon: ${this.jugo_limon}ml., Miel: ${this.miel} cucharadas.`);
  };
};

let a = {
  agua: 800,
  mezcal: 64,
  jugo_limon: 80,
  pepino: 2,
  miel: 5
};
//mezcalita de jamaica
let b = {
  agua: 800,
  mezcal: 64,
  jamaica: 80,
  miel: 5
};
//mezcalita de tamarindo
let c = {
  agua: 800,
  mezcal: 64,
  Tamarindo: 80,
  miel: 5
};

let receta = prompt("selecciona la receta que quieres preparar ingresando unicamente la letra de la que elijas, ejemplo, para preparar una mezcalita de 'jamaica' ingresa solo la letra 'b'");
let preparar;

switch (receta) {
  case "a":
    preparar = new proporcion(a);
    preparar.recetaNueva();
    break;
  case "b":
    preparar = new proporcion(b);
    preparar.recetaNueva();
    break;
  case "c":
    preparar = new proporcion(c);
    preparar.recetaNueva();
    break;
  default:
    console.log("ingresaste una letra que no coincide con ninguna receta");
};
volumen = volumen * 1000;

let caballitosPorServir = prompt(`tienes ${volumen} ml de esta receta ¿cuantos caballitos serviras?(solo numero)`);
console.log(caballitosPorServir);
const MILITROS_POR_CABALLITO = 30;
let mililitrosPorRonda = parseInt(caballitosPorServir) * MILITROS_POR_CABALLITO;

function calculadorRondas(bebidaDisponible) {
  for (let i = bebidaDisponible, rondaActual = 1; i > mililitrosPorRonda; i -= mililitrosPorRonda, rondaActual++) {
    let rondasRestantes = Math.trunc((i / mililitrosPorRonda) - 1);
    let salida = `Ronda ${rondaActual} serviste ${caballitosPorServir} caballitos de mezcal te quedan ${rondasRestantes} rondas`;
    if (i >= bebidaDisponible / 2) {
      console.log(`${salida} eso es mas de la mitad, la noche es joven`);
    } else if (i < bebidaDisponible / 2 && i >= bebidaDisponible / 4) {
      console.log(`${salida} queda menos de la mitad de tu bebida`);
    } else { console.log(`${salida} es momento de conseguir mas Elixir`); }
  };
};
calculadorRondas(volumen);