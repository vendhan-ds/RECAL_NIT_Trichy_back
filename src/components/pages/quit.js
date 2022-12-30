import React from 'react'
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import quit from './quit.png'


export default function Quit(){

    const variants1 = {
        anim : {
            opacity : 1,
            transition : {
                delay : 0.6, 
                duration : 0.5, 
            }
        }

    }

    
    return(
        <motion.div variants={variants1} exit={{opacity : 0}} initial ={{opacity:0}} animate="anim" style={{width : '70%'}} className = 'center'>
            <img className='quitimg' src={quit} />
            
            {/* <motion.div className='screenbut' initial = {{opacity : 0}} animate = {{opacity : 1}} transition = {{delay : 3}} >
                <Link to="/signin"><button className='button-24'>Continue</button></Link>

            </motion.div> */}

            <br />
            <br />
            <div className='center'>
            <Stack direction="row" spacing={2} style = {{padding : '1rem'}} align = 'center' divider={<Divider orientation="vertical" flexItem />} component = {Paper}>
            <Link to="/basedat"><Button size="large" variant="contained" >
                    Go Back
                </Button></Link>
                <Button onClick={() => (window.location = "/")} size="large" variant="contained" >
                    Quit
                </Button>
                
                
                </Stack>
            </div>
            
        </motion.div>
    )
}