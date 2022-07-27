import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser } = useAuth();

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          profile
        </Typography>
      </CardContent>
    </Card>
  );
}
