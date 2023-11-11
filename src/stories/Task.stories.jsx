import Task from "../components/Task";


const Template = args => <Task {...args}/>

/**
 * Цей компонент відобржає завдання. Може мати різні дані, кольори, а також стан "виконано/не виконано"
 */

export default {
  title: "Task",
  component: Task,
  tags: ['autodocs'],
};


export const DefaultTask = Template.bind({});
DefaultTask.args = {
  heading: "Назва завдання",
  info: "Опис завдання",
  date: "dd.mm.yyyy",
  isCompleted: false,
  background: "#f2e6ff"
}

export const PriorityTask = Template.bind({});
PriorityTask.args = {
  heading: "Закінчити курсову роботу",
  info: "Створити основу записки, протестувати написаний код",
  date: "03.06.2023",
  isCompleted: false,
  background: "#f9aeae"
}

export const CompletedTask = Template.bind({});
CompletedTask.args = {
  heading: "Купити ліки",
  info: "Німесил, септефрил",
  date: "03.06.2023",
  isCompleted: true,
  background: "#d1ffbd"
}
