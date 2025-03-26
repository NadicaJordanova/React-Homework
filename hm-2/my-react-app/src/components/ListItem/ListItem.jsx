const tasks = [
    { name: "Learn React", priority: "High" },
    { name: "Do Groceries", priority: "Low" },
    { name: "Exercise", priority: "High" },
    { name: "Read a Book", priority: "Medium" },
]

export function ListItem() {
    return(
        <div>
            <ul>
                {tasks.map((item, index) => (
                    <li key={index}>
                        <p>Task name: {item.name}</p>
                        <p>Priority: {item.priority}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}