/*class pelicula {
  constructor(cinta) {
    this.nombre = cinta.title;
    this.director = cinta.director;
    this.estreno = cinta.release_date;
    this.episodio = cinta.episode_id;
  };
  mensaje() {
    console.log(
      `Star Wars episodio ${this.episodio}, ${this.nombre}, fue estrenada en ${this.estreno} y dirigida por ${this.director}`
    )
  };
};
const episodioIV = {
  title: "A New Hope",
  episode_id: 4,
  release_date: "1977-05-25",
  director: "George Lucas"
};
const episodioV = {
  title: "The Empire Strikes Back",
  episode_id: 5,
  release_date: "1983-05-25",
  director: "Irvin Kershner"
};
const episodioVI = {
  title: "Return of the Jedi",
  episode_id: 6,
  release_date: "1977-05-25",
  director: "Richard Marquand"
};

const pelicula1 = new pelicula(episodioVI);
pelicula1.mensaje();
let pelicula2 = new pelicula(episodioIV);
pelicula2.mensaje();
let sw = new pelicula(episodioV);
sw.mensaje();*/

//calculadora de proporciones


//mezcalita de limon

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
    alert(`para preparar ${volumen}l. de esta bebida necesitaras los siguientes ingredientes: Agua: ${this.agua}ml., Mezcal: ${this.mezcal}ml., Jamaica: ${this.jamaica}gr., Tamarindo: ${this.tamarindo}gr., Jugo de limon: ${this.jugo_limon}ml., Miel: ${this.miel} cucharadas.`);
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
    alert("ingresaste una letra que no coincide con ninguna receta");
};