import Todo from "../components/Todo";

const Template = args => <Todo {...args}/>

const tasks = [{
  "heading": "Зробити Лаб№5 з шифрування",
  "info": "Повторити шифр Плейфера, написати висновок",
  "date": "31.05.2023",
  "isCompleted": true,
  "background": "#f2e6ff"
},
{
  "heading": "Приготувати вечерю",
  "info": "Запекти картоплю, зробити салат, посмажити гомілки",
  "date": "05.06.2023",
  "isCompleted": false,
  "background": "#b7cfb7"
},
{
  "heading": "Купити пласку батарейку",
  "info": "В радіодеталях*",
  "date": "03.06.2023",
  "isCompleted": true,
  "background": "#eaeaea"
},
{
  "heading": "Пройти курси на Юдемі",
  "info": "Після -- завантажити сертифікати",
  "date": "28.05.2023",
  "isCompleted": true,
  "background": "#c7dbda"
},
{
  "heading": "Доробити модельки пакувань",
  "info": "Друга та четверта модель*",
  "date": "05.06.2023",
  "isCompleted": false,
  "background": "#eaeaea"
},
{
  "heading": "Купити продукти",
  "info": "Помідори, огірки, морква",
  "date": "05.06.2023",
  "isCompleted": false,
  "background": "#e2f0cb"
}
]

/**
 * Являє собою todo-list, або список справ. Допомагає зібрати усі свої завдання в одному списку, яким можна ділитись з іншими для спільного редагування
 */

export default {
  title: "Todo",
  component: Todo,
  tags: ['autodocs'],
};

export const TodoDefault = Template.bind({});
TodoDefault.args = {
  tasks: [{
  "heading": "Заголовок",
  "info": "Інформація про таск",
  "date": "dd.mm.yyyy",
  "isCompleted": false,
  "background": "#e2f0cb"
}
],
  userName: 'some_user',
  whoCanEdit: ['some_user, some_user1']
}

export const ChangeColor = Template.bind({});
ChangeColor.args = {
  tasks: tasks,
  backgroundColor: "beige",
  userName: "roman_jcg",
  whoCanEdit: ['vlad_ms', 'warab'],
  todoName: "my todo"
}


export const NoOneCanEdit = Template.bind({});
NoOneCanEdit.args = {
  tasks: tasks,
  backgroundColor: "lightBlue",
  userName: "roman_jcg",
  todoName: "Таски на 3 тижні"
}