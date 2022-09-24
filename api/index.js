import express from 'express';
import Accomodation from '../app/models/Accomodation';
import Event from '../app/models/Event';
import Registration from '../app/models/Registration';
import Tour from '../app/models/Tour';
import Tshirt from '../app/models/Tshirt';
import Users from '../app/models/Users';

const router = express.Router();

router.get('/', (req, res) => {
    res.send({ data: ['hello world'] });
});



router.get("/previewData",async(req,res)=>{
    try{
        Accomodation.findOne({username:currentUser},function(err,foundUser){
            if(err){
                console.log(err)
            }else{

            }
        })
    }
    catch(e){
        console.log(e.message)
    }
})


router.post('/accomodationSave', async(req,res)=>{
    try{
        const data=req.body;console.log(data);

        const roomtypes=['standard', 'deluxe', 'familyRoom', 'suite', 'additionalMember']

        const roomoccupancy=['singleOccupancy', 'doubleOccupancy', 'twinShare']

        const temp= data.hotel1.map(function(count,i){return{
            roomType:roomtypes[i%3],
            roomOccupancy:roomoccupancy[parseInt(i/5)],
            count:count
        }
        })
        const hotel1=temp.filter(function(rooms){return rooms.count>0;})

        const temp2= data.hotel2.map(function(count,i){return{
            roomType:roomtypes[i%3],
            roomOccupancy:roomoccupancy[parseInt(i/5)],
            count:count
        }
        })
        const hotel2=temp2.filter(function(rooms){return rooms.count>0;})

        const newAcc= new Accomodation({
            typeOfRoom:'singleOccupancy',
            username:"",
            pax:{
                alumini:1,
                spouse:1,
                familyMembers:1,
                grandKids:1
            },
            participationType:data.participationType,
            checkInDate:data.checkInDate,
            checkOutDate:data.checkOutDate,
            hotel:{
                breezeResidency:hotel1/*[
                    {roomType:'standard',
                    roomOccupancy:'singleOccupancy'},{roomType:'standard',
                    roomOccupancy:'singleOccupancy'}
                    
                ]*/,
                hotelTamilNadu:hotel2/*{
                    roomType:'standard',
                    roomOccupancy:'singleOccupancy'
                }*/
            }
        });
        await newAcc.save();
        console.log("saved accomodation successfully")
        res.send("success")
        console.log("nope")
    
    }
    catch(e){
        console.log(e.message)
        res.send("failure")
    }
})

router.post('/eventsSave',async(req,res)=>{
    try{
        const data=req.body;console.log(data);
        const newEve= new Event({
            username:"",
            Date1:{
                cond1:data.conditions[0],
                cond2:data.conditions[1],
                cond3:data.conditions[2],
                count:{
                    veg:data.d1v,
                    nonveg:data.d1nv
                }
            },
            Date2:{
                cond1:data.conditions[3],
                cond2:data.conditions[4],
                count:data.d2c
            },
            Date3:{
                cond1:data.conditions[5],
                cond2:data.conditions[6],
                cond3:data.conditions[7],
                count:{
                    veg:data.d3v,
                    nonveg:data.d3nv
                }
            }
        });
        await newEve.save();
        console.log("saved events successfully")
        res.send("success")
    }
    catch(e){
        console.log(e.message)
        res.send("failure")
    }
})

router.post("/registrationData",async(req,res)=>{
    try{
        const data=req.body;console.log(data);
        const newReg=new Registration({
            username: String,
    name: String,
    branch: String,
    spouse: String,
    city: String,
    country: String,
    region: String,
    mobile: String,
    email: String,
    tshirt: String
        })
    }catch(e){
        console.log(e.message);
    }
})

router.post("/tours",async(req,res)=>{
    try{
        const data=req.body; console.log(data);
        const newTour= new Tour({
            username:"",
            inInterested:"",
            paxCount:{
                trichy:"",
                phuketKrabi:"",
                mysoreBandipur:"",
                belurHampi:""
            }
        })
        await newEve.save();
        console.log("saved tour successfully")
        res.send("success")
    }catch(e){
        console.log(e.message);
    }
})
/*
router.post("/tshirt",async(req,res)=>{
    try{
        const data=req.body;console.log(data);
        const newTshirt=new Tshirt({
            username:"",
            isInterested:"",

        })
    }
})*/

module.exports = router;
