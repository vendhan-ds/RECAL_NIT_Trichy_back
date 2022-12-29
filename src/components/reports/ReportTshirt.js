import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function ReportTshirt() {
  const [m1a, setm1] = useState([0, 0, 0, 0, 0, 0]);
  const [m2a, setm2] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [wa1, setw] = useState([0, 0, 0, 0]);
  const [ba1, setb] = useState([0, 0, 0]);
  const [ga1, setg] = useState([0, 0, 0]);

  useEffect(() => {
    axios
      .get("http://recal.eastus.cloudapp.azure.com/api/tshirt")
      .then((res) => {
        res = res.data;
        console.log(res);
        setm1(res.mensPolo1);
        var a1 = res.mensPolo2;
        a1 = [...a1];
        console.log(a1);
        setm2(a1);
        setw(res.womensshirt1);
        setg(res.girlshirt);
        setb(res.boyshirt);
        console.log(m2a);
      });
  }, []);

  return (
    <>
      <h1 className="mtitle">Tshirt Reports</h1>
      <div className="mainc">
        <table>
          <thead>
            <tr>
              <td>Description and size</td>
              <td>Suprima Cotton @ Rs.1,200</td>
              <td>Sweat-wicking @ Rs.600</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mens Polo T-Shirt with Collar</td>
              <td>Qty</td>
              <td>Qty</td>
            </tr>
            <tr>
              <td>S(38)</td>
              <td>
                <input type="number" id="m1" value={m1a[0]}></input>
              </td>
              <td>
                <input type="number" id="m12" value={m2a[0]}></input>
              </td>
            </tr>
            <tr>
              <td>M(40)</td>
              <td>
                <input type="number" id="m2" value={m1a[1]}></input>
              </td>
              <td>
                <input type="number" id="m22" value={m2a[1]}></input>
              </td>
            </tr>
            <tr>
              <td>L(42)</td>
              <td>
                <input type="number" id="m3" value={m1a[2]}></input>
              </td>
              <td>
                <input type="number" id="m32" value={m2a[2]}></input>
              </td>
            </tr>
            <tr>
              <td>XL(44)</td>
              <td>
                <input type="number" id="m4" value={m1a[3]}></input>
              </td>
              <td>
                <input type="number" id="m42" value={m2a[3]}></input>
              </td>
            </tr>
            <tr>
              <td>XXL(46)</td>
              <td>
                <input type="number" id="m5" value={m1a[4]}></input>
              </td>
              <td>
                <input type="number" id="m52" value={m2a[4]}></input>
              </td>
            </tr>
            <tr>
              <td>XXL(48)</td>
              <td>
                <input type="number" id="m6" value={m1a[5]}></input>
              </td>
              <td>
                <input type="number" id="m62" value={m2a[5]}></input>
              </td>
            </tr>
            <tr>
              <td>Total Mens T-Shirt</td>
              <td>{m1a[6]}</td>
              <td>{m2a[6]}</td>
            </tr>
            <tr>
              <td>Womens Round Neck T-shirt</td>
              <td>Qty</td>
              <td>Qty</td>
            </tr>
            <tr>
              <td>S</td>
              <td>
                <input type="number" id="w1" value={wa1[0]}></input>
              </td>
              <td>
                <input type="number" id="w12"></input>
              </td>
            </tr>
            <tr>
              <td>M</td>
              <td>
                <input type="number" id="w2" value={wa1[1]}></input>
              </td>
              <td>
                <input type="number" id="w22"></input>
              </td>
            </tr>
            <tr>
              <td>L</td>
              <td>
                <input type="number" id="w3" value={wa1[2]}></input>
              </td>
              <td>
                <input type="number" id="w32"></input>
              </td>
            </tr>
            <tr>
              <td>XL</td>
              <td>
                <input type="number" id="w4" value={wa1[3]}></input>
              </td>
              <td>
                <input type="number" id="w42"></input>
              </td>
            </tr>
            <tr>
              <td>Total Womens T-Shirt</td>
              <td>{wa1[4]}</td>
              <td></td>
            </tr>
            <tr>
              <td>Children(Girls) Round Neck T-shirt</td>
              <td>Qty</td>
              <td>Qty</td>
            </tr>
            <tr>
              <td>5-8 Years</td>
              <td>
                <input type="number" id="g1" value={ga1[0]}></input>
              </td>
            </tr>
            <tr>
              <td>9-12 Years</td>
              <td>
                <input type="number" id="g2" value={ga1[1]}></input>
              </td>
            </tr>
            <tr>
              <td>13-15 Years</td>
              <td>
                <input type="number" id="g3" value={ga1[2]}></input>
              </td>
            </tr>
            <tr>
              <td>Total Girls T-Shirt</td>
              <td>{ga1[3]}</td>
            </tr>
            <tr>
              <td>Children(Boys) Round Neck T-shirt</td>
              <td>Qty</td>
              <td>Qty</td>
            </tr>
            <tr>
              <td>5-8 Years</td>
              <td>
                <input type="number" id="b1" value={ba1[0]}></input>
              </td>
            </tr>
            <tr>
              <td>9-12 Years</td>
              <td>
                <input type="number" id="b2" value={ba1[1]}></input>
              </td>
            </tr>
            <tr>
              <td>13-15 Years</td>
              <td>
                <input type="number" id="b3" value={ba1[2]}></input>
              </td>
            </tr>
            <tr>
              <td>Total Boys T-Shirt</td>
              <td>{ba1[3]}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ReportTshirt;
