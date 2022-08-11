import React from 'react';

const Total = ({ parts }) => {

    const total = parts.reduce((s, p) => {
        console.log('what is happening', s, p)
        return s + p.exercises
    }, 0)

    return (<p><strong> total of {total} exercises</strong ></p>)
}
export default Total