
export default {
  title: "About project",
};

export const About = () => {
  return(
    <div>
      <h2>Суть проекту:</h2>
      <div>Цей проект було створено для вивчення використання Storybook. Зокрема розглянуто, як він може допомогти у створенні UI та тестуванні проекту.<br/><br/>
        В якості теми було обрано todo-list, адже він дє змогу створити 2 компоненти, для яких можна буде змінювати пропси, щоб краще розібратися в роботі Storybook.<br/>
        На прикладі різної кількості тасків, різних даних, кольорів та інших параметрів можна побачити, як Storybook може полегшити роботу розробнику.
      </div></div>
  );
  };

  
export const License = () => {
  return(
    <div>
      <h2>Про ліцензію:</h2>
      <h4>MIT License</h4>
      <p>Copyright (c) 2023 Бордюг Роман<br/><br/>
    Дозволяється безкоштовне використання, копіювання, зміна, об'єднання, публікування, розповсюдження та/або продаж без обмежень.<br/><br/>
    Авторське право зберігається 2023 Бордюг Роман.<br/><br/>
    Ця ліцензія поширюється на всі програми та файли з розширенням, які використовуються в проекті.
</p></div>
  );
  };