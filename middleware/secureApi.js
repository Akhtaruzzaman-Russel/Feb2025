let secureApi = (req,res,next)=>{
    // console.log(req.headers.authorization);
    if(req.headers.authorization == "PxEM+04r4+cd"){
        next();
    }else{
        res.send("Unauthorized Access");
    }
    // console.log("ami secureApi");
    // next();
}


module.exports = secureApi