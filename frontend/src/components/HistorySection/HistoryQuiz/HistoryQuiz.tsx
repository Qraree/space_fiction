import React, { useCallback, useMemo, useState } from 'react';
import classNames from 'classnames';
import { IHistoryQuizQuestion } from '@/types/historyQuizQuestion';
import { ButtonUnstyled } from '@mui/base';
import { QUIZ_RESULTS } from '@/constants/history';

import styles from './HistoryQuiz.module.scss';

interface HistoryQuizProps {
  Question: IHistoryQuizQuestion;
}

interface UserOption {
  id: string;
  correct: boolean;
}

const HistoryQuiz = ({ Question }: HistoryQuizProps) => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [userOption, setUserOption] = useState<UserOption>({
    id: ' ',
    correct: false,
  });

  const rigthAnswer = useMemo(() => {
    const answer = Question.options.find((option) => option.correct);
    // @ts-ignore
    return answer.title;
  }, []);

  const handleSubmit = useCallback(() => {
    setSubmitted(true);
  }, []);

  const handleUserOption = useCallback((id: string, correct: boolean) => {
    const answer = { id, correct };
    setUserOption(answer);
  }, []);

  return (
    <div className={styles.quizWrapper}>
      <h4>{`Quick review: ${Question.question}`}</h4>
      <div className={styles.optionWrapper}>
        {Question.options.map((option) => (
          <div
            className={classNames(styles.option, {
              [styles.userOption]: userOption.id === option.id,
              [styles.correctAnswer]: submitted && option.correct,
              [styles.wrongAnswer]:
                submitted && userOption.id === option.id && !option.correct,
              [styles.submitted]: submitted,
            })}
            key={option.title}
            onClick={() => handleUserOption(option.id, option.correct)}
          >
            {option.title}
          </div>
        ))}
      </div>
      <div className={styles.submitWrapper}>
        <ButtonUnstyled onClick={handleSubmit} className={styles.submitAnswer}>
          Submit
        </ButtonUnstyled>
        <div className={styles.quizResult}>
          <p style={{ display: submitted ? 'inline' : 'none' }}>
            {userOption.correct
              ? QUIZ_RESULTS.correct
              : userOption.id !== ' '
              ? QUIZ_RESULTS.wrong
              : QUIZ_RESULTS.noAnswer + rigthAnswer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistoryQuiz;
