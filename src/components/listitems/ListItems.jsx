import "./ListItems.css";

const ListItems = (props) => {
  const { parentTaskList, removeTask } = props;

  const remove = (event) => {
    removeTask(event.target.id);
  };
  return (
    <div className="listitem-container">
      {parentTaskList.map((task) => {
        return (
          <div key={task.id} className="list-item">
            <span className="list-item__text">{task.taskDetails}</span>
            <img
              id={task.id}
              onClick={remove}
              className="list-item__close"
              src="src/assets/211652_close_icon.svg"
            />
          </div>
        );
      })}
    </div>
  );
};

export default ListItems;
