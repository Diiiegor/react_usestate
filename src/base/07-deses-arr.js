

const personajes = ['Goku','Vegeta','Trunks'];
const [ , , p3 ] = personajes;


 export const retornaArreglo = () =>{
    return ['ABC', 123];
}

const [ letras, numeros ] = retornaArreglo(); 



const usState = ( valor ) => {
    return [ valor, ()=>{ console.log('Hola Mundo') } ];
}


