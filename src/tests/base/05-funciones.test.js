import {getUser,getUsuarioActivo} from '../../base/05-funciones'

describe('pruebas de 05-funciones', () => {
    
    test('Debe retornar un objeto ', () => {

        const userTest={
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest) 

    })

    test('Debe retornar un objeto teniendo en cuenta el argumento nombre', () => {
        
        const nombre = 'Frederic';
        const user = getUsuarioActivo(nombre);

        expect(user).toMatchObject({username:nombre})

    })
    
    

})
