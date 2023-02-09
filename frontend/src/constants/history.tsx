import { v4 as uuidv4 } from 'uuid';

export const HISTORY_ARTICLES = [
    {
        id: uuidv4(),
        title: 'Introduction',
        link: '/history/introduction',
    },
    {
        id: uuidv4(),
        title: 'Future of rocket science',
        link: '/history/future-of-rocket-science',
    }
];

export const HISTORY_QUIZ = {
    introduction: {
        question: 'What is the rocket ship?',
        options: [
            {
                id: uuidv4(),
                title: 'It\'s a vehicle to travel in space',
                correct: true
            },
            {
                id: uuidv4(),
                title: 'It\'s a banana',
                correct: false
            },
            {
                id: uuidv4(),
                title: 'It\'s a weapon',
                correct: false
            },
        ]
    },
    future: {
        question: 'What is the future of rocket science?',
        options: [
            {
                id: uuidv4(),
                title: 'It\'s bad',
                correct: false
            },
            {
                id: uuidv4(),
                title: 'It\'s wonderful',
                correct: true
            },
            {
                id: uuidv4(),
                title: 'It\'s awful',
                correct: false
            },
        ]
    }
};

export const QUIZ_RESULTS = {
    correct: 'You\'re correct!',
    wrong: 'Wrong, but nice try!',
    noAnswer: 'Correct answer: ',
};