import React from "react";
import { useState } from "react";
import styles from './Game.module.css';

const CHOICES = [
    { name: "rock", emoji: "✊" },
    { name: "paper", emoji: "✋" },
    { name: "scissors", emoji: "✌️" }
];

const Game = () => {
    const [playerChoice, setPlayerChoice] = useState(null);
    const [compChoice, setCompChoice] = useState(null);
    const [result, setResult] = useState(null);

    const handlePlayerChoice = (choice) => {
        const compChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
        setPlayerChoice(choice);
        setCompChoice(compChoice);

        if (choice.name === compChoice.name) {
            setResult("Tie!");
          } else if (
            (choice.name === "rock" && compChoice.name === "scissors") ||
            (choice.name === "paper" && compChoice.name === "rock") ||
            (choice.name === "scissors" && compChoice.name === "paper")
          ) {
            setResult("You win!");
          } else {
            setResult("You lose!");
          };
    };

    const resetGame = () => {
        setPlayerChoice(null);
        setCompChoice(null);
        setResult(null);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Rock Paper Scissors</h1>
            <div className={styles.choices}>
                {CHOICES.map((choice) => (
                    <button
                        className={styles.button}
                        key={choice.name}
                        onClick={() => handlePlayerChoice(choice)}
                        aria-label={choice.name}
                    >{choice.emoji}</button>
                ))}
            </div>
            {playerChoice && compChoice && (
                <div className={styles.results}>
                    <div className={styles.choice_styles}>
                        <span className={styles.emoji}>{playerChoice.emoji}</span>
                        <p className={styles.name}>You chose {playerChoice.name}</p>
                    </div>
                    <div className={styles.choice_styles}>
                        <span className={styles.emoji}>{compChoice.emoji}</span>
                        <p className={styles.name}>Computer chose {compChoice.name}</p>
                    </div>
                    <h2>{result}</h2>
                    <button className={styles.reset_btn} onClick={resetGame}>Play Again</button>
                </div>
            )}
        </div>
    )

}

export default Game;