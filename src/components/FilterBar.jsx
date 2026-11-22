
function FilterBar({
  activeStatus,
  setActiveStatus,
  priority,
  setPriority,
}) {
  const tabs = ["All", "To do", "In progress", "Completed"];

  return (
    <div className="filter-bar">
      <div className="status-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={activeStatus === tab ? "selected" : ""}
            onClick={() => setActiveStatus(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        aria-label="Filter by priority"
      >
        <option value="All">All Priorities</option>
        <option value="High">High Priority</option>
        <option value="Medium">Medium Priority</option>
        <option value="Low">Low Priority</option>
      </select>
    </div>
  );
}

export default FilterBar;