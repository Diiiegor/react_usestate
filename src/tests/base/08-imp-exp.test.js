import {getHeroeById,getHeroesByOwner} from '../../base/08-imp-exp';
import heroes from '../../data/heroes';
describe('pruebas del archivo 09 filtros a arrays', () => {
    
    test('Debe retornar un heroe por id', () => {
        const id =1;
        const heroe = getHeroeById(id);
        const heroesData = heroes.find(h=>heroe.id===id);
        expect(heroe).toEqual(heroesData)
    });

    test('Debe retornar undefined si heroe no existe', () => {
        const id =10;
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined)
    });

    test('Debe retornar arreglo con los heroes de DC', () => {
        const owner = 'DC';
        const heroesDC= getHeroesByOwner(owner);
        const heroesData = heroes.filter(h=>h.owner===owner);
        expect(heroesDC).toEqual(heroesData);
    })

    test('Debe retornar arreglo con los heroes de marvel', () => {
        const owner = 'Marvel';
        const heroesDC= getHeroesByOwner(owner);
        expect(heroesDC.length).toBe(2);
    })
    
    
});
