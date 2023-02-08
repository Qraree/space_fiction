import React from 'react';
import styles from './HistoryQuiz.module.scss';

const HistoryQuiz = () => {
    return (
        <div className={styles.quizWrapper}>
            <h4>Quick Review: bla-bla-bla?</h4>
            <div className={styles.optionWrapper}>
                <div className={styles.option}>Yes</div>
                <div className={styles.option}>No</div>
                <div className={styles.option}>Dunno</div>
            </div>

        </div>
    );
};

export default HistoryQuiz;
//todo submit button