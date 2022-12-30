import React, { Component } from "react";
import { CSVLink } from "react-csv";
import { Button } from "@mui/material";

/* const headers = [
  { label: "Name", key: "name" },
  { label: "Username", key: "username" },
  { label: "Email", key: "email" },
  { label: "Phone", key: "phone" },
  { label: "Website", key: "website" }
]; */

class TshirtCSV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.csvLinkEl = React.createRef();
  }

  getUserList = () => {
    return fetch("http://recal.eastus.cloudapp.azure.com:8080/api/tshirt").then(
      (res) => res.json()
    );
  };

  downloadReport = async () => {
    const data = await this.getUserList();
    console.log(data);
    this.setState(
      {
        data: [
          ["Description & Size", "Supima Cotton", "Sweat-wicking"],
          ["Mens Polo T-shirt with collar", "Qty", "Qty"],
          ["S(38)", data.mensPolo1[0], data.mensPolo2[0]],
          ["M(40)", data.mensPolo1[1], data.mensPolo2[1]],
          ["L(42)", data.mensPolo1[2], data.mensPolo2[2]],
          ["XL(44)", data.mensPolo1[3], data.mensPolo2[3]],
          ["XXL(46)", data.mensPolo1[4], data.mensPolo2[4]],
          ["XXXL(48)", data.mensPolo1[5], data.mensPolo2[5]],
          ["total mens T-Shirt", data.mensPolo1[6], data.mensPolo2[6]],
          ["Women Round Neck T-shirt", "Qty", "Qty"],
          ["S", data.womensshirt1[0], data.womensshirt2[0]],
          ["M", data.womensshirt1[1], data.womensshirt2[1]],
          ["L", data.womensshirt1[2], data.womensshirt2[2]],
          ["XL", data.womensshirt1[3], data.womensshirt2[3]],
          ["total womens T-Shirt", data.womensshirt1[4], data.womensshirt2[4]],
          ["Children(Girls) Round Neck T-Shirt", "Qty", "Qty"],
          ["5-8 Years", data.girlshirt[0]],
          ["9-12 Years", data.girlshirt[1]],
          ["13-15 Years", data.girlshirt[2]],
          ["Total Girls T-Shirt", data.girlshirt[3]],
          ["Children(Boys) Round Neck T-Shirt", "Qty", "Qty"],
          ["5-8 Years", data.boyshirt[0]],
          ["9-12 Years", data.boyshirt[1]],
          ["13-15 Years", data.boyshirt[2]],
          ["Total Boys T-Shirt", data.boyshirt[3]],
        ],
      },
      () => {
        setTimeout(() => {
          this.csvLinkEl.current.link.click();
        });
      }
    );
  };

  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <div>
        <Button size="large" variant="contained" onClick={this.downloadReport}>
          Click to downloadReport
        </Button>
        <CSVLink
          //headers={headers}
          filename="Tshirt_Report.csv"
          data={data}
          ref={this.csvLinkEl}
        />
      </div>
    );
  }
}

export default TshirtCSV;
