import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useState } from "react";
import axios from "axios";

export default function Feedback() {
  function sendpost() {
    var rat = rating;
    var com = document.querySelector("#comment").value;
    var data = { rat: rat, com: com };
    axios
      .post("http://recal.eastus.cloudapp.azure.com/api/FeedSave", data)
      .then((res) => alert(res.data));
  }

  const [rating, setValue] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
    >
      <h1>Feedback and Comments</h1>
      <br />
      <br />
      <br />

      <Rating
        size="large"
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />

      <br />
      <br />
      <br />

      <TextareaAutosize
        placeholder="Comment"
        style={{ width: "30rem" }}
        minRows={5}
        id="comment"
      />

      <br />
      <br />
      <Button size="large" variant="contained" onClick={() => sendpost()}>
        Submit
      </Button>
      <br />
      <br />
      <Link to="/previews">
        <Button size="large" variant="contained">
          Go to Previews
        </Button>
      </Link>
    </motion.div>
  );
}
