import { Pokemon } from './pokemon';
import { Battle } from './battle';
import { Attack } from './attack';

export class Game {

    constructor() {
    }

    startGame() {
        this.initBattle();
    }

    private initBattle() {
        const initialHealth = 100;
        const attack1 = new Attack('éclair', 25);
        const attack2 = new Attack('coupe', 31);
    
        const pokemon1 = new Pokemon('Pikachu', 80, 10, initialHealth, attack1);
        const pokemon2 = new Pokemon('Bulbizarre', 50, 10, initialHealth, attack2);

        const battle = new Battle(pokemon1, pokemon2);
        this.startBattle(battle);
    }

    private startBattle(battle: Battle) {

        console.log('Lancement du combat...');

        const firstPokemon = battle.getFirstPokemonBattle();
        const secondPokemon = firstPokemon === battle.pokemon1 ? battle.pokemon2 : battle.pokemon1;
        console.log(`${firstPokemon.name} commence en premier le combat.`);

        const winnerPokemon = this.fight(firstPokemon, secondPokemon);
        console.log(`${winnerPokemon.name} gagne le combat.`);
    }

    private fight(pokemon1: Pokemon, pokemon2: Pokemon) : Pokemon {

        console.log(`${pokemon1.name} lance attaque ${pokemon1.attack.name} sur ${pokemon2.name}.`);
        pokemon1.attackPokemon(pokemon2);

        if (pokemon2.health > 0) {
            console.log(`Il reste ${pokemon2.health} points de vie à ${pokemon2.name}.`);
        }
        else {
            console.log(`${pokemon2.name} est mort.`);
            return pokemon1;
        }

        return this.fight(pokemon2, pokemon1);
    }
}