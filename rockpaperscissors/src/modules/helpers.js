import {CHOICES} from "./consts";
import { NAME_KEY } from "./consts";


export function renderChoice(){
    return CHOICES[Math.floor(Math.random() * CHOICES.length)]
};

export function isRock(choice){
    return choice === NAME_KEY.ROCK;
};

export function isPaper(choice){
    return choice === NAME_KEY.PAPER;
};

export function isScissors(choice){
    return choice === NAME_KEY.SCISSORS;
};
