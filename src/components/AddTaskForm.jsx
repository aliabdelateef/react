import { useState } from "react";

function AddTaskForm({onAdd}) {
const [text, setText] = useState("");
const [priority, setPriority] = useState("low");

const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === ""){
        alert("يرجى إدخال نص المهمة");
        return;
    }
    const newTask= {
        id: Date.now(),
        name: text,
        completed: false,
        priority: priority
    }
    onAdd(newTask);

    setText("");
    setPriority("low");
}
    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input type="text" placeholder="أدخل مهمة جديدة" value={text} onChange={(e) => setText(e.target.value)} className="task-input"/>
            <select value={priority} onChange={(e) => setPriority(e.target.value)} className="task-select">
                <option value="low">منخفضة</option>
                <option value="medium">متوسطة</option>
                <option value="high">عالية</option>
            </select>
            <button type="submit" className="add-btn">أضف مهمة</button>
        </form>
    )
}

export default AddTaskForm