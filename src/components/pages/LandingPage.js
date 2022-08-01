import React from "react";
import Logo from "./../assets/logo.png";
import "../../css/landing.css";
import background from "./../assets/background.png";
import { Link } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const styles = {
  paperContainer: {
    backgroundSize: "cover",
    height: 900,
    backgroundImage: `url(${background})`,
  },
};

export default function LandingPage() {
  return (
    <div style={styles.paperContainer}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        ></Typography>
        <Button>
          <Link to="/login">Login</Link>
        </Button>
        <Button>
          <Link to="/signup">Register</Link>
        </Button>
      </Toolbar>
      <div className="landing-message">
        <h3
          style={{
            fontWeight: "200",
            color: "black",
            textAlign: "center",
            verticalAlign: "middle",
          }}
        >
          App gives you everything you need to stay in sync, hit deadlines, and
          reach your goals
        </h3>
      </div>
    </div>
  );
}
