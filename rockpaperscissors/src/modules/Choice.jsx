import styles from './Game.module.css';

const Choice = (props) => {
    const {value,competitor} = props;

    return (
        <div className={styles.choice_styles}>
                <span className={styles.emoji}>{competitor.emoji}</span>
                <p className={styles.name}>{value} {competitor.name}</p>
            </div>
    )

}

export default Choice;