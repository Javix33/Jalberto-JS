let user = prompt("¿Cual es tu nombre?");
let date = new Date();
let today = date.getDay();
//array
let weekDays = [
  "domingo",
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado"
];
//propiedad length
let dayName = weekDays[today];
let welcome = `Hola ${user}, la semana tiene ${weekDays.length} días y hoy es ${dayName}, `;
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


  let recipeLimon = [
    agua = 800,
    mezcal = 64,
    jugoDeLimon = 80,
    pepino = 2,
    miel = 5
  ];
  let recipeJamaica = [
    agua = 800,
    mezcal = 64,
    jamaica = 80,
    miel = 5
  ];
  let receipeTamarindo = [
    agua = 800,
    mezcal = 64,
    Tamarindo = 80,
    miel = 5
  ];

  let recipes = [
    recipeLimon,
    recipeJamaica,
    receipeTamarindo
  ];
  let seleccionReceta = prompt("selecciona la receta que quieres preparar ingresando unicamente el numero de la que elijas, ejemplo, para preparar una mezcalita de 'jamaica' ingresa solo 2");
  seleccionReceta = parseInt(seleccionReceta) - 1;


  let recetaElegida = recipes[seleccionReceta];

  let recetaFinal = [];

  let volumen = prompt("¿Que cantidad quieres preparar? (en mililitros)");
  volumen = parseInt(volumen) / 1000;

  function calcularProporcion(recetaElegida, proporcion, recetaFinal) {

    for (ingrediente of recetaElegida) {
      resultado = (ingrediente = ingrediente * proporcion);
      recetaFinal.push(resultado)
    }
  };
  calcularProporcion(recetaElegida, volumen, recetaFinal);
  switch (seleccionReceta) {
    case 0:
      console.log(`para la mezcalita de limon necesitaras ${recetaFinal.length} ingredientes "agua: ${recetaFinal[0]}ml, mezcal: ${recetaFinal[1]} ml, jugo de limon: ${recetaFinal[2]} ml, pepinos: ${recetaFinal[3]} piezas, miel: ${recetaFinal[4]} cucharadas".`);
      break;

    case 1:
      console.log(`para la mezcalita de jamaica necesitaras ${recetaFinal.length} ingredientes "agua: ${recetaFinal[0]} ml, mezcal: ${recetaFinal[1]} ml, jamaica: ${recetaFinal[2]} gramos, miel: ${recetaFinal[3]} cucharadas".`);
      break;
    case 2:
      console.log(`para la mezcalita de Tamarindo necesitaras ${recetaFinal.length} ingredientes "agua: ${recetaFinal[0]} ml, mezcal: ${recetaFinal[1]} ml, Tamarindo: ${recetaFinal[2]} gramos, miel: ${recetaFinal[3]} cucharadas".`);
      break;
    default:
      console.log("La receta que seleccionaste es invalida, por favor refresca la pagina e intenta de nuevo")
  };
  const PROPORCIONENMILILITROS = 1000;
  volumen = volumen * PROPORCIONENMILILITROS;

  let caballitosPorServir = prompt(`tienes ${volumen} ml de esta receta ¿cuantos caballitos serviras? (solo numero)`);
  const MILITROS_POR_CABALLITO = 30;
  let mililitrosPorRonda = parseInt(caballitosPorServir) * MILITROS_POR_CABALLITO;

  function calculadorRondas(bebidaDisponible) {
    for (let i = bebidaDisponible, rondaActual = 1; i > mililitrosPorRonda; i -= mililitrosPorRonda, rondaActual++) {
      let rondasRestantes = Math.trunc((i / mililitrosPorRonda) - 1);
      let salida = `Ronda ${rondaActual} serviste ${caballitosPorServir} caballitos de mezcal te quedan ${rondasRestantes} rondas`;
      if (rondasRestantes >= rondaActual) {
        console.log(`${salida} eso es mas de la mitad, la noche es joven`);
      } else if (rondasRestantes < rondaActual && rondasRestantes >= rondaActual / 4) {
        console.log(`${salida} queda menos de la mitad de tu bebida`);
      } else {
        console.log(`${salida} es momento de conseguir mas Elixir`);
      }
    };
  };
  calculadorRondas(volumen);
};