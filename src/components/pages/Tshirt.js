import React, { useState } from 'react';
import axios from 'axios';
import {AnimatePresence,motion} from 'framer-motion'
import {Link} from 'react-router-dom'

function Tshirt() {

    const [need,setn] = useState(false);
    const [saved,sets] = useState(false);

    function sendpost(){
        sets(false);
        if(need){
        var c = [document.querySelector('#c1').checked,document.querySelector('#c2').checked,document.querySelector('#c3').checked,document.querySelector('#c4').checked,document.querySelector('#c5').checked];
        console.log(c);
        var men1 = [document.querySelector('#m1').value,document.querySelector('#m2').value,document.querySelector('#m3').value,document.querySelector('#m4').value,document.querySelector('#m5').value,document.querySelector('#m6').value];
        var men2 = [document.querySelector('#m12').value,document.querySelector('#m22').value,document.querySelector('#m32').value,document.querySelector('#m42').value,document.querySelector('#m52').value,document.querySelector('#m62').value];
        var women1 = [document.querySelector('#w1').value,document.querySelector('#w2').value,document.querySelector('#w3').value,document.querySelector('#w4').value];
        var women2 = [document.querySelector('#w12').value,document.querySelector('#w22').value,document.querySelector('#w32').value,document.querySelector('#w42').value];
        var girls1 = [document.querySelector('#g1').value,document.querySelector('#g2').value,document.querySelector('#g3').value];
        var boys1 = [document.querySelector('#b1').value,document.querySelector('#b2').value,document.querySelector('#b3').value];
        
        var data = {'need' : 1 ,'c' : c, 'men1' : men1 , 'men2' : men2, 'women1' : women1, 'women2' : women2, 'girls1' : girls1 , 'boys1' : boys1};
        }
        else{
            data = {'need' : 0}
        }
        axios.post('http://localhost:8080/api/tshirtSave' , data).then((res) => console.log(res.data));
        sets(true);
    }

    const variants1 = {
        anim : {
            x : "0",
            transition : {
                delay : 0.6 , 
                duration : 0.7, 
            }
        }

    }

    return (
        <motion.div variants={variants1} initial ={{x:'100vw'}} animate="anim" exit={{opacity:0}} className = "outerc" transition={{delay : 0.2 , duration  :0.5}}> 
        <motion.div drag dragConstraints={{top:0,bottom:0,left:0,right:0}}  className='mtitle'><h1>Tshirt</h1></motion.div>
        <div className='mainc1'>
            <label >I am Interested in T-Shirt : </label>
            <input type="checkbox" onChange={(e) => setn(e.target.checked)}></input>
        {need && <motion.div initial ={{opacity : 0}} animate = {{opacity : 1}} className='rdetails'>
            <table>
                <tbody>
                <h1>T-shirt for men</h1>
                    <tr>
                        <td>"T-Shirt (Dark Brick Red - Supima Cotton)
Design - Polo with Collar"
</td>
                    <td><input type="checkbox" id='c1'></input></td>
                    </tr>
                    <tr>
                        <td>"T-Shirt (Navy Blue - Sweat-wicking Fabric)
Design - Round Neck for Walking & Exercise)"
</td>
                    <td><input type="checkbox" id='c2'></input></td>
                    </tr>
                    <h1>T-shirt for Women</h1>
                    <tr>
                        <td>T-Shirt Navy Blue - Sweat-wicking Fabric)
Design - Round Neck for Walking & Exercise
</td>
                    <td><input type="checkbox" id='c3'></input></td>
                    </tr>
                    <tr>
                        <td>"T-Shirt (Royal Blue - Sweat-wicking Fabric)
Design - Round Neck for Walking & Exercise)"
</td>
                    <td><input type="checkbox" id='c4'></input></td>
                    </tr>
                    <h1>T-Shirt for GrandChildren</h1>
                    <tr>
                        <td>"T-Shirt (Maroon - Supima Cotton)
Design - Round Neck"
</td>
                    <td><input type="checkbox" id='c5'></input></td>
                    </tr>
                </tbody>
            </table>
        </motion.div>
        }
        
        <br />
        </div>

        <div className='mainc1'>
        {need && <motion.div initial ={{opacity : 0}} whileInView={{ opacity: 1 }} transition ={{duration : 2}} className='rdetails'>
            <table>
                <thead>
                    <tr>
                        <td>Description and size</td>
                        <td>Suprima Cotton @ Rs.1,200</td>
                        <td>Sweat-wicking @ Rs.600</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mens Polo T-Shirt with Collar</td>
                        <td>Qty</td>
                        <td>Qty</td>
                    </tr>
                    <tr>
                        <td>S(38)</td>
                        <td><input type="number" id='m1'></input></td>
                        <td><input type="number" id='m12'></input></td>
                    </tr>
                    <tr>
                        <td>M(40)</td>
                        <td><input type="number" id='m2'></input></td>
                        <td><input type="number" id='m22'></input></td>
                    </tr>
                    <tr>
                        <td>L(42)</td>
                        <td><input type="number" id='m3'></input></td>
                        <td><input type="number" id='m32'></input></td>
                    </tr>
                    <tr>
                        <td>XL(44)</td>
                        <td><input type="number" id='m4'></input></td>
                        <td><input type="number" id='m42'></input></td>
                    </tr>
                    <tr>
                        <td>XXL(46)</td>
                        <td><input type="number" id='m5'></input></td>
                        <td><input type="number" id='m52'></input></td>
                    </tr>
                    <tr>
                        <td>XXL(48)</td>
                        <td><input type="number" id='m6'></input></td>
                        <td><input type="number" id='m62'></input></td>
                    </tr>
                    <tr>
                        <td>Total Mens T-Shirt</td>
                        {/* <td>{totalmen1}</td>
                        <td>{totalmen2}</td> */}

                    </tr>
                    <tr>
                        <td>Womens Round Neck T-shirt</td>
                        <td>Qty</td>
                        <td>Qty</td>
                    </tr>
                    <tr>
                        <td>S</td>
                        <td><input type="number" id='w1'></input></td>
                        <td><input type="number" id='w12'></input></td>
                    </tr>
                    <tr>
                        <td>M</td>
                        <td><input type="number" id='w2'></input></td>
                        <td><input type="number" id='w22'></input></td>
                    </tr>
                    <tr>
                        <td>L</td>
                        <td><input type="number" id='w3'></input></td>
                        <td><input type="number" id='w32'></input></td>
                    </tr>
                    <tr>
                        <td>XL</td>
                        <td><input type="number" id='w4'></input></td>
                        <td><input type="number" id='w42'></input></td>
                    </tr>
                    <tr>
                        <td>Total Womens T-Shirt</td>
                        {/* <td>{totalwomen1}</td>
                        <td>{totalwomen2}</td> */}
                    </tr>
                    <tr>
                        <td>Children(Girls) Round Neck T-shirt</td>
                        <td>Qty</td>
                        <td>Qty</td>
                    </tr>
                    <tr>
                        <td>5-8 Years</td>
                        <td><input type="number" id='g1'></input></td>
                    </tr>
                    <tr>
                        <td>9-12 Years</td>
                        <td><input type="number" id='g2'></input></td>
                    </tr>
                    <tr>
                        <td>13-15 Years</td>
                        <td><input type="number" id='g3'></input></td>
                    </tr>
                    <tr>
                        <td>Total Girls T-Shirt</td>
                        {/* <td>{totalgirl}</td> */}
                    </tr>
                    <tr>
                        <td>Children(Boys) Round Neck T-shirt</td>
                        <td>Qty</td>
                        <td>Qty</td>
                    </tr>
                    <tr>
                        <td>5-8 Years</td>
                        <td><input type="number" id='b1'></input></td>
                    </tr>
                    <tr>
                        <td>9-12 Years</td>
                        <td><input type="number" id='b2'></input></td>
                    </tr>
                    <tr>
                        <td>13-15 Years</td>
                        <td><input type="number" id='b3'></input></td>
                    </tr>
                    <tr>
                        <td>Total Girls T-Shirt</td>
                        {/* <td>{totalboy}</td> */}
                    </tr>
                </tbody>
            </table>
            </motion.div>}

        {!need && <p>No Tshirts Selected</p>}
        </div>
        <div className=' c1but'>
        <Link to = "/event-participation"><button className="eventbut">Go Back and edit</button></Link>
        <button className='eventbut' onClick={() => sendpost()}>Save</button>
            
        {saved && <Link to="/tours" ><button className='eventbut'>Continue</button> </Link>}
        {saved &&  <p>Successfully Saved</p>}
        </div>        
                        
    </motion.div> );
}

export default Tshirt;
