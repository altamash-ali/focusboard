
import { useState } from "react";
import {
  CheckCircle2,
  Clock3,
  ListTodo,
} from "lucide-react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import FilterBar from "./components/FilterBar";

import { useTasks } from "./hooks/useTasks";

import "./styles/dashboard.css";
import "./styles/responsive.css";
import FocusNotes from "./components/FocusNotes";

function App() {
  const { tasks, addTask, updateTask, deleteTask } = useTasks();

  const [search, setSearch] = useState("");
  const [activeStatus, setActiveStatus] = useState("All");
  const [priority, setPriority] = useState("All");

  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  // Statistics
  const totalTasks = tasks.length;

  const inProgress = tasks.filter(
    (task) => task.status === "In progress"
  ).length;

  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const completionPercentage =
    totalTasks === 0
      ? 0
      : Math.round((completed / totalTasks) * 100);

  // Combined search and filters
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.trim().toLowerCase());

    const matchesStatus =
      activeStatus === "All" || task.status === activeStatus;

    const matchesPriority =
      priority === "All" || task.priority === priority;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  // Open create form
  const handleAddTask = () => {
    setEditingTask(null);
    setShowForm(true);
  };

  // Open edit form
  const handleEditTask = (task) => {
    setEditingTask(task);
    setShowForm(true);
  };

  // Save task
  const handleFormSubmit = (formData) => {
    if (editingTask) {
      updateTask(editingTask.id, formData);
    } else {
      addTask(formData);
    }

    setShowForm(false);
    setEditingTask(null);
  };

  // Delete task
  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (confirmed) {
      deleteTask(id);
    }
  };

  return (
    <div className="dashboard-layout" id="dashboard">
      <Sidebar />

      <main className="main-content">
        <Header
          search={search}
          setSearch={setSearch}
          onAddTask={handleAddTask}
        />

        <div className="dashboard-content">
          
        <section className="welcome-section">
          <div className="welcome-content">
            <div>
              <h1>Your Work in Focus</h1>
              <p>
                Stay organized, prioritize your tasks, and make progress every day.
              </p>
            </div>

            <button
              className="header-add-btn"
              onClick={handleAddTask}
            >
              
              Add New Task
            </button>
          </div>
        </section>

        <FocusNotes />

          <section className="stats-grid">
            <StatCard
              title="Total Tasks"
              value={totalTasks}
              subtitle="All your tasks"
              icon={<ListTodo size={22} />}
            />

            <StatCard
              title="In Progress"
              value={inProgress}
              subtitle="Tasks currently active"
              icon={<Clock3 size={22} />}
            />

            <StatCard
              title="Completed"
              value={completed}
              subtitle="Tasks successfully finished"
              icon={<CheckCircle2 size={22} />}
            />

            <StatCard
              title="Completion"
              value={`${completionPercentage}%`}
              subtitle="Overall progress"
              icon={<CheckCircle2 size={22} />}
            />
          </section>

          <FilterBar
            activeStatus={activeStatus}
            setActiveStatus={setActiveStatus}
            priority={priority}
            setPriority={setPriority}
          />

          <TaskList
            tasks={filteredTasks}
            onStatusChange={(id, status) =>
              updateTask(id, { status })
            }
            onDelete={handleDelete}
            onEdit={handleEditTask}
          />
        </div>
      </main>

      {showForm && (
        <TaskForm
          initialTask={editingTask}
          onSubmit={handleFormSubmit}
          onCancel={() => {
            setShowForm(false);
            setEditingTask(null);
          }}
        />
      )}
    </div>
  );
}

export default App;