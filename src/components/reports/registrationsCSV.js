import React, { Component } from 'react';
import { CSVLink } from "react-csv";

const headers = [
  //{ label: "Branch", key: "username" },  
  { label: "Name", key: "username" },
  { label: "Spouse", key: "pax.spouse" },
  { label: "Family", key: "pax.familyMembers" },
  { label: "Grand children", key: "pax.grandKids" },
  { label: "total", key: "total" }
]; 

class RegistrationCSV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    this.csvLinkEl = React.createRef();
  }

  getUserList = () => {
    return fetch('http://localhost:8080/api/registered')
      .then(res => res.json());
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
        <input type="button" value="Download Registrations_Report" onClick={this.downloadReport} />
        <CSVLink
          //headers={headers}
          filename="Participation_Report.csv"
          data={data}
          ref={this.csvLinkEl}
        />
      </div>
    );
  }
}

export default RegistrationCSV;