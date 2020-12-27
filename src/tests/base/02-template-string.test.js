import '@testing-library/jest-dom';
import {getSaludo} from '../../base/02-template-string';

describe('pruebas en 02-template-string', () => {

    test('getSaludo debe retornar Hola diego', () => {
        
        const nombre = 'diego';
        const saludo =getSaludo(nombre);

        expect(saludo).toBe('Hola '+nombre);

    })

    test('getSaludo debe retornar Hola carlos si no hay argumentos', () => {
        
        const saludo = getSaludo();
        expect(saludo).toBe('Hola carlos')

    })
    
    
    
})

