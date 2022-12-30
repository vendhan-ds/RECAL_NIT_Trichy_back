import React, { useEffect, useState } from 'react'
import axios from 'axios'
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';


export default function Payment(){
    const [dat,setdata] = useState([]);
    const [acc,setacc] = useState(false);
    const [totalam,settot] = useState([]);
    useEffect(() => {

        axios.get("http://localhost:8080/api/isadmin").then((res) =>{
          if(res.data == false){
            window.location.href = "/basedat";
          }
          else{
            setacc(true);
          }
        });

        axios.get("http://localhost:8080/api/registrationList").then((res) => {
            var arr = [];
            for(var i of res.data){
                arr.push(i.username);
            }
            arr = arr.filter((item,index) => arr.indexOf(item) === index);
            arr = arr.filter((item) => item != undefined);

            setdata(arr);

        
        });
        axios.get("http://localhost:8080/api/listpaymentss").then((res)=>{
            var r = res.data;
            setChecked(r);
        });

        axios.get("http://localhost:8080/api/updatetotal").then((res)=>{
            var r = res.data;
            settot(r);            
        });

    },[])

  const [checked, setChecked] = React.useState([0]);
  const [changed,setc] = React.useState([0]);
  const handleToggle = (value) => () => {
    const currentIndex = changed.indexOf(value);
    const newChecked = [...changed];

    if (currentIndex === -1) {
      newChecked.push(value);
    } 

    setc(newChecked);
  };

    function sendpost(){
        var l = [];
        for(var i in dat){
          if(changed.includes(dat[i])){
            l.push(document.querySelector("#u" + dat[i].split('@')[0]).value);
          }
          else{
            l.push(checked[i]);
          }
        }
        let data = l;
        axios.post('http://localhost:8080/api/PaymentSave',data).then((res) => alert(res.data));

    }

    return(
        <div>

        <h1>Payment Status</h1>
        {acc && <Box
  display="flex"
  justifyContent="center"
  alignItems="center"
  minHeight="100vh"
>
            <List dense sx={{ width: '70%', bgcolor: 'background.paper' }} >
      {dat.map((value,ind) => {
        return (
          /* <ListItem
            key={value}
            secondaryAction={
              
              <ListItemText />

            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText id={labelId} primary={value} />
            </ListItemButton>
          </ListItem> */
          <div>
          <h2>{value}</h2>
          <p style={{ margin : '1rem'}}>Total Due : {totalam[ind]}   Remaining Due : {totalam[ind] - (checked[ind] || 0)}</p>
          <p>Amount paid : {checked[ind]}</p>
          <TextField size = "small" label={"Update amout paid"} id = {"u" +value.split('@')[0]} onChange={handleToggle(value)}/>
          
          </div>
          
          
        );
      })}
    </List>
    </Box>}
    <br />
    <br />
    {acc && <div className='center'>

    <Stack direction="row" spacing={2} style = {{padding : '1rem'}} align = 'center' divider={<Divider orientation="vertical" flexItem />} component = {Paper}>
                <Button size="large" variant="contained" onClick={() => sendpost()} >
                    Save
                </Button>
    </Stack>
    </div>}
    {!acc && <h1>Only admin allowed to view this page</h1>}
    </div>

    )
}