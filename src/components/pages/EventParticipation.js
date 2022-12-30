import React, { useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function EventParticipation() {
  const [saved, sets] = useState(false);

  const mystyle = {
    width: "fit-content",
    padding: "1rem",
  };

  function sendpost() {
    sets(false);
    var a1 = document.querySelector("#a1").checked;
    var a2 = document.querySelector("#a2").checked;
    var a3 = document.querySelector("#a3").checked;
    var a4 = document.querySelector("#a4").checked;
    var a5 = document.querySelector("#a5").checked;
    var a6 = document.querySelector("#a6").checked;
    var a8 = document.querySelector("#a8").checked;

    var v1 = document.querySelector("#v1").value;
    var nv1 = document.querySelector("#nv1").value;
    var v2 = document.querySelector("#v2").value;
    var nv2 = document.querySelector("#nv2").value;
    var v3 = document.querySelector("#v3").value;

    if (v1 == "") {
      v1 = 0;
    }
    if (nv1 == "") {
      nv1 = 0;
    }
    if (v2 == "") {
      v2 = 0;
    }
    if (nv2 == "") {
      nv2 = 0;
    }
    if (v3 == "") {
      v3 = 0;
    }

    var arr = [a1, a2, a3, a4, a5, a6, a8];
    console.log(arr);
    var data = {
      conditions: arr,
      d1v: v1,
      d1nv: nv1,
      d2c: v3,
      d3v: v2,
      d3nv: nv2,
    };
    console.log(data);
    axios
      .post("http://recal.eastus.cloudapp.azure.com/api/eventsSave", data)
      .then((res) => alert(res.data));
    sets(true);
  }

  useEffect(() => {
    axios
      .get("http://recal.eastus.cloudapp.azure.com/api/previewData")
      .then((res) => {
        res = res.data;
        console.log(res);
        var res1 = res[7];
        var res2 = res[8];
        var res3 = res[9];
        // document.querySelector('#a1').checked = res1.cond1;
        // document.querySelector('#a2').checked = res1.cond2;
        // document.querySelector('#a3').checked = res1.cond3;
        // document.querySelector('#a4').checked = res2.cond1;
        // document.querySelector('#a5').checked = res2.cond2;
        // document.querySelector('#a6').checked = res3.cond1;
        // document.querySelector('#a8').checked = res3.cond2;
        setisliked1(res1.cond1);
        setisliked2(res1.cond2);
        setisliked3(res1.cond3);
        setisliked4(res2.cond1);
        setisliked5(res2.cond2);
        setisliked6(res3.cond1);
        setisliked7(res3.cond2);

        document.querySelector("#v1").value = res1.count.veg;
        document.querySelector("#nv1").value = res1.count.nonveg;
        document.querySelector("#v3").value = res2.count;
        document.querySelector("#nv2").value = res3.count.veg;
        document.querySelector("#v2").value = res3.count.nonveg;
      });
  }, []);

  const variants1 = {
    anim: {
      opacity: 1,
      TableRowansition: {
        delay: 0.6,
        duration: 0.7,
      },
    },
  };

  const [isliked1, setisliked1] = useState(false);
  const handleCheckbox1 = () => {
    setisliked1(!isliked1);
  };

  const [isliked2, setisliked2] = useState(false);
  const handleCheckbox2 = () => {
    setisliked2(!isliked2);
  };
  const [isliked3, setisliked3] = useState(false);
  const handleCheckbox3 = () => {
    setisliked3(!isliked3);
  };

  const [isliked4, setisliked4] = useState(false);
  const handleCheckbox4 = () => {
    setisliked4(!isliked4);
  };

  const [isliked5, setisliked5] = useState(false);
  const handleCheckbox5 = () => {
    setisliked5(!isliked5);
  };
  const [isliked6, setisliked6] = useState(false);
  const handleCheckbox6 = () => {
    setisliked6(!isliked6);
  };

  const [isliked7, setisliked7] = useState(false);
  const handleCheckbox7 = () => {
    setisliked7(!isliked7);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      variants={variants1}
      animate="anim"
      exit={{ opacity: 0 }}
      className="outerc"
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <motion.div
        drag
        dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
        className="mtitle"
      >
        <h1>EventParticipation</h1>
      </motion.div>

      <div className="center">
        <h2>24th Jan</h2>
        <TableContainer component={Paper} style={mystyle}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <h3>Please select event participation from the list below</h3>
                </TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>
                  <h3>Add to cart</h3>
                </TableCell>
                <TableCell>
                  <h3>Cart</h3>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  I will join the evening event at the Hotel
                </TableCell>
                <TableCell>
                  <Checkbox
                    min="0"
                    id="a1"
                    checked={isliked1}
                    onChange={handleCheckbox1}
                  />
                </TableCell>
                <TableCell></TableCell>
                <TableCell>
                  <IconButton color="primary" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                  </IconButton>
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  I agree to pay the Lumpsum Participation Fee of Rs.4,500
                  towards this for Myself & Family
                </TableCell>
                <TableCell>
                  <Checkbox
                    min="0"
                    id="a2"
                    checked={isliked2}
                    onChange={handleCheckbox2}
                  />
                </TableCell>
                <TableCell></TableCell>
                <TableCell>
                  <IconButton color="primary" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                  </IconButton>
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  I agree to pay Rs.750 per Head for Veg-Dinner & Rs.850 per
                  Head for Non-Veg Dinner for the Participants (including
                  Family). I also understand there is no Charge for Grand
                  Children
                </TableCell>
                <TableCell>
                  <Checkbox
                    min="0"
                    id="a3"
                    checked={isliked3}
                    onChange={handleCheckbox3}
                  />
                </TableCell>
                <TableCell></TableCell>
                <TableCell>
                  <IconButton color="primary" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                  </IconButton>
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>No. of Participants for Event at Hotel</TableCell>
                <TableCell>
                  <TextField
                    size="small"
                    variant="outlined"
                    min="0"
                    id="v1"
                    placeholder="Veg"
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    size="small"
                    variant="outlined"
                    min="0"
                    id="nv1"
                    placeholder="Non Veg"
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="center">
        <h2>25th Jan</h2>
        <TableContainer component={Paper} style={mystyle}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <h3>Please select event participation from the list below</h3>
                </TableCell>
                <TableCell></TableCell>
                <TableCell>
                  <h3>Add to cart</h3>
                </TableCell>
                <TableCell>
                  <h3>Cart</h3>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>I will join for the Event at the Campus</TableCell>
                <TableCell>
                  <Checkbox
                    min="0"
                    id="a4"
                    checked={isliked4}
                    onChange={handleCheckbox4}
                  />
                </TableCell>
                <TableCell>
                  <IconButton color="primary" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                  </IconButton>
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  I agree to pay the Lumpsum Participation Fee of Rs.1,600
                  towards this for Myself & Family. I understand there is no
                  charge for the Lunch at Campus
                </TableCell>
                <TableCell>
                  <Checkbox
                    min="0"
                    id="a5"
                    checked={isliked5}
                    onChange={handleCheckbox5}
                  />
                </TableCell>
                <TableCell>
                  <IconButton color="primary" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                  </IconButton>
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>No. of Participants for Event at Campus</TableCell>
                <TableCell>
                  <TextField size="small" variant="outlined" min="0" id="v3" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <h2>25th Jan</h2>
      <div className="center">
        <TableContainer component={Paper} style={mystyle}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <h3>Please select event participation from the list below</h3>
                </TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>
                  <h3>Add to cart</h3>
                </TableCell>
                <TableCell>
                  <h3>Cart</h3>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  I will join for the Evening Event at the Hotel I agree to pay
                  the Lumpsum Participation Fee of Rs.4,500 towards this for
                  Myself & Family
                </TableCell>
                <TableCell>
                  <Checkbox
                    min="0"
                    id="a6"
                    checked={isliked6}
                    onChange={handleCheckbox6}
                  />
                </TableCell>

                <TableCell></TableCell>
                <TableCell>
                  <IconButton color="primary" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                  </IconButton>
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  I agree to pay Rs.750 per Head for Veg-Dinner & Rs.850 per
                  Head for Non-Veg Dinner for the Participants (including
                  Family). I also understand there is no Charge for Grand
                  Children
                </TableCell>
                <TableCell>
                  <Checkbox
                    min="0"
                    id="a8"
                    checked={isliked7}
                    onChange={handleCheckbox7}
                  />
                </TableCell>
                <TableCell></TableCell>
                <TableCell>
                  <IconButton color="primary" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                  </IconButton>
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>No. of Participants for Event at Hotel</TableCell>
                <TableCell>
                  <TextField
                    size="small"
                    variant="outlined"
                    min="0"
                    id="v2"
                    placeholder="Veg"
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    size="small"
                    variant="outlined"
                    min="0"
                    id="nv2"
                    placeholder="Non Veg"
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      {/* <div className=' c1but'>
        <Link to = "/accomodation"><button className="eventbut">Go Back and edit</button></Link>

        <button className='eventbut' onClick={() => sendpost()}>Save</button>
            
        {saved && <Link to="/tshirt" ><button className='eventbut'>Continue</button> </Link>}
        {saved &&  <p>Successfully Saved</p>}


        </div> */}
      <br />
      <div className="center">
        <Stack
          direction="row"
          spacing={2}
          style={{ padding: "1rem" }}
          align="center"
          divider={<Divider orientation="vertical" flexItem />}
          component={Paper}
        >
          <Button size="large" variant="contained" onClick={() => sendpost()}>
            Save
          </Button>
          <Link to="/tshirt">
            <Button size="large" variant="contained">
              Next
            </Button>
          </Link>
          <Link to="/accomodation">
            <Button size="large" variant="contained">
              Edit Previous
            </Button>
          </Link>
        </Stack>
      </div>
    </motion.div>
  );
}

export default EventParticipation;
