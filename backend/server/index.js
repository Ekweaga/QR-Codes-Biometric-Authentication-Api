const express = require('express')
const app = express()
const qrcode = require("qrcode")
const cors = require("cors")




app.use(express.json())
app.use(cors())
app.use("/api",(res,req)=>{
const {url,data} = req.body;
qrcode.toDataURL(url,(err,data)=>{
    if(err){
        res.status(400).json({message:"Error occured"})
    }
    else{
        res.send({message:data})
    }
})
})



app.listen(5000,()=>{
    console.log("Server")
})
