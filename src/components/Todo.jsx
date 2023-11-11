import Task from "./Task";
import "./todo.css";

export default function Todo({tasks, backgroundColor="#fafafa", userName, whoCanEdit=null, todoName="no name"}){
  const sortedTasks = tasks.sort((a, b) => {
    if (a.isCompleted && !b.isCompleted){
      return 1;
    }
    else if (!a.isCompleted && b.isCompleted){
      return -1;
    }
    else return 0;
  })
  return (
    <div className="todo" style={{backgroundColor: backgroundColor}}>
      <h3>{todoName}</h3>
      <h4>Created by: {userName}</h4>
      <h4>Can edit: {whoCanEdit ? whoCanEdit.join(', ') : 'no one'}</h4>
      <div className="taskList">{tasks.length > 0 && sortedTasks.map(task =>
        <Task {...task}/>
      )}</div>
    </div>
  );
}