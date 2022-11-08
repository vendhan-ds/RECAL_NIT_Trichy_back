import React, { Component } from 'react';
import { CSVLink } from "react-csv";
import { Button } from '@mui/material';


/* const headers = [
  //{ label: "Branch", key: "username" },  
  { label: "Name", key: "username" },
  { label: "Spouse", key: "pax.spouse" },
  { label: "Family", key: "pax.familyMembers" },
  { label: "Grand children", key: "pax.grandKids" },
  { label: "total", key: "total" }
];  */

class SummaryCSV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    this.csvLinkEl = React.createRef();
  }

  getUserList = () => {
    return fetch('http://localhost:8080/api/summary').then(res => res.json());
  }

  downloadReport = async () => {
    const data = await this.getUserList();
    console.log(data);
    this.setState(
        {data:data}, () => {
      setTimeout(() => {
        this.csvLinkEl.current.link.click();
      });
    });
  }

  render() {
    const { data } = this.state;
    console.log(data)
    return (
      <div>
        <Button size="large" variant="contained" onClick={this.downloadReport} > Download Summary_Report</Button>
        <CSVLink
          //headers={headers}
          filename="Summary_Report.csv"
          data={data}
          ref={this.csvLinkEl}
        />
      </div>
    );
  }
}

export default SummaryCSV;