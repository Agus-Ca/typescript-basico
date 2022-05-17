/*
    ===== Código de TypeScript =====
*/

interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion;
    mostrarDireccion: () => string;
}

interface Direccion {
    calle: string;
    pais: string;
    ciudad: string;
}


const direccion: Direccion = {
    calle: 'Main St.',
    ciudad: 'NY',
    pais: 'USA'
}

const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: direccion,
    mostrarDireccion() {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}


const direccionSH = superHeroe.mostrarDireccion();

console.log(direccionSH);