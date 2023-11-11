import "./task.css";

export default function Task({background, isCompleted, date, heading, info}){
  return(
    <div className={`task ${isCompleted && 'completed'}`} style={{backgroundColor: background}}>
      <input type="checkbox" checked={isCompleted} />
      <div className="taskInfo"><h3>{heading}</h3>
      <p className="date">{date}</p>
      <p>{info}</p></div>
      
    </div>
  );
}