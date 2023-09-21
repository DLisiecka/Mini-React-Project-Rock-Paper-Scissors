import styles from './Game.module.css';
import {CHOICES} from "./consts";
import Choice from './Choice';

const View = ({handlePlayerChoice,playerChoice,compChoice,result,resetGame}) => {
    return (
    <div className={styles.container}>
    <h1 className={styles.header}>Rock Paper Scissors</h1>
    <div className={styles.choices}>
        {CHOICES.map(({name, emoji}) => {

            return(
                <button
                className={styles.button}
                key={name}
                onClick={handlePlayerChoice({name,emoji})}
                aria-label={name}
            >{emoji}</button>                    
        )})}
    </div>
    {playerChoice && compChoice && (
        <div className={styles.results}>
            <Choice
                value='You chose'
                competitor={playerChoice}
             />
            <Choice
                value='Computer chose'
                competitor={compChoice}
             />
            <h2>{result}</h2>
            <button className={styles.reset_btn} onClick={resetGame}>Play Again</button>
        </div>
    )}
</div>
    )
}

export default View;