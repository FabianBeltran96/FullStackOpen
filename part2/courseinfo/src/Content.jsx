import React from 'react';
import Part from "./Part"

const content = ({ parts }) => {

    return (
        <div>
            <Part part={parts[0].name} exercise={parts[0].exercises}> </Part>
            <Part part={parts[1].name} exercise={parts[1].exercises}> </Part>
            <Part part={parts[2].name} exercise={parts[2].exercises}> </Part>
        </div>
    )
}
export default content