const express = require("express");
const bodyParser=require("body-parser");
const ejs = require("ejs");

const idpass=[];
let logHead="";
const teacherdata=[];

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/",function(req,res){
    res.render("index");
})

app.get("/login",function(req,res){
    res.render("login",{
        loghead:logHead
    });
})

// app.get("/signup",function(req,res){
//     res.render("signup");
// })

app.get("/tsign",function(req,res){
    res.render("tsign");
})

app.get("/ssign",function(req,res){
    res.render("ssign");
})



app.post("/ssign",function(req,res){
    res.redirect("ssign");
})

app.post("/tsign",function(req,res){
    let tobj={
        name:req.body.TName,
        email:req.body.TEmail,
        phone:req.body.TPhone,
        dept:req.body.TDept
    }
    teacherdata.push(tobj);
    // console.log(teacherdata);
    res.redirect("tsign");

})

app.post("/",function(req,res){
    // console.log(req.body.loginbutton);
    logHead=req.body.loginbutton;
    res.redirect("login");
    
    // console.log(logHead);
    // res.redirect("tsign");
})

app.post("/login",function(req,res){
    let obj={
        id:req.body.Uname,
        pass:req.body.Pass
    }
    idpass.push(obj);
    // console.log(idpass);
    // console.log(req.body.loginbtn)
})

app.listen(3000,function(){
    console.log("Server Started For Placement Portal");
})