const ListItems = (props) => {
  const { parentTaskList } = props;
  return (
    <ul>
      {parentTaskList.map((task) => {
        return <li>{task}</li>;
      })}
    </ul>
  );
};

export default ListItems;
