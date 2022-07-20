import Part from "./Part"

const content = ({ part1, part2, part3, }) => {
    return (
        <div>
            <Part part={part1.name} exercise={part1.exercises}> </Part>
            <Part part={part2.name} exercise={part2.exercises}> </Part>
            <Part part={part3.name} exercise={part3.exercises}> </Part>
        </div>
    )
}
export default content