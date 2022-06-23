import "./app-filter.css";

const AppFilter = (props) => {
  const buttonsData = [
    { name: "all", label: "Все сотрудники" },
    { name: "rise", label: "На повышение" },
    { name: "moreThan1000", label: "З/П больше 1000$" },
  ];

  const buttons = buttonsData.map((button) => {
    const isActive = props.filter === button.name;
    const clazz = isActive ? 'btn-light' : 'btn-outline-light';
    return (
      <button type="button" className={`btn ${clazz}`} key={button.name} onClick={() => props.onFilterSelect(button.name)}>
        {button.label}
      </button>
    );
  });

  return (
    <div className="btn-group">
      {buttons}
    </div>
  );
};

export default AppFilter;
