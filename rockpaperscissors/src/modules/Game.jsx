import React from "react";
import { useState } from "react";
import { isPaper, isRock, isScissors, renderChoice } from "./helpers";
import View from "./View";


const Game = () => {
    const [playerChoice, setPlayerChoice] = useState(null);
    const [compChoice, setCompChoice] = useState(null);
    const [result, setResult] = useState(null);

    const handlePlayerChoice = (choice) => () => {
        console.log(choice);
        const compChoice = renderChoice();
        setPlayerChoice(choice);
        setCompChoice(compChoice);
 
        if(choice.name === compChoice.name) return setResult("Tie!");
        if((isRock(choice.name) && isScissors(compChoice.name)) ||(isPaper(choice.name) && isRock(compChoice.name)) ||
            ( isScissors(choice.name) && isPaper(compChoice.name))) return setResult("You win!");
        return setResult("You lose!");
    };

    const resetGame = () => {
        setPlayerChoice(null);
        setCompChoice(null);
        setResult(null);
    };

    return (
        <View 
            handleClick={handlePlayerChoice}
            player={playerChoice}
            comp={compChoice}
            result={result}
            handleReset={resetGame} />
    )

}

export default Game;