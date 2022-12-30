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
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import { TextField } from "@mui/material";

function Tshirt() {
  const mystyle = {
    width: "fit-content",
    padding: "1rem",
  };
  const [need, setn] = useState(false);
  const [saved, sets] = useState(false);
  useEffect(() => {
    axios
      .get("http://recal.eastus.cloudapp.azure.com:8080/api/previewData")
      .then((res) => {
        console.log(res);
        res = res.data;
        var res1 = res[10];
        var res2 = res[11];
        console.log("sdsdsd" + res1);
        setisliked1(res1[0].supimaCotton);
        setisliked2(res1[0].sweatWickingFabric);
        setisliked3(res1[1].supimaCotton);
        setisliked4(res1[1].sweatWickingFabric);
        setisliked5(res1[2].supimaCotton);

        document.querySelector("#m1").value =
          res2.menQuantity.supimaCotton.lSize;
        document.querySelector("#m2").value =
          res2.menQuantity.supimaCotton.mSize;
        document.querySelector("#m3").value =
          res2.menQuantity.supimaCotton.sSize;
        document.querySelector("#m4").value =
          res2.menQuantity.supimaCotton.xlSize;
        document.querySelector("#m5").value =
          res2.menQuantity.supimaCotton.xxlSize;
        document.querySelector("#m6").value =
          res2.menQuantity.supimaCotton.xxxlSize;
        document.querySelector("#m12").value =
          res2.menQuantity.sweatWickingFabric.lSize;
        document.querySelector("#m22").value =
          res2.menQuantity.sweatWickingFabric.mSize;
        document.querySelector("#m32").value =
          res2.menQuantity.sweatWickingFabric.sSize;
        document.querySelector("#m42").value =
          res2.menQuantity.sweatWickingFabric.xlSize;
        document.querySelector("#m52").value =
          res2.menQuantity.sweatWickingFabric.xxlSize;
        document.querySelector("#m62").value =
          res2.menQuantity.sweatWickingFabric.xxxlSize;
        document.querySelector("#w1").value =
          res2.womenQuantity.supimaCotton.sSize;
        document.querySelector("#w2").value =
          res2.womenQuantity.supimaCotton.mSize;
        document.querySelector("#w3").value =
          res2.womenQuantity.supimaCotton.lSize;
        document.querySelector("#w4").value =
          res2.womenQuantity.supimaCotton.xlSize;
        document.querySelector("#w12").value =
          res2.womenQuantity.sweatWickingFabric.sSize;
        document.querySelector("#w22").value =
          res2.womenQuantity.sweatWickingFabric.mSize;
        document.querySelector("#w32").value =
          res2.womenQuantity.sweatWickingFabric.lSize;
        document.querySelector("#w42").value =
          res2.womenQuantity.sweatWickingFabric.xlSize;
        document.querySelector("#g1").value = res2.grandKids.girls.category1;
        document.querySelector("#g2").value = res2.grandKids.girls.category2;
        document.querySelector("#g3").value = res2.grandKids.girls.category3;
        document.querySelector("#b1").value = res2.grandKids.boys.category1;
        document.querySelector("#b2").value = res2.grandKids.boys.category2;
        document.querySelector("#b3").value = res2.grandKids.boys.category3;
        updateno();
      });
  }, []);

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

  function sendpost() {
    sets(false);
    if (need) {
      var c = [true, isliked1, isliked2, isliked3, isliked4, isliked5]; //change interested
      console.log(c);
      var men1 = [
        document.querySelector("#m1").value,
        document.querySelector("#m2").value,
        document.querySelector("#m3").value,
        document.querySelector("#m4").value,
        document.querySelector("#m5").value,
        document.querySelector("#m6").value,
      ];
      var men2 = [
        document.querySelector("#m12").value,
        document.querySelector("#m22").value,
        document.querySelector("#m32").value,
        document.querySelector("#m42").value,
        document.querySelector("#m52").value,
        document.querySelector("#m62").value,
      ];
      var women1 = [
        document.querySelector("#w1").value,
        document.querySelector("#w2").value,
        document.querySelector("#w3").value,
        document.querySelector("#w4").value,
      ];
      var women2 = [
        document.querySelector("#w12").value,
        document.querySelector("#w22").value,
        document.querySelector("#w32").value,
        document.querySelector("#w42").value,
      ];
      var girls1 = [
        document.querySelector("#g1").value,
        document.querySelector("#g2").value,
        document.querySelector("#g3").value,
      ];
      var boys1 = [
        document.querySelector("#b1").value,
        document.querySelector("#b2").value,
        document.querySelector("#b3").value,
      ];

      var data = {
        need: 1,
        c: c,
        men1: men1,
        men2: men2,
        women1: women1,
        women2: women2,
        girls1: girls1,
        boys1: boys1,
      };
    } else {
      data = {
        need: 0,
        c: [0, 0, 0, 0, 0],
        men1: [0, 0, 0, 0, 0, 0],
        men2: [0, 0, 0, 0, 0, 0],
        women1: [0, 0, 0, 0],
        women2: [0, 0, 0, 0],
        girls1: [0, 0, 0],
        boys1: [0, 0, 0],
      };
    }
    axios
      .post("http://recal.eastus.cloudapp.azure.com:8080/api/tshirtSave", data)
      .then((res) => alert(res.data));
    sets(true);
  }

  function updateno() {
    var men1 = [
      document.querySelector("#m1").value,
      document.querySelector("#m2").value,
      document.querySelector("#m3").value,
      document.querySelector("#m4").value,
      document.querySelector("#m5").value,
      document.querySelector("#m6").value,
    ];
    var men2 = [
      document.querySelector("#m12").value,
      document.querySelector("#m22").value,
      document.querySelector("#m32").value,
      document.querySelector("#m42").value,
      document.querySelector("#m52").value,
      document.querySelector("#m62").value,
    ];
    var women1 = [
      document.querySelector("#w1").value,
      document.querySelector("#w2").value,
      document.querySelector("#w3").value,
      document.querySelector("#w4").value,
    ];
    var women2 = [
      document.querySelector("#w12").value,
      document.querySelector("#w22").value,
      document.querySelector("#w32").value,
      document.querySelector("#w42").value,
    ];
    var girls1 = [
      document.querySelector("#g1").value,
      document.querySelector("#g2").value,
      document.querySelector("#g3").value,
    ];
    var boys1 = [
      document.querySelector("#b1").value,
      document.querySelector("#b2").value,
      document.querySelector("#b3").value,
    ];
    var sm1, sm2, sw1, sw2, sg, sb;
    sm1 = sm2 = sw1 = sw2 = sg = sb = 0;
    for (var i of men1) {
      if (i != "") {
        sm1 += parseInt(i);
      }
    }
    for (var i of men2) {
      if (i != "") {
        sm2 += parseInt(i);
      }
    }
    for (var i of women1) {
      if (i != "") {
        sw1 += parseInt(i);
      }
    }
    for (var i of women2) {
      if (i != "") {
        sw2 += parseInt(i);
      }
    }
    for (var i of girls1) {
      if (i != "") {
        sg += parseInt(i);
      }
    }
    for (var i of boys1) {
      if (i != "") {
        sb += parseInt(i);
      }
    }
    document.querySelector(".rm1").innerText = sm1;
    document.querySelector(".rm2").innerText = sm2;
    document.querySelector(".rw1").innerText = sw1;
    document.querySelector(".rw2").innerText = sw2;
    document.querySelector(".rg").innerText = sg;
    document.querySelector(".rb").innerText = sb;
  }

  const variants1 = {
    anim: {
      opacity: 1,
      transition: {
        delay: 0.6,
        duration: 0.7,
      },
    },
  };

  return (
    <>
      <div className="main2">
        <Button
          variant="contained"
          style={{ margin: "2rem" }}
          className="closetshirt"
          onClick={() => {
            document.querySelector(".main2").style.display = "none";
          }}
        >
          Close
        </Button>
        <div className="main">
          <img src="tshirts.png"></img>
        </div>
      </div>
      <motion.div
        variants={variants1}
        initial={{ opacity: 0 }}
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
          <h1>Tshirt</h1>
        </motion.div>
        <div className="center">
          <label>I am Interested in T-Shirt : </label>
          <Checkbox onChange={(e) => setn(e.target.checked)} />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rdetails"
          >
            <div style={{ textAlign: "right" }}>
              <Button
                variant="contained"
                style={{ marginLeft: "auto" }}
                onClick={() => {
                  document.querySelector(".main2").style.display = "block";
                }}
              >
                See Product
              </Button>
            </div>
            <TableContainer component={Paper} style={mystyle}>
              <Table>
                <TableBody>
                  <h1 style={{ textAlign: "left" }}>T-shirt for men</h1>

                  <TableRow>
                    <TableCell>
                      T-Shirt (Dark Brick Red - Supima Cotton) Design - Polo
                      with Collar
                    </TableCell>
                    <TableCell>
                      <Checkbox
                        id="c1"
                        checked={isliked1}
                        onChange={handleCheckbox1}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      T-Shirt (Navy Blue - Sweat-wicking Fabric) Design - Round
                      Neck for Walking & Exercise
                    </TableCell>
                    <TableCell>
                      <Checkbox
                        id="c2"
                        checked={isliked2}
                        onChange={handleCheckbox2}
                      />
                    </TableCell>
                  </TableRow>
                  <h1 style={{ textAlign: "left" }}>T-shirt for Women</h1>
                  <TableRow>
                    <TableCell>
                      T-Shirt Navy Blue - Sweat-wicking Fabric) Design - Round
                      Neck for Walking & Exercise
                    </TableCell>
                    <TableCell>
                      <Checkbox
                        id="c3"
                        checked={isliked3}
                        onChange={handleCheckbox3}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      T-Shirt (Royal Blue - Sweat-wicking Fabric) Design - Round
                      Neck for Walking & Exercise)
                    </TableCell>
                    <TableCell>
                      <Checkbox
                        id="c4"
                        checked={isliked4}
                        onChange={handleCheckbox4}
                      />
                    </TableCell>
                  </TableRow>
                  <h1 style={{ textAlign: "left" }}>
                    T-Shirt for GrandChildren
                  </h1>
                  <TableRow>
                    <TableCell>
                      T-Shirt (Maroon - Supima Cotton) Design - Round Neck
                    </TableCell>
                    <TableCell>
                      <Checkbox
                        id="c5"
                        checked={isliked5}
                        onChange={handleCheckbox5}
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </motion.div>

          <br />
        </div>

        <div className="center">
          <motion.div
            initial={{ opacity: 0 }}
            animate="anim"
            variants={variants1}
            transition={{ duration: 2 }}
            className="rdetails"
          >
            <TableContainer component={Paper} style={mystyle}>
              <Table>
                <thead>
                  <TableRow>
                    <TableCell>Description and size</TableCell>
                    <TableCell>Suprima Cotton @ Rs.1,200</TableCell>
                    <TableCell>Sweat-wicking @ Rs.600</TableCell>
                  </TableRow>
                </thead>
                <TableBody>
                  <TableRow>
                    <TableCell>Mens Polo T-Shirt with Collar</TableCell>
                    <TableCell>Qty</TableCell>
                    <TableCell>Qty</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>S(38)</TableCell>
                    <TableCell>
                      <TextField
                        onChange={() => {
                          updateno();
                        }}
                        id="m1"
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        onChange={() => {
                          updateno();
                        }}
                        id="m12"
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>M(40)</TableCell>
                    <TableCell>
                      <TextField
                        onChange={() => {
                          updateno();
                        }}
                        id="m2"
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        onChange={() => {
                          updateno();
                        }}
                        id="m22"
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>L(42)</TableCell>
                    <TableCell>
                      <TextField
                        onChange={() => {
                          updateno();
                        }}
                        id="m3"
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        onChange={() => {
                          updateno();
                        }}
                        id="m32"
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>XL(44)</TableCell>
                    <TableCell>
                      <TextField
                        onChange={() => {
                          updateno();
                        }}
                        id="m4"
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        onChange={() => {
                          updateno();
                        }}
                        id="m42"
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>XXL(46)</TableCell>
                    <TableCell>
                      <TextField
                        onChange={() => {
                          updateno();
                        }}
                        id="m5"
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        onChange={() => {
                          updateno();
                        }}
                        id="m52"
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>XXL(48)</TableCell>
                    <TableCell>
                      <TextField
                        onChange={() => {
                          updateno();
                        }}
                        id="m6"
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        onChange={() => {
                          updateno();
                        }}
                        id="m62"
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <h3>Total Mens T-Shirt</h3>
                    </TableCell>
                    <TableCell>
                      <h3 className="rm1"></h3>
                    </TableCell>
                    <TableCell>
                      <h3 className="rm2"></h3>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Womens Round Neck T-shirt</TableCell>
                    <TableCell>Qty</TableCell>
                    <TableCell>Qty</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>S</TableCell>
                    <TableCell>
                      <TextField
                        onChange={() => {
                          updateno();
                        }}
                        id="w1"
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        onChange={() => {
                          updateno();
                        }}
                        id="w12"
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>M</TableCell>
                    <TableCell>
                      <TextField
                        onChange={() => {
                          updateno();
                        }}
                        id="w2"
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        onChange={() => {
                          updateno();
                        }}
                        id="w22"
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>L</TableCell>
                    <TableCell>
                      <TextField
                        onChange={() => {
                          updateno();
                        }}
                        id="w3"
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        onChange={() => {
                          updateno();
                        }}
                        id="w32"
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>XL</TableCell>
                    <TableCell>
                      <TextField
                        onChange={() => {
                          updateno();
                        }}
                        id="w4"
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        onChange={() => {
                          updateno();
                        }}
                        id="w42"
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <h3>Total Womens T-Shirt</h3>
                    </TableCell>
                    <TableCell>
                      <h3 className="rw1"></h3>
                    </TableCell>
                    <TableCell>
                      <h3 className="rw2"></h3>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Children(Girls) Round Neck T-shirt</TableCell>
                    <TableCell>Qty</TableCell>
                    <TableCell>Qty</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>5-8 Years</TableCell>
                    <TableCell>
                      <TextField
                        onChange={() => {
                          updateno();
                        }}
                        id="g1"
                      />
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>9-12 Years</TableCell>
                    <TableCell>
                      <TextField
                        onChange={() => {
                          updateno();
                        }}
                        id="g2"
                      />
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>13-15 Years</TableCell>
                    <TableCell>
                      <TextField
                        onChange={() => {
                          updateno();
                        }}
                        id="g3"
                      />
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <h3>Total Girls T-Shirt</h3>
                    </TableCell>
                    <TableCell>
                      <h3>
                        <label className="rg"></label>
                      </h3>
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Children(Boys) Round Neck T-shirt</TableCell>
                    <TableCell>Qty</TableCell>
                    <TableCell>Qty</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>5-8 Years</TableCell>
                    <TableCell>
                      <TextField
                        onChange={() => {
                          updateno();
                        }}
                        id="b1"
                      />
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>9-12 Years</TableCell>
                    <TableCell>
                      <TextField
                        onChange={() => {
                          updateno();
                        }}
                        id="b2"
                      />
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>13-15 Years</TableCell>
                    <TableCell>
                      <TextField
                        onChange={() => {
                          updateno();
                        }}
                        id="b3"
                      />
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <h3>Total Boys T-Shirt</h3>
                    </TableCell>
                    <TableCell>
                      <h3>
                        <label className="rb"></label>
                      </h3>
                    </TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </motion.div>

          {!need && <p>No Tshirts Selected</p>}
          {/* </div>
        <div className=' c1but'>
        <Link to = "/event-participation"><button className="eventbut">Go Back and edit</button></Link>
        <button className='eventbut' onClick={() => sendpost()}>Save</button>
            
        {saved && <Link to="/tours" ><button className='eventbut'>Continue</button> </Link>}
        {saved &&  <p>Successfully Saved</p>}
        </div>         */}

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
              <Button
                size="large"
                variant="contained"
                onClick={() => sendpost()}
              >
                Save
              </Button>
              <Link to="/tours">
                <Button size="large" variant="contained">
                  Next
                </Button>
              </Link>

              <Link to="/event-participation">
                <Button size="large" variant="contained">
                  Edit previous
                </Button>
              </Link>
            </Stack>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Tshirt;
