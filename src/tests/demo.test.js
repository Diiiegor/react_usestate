
describe('pruebas para el archivo demo.js', () => {
    
    test('deben ser iguales los string', () => {
        //Inicializacion del test
        const mensaje = 'Hola mundo';
        
        //Estimulo
        const mensaje2=`Hola mundo`;
    
        //Observar el comportamiento
        expect(mensaje).toBe(mensaje2);
    });


})



