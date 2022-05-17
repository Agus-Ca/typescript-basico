/*
    ===== Código de TypeScript =====
*/

/*
MODIFICADORES DE ACCESO (alcance o visibilidad)

private: solo es visible dentro de la clase
public: visible desde fuera de la clase
static: es posible acceder a esta propiedad sin crear una instancia de la clase
*/

/*
DIFERENCIA CLASE-INTERFACE

las interaces se transpilan a cero codigo en js
las clases sirven para crear instancias
en las interfaces no puedo definir coportamientos de metodos
*/

/*class Heroe {
  alterEgo: string;
  edad: number;
  nombreReal: string;

  imprimirNombre() {
    return this.alterEgo + ' ' + this.nombreReal;
  }

  constructor(alterEgo: string, edad: number,nombreReal: string) {
    console.log('Hey!');
    this.alterEgo = alterEgo;
    this.edad = edad;
    this.nombreReal = nombreReal;
  }
}*/

class PersonaNormal {
  
  constructor (
    public nombre: string,
    public direccion: string
  ) {}
}

class Heroe extends PersonaNormal{

  constructor (
    public alterEgo: string,
    public edad: number,
    public nombreReal: string
  ) {
    super( nombreReal, 'NY, USA');
  }
}

interface Personaje2 {
  alterEgo?: string;
  edad?: number;
  nombreReal?: number;

  imprimirNombre?: () => string;
}

const ironman = new Heroe('IronMan', 45, 'Tony');
const spiderman: Personaje2 = {}

console.log(ironman);