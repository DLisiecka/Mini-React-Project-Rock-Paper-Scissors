import {CHOICES} from "./consts";
import { NAMES } from "./consts";


export function renderChoice(){
    return CHOICES[Math.floor(Math.random() * CHOICES.length)]
};

export function isRock(choice){
    if(choice === NAMES[0]) return NAMES[0];
};

export function isPaper(choice){
    if(choice === NAMES[1]) return NAMES[1];
};

export function isScissors(choice){
    if(choice === NAMES[2]) return NAMES[2];
};
