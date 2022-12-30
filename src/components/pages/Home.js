import React from 'react';
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom';
function Home() {
    const variants1 = {
        anim : {
            opacity : 1,
            transition : {
                delay : 0.6, 
                duration : 0.5, 
            }
        }

    }

    setTimeout(() => {
        document.querySelector(".leftscreen").style.display = "none";
        document.querySelector(".rightscreen").style.display = "none";

    }, 2800);

    return (
        <motion.div variants={variants1} exit={{opacity : 0}} initial ={{opacity:0}} animate="anim" style={{width : '70%'}} className = 'center'>

            <motion.div className='leftscreen' initial = {{x : 0}} animate = {{x : '-100vw'}} transition = {{delay :  2 , duration : 1}} >

            </motion.div>
            <motion.div className='rightscreen' initial = {{x : 0}} animate = {{x : '100vw'}} transition = {{delay :  2 , duration : 1}}>

            </motion.div>
            <motion.div className='centerv mainc ' style={{marginTop : '1rem'}}>
            <img src='landing.png' />
            </motion.div>

            <motion.div className='screenbut' initial = {{opacity : 0}} animate = {{opacity : 1}} transition = {{delay : 3}} >
                <Link to="/signin"><button className='button-24'>Continue</button></Link>

            </motion.div>
        </motion.div>
    );
}

function NotFound() {
    return (
        <h1>NotFound</h1>
    );
}

export default Home;
export {
    NotFound
};
