const express=require("express");
const app=express();
const importdata=require("./data.json");
let port =process.env.port || 3011;
app.get("/",(req,res)=>{
	res.send("Hiiiii5..3012... there...");
	});
app.get("/data",(req,res)=>{
	res.send(importdata);
	});
app.listen(port,()=>{
	console.log('exemple ecoute port http://localhost:'+port);
	console.log(port);
});


