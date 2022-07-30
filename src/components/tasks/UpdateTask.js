import React, { useState } from "react";
import TaskDataService from "./../../services/TaskService";
import Modal from "./Modal";

export default function UpdateTask({
  open,
  onClose,
  toEditTitle,
  toEditDescription,
  id,
}) {
  const [title, setTitle] = useState(toEditTitle);
  const [description, setDescription] = useState(toEditDescription);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedTask = {
      title,
      description,
    };
    console.log(updatedTask);
    try {
      await TaskDataService.updateTask(updatedTask);
      onClose();
    } catch (err) {
      alert(err);
    }
  };
  return (
    <Modal onClose={onClose} open={open}>
      <form onSubmit={handleUpdate} className="editTask">
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value.toUpperCase())}
          value={title}
        />
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button type="submit">Edit</button>
      </form>
    </Modal>
  );
}
