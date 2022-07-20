import Part from "./Part"

const content = ({ part1, exercises1, part2, exercises2, part3, exercises3 }) => {
    return (
        <div>
            <Part part={part1} exercise={exercises1}> </Part>
            <Part part={part2} exercise={exercises2}> </Part>
            <Part part={part3} exercise={exercises3}> </Part>
        </div>
    )
}
export default content