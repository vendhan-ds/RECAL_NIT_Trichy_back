import React, { Component } from 'react';
import { CSVLink } from "react-csv";
import { Button } from '@mui/material';

/* const headers = [
  { label: "Name", key: "name" },
  { label: "Username", key: "username" },
  { label: "Email", key: "email" },
  { label: "Phone", key: "phone" },
  { label: "Website", key: "website" }
]; */

class ParticipationCSV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    this.csvLinkEl = React.createRef();
  }

  getUserList = () => {
    return fetch('http://localhost:8080/api/participation')
      .then(res => res.json());
  }

  downloadReport = async () => {
    const data = await this.getUserList();
    console.log(data);
    this.setState(
        {data:[ z
            ["Item","Unit","Alumni","Spouse","Family","Grand Children"],
            ["event Participation"],
            ["Only campus visit on 25th Jan","Nos",data.campusvisit[0],data.campusvisit[1],data.campusvisit[2],data.campusvisit[3]],
            ["24th Evening at Hotel","Nos",data.EveningHotel24th[0],data.EveningHotel24th[1],data.EveningHotel24th[2],data.EveningHotel24th[3]],
            ["25th Evening at Hotel","Nos",data.EveningHotel25th[0],data.EveningHotel25th[1],data.EveningHotel25th[2],data.EveningHotel25th[3]],
            ["Total","",data.totalval[0],data.totalval[1],data.totalval[2],data.totalval[3]],
            ["Accomodation Needs"],
            ["Breeze Residency","Nos","Single","Double","Twin Share","Total Rooms"],
            ["Check-In 24th & Check-Out 25th","1 Night",data.breezeRes[0],data.breezeRes[1],data.breezeRes[2],data.breezeRes[3]],
            ["Check-In 24th & Check-Out 26th","2 Night",data.breezeRes[4],data.breezeRes[5],data.breezeRes[6],data.breezeRes[7]],
            ["Tamilnadu Hotel","Nos","Single","Double","Twin Share","Total Rooms"],
            ["Check-In 24th & Check-Out 25th","1 Night",data.TamilnaduHotel[0],data.TamilnaduHotel[1],data.TamilnaduHotel[2],data.TamilnaduHotel[3]],
            ["Check-In 24th & Check-Out 26th","2 Night",data.TamilnaduHotel[4],data.TamilnaduHotel[5],data.TamilnaduHotel[6],data.TamilnaduHotel[7]],

            ["Food Nos(Adults)"],
            

            ["Post GJ Tour"],
            ["Item","Nos","Pax"],
            ["4hrs trichy Tour on 26th Jan",data.tourdata.trichy],
            ["Phuket-krabi",data.tourdata.phuketKrabi],
            ["Mysore-Bandipur",data.tourdata.mysoreBandipur],
            ["Belur-Hampi",data.tourdata.belurHampi]
            



  
]}, () => {
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
        <Button size="large" variant="contained" onClick={this.downloadReport} >Download Participation_Report</Button>
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

export default ParticipationCSV;