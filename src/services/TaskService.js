import { db } from "../firebase";
import {
  collection,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";

const taskCollectionRef = collection(db, "tasks");
class TaskDataService {
  //i am going to take new task and then pass that new task to my collection reference
  addTasks = (newTask) => {
    return addDoc(taskCollectionRef, newTask);
  };

  updateTask = (id, updatedTask) => {
    const taskDoc = doc(db, "tasks", id);
    return updateDoc(taskDoc, updatedTask);
  };
  deleteTask = (id) => {
    const taskDoc = doc(db, "tasks", id);
    return deleteDoc(taskDoc);
  };
  getAllTasks = () => {
    return getDocs(taskCollectionRef);
  };
  getTask = (id) => {
    const taskDoc = doc(db, "tasks", id);
    return getDoc(taskDoc);
  };
}

export default new TaskDataService();
