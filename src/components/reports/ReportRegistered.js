import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ReportRegistered() {
  const [user, setuser] = useState([
    { username: "", pax: { spouse: 0, familyme: 0, grandKids: 0 } },
  ]);
  //const [paxdata, setpaxdata]=useState(null)
  /* useEffect(()=>{
         fetch("http://recal.eastus.cloudapp.azure.com/api/registered")
    .then((response)=>console.log(response))
    .then((response) => response.json())
    .then(response => {
        setuser(response);
        //setpaxdata(response.pax);
    })
    },[]) */
  useEffect(() => {
    axios
      .get("http://recal.eastus.cloudapp.azure.com/api/registered")
      .then((res) => {
        res = res.data;
        console.log(res);
        setuser(res);
        console.log(user);
      });
  }, []);

  return (
    <div className="mainc">
      <h1>Registered</h1>
      <table>
        <tbody>
          <tr>
            <td>SI</td>
            <td>Alumini</td>
            <td>Spouse</td>
            <td>family</td>
            <td>Grand Children</td>
            <td>total</td>
          </tr>
          {user.map((data, index) => (
            <tr key={data.username}>
              <td>{index}</td>
              <td>{data.username}</td>
              <td>{data.pax.spouse}</td>
              <td>{data.pax.familyMembers}</td>
              <td>{data.pax.grandKids}</td>
              <td>
                {data.pax.spouse + data.pax.grandKids + data.pax.familyMembers}
                +1
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReportRegistered;
