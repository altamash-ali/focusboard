import { useState, useEffect } from "react";
import { sampleTasks } from "../data/sampleTasks";

const STORAGE_KEY = "focusboard_tasks";

function getInitialTasks() {
  try {
    const savedTasks = localStorage.getItem(STORAGE_KEY);

    if (savedTasks !== null) {
      return JSON.parse(savedTasks);
    }
  } catch (error) {
    console.error("Unable to load tasks:", error);
  }

  return sampleTasks;
}

export function useTasks() {
  const [tasks, setTasks] = useState(getInitialTasks);

  // Save tasks whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
      console.error("Unable to save tasks:", error);
    }
  }, [tasks]);

  // Add a new task
  const addTask = (task) => {
    const newTask = {
      ...task,
      id: crypto.randomUUID(),
    };

    setTasks((previousTasks) => [...previousTasks, newTask]);
  };

  // Edit an existing task
  const updateTask = (id, updatedData) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id ? { ...task, ...updatedData } : task,
      ),
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks((previousTasks) => previousTasks.filter((task) => task.id !== id));
  };

  return {
    tasks,
    addTask,
    updateTask,
    deleteTask,
  };
}
