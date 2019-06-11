const initialData = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces',
                correctAnswear: 'true'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event',
                correctAnswear: 'true'
            }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.',
                correctAnswear: 'true'
            },
            {
                question: 'What is varibale',
                answer: 'Something that stores information.',
                correctAnswear: 'true'
            }
        ]
    },
    Redux: {
        title: 'Redux',
        questions: [
            {
                question: 'What is Redux?',
                answer: 'A library for styling user interfaces',
                correctAnswear: 'true'
            },
            {
                question: 'What does a reducer do?',
                answer: 'Reduces data',
                correctAnswear: 'true'
            }
        ]
    }
}

export const getData = () => {
    return initialData;
}