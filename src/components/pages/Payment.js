import React, { useEffect, useState } from 'react'
import axios from 'axios'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';


export default function Payment(){
    const [dat,setdata] = useState([]);
    const [acc,setacc] = useState(false);
    useEffect(() => {

        axios.get("http://localhost:8080/api/isadmin").then((res) =>{
          console.log(res);
          if(res.data == false){
            window.location.href = "/basedat";
          }
          else{
            setacc(true);
          }
        })

        axios.get("http://localhost:8080/api/registrationList").then((res) => {
            var arr = [];
            for(var i of res.data){
                arr.push(i.username);
            }
            arr = arr.filter((item,index) => arr.indexOf(item) === index);
            arr = arr.filter((item,index) => item != undefined);

            setdata(arr);
            console.log(arr);

        
        });
        axios.get("http://localhost:8080/api/listpayment").then((res)=>{
            console.log(res.data);
            var r = res.data;
            console.log(r);
            console.log("ssds" + r);
            setChecked(r);
        })
    },[])

  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

    function sendpost(){
        var l = [];
        for(var i of dat){
          l.push(document.querySelector("#u" + i.split('@')[0]).value);

        }
        let data = l;
        axios.post('http://localhost:8080/api/PaymentSave',data).then((res) => console.log(res.data));

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
            <List dense sx={{ width: '100%', bgcolor: 'background.paper' }} >
      {dat.map((value,ind) => {
        const labelId = value;
        return (
          /* <ListItem
            key={value}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(value)}
                checked={checked.indexOf(value) !== -1}
              />
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
          <p style={{ margin : '1rem'}}>Total Due : {value}   Remaining Due : {value}</p>
          <p>Amount paid : {checked[ind]}</p>
          <TextField size = "small" label={"Update amout paid"} id = {"u" +value.split('@')[0]}/>



          
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