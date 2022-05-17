/*
    ===== Código de TypeScript =====
*/

function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  };
}

@classDecorator
class MiSuperClase {
  public propiedad: string = "abc123";

  imprimir() {
    console.log("HM");
  }
}

console.log(MiSuperClase);

const miClase = new MiSuperClase();

console.log(miClase.propiedad);
