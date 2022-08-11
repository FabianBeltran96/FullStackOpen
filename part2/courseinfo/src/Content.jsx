import React from 'react';
import Part from "./Part"

const content = ({ parts }) => {

    return (
        <div>
            {parts.map(part => <Part key={part.id} part={part.name} exercise={part.exercises}> </Part>)}
        </div>
    )
}
export default content