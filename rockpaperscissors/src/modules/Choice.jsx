import styles from './Game.module.css';

const Choice = ({value,competitor}) => {
    const {name,emoji} = competitor;

    return (
        <div className={styles.choice_styles}>
                <span className={styles.emoji}>{emoji}</span>
                <p className={styles.name}>{value} {name}</p>
            </div>
    )

}

export default Choice;