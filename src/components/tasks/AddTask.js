import React, { useState } from "react";
import Modal from "./Modal";
import TaskDataService from "./../../services/TaskService";
import { Timestamp } from "@firebase/firestore";

function AddTask({ onClose, open }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = {
      title,
      description,
      completed: false,
      created: Timestamp.now(),
    };
    console.log(newTask);

    try {
      await TaskDataService.addTasks(newTask);
    } catch (error) {
      setError("Failed ");
    }
    setTitle("");
    setDescription("");
  };

  return (
    <Modal onClose={onClose} open={open}>
      <form onSubmit={handleSubmit} name="addTask">
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value.toUpperCase())}
          value={title}
          placeholder="Enter title"
        />
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description"
          value={description}
        ></textarea>
        <button type="submit">Done</button>
      </form>
    </Modal>
  );
}

export default AddTask;
