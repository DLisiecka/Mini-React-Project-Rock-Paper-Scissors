import styles from './Game.module.css';
import {CHOICES} from "./consts";
import Choice from './Choice';

const View = (props) => {
    const {handleClick,player,comp,result,handleReset} = props;
    
    return (
    <div className={styles.container}>
    <h1 className={styles.header}>Rock Paper Scissors</h1>
    <div className={styles.choices}>
        {CHOICES.map(({name, emoji}) => {

            return(
                <button
                className={styles.button}
                key={name}
                onClick={handleClick({name,emoji})}
                aria-label={name}
            >{emoji}</button>                    
        )})}
    </div>
    {player && comp && (
        <div className={styles.results}>
            <Choice
                value='You chose'
                competitor={player}
             />
            <Choice
                value='Computer chose'
                competitor={comp}
             />
            <h2>{result}</h2>
            <button className={styles.reset_btn} onClick={handleReset}>Play Again</button>
        </div>
    )}
</div>
    )
}

export default View;