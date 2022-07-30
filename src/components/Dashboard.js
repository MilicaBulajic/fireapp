import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddTask from "./tasks/AddTask";
import TaskList from "./tasks/TaskList";

export default function Dashboard() {
  const [error, setError] = useState("");
  const [taskId, setTaskId] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      navigate("/login");
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <TaskList />
        </Typography>
        <Button onClick={handleLogout}>Log out</Button>
      </CardContent>
    </Card>
  );
}
