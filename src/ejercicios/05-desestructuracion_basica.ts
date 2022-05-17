/*
    ===== Código de TypeScript =====
*/

console.log('----- Desestructuracion de objetos -----')

interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  detalles: Detalles;
};

interface Detalles {
  autor: string;
  anio: number;
};

const reproductor: Reproductor = {
  volumen: 90,
  segundo: 36,
  cancion: "Mess",
  detalles: {
    autor: "Ed Sheran",
    anio: 2015,
  },
};

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor, anio } = detalles;

console.log('El volumen actual es de: ', volumen);
console.log('El segundo actual es: ', segundo);
console.log('La cancion actual es: ', cancion);
console.log('El autor es: ', autor);
console.log('El año es: ', anio);


console.log('----- Desestructuracion de arreglos -----')

const dbz: string[] = ['Goku', ' Vegeta', 'Trunks'];
const [ p1, , p3 ] = dbz;

console.log('Personaje 1 es:', p1);
console.log('Personaje 2 es:', dbz[1]);
console.log('Personaje 3 es:', p3);