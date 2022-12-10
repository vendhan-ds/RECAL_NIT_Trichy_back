import express from 'express';
import Accomodation from '../app/models/Accomodation';
import Event from '../app/models/Event';
import Registration from '../app/models/Registration';
import Tour from '../app/models/Tour';
import Tshirt from '../app/models/Tshirt';
import Users from '../app/models/Users';
import FeedBack from '../app/models/FeedBack';
import RegList from '../app/models/Registered';
import Payment from '../app/models/Payment';
import {default as pdfTemplate} from './template';
import {create} from 'html-pdf'

const router = express.Router();



router.post('/create-pdf', async (req, res) => {
    console.log(req.body)
    await create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
        if(err) {
            console.log("not done")
            res.send(Promise.reject());
        }
        console.log("done")
        res.send(Promise.resolve());
    });
});

router.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})

router.get('/', (req, res) => {
    res.send({ data: ['hello world'] });
});

/*let previewData={
        name:,
        hotelRequirement:
    }
*/
router.get("/previewData",async(req,res)=>{
    var currentUser
        const data=req.body;
        //console.log("req body "+JSON.stringify(req.session.passport.user));
        var id=req.session.passport.user;
        console.log(id);
        await Users.findById(id,function(err,docs){
            if(err){console.log(err)}
            else{console.log(docs.username)
                currentUser=docs.username;
            }
        }).clone();
    //var currentUser="TestUser1";//req.body.username;
    //console.log("h1")
    var particitype,inpax,chkin,chkout,htl1,htl2,eventpart,member,foodmembers,tourop,options,quantity,dates;
    particitype = null;
    inpax = {'familyMembers' : 0 , 'grandKids' : 0, 'spouse' : 0};
    htl1 = null;
    htl2 = null;
    eventpart = null;
    member = null;
    foodmembers = null;
    tourop = null;
    options = null;
    quantity = null;
    dates = null;
    chkin = 0;
    chkout = 0;
    try{
        
        await Accomodation.findOne({username:currentUser},function(err,foundUser){
            console.log(foundUser);
            if(err){
                console.log("error");
            }else{
                //console.log(String(foundUser));
                //console.log('ttrtt');

                if(foundUser){
                     console.log("hlo5");
                     particitype=foundUser.participationType;
                     inpax=foundUser.pax;
                     dates=foundUser.Dates;
                     htl1=foundUser.hotel11;
                     htl2=foundUser.hotel22;
                     console.log(particitype);
    
                }
            }
        }).clone();
        var regdat = []
        await Registration.findOne({username:currentUser},function(err,foundUser){
            console.log(foundUser);
            if(err){
                console.log("error")
            }else{
                //console.log(String(foundUser));
                //console.log('ttrtt');

                if(foundUser){
                    console.log("hlo4")
                    regdat =  [foundUser.name,foundUser.branch,foundUser.spouse,foundUser.city,foundUser.country,foundUser.region,foundUser.mobile,foundUser.email,foundUser.tshirt];
                    console.log(regdat);
                }
            }
        }).clone();
        await Event.findOne({username:currentUser},function(err,foundUser){
            if(err){
                console.log("error")
            }else{
                //console.log(String(foundUser));
                if(foundUser){
                    console.log("hlo2")
                     eventpart=foundUser.Date1;
                     member=foundUser.Date2;
                     foodmembers=foundUser.Date3;
    
                }
            }
        }).clone();
        await Tour.findOne({username:currentUser},
            function(err,foundUser){
                if(err){
                    console.log("error")
                }else{
                    //console.log(String(foundUser));
                    if(foundUser){
                        console.log("hlo")
                         tourop=[foundUser.isInterested,
                        foundUser.paxCount]
                    }
                }
            }).clone();
        var previewData = null;
        await Tshirt.findOne({username:currentUser},
            function(err,foundUser){
                if(err){
                    console.log(err)
                }else{
                    //console.log(String(foundUser));
                    if(foundUser){
                        console.log("endddd");
                         options=[foundUser.menOption, foundUser.womenOption, foundUser.grandKidsOption]
                         quantity=foundUser.quantity
                          console.log('sssssss');
                          
                          
                    }
                }
            }).clone();
        await Users.findOne({username:currentUser}, function(err,foundUser){
            if(err){
                console.log(err);
            }
            else{
                if(foundUser){
                    previewData=[currentUser,particitype,inpax,chkin,chkout,htl1,htl2,eventpart,member,foodmembers,options, quantity,tourop,regdat,dates];
                    console.log(previewData);
                    res.send(previewData);
                }
            }
        }).clone();
        /*console.log('sssssss');    
        var previewData=[particitype,inpax,chkin,chkout,htl1,htl2,eventpart,member,foodmembers,options, quantity,tourop]
        console.log('sssssss');
        console.log(previewData);
        res.send(previewData)*/
        
        var previewDatas=[currentUser,particitype,inpax,chkin,chkout,htl1,htl2,eventpart,member,foodmembers,options, quantity,tourop,regdat,dates];
        console.log('dsdsdsds' + previewDatas);
        // res.send(previewDatas);
    
        

    }
    catch(e){
        console.log(e.message)
    }
})

router.get('/registered',async(req,res)=>{
    console.log("hello");
    try{var list=[]
   /*
   Accomodation.find({},{username:1,pax:1, _id:0})
   console.log(list)
   //var grantot[(list)]*/
   await Accomodation.find(function(err,docs){
    if(err){
        console.log(err);
    }else{//console.log(docs);
        docs.forEach(function(doc){
            list.push({username:doc.username,spouse:doc.pax.spouse,
            family:doc.pax.familyMembers,
            grandKids:doc.pax.grandKids,
            total:doc.pax.spouse+doc.pax.familyMembers+doc.pax.grandKids+1})
            console.log(list);
            
        })
        res.send(list);
    }
   }).clone
   //res.send(list);
}
   catch(e){
    console.log(e.message);
   }
})

router.get('/participation',async(req,res)=>{
    var total1=[0,0,0,0], campvis=[0,0,0,0],evening24=[0,0,0,0],evening25=[0,0,0,0], singl=0,doubl=0,tripl=0,singl2=0,doubl2=0,tripl2=0,hsingl=0,hdoubl=0,htripl=0,hsingl2=0,hdoubl2=0,htripl2=0,totalum,totspo,totgrndchld,accomneed1=[0,0,0,0,0,0,0,0],accomneed2=[0,0,0,0,0,0,0,0],paxx={};
    // console.log("abc")
    var accomdata=await Accomodation.find()
        // console.log(accomdata)
    try{
        console.log("accom01")
        await Accomodation.find(function(err,docs){
            if(err){
                // console.log(err)
            }else{
                // console.log(docs)
                docs.forEach((doc)=>{
                    // console.log("Updated -> ")
                    // console.log(doc.checkInDate.getDate().toString())
                    //console.log(Date('2022-10-24T00:00:00.000Z').getDate())
                  if(doc.checkInDate.getDate().toString()=='24' &&doc.checkOutDate.getDate().toString()=='25'){
                //   console.log("inin")
                  singl=singl+doc.hotel11[0]+doc.hotel11[3]+doc.hotel11[9]+doc.hotel11[6]+doc.hotel11[12];
                  doubl=doubl+doc.hotel11[1]+doc.hotel11[4]+doc.hotel11[10]+doc.hotel11[7]+doc.hotel11[13];
                  tripl=tripl+doc.hotel11[2]+doc.hotel11[5]+doc.hotel11[11]+doc.hotel11[8]+doc.hotel11[15];
                  hsingl=hsingl+doc.hotel22[0]+doc.hotel22[3]+doc.hotel22[9]+doc.hotel22[6]+doc.hotel22[12];
                  hdoubl=hdoubl+doc.hotel22[1]+doc.hotel22[4]+doc.hotel22[10]+doc.hotel22[7]+doc.hotel22[13];
                  htripl=htripl+doc.hotel22[2]+doc.hotel22[5]+doc.hotel22[11]+doc.hotel22[8]+doc.hotel22[15];}
                  if(doc.checkInDate.getDate().toString()=='24'&&doc.checkOutDate.getDate().toString()=='26'){
                  singl2=singl2+doc.hotel11[0]+doc.hotel11[3]+doc.hotel11[9]+doc.hotel11[6]+doc.hotel11[12];
                  doubl2=doubl2+doc.hotel11[1]+doc.hotel11[4]+doc.hotel11[10]+doc.hotel11[7]+doc.hotel11[13];
                  tripl2=tripl2+doc.hotel11[2]+doc.hotel11[5]+doc.hotel11[11]+doc.hotel11[8]+doc.hotel11[15];
                  hsingl2=hsingl2+doc.hotel22[0]+doc.hotel22[3]+doc.hotel22[9]+doc.hotel22[6]+doc.hotel22[12];
                  hdoubl2=hdoubl2+doc.hotel22[1]+doc.hotel22[4]+doc.hotel22[10]+doc.hotel22[7]+doc.hotel22[13];
                  htripl2=htripl2+doc.hotel22[2]+doc.hotel22[5]+doc.hotel22[11]+doc.hotel22[8]+doc.hotel22[15];}
                  
                  if(doc.checkOutDate.getDate().toString()=='24'){
                    totalum++;
                    totspo=totspo+doc.pax.spouse;
                    totgrndchld=totgrndchld+doc.pax.grandKids;
                  }
                 /* var accomneed1=[singl,doubl,tripl,(singl+tripl+doubl),hsingl,hdoubl,htripl,(hsingl+htripl+hdoubl)]
                console.log(accomneed1)*/

                })
                // console.log("accom1")
                accomneed1=[singl,doubl,tripl,(singl+tripl+doubl),hsingl,hdoubl,htripl,(hsingl+htripl+hdoubl)]
                // console.log(accomneed1)
                accomneed2=[singl2,doubl2,tripl2,(singl2+tripl2+doubl2),hsingl2,hdoubl2,htripl2,(hsingl2+htripl2+hdoubl2)]
            }
        }).clone()
        await Tour.find((err,doc2)=>{
            if(err){console.log(err)}
            else{
                // console.log("tourstuf")
                doc2.forEach( (doc2)=>{
                     paxx=doc2.paxCount;
                })
            }
        }).clone()
        await Event.find( (err,doc3)=>{
            if(err){
                // console.log(err)
            }
            else{
                doc3.forEach( (doc34)=>{
                    console.log("doc34")
                    console.log(doc34)
                    accomdata.forEach ( (user)=>{
                        if(user.username==doc34.username){
                            if(doc34.Date2.cond1==true){
                                console.log("helo")
                                console.log(user)
                                campvis[0]++;
                                campvis[1]=campvis[1]+user.pax.spouse
                                campvis[2]=campvis[2]+user.pax.familyMembers
                                campvis[3]=campvis[3]+user.pax.grandKids
                            }
                            if(doc34.Date1.cond1==true){
                            evening24[0]++;
                            evening24[1]=evening24[1]+user.pax.spouse
                            evening24[2]=evening24[2]+user.pax.familyMembers
                            evening24[3]=evening24[3]+user.pax.grandKids
                            }
                            if(doc34.Date3.cond1==true){
                            evening25[0]++;
                            evening25[1]=evening25[1]+user.pax.spouse
                            evening25[2]=evening25[2]+user.pax.familyMembers
                            evening25[3]=evening25[3]+user.pax.grandKids
                            }}
                        else{console.log("No UserFound")}})

                        total1=[(campvis[0]+evening24[0]+evening25[0]),(campvis[1]+evening24[1]+evening25[1]),(campvis[2]+evening24[2]+evening25[2]),(campvis[3]+evening24[3]+evening25[3])];
                        console.log(campvis)
                         })
                        
                        var datasend={
                    campusvisit:campvis,EveningHotel24th:evening24, EveningHotel25th:evening25,
                    totalval:total1, 
                    breezeRes:accomneed1, TamilnaduHotel:accomneed2, 
                    eventdata:total1,
                    tourdata:paxx};
                // console.log(datasend)
                res.send(datasend);
            }}).clone()
                    
                    /*console.log(total1)
                    
                }
                console.log("accom13")
                //var total1=[(campvis[0]+evening24[0]+evening25[0]),(campvis[1]+evening24[1]+evening25[1]),(campvis[2]+evening24[2]+evening25[2]),(campvis[3]+evening24[3]+evening25[3])]
                var total2=[]
            }
        }).clone()*/
        
        
    }
    catch(e){
    console.log(e.message);
   }
})

router.get('/tshirt',async(req,res)=>{
    try{
        var mensPolo1=[0,0,0,0,0,0,0],mensPolo2=[0,0,0,0,0,0,0],womensshirt1=[0,0,0,0,0],womensshirt2=[0,0,0,0,0],girlshirt=[0,0,0,0],boyshirt=[0,0,0,0]
       await Tshirt.find(function(err,doc){
        if(err){console.log(err)}
        else{doc.forEach(async(data)=>{
            var supi= data.quantity.menQuantity.supimaCotton
            mensPolo1[0]=mensPolo1[0]+supi.sSize
            mensPolo1[1]=mensPolo1[1]+supi.mSize
            mensPolo1[2]=mensPolo1[2]+supi.lSize
            mensPolo1[3]=mensPolo1[3]+supi.xlSize
            mensPolo1[4]=mensPolo1[4]+supi.xxlSize
            mensPolo1[5]=mensPolo1[5]+supi.xxxlSize
            mensPolo1.forEach(x => {
                mensPolo1[6] += x;
            });

            var supi2= data.quantity.menQuantity.sweatWickingFabric
            mensPolo2[0]=mensPolo2[0]+supi2.sSize
            mensPolo2[1]=mensPolo2[1]+supi2.mSize
            mensPolo2[2]=mensPolo2[2]+supi2.lSize
            mensPolo2[3]=mensPolo2[3]+supi2.xlSize
            mensPolo2[4]=mensPolo2[4]+supi2.xxlSize
            mensPolo2[5]=mensPolo2[5]+supi2.xxxlSize 
            mensPolo2.forEach(x => {
                mensPolo2[6] += x;
            });

            var womensupi=data.quantity.womenQuantity.supimaCotton
            womensshirt1[0]=womensshirt1[0]+womensupi.sSize
            womensshirt1[1]=womensshirt1[1]+womensupi.mSize
            womensshirt1[2]=womensshirt1[2]+womensupi.lSize
            womensshirt1[3]=womensshirt1[3]+womensupi.xlSize
            womensshirt1[4]=womensshirt1[0]+womensshirt1[2]+womensshirt1[1]+womensshirt1[3]


            var womensupi2=data.quantity.womenQuantity.supimaCotton
            womensshirt2[0]=womensshirt2[0]+womensupi2.sSize
            womensshirt2[1]=womensshirt2[1]+womensupi2.mSize
            womensshirt2[2]=womensshirt2[2]+womensupi2.lSize
            womensshirt2[3]=womensshirt2[3]+womensupi2.xlSize
            womensshirt2[4]=womensshirt2[0]+womensshirt2[2]+womensshirt2[1]+womensshirt2[3]

            var girlshirt1=data.quantity.grandKids.girls
            girlshirt[0]=girlshirt[0]+girlshirt1.category1
            girlshirt[1]=girlshirt[1]+girlshirt1.category2
            girlshirt[2]=girlshirt[2]+girlshirt1.category3
            girlshirt[3]=girlshirt[0]+girlshirt[1]+girlshirt[2]

            var boyshirt1=data.quantity.grandKids.boys
            boyshirt[0]=boyshirt[0]+boyshirt1.category1
            boyshirt[1]=boyshirt[1]+boyshirt1.category2
            boyshirt[2]=boyshirt[2]+boyshirt1.category3
            boyshirt[3]=boyshirt[2]+boyshirt[0]+boyshirt[1]



        })
        var datasent={mensPolo1,mensPolo2,womensshirt1,womensshirt2,girlshirt,boyshirt}
        console.log(datasent)
        res.send(datasent)}
       }) 
    }
    catch(e){
    console.log(e.message);
   }
})

router.get("/registrationList",async(req,res)=>{
    try{
       // var userlist=[];
        Registration.find(function(err,docs){
            if(err){
                console.log(err);
            }else{
                console.log(docs);
                res.send(docs)
            }
        }).clone()
    }
    catch(e){
    console.log(e.message);
   }
})

router.get("/summary",async(req,res)=>{
    var accomdata=await Accomodation.find()
    var eventdata=await Event.find()
    var tourdata= await Tour.find()
    var tshirtData=await Tshirt.find()
    var regdata= await Registration.find()
    var datasend=[];
    try{
        regdata.forEach((user)=>{
            eventdata.forEach((user2)=>{
                if(user2.username==user.username){
                accomdata.forEach((user3)=>{
                    if(user3.username==user.username){
                    tourdata.forEach((user4)=>{
                        if(user4.username==user.username){
                        tshirtData.forEach((user5)=>{
                            if(user5.username==user.username){
                            var Branch=user.branch;
                            var Alumini_name=user.name;
                            var Spouse=user.spouse;
                            var family=user3.pax.familyMembers;
                            var granchd=user3.pax.grandKids;
                            var totalppl=2+family+granchd
                            var singl=user3.hotel11[0]+user3.hotel11[3]+user3.hotel11[6]+user3.hotel11[9]+user3.hotel11[12]+user3.hotel22[0]+user3.hotel22[3]+user3.hotel22[6]+user3.hotel22[9]+user3.hotel22[12];
                            var doubl=user3.hotel11[1]+user3.hotel11[4]+user3.hotel11[7]+user3.hotel11[10]+user3.hotel11[13]+user3.hotel22[1]+user3.hotel22[4]+user3.hotel22[7]+user3.hotel22[10]+user3.hotel22[13];
                            var Tshare=user3.hotel11[2]+user3.hotel11[5]+user3.hotel11[8]+user3.hotel11[11]+user3.hotel11[14]+user3.hotel22[2]+user3.hotel22[5]+user3.hotel22[8]+user3.hotel22[11]+user3.hotel22[14];
                            var totalrooms=singl+doubl+Tshare;

                            var event24=user2.Date1.cond2?4500:0;
                            var campus25=user2.Date2.cond1?1600:0;
                            var event25=user2.Date3.cond1?4500:0; 
                            var totEveCost=event24+campus25+event25;
                            var dinner24=user2.Date1.cond2?(totalppl*700):0;
                            var dinner25=user2.Date3.cond2?(totalppl*700):0;
                            var dinnerCost=dinner25+dinner24;

                            var singlCost=singl*2800;
                            var doublCost=doubl*3500;
                            var TshareCost=Tshare*1750;
                            var roomcost=singl*2800+doubl*3500+Tshare*1750;

                            //barFee=(2+family)*1000;
                             var trichyTour=user4.paxCount.trichy*500
                             var phuketTour=user4.paxCount.phuketKrabi*53000
                             var mysoreTour=user4.paxCount.mysoreBandipur*20000
                             var hampiTour=user4.paxCount.belurHampi*16000
                             var tourCost=trichyTour+phuketTour+mysoreTour+hampiTour;
                             
                             var grandTotal=tourCost+roomcost+dinnerCost+totEveCost
                        
                             var reportData={
                                Branch:Branch,
                                Alumini_name:Alumini_name,
                                SPouse_name:Spouse,
                                familymem:family,
                                grandchildren:granchd,
                                totalmembers:totalppl,
                                Single:singl,
                                Double:doubl,
                                Twinshare:Tshare,
                                Rooms:totalrooms,
                                Event24th:event24,
                                Campus25th:campus25,
                                Event25th:event25,
                                TotalFee:totEveCost,
                                Dinner24th:dinner24,
                                Dinner25th:dinner25,
                                totaldinner:dinnerCost,
                                singleCost:singlCost,
                                doubleCost:doublCost,
                                twinCost:TshareCost,
                                totalCost:roomcost,
                                trichy:trichyTour,
                                phuket:phuketTour,
                                mysore:mysoreTour,
                                hampi:hampiTour,
                                tourCost:tourCost,
                                FrandTotal:grandTotal,
                        
                                
                            }
                             
                            datasend.push(reportData); 
                        }}
                        )}
                    })}
                })
            }
        })
        })
        res.send(datasend)
    }
    catch(e){
    console.log(e.message);
   }
})

router.post('/userRegistered', async (req, res)=>{
    try{
        const data=req.body;
        var id=req.session.passport.user;
        var currentUser;
        console.log(data);
        await Users.findById(id,function(err,docs){
            if(err){console.log(err)}
            else{console.log(docs.username)
                currentUser=docs.username;
            }
        }).clone();
        var entry={
            username: currentUser,
            isRegistered:data.registered,
            paymentReport: {
                Room: data.totals[0],
                Participation: data.totals[1],
                Dinner: data.totals[2],
                Tshirt: data.totals[3],
                tours: data.totals[4] + data.totals[5] + data.totals[6] + data.totals[7],
                GrandTotal: data.totals[0] + data.totals[1] + data.totals[2] + data.totals[3] + data.totals[4] + data.totals[5] + data.totals[6] + data.totals[7],   
            }
        
        }
        var entry2= new RegList(entry);
        var set = 0
        RegList.exists({
            username: currentUser
        }, async function (err, doc) {
            if (err) {
                console.log(err)
            } else {
                set = doc;
                console.log("Result :", doc) // false
                if (!set) {
                    await entry2.save();
                    console.log("saved reglist successfully2");
                    res.send("saved reglist")
                } else {
                    await Accomodation.findOneAndUpdate({
                        username: currentUser
                    }, entry);
                    console.log("updated reglist successfully")
                    res.send("updated reglist")
                }
            }
        });
        
    }
    catch (e) {
        console.log(e.message)
        res.send("failed to save")
    }
})

router.post('/accomodationSave', async(req,res)=>{
    try{var currentUser
        const data=req.body;
        console.log(data);
        //console.log("req body "+JSON.stringify(req.session.passport.user));
        var id=req.session.passport.user
        await Users.findById(id,function(err,docs){
            if(err){console.log(err)}
            else{console.log(docs.username)
                currentUser=docs.username;
            }
        }).clone();

        const roomtypes2=['standard', 'deluxe', 'familyRoom', 'suite', 'additionalMember']

        const roomtypes1=['standard', 'executive', 'deluxe', 'luxurySuite', 'grandSuite']

        const roomoccupancy=['singleOccupancy', 'doubleOccupancy', 'twinShare']
        const h1=data.hotel1,h2=data.hotel2;
        //console.log(h1)
        const temp= data.hotel1.map(function(count,i){return{
            roomType:roomtypes1[i%3],
            roomOccupancy:roomoccupancy[parseInt(i/5)],
            count:count
        }
        })
        const hotel11=temp.filter(function(rooms){return rooms.count>0;})

        const temp2= data.hotel2.map(function(count,i){return{
            roomType:roomtypes2[i%3],
            roomOccupancy:roomoccupancy[parseInt(i/5)],
            count:count
        }
        })
        const hotel22=temp2.filter(function(rooms){return rooms.count>0;})

        const newAcc1={
            typeOfRoom:'singleOccupancy',
            username:currentUser,
            pax:{
                alumini:data.alumni,
                spouse:data.spouse,
                familyMembers:data.familyMembers,
                grandKids:data.grandKids
            },
            participationType:data.participationType,
            Dates : {
                cout1 : data.dates[0],
                cout2 : data.dates[1],
                cout3 : data.dates[2],
                cin1 : data.dates[3],
                cin2 : data.dates[4],
                cin3 : data.dates[5],
            },
            hotel:{
                breezeResidency:hotel11/*[
                    {roomType:'standard',
                    roomOccupancy:'singleOccupancy'},{roomType:'standard',
                    roomOccupancy:'singleOccupancy'}
                    
                ]*/,
                hotelTamilNadu:hotel22/*{
                    roomType:'standard',
                    roomOccupancy:'singleOccupancy'
                }*/
            },

                hotel11:h1,
                hotel22:h2
            
        };
        const newAcc={
            typeOfRoom:'singleOccupancy',
            username:currentUser,
            pax:{
                alumini:data.alumni,
                spouse:data.spouse,
                familyMembers:data.familyMembers,
                grandKids:data.grandKids
            },
            participationType:data.participationType,
            Dates : {
                cout1 : data.dates[0],
                cout2 : data.dates[1],
                cout3 : data.dates[2],
                cin1 : data.dates[3],
                cin2 : data.dates[4],
                cin3 : data.dates[5],
            },
            hotel:{
                breezeResidency:hotel11/*[
                    {roomType:'standard',
                    roomOccupancy:'singleOccupancy'},{roomType:'standard',
                    roomOccupancy:'singleOccupancy'}
                    
                ]*/,
                hotelTamilNadu:hotel22/*{
                    roomType:'standard',
                    roomOccupancy:'singleOccupancy'
                }*/
            },

                hotel11:h1,
                hotel22:h2
            
        };
        var data2= new Accomodation(newAcc1);

        var set=0
        Accomodation.exists({username:currentUser},async function (err, doc) {
            if (err){
                console.log(err)
            }else{
                set=doc;
                console.log("Result :", doc) // false
                if(!set){await data2.save();
                    console.log("saved accomodation successfully2");
                    res.send("saved")}
            else{
                await Accomodation.findOneAndUpdate({username:currentUser }, newAcc);
                console.log("updated accomodation successfully")
                res.send("updated")
            }
            }
        });
        
        /* await newAcc.save();
        console.log("saved accomodation successfully")
        res.send("success")
        console.log("nope") */
    
    }
    catch(e){
        console.log(e.message)
        res.send("failure")
    }
})

router.post('/eventsSave',async(req,res)=>{
    try{
        //const data=req.body;console.log(data);
        var currentUser
        const data=req.body;
        //console.log("req body "+JSON.stringify(req.session.passport.user));
        var id=req.session.passport.user
        await Users.findById(id,function(err,docs){
            if(err){console.log(err)}
            else{console.log(docs.username)
                currentUser=docs.username;
            }
        }).clone();
        const newEve= {
            Date1:{
                cond1:data.conditions[0],
                cond2:data.conditions[1],
                cond3:data.conditions[2],
                count:{
                    veg:parseInt(data.d1v),
                    nonveg:parseInt(data.d1nv)
                }
            },
            Date2:{
                cond1:data.conditions[3],
                cond2:data.conditions[4],
                count:parseInt(data.d2c)
            },
            Date3:{
                cond1:data.conditions[5],
                cond2:data.conditions[6],
                cond3:data.conditions[7],
                count:{
                    veg:parseInt(data.d3v),
                    nonveg:parseInt(data.d3nv)
                }
            }
        };
        const newEve1= {
            username:currentUser,
            Date1:{
                cond1:data.conditions[0],
                cond2:data.conditions[1],
                cond3:data.conditions[2],
                count:{
                    veg:parseInt(data.d1v),
                    nonveg:parseInt(data.d1nv)
                }
            },
            Date2:{
                cond1:data.conditions[3],
                cond2:data.conditions[4],
                count:parseInt(data.d2c)
            },
            Date3:{
                cond1:data.conditions[5],
                cond2:data.conditions[6],
                cond3:data.conditions[7],
                count:{
                    veg:parseInt(data.d3v),
                    nonveg:parseInt(data.d3nv)
                }
            }
        };
        var data2=new Event(newEve1);
        var set;
        Event.exists({username:currentUser},async function (err, doc) {
            if (err){
                console.log(err)
            }else{
                set=doc;
                console.log("Result :", doc) // false
                if(!set){await data2.save();
                    console.log("saved event successfully2");
                    res.send("saved")}
            else{
                await Event.findOneAndUpdate({username:currentUser }, newEve);
                console.log("updated event successfully")
                res.send("updated")
            }
            }
        });
        
        /* await newEve.save();
        console.log("saved events successfully")
        res.send("success") */
    }
    catch(e){
        console.log(e.message)
        res.send("failure")
    }
})

router.post("/registrationData",async(req,res)=>{ 
    try{

        var currentUser;
        console.log(req.session);
        var id=req.session.passport.user;
        await Users.findById(id,function(err,docs){
            if(err){console.log(err)}
            else{console.log(docs.username)
                currentUser=docs.username;
            }
        }).clone();
        const data=req.body;
        console.log('sssss' + data);
        const newReg1={
            username : currentUser,
            name: data[0],
            branch: data[1],
            spouse: data[2],
            city: data[3],
            country: data[4],
            region: data[5],
            mobile: data[6],
            email: data[7],
            tshirt: data[8]
                };
        const newReg={
    name: data[0],
    branch: data[1],
    spouse: data[2],
    city: data[3],
    country: data[4],
    region: data[5],
    mobile: data[6],
    email: data[7],
    tshirt: data[8]
        };
        var data2=new Registration(newReg1);
        var set;
        Registration.exists({username:currentUser}, async function (err, doc) {
            console.log(doc);
            if (err){
                console.log(err)
            }else{
                set=doc;
                console.log("Result :", doc) // false
                console.log(set);
                console.log('sdsdsd');
                console.log(newReg);
                if(!set){await data2.save(); //Put this insied the exists, set becomes null outside for some reason.
                        console.log("saved basedata successfully2");
                        res.send("saved")}
                else{
                    await Registration.findOneAndUpdate({username:currentUser }, newReg);//now curly brackets
                    console.log("updated basedata successfully")
                    res.send("updated")
        }    
            }
        });
        
    /* await newReg.save();
    res.send("success") */

    }catch(e){
        console.log(e.message);
        res.send("failure")

    }
})


router.post("/PaymentSave", async(req,res)=>{
    try{
        const data = req.body;
        console.log(data);
        const payment = {
            username : 'main',
            PaymentStatus : data,
        }

        var data2 = new Payment(payment);
        Payment.exists({username:"main"},async function (err, doc) {
            if (err){
                console.log(err)
            }else{

                var set=doc;
                console.log("Result :", doc) // false
                if(!set){await data2.save();
                    console.log("saved payment successfully2");
                    res.send("saved")}
                else{
                    await Payment.findOneAndUpdate({username:"main" }, payment);
                    console.log("updated payments successfully")
                    res.send("updated")
                }
            }
        });
    }
    catch(e){
        console.log(e);
    }
})

router.get("/isadmin" , async(req,res) => {
    try{
        var currentUser;
        var id=req.session.passport.user
        await Users.findById(id,function(err,docs){
            if(err){console.log(err)}
            else{console.log(docs.username)
                currentUser=docs.username;
            }
        }).clone();
        await Users.findOne({username:currentUser}, function(err,foundUser){
            if(err){
                console.log(err);
            }
            else{
                if(foundUser){
                    res.send(foundUser.isAdmin);
                }
            }
        }).clone();

    }
    catch{
        res.send("failure");
    }
})

router.get("/userpaid", async(req,res)=>{
    try{
        var currentUser
        var id=req.session.passport.user
        await Users.findById(id,function(err,docs){
            if(err){console.log(err)}
            else{console.log(docs.username)
                currentUser=docs.username;
            }
        }).clone();
        await Payment.findOne({username:"main"}, function(err,foundUser){
            console.log('kakaka');
            if(err){
                console.log(err);
            }
            else{
                if(foundUser){
                    console.log('sdsdsdsd');
                    var data = foundUser.PaymentStatus;
                    console.log(data);
                    var ex = false;
                    if(data.includes(currentUser)){
                        ex = true;
                    }
                    res.send(ex);
                }
            }
        }).clone();
    }
    catch{
        console.log("error");
        res.send("failure");
    }
})

router.get("/listpayment" , async(req,res)=>{
    try{
        var finallist=[]
        var list=[]

        Registration.find(function (err, docs) {
            if (err) {
                console.log(err);
            } else {
                console.log(docs);
                var paid= []
                Payment.findOne({username:"main"},(err,user)=>{
                        if(err){console.log(err)}
                        else{
                            paid=user.PaymentStatus;
                        }
                    })
                docs.forEach( (element,index) => {
                    console.log(index)
                    var tempfam={}
                    var tempcosts={}
                    RegList.findOne({username:element.username},(err,paydata)=>{
                        if(err){console.log(err)}
                        else{
                            tempcosts=paydata.paymentReport
                        }
                    }).clone
                    Accomodation.findOne({username:element.username},(err,famdata)=>{
                        if(err){console.log(err)}
                        else{
                            tempfam=famdata.pax
                        }
                    }).clone
                    finallist.push({
                        SNo:index+1,
                        branch:element.branch,
                        Alumini_Name: element.username,
                        Spouse:tempfam.spouse,
                        Family:tempfam.familyMembers,
                        Grand_Children:tempfam.grandKids,
                        Total:tempfam.spouse+tempfam.familyMembers+tempfam.grandKids,
                        Room:tempcosts.Room,
                        Participation:tempcosts.Participation,
                        Dinner:tempcosts.Dinner,
                        Tshirts:tempcosts.Tshirt,
                        Tours:tempcosts.tours,
                        GrandTotal:tempcosts.GrandTotal,
                        Amount_Paid:tempcosts.AmountPaid,
                        Balnace_Due:tempcosts.GrandTotal-tempcosts.AmountPaid,
                    })
                });
            }
        }).clone
        res.send(finallist)
    }
    catch(e){
        console.log('error');
        res.send(e.message);
    }
})

router.post("/ToursSave",async(req,res)=>{
    try{let interest;
        //const data=req.body; console.log(data);
        //interest=data.need?True:False;
        var currentUser
        const data=req.body;
        console.log(data);
        //console.log("req body "+JSON.stringify(req.session.passport.user));
        var id=req.session.passport.user
        await Users.findById(id,function(err,docs){
            if(err){console.log(err)}
            else{console.log(docs.username)
                currentUser=docs.username;
            }
        }).clone();
        const newTour= {
            inInterested:data.need,//interest,
            paxCount:{
                trichy:data.tour[0],
                phuketKrabi:data.tour[1],
                mysoreBandipur:data.tour[2],
                belurHampi:data.tour[3]
            }
        }
        const newTour1= {
            username : currentUser,
            inInterested:data.need,//interest,
            paxCount:{
                trichy:data.tour[0],
                phuketKrabi:data.tour[1],
                mysoreBandipur:data.tour[2],
                belurHampi:data.tour[3]
            }
        }
        var data2=new Tour(newTour1);
        var set;
        Tour.exists({username:currentUser},async function (err, doc) {
            if (err){
                console.log(err)
            }else{
                set=doc;
                console.log("Result :", doc) // false
                if(!set){await data2.save();
                    console.log("saved tours successfully2");
                    res.send("saved")}
                else{
                    await Tour.findOneAndUpdate({username:currentUser }, newTour);
                    console.log("updated tours successfully")
                    res.send("updated")
                }
            }
        });
        
        /* await newTour.save();
        console.log("saved tour successfully")
        res.send("success") */
    }catch(e){
        console.log(e.message);
    }
})


router.post("/FeedSave",async(req,res)=>{
    try{let interest;
        var currentUser
        const data=req.body;
        console.log(data);
        //console.log("req body "+JSON.stringify(req.session.passport.user));
        var id=req.session.passport.user
        await Users.findById(id,function(err,docs){
            if(err){console.log(err)}
            else{console.log(docs.username)
                currentUser=docs.username;
            }
        }).clone();
        const newFeed= {
            username:currentUser,
            Rating : data.rat,
            Comment : data.com,
        }
        var data2=new FeedBack(newFeed);
        var set;
        FeedBack.exists({username:currentUser}, function (err, doc) {
            if (err){
                console.log(err)
            }else{
                set=doc;
                console.log("Result :", doc) // false
            }
        });
        if(!set){await data2.save();
                console.log("saved feedback successfully2");
                res.send("saved")}
        else{
            await FeedBack.findOneAndUpdate({username:currentUser }, {newFeed});
            console.log("updated feedback successfully")
            res.send("updated")
        }
        /* await newFeed.save();
        console.log("saved Feed successfully")
        res.send("success") */
    }catch(e){
        console.log(e.message);
    }
})

router.post("/logincheck",async(req,res)=>{
    try{let interest;
        var currentUser
        console.log('sss');
        //console.log("req body "+JSON.stringify(req.session.passport.user));
        var id=req.session.passport.user
        await Users.findById(id,function(err,docs){
            if(err){console.log(err)}
            else{console.log(docs.username)
                currentUser=docs.username;
            }
        }).clone();
        res.send(true);
        console.log(currentUser);
        console.log("success")
    }catch(e){
        res.send(false);
        console.log("fail")

    }
})



router.post("/tshirtSave",async(req,res)=>{
    try{
        //const data=req.body;
        var currentUser
        const data=req.body;
        console.log(data);
        //console.log("req body "+JSON.stringify(req.session.passport.user));
        var id=req.session.passport.user
        await Users.findById(id,function(err,docs){
            if(err){console.log(err)}
            else{console.log(docs.username)
                currentUser=docs.username;
            }
        }).clone();
        data.men1=data.men1.map(function(elem){
            if(elem==""){return "0"}
            else return elem;
        });
        data.men2=data.men2.map(function(elem){
            if(elem==""){return "0"}
            else return elem;
        });
        data.women1=data.women1.map(function(elem){
            if(elem==""){return "0"}
            else return elem;
        });
        data.women2=data.women2.map(function(elem){
            if(elem==""){return "0"}
            else return elem;
        });
        data.girls1=data.girls1.map(function(elem){
            if(elem==""){return "0"}
            else return elem;
        });
        data.boys1=data.boys1.map(function(elem){
            if(elem==""){return "0"}
            else return elem;
        });
        console.log(data);
        const newTshirt1={
            username : currentUser,
            isInterested:data.c[0],
            menOption:{
                supimaCotton:data.c[1],
                sweatWickingFabric:data.c[2]
            },
            womenOption:{
                supimaCotton:data.c[3],
                sweatWickingFabric:data.c[4]
            },
            grandKidsOption:{
                supimaCotton:data.c[5],
            },
            quantity:{
                menQuantity:{
                    supimaCotton:{
                        sSize:parseInt(data.men1[0]),
                        mSize:parseInt(data.men1[1]),
                        lSize:parseInt(data.men1[2]),
                        xlSize:parseInt(data.men1[3]),
                        xxlSize:parseInt(data.men1[4]),
                        xxxlSize:parseInt(data.men1[5]),   
                    },
                    sweatWickingFabric:{
                         sSize:parseInt(data.men2[0]),
                        mSize:parseInt(data.men2[1]),
                        lSize:parseInt(data.men2[2]),
                        xlSize:parseInt(data.men2[3]),
                        xxlSize:parseInt(data.men2[4]),
                        xxxlSize:parseInt(data.men2[5]),   
                    }
                },
                womenQuantity:{supimaCotton:{
                        sSize:parseInt(data.women1[0]),
                        mSize:parseInt(data.women1[1]),
                        lSize:parseInt(data.women1[2]),
                        xlSize:parseInt(data.women1[3]),
                           
                    },
                    sweatWickingFabric:{
                         sSize:parseInt(data.women2[0]),
                        mSize:parseInt(data.women2[1]),
                        lSize:parseInt(data.women2[2]),
                        xlSize:parseInt(data.women2[3]),    
                    }
            },
            grandKids:{
                girls:{
                    category1:data.girls1[0],
                    category2:data.girls1[1],
                    category3:data.girls1[2],
                },
                boys:{
                    category1:data.boys1[0],
                    category2:data.boys1[1],
                    category3:data.boys1[2],
                }
            }
        }

        }
        const newTshirt={
            isInterested:data.c[0],
            menOption:{
                supimaCotton:data.c[1],
                sweatWickingFabric:data.c[2]
            },
            womenOption:{
                supimaCotton:data.c[3],
                sweatWickingFabric:data.c[4]
            },
            grandKidsOption:{
                supimaCotton:data.c[5],
            },
            quantity:{
                menQuantity:{
                    supimaCotton:{
                        sSize:parseInt(data.men1[0]),
                        mSize:parseInt(data.men1[1]),
                        lSize:parseInt(data.men1[2]),
                        xlSize:parseInt(data.men1[3]),
                        xxlSize:parseInt(data.men1[4]),
                        xxxlSize:parseInt(data.men1[5]),   
                    },
                    sweatWickingFabric:{
                         sSize:parseInt(data.men2[0]),
                        mSize:parseInt(data.men2[1]),
                        lSize:parseInt(data.men2[2]),
                        xlSize:parseInt(data.men2[3]),
                        xxlSize:parseInt(data.men2[4]),
                        xxxlSize:parseInt(data.men2[5]),   
                    }
                },
                womenQuantity:{supimaCotton:{
                        sSize:parseInt(data.women1[0]),
                        mSize:parseInt(data.women1[1]),
                        lSize:parseInt(data.women1[2]),
                        xlSize:parseInt(data.women1[3]),
                           
                    },
                    sweatWickingFabric:{
                         sSize:parseInt(data.women2[0]),
                        mSize:parseInt(data.women2[1]),
                        lSize:parseInt(data.women2[2]),
                        xlSize:parseInt(data.women2[3]),    
                    }
            },
            grandKids:{
                girls:{
                    category1:data.girls1[0],
                    category2:data.girls1[1],
                    category3:data.girls1[2],
                },
                boys:{
                    category1:data.boys1[0],
                    category2:data.boys1[1],
                    category3:data.boys1[2],
                }
            }
        }

        }
        var data2=new Tshirt(newTshirt1);
        var set;
        Tshirt.exists({username:currentUser},async function (err, doc) {
            if (err){
                console.log(err)
            }else{
                set=doc;
                console.log("Result :", doc) // false
                if(!set){await data2.save();
                    console.log("saved tshirt successfully2");
                    res.send("saved")}
                else{
                    await Tshirt.findOneAndUpdate({username:currentUser }, newTshirt);
                    console.log("updated shirt successfully")
                    res.send("updated")
                }
            }
        });
        
        /* await newTshirt.save();
        console.log("saved tshirt successfully")
        res.send("success") */
    }catch(e){
        console.log(e.message);
    }
})







module.exports = router;
