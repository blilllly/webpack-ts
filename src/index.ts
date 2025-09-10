import { Pokemon } from "./decorators/pokemon-class";

const bulbasur = new Pokemon("Bulbasur");

// (Pokemon.prototype as any).customName = "Pikachu";

// bulbasur.savePokemonToDB(3);

bulbasur.publicApi = "Eu";
console.log(bulbasur);
