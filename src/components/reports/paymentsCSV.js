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
    return fetch("http://recal.eastus.cloudapp.azure.com/api/listpayment").then(
      (res) => res.json()
    );
  };

  downloadReport = async () => {
    const data = await this.getUserList();
    console.log("sdsds");
    console.log(data);
    this.setState(
      {
        data: data,
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
          {" "}
          Click to download payments Report{" "}
        </Button>
        <CSVLink
          //headers={headers}
          filename="Payments_Report.csv"
          data={data}
          ref={this.csvLinkEl}
        />
      </div>
    );
  }
}

export default TshirtCSV;
