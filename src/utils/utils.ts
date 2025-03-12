import type {IPokemonCard} from "../types/index"

export const limitPokemonsToFetch = 120;

export function getPokemonColors(pokemon: IPokemonCard): {
  bgColor: string;
  textColor: string;
  gradientHeader: string;
    gradientFooter?: string;
    secondBgcolor?: string;
} {
  let bgColor = "";
  let textColor = "";
  let gradientHeader = "";
  let gradientFooter = "";
    let secondBgcolor = "";
switch (pokemon.types[0].type.name) {
    case "fire":
        bgColor = "bg-red-200/30";
        secondBgcolor = "bg-red-400";
        textColor = "text-red-700";
        gradientHeader = "bg-gradient-to-b from-red-500 to-orange-500";
        gradientFooter = "bg-gradient-to-t from-red-500 to-orange-500";
        break;
    case "water":
        bgColor = "bg-blue-200/30";
        secondBgcolor = "bg-blue-400";
        textColor = "text-blue-700";
        gradientHeader = "bg-gradient-to-b from-sky-400 to-sky-200";
        gradientFooter = "bg-gradient-to-t from-sky-400 to-sky-200";
        break;
    case "grass":
        bgColor = "bg-green-200/30";
        secondBgcolor = "bg-green-400";

        textColor = "text-green-700";
        gradientHeader = "bg-gradient-to-b from-green-500 to-lime-500";
        gradientFooter = "bg-gradient-to-t from-green-500 to-lime-500";
        break;
    case "electric":
        bgColor = "bg-yellow-200/30";
        secondBgcolor = "bg-yellow-400";

        textColor = "text-yellow-700";
        gradientHeader = "bg-gradient-to-b from-yellow-200 to-purple-600";
        gradientFooter = "bg-gradient-to-t from-yellow-200 to-purple-600";
        break;
    case "ice":
        bgColor = "bg-cyan-200/30";
        secondBgcolor = "bg-cyan-400";

        textColor = "text-cyan-700";
        gradientHeader = "bg-gradient-to-b from-cyan-500 to-sky-500";
        gradientFooter = "bg-gradient-to-t from-cyan-500 to-sky-500";
        break;
    case "fighting":
        bgColor = "bg-orange-200/30";
        secondBgcolor = "bg-orange-400";

        textColor = "text-orange-700";
        gradientHeader = "bg-gradient-to-b from-orange-500 to-red-500";
        gradientFooter = "bg-gradient-to-t from-orange-500 to-red-500";
        break;
    case "poison":
        bgColor = "bg-purple-200/30";
        secondBgcolor = "bg-purple-400";

        textColor = "text-purple-700";
        gradientHeader = "bg-gradient-to-b from-purple-500 to-transparent";
        gradientFooter = "bg-gradient-to-t from-purple-500 to-transparent";
        break;
    case "ground":
        bgColor = "bg-brown-200/30";
        secondBgcolor = "bg-amber-400";

        textColor = "text-brown-700";
        gradientHeader = "bg-gradient-to-t from-brown-500 to-yellow-500";
        gradientFooter = "bg-gradient-to-t  from-amber-500 to-transparent";
        break;
    case "flying":
        bgColor = "bg-indigo-200/30";
        secondBgcolor = "bg-indigo-400";

        textColor = "text-indigo-700";
        gradientHeader = "bg-gradient-to-b from-indigo-500 to-blue-500";
        gradientFooter = "bg-gradient-to-t from-indigo-500 to-blue-500";
        break;
    case "psychic":
        bgColor = "bg-pink-200/30";
        secondBgcolor = "bg-pink-400";

        textColor = "text-pink-700";
        gradientHeader = "bg-gradient-to-b from-pink-500 to-red-500";
        gradientFooter = "bg-gradient-to-t from-pink-500 to-red-500";
        break;
    case "bug":
        bgColor = "bg-lime-200/30";
        secondBgcolor = "bg-lime-400";

        textColor = "text-lime-700";
        gradientHeader = "bg-gradient-to-b from-lime-500 to-green-500";
        gradientFooter = "bg-gradient-to-t from-lime-500 to-green-500";
        break;
    case "rock":
        bgColor = "bg-gray-400/30";
        secondBgcolor = "bg-gray-400";

        textColor = "text-gray-700";
        gradientHeader = "bg-gradient-to-b from-gray-500 to-gray-700";
        gradientFooter = "bg-gradient-to-t from-gray-500 to-gray-700";
        break;
    case "ghost":
        bgColor = "bg-violet-200/30";
        secondBgcolor = "bg-violet-400";

        textColor = "text-violet-700";
        gradientHeader = "bg-gradient-to-b from-violet-500 to-purple-500";
        gradientFooter = "bg-gradient-to-t from-violet-500 to-purple-500";
        break;
    case "dragon":
        bgColor = "bg-purple-400/30";
        secondBgcolor = "bg-purple-400";

        textColor = "text-purple-700";
        gradientHeader = "bg-gradient-to-b from-purple-500 to-violet-500";
        gradientFooter = "bg-gradient-to-t from-purple-500 to-violet-500";
        break;
    case "dark":
        bgColor = "bg-gray-800/30";
        secondBgcolor = "bg-gray-400";

        textColor = "text-gray-900";
        gradientHeader = "bg-gradient-to-b from-gray-900 to-gray-800";
        gradientFooter = "bg-gradient-to-t from-gray-900 to-gray-800";
        break;
    case "steel":
        bgColor = "bg-gray-300/30";
        secondBgcolor = "bg-gray-400";

        textColor = "text-gray-700";
        gradientHeader = "bg-gradient-to-b from-gray-500 to-gray-300";
        gradientFooter = "bg-gradient-to-t from-gray-500 to-gray-300";
        break;
    case "fairy":
        bgColor = "bg-pink-300/30";
        secondBgcolor = "bg-pink-400";

        textColor = "text-pink-700";
        gradientHeader = "bg-gradient-to-b from-pink-500 to-red-500";
        gradientFooter = "bg-gradient-to-t from-pink-500 to-red-500";
        break;
    default:
        bgColor = "bg-gray-200/30";
        secondBgcolor = "bg-gray-400";

        textColor = "text-gray-700";
        gradientHeader = "bg-gradient-to-b from-gray-500 to-gray-300";
        gradientFooter = "bg-gradient-to-t from-gray-500 to-gray-300";
        break;
}

  return { bgColor, textColor , gradientHeader ,gradientFooter,secondBgcolor};
}



