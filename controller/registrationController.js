const bcrypt = require('bcrypt');


const registrationController = (req,res)=>{
    const {name,email,password} = req.body;

    // password lenght check



    // console.log(password.lenght);

    // if(password.length < 8){
    //     return res.send("Password must be at least 8 characters long");
    // }

    // let pattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

    let numeric = /(?=.*[0-9])/;
    let lower = /(?=.*[a-z])/;
    let capital = /(?=.*[A-Z])/;
    let sym = /(?=.*\W)/;
    let lengh = /.{8,16}/;

            //  if(!pattern.test(password)){
            //     return res.send("Need Capita Lower & Symbol & 8 charecter Lenght");

            // }
             if(!numeric.test(password)){
                return res.send("Need need a number");

            }
             if(!lower.test(password)){
                return res.send("Need a lowercase");

            }
             if(!capital.test(password)){
                return res.send("Need a Capital");

            }
             if(!sym.test(password)){
                return res.send("Need a Symbol");

            }
             if(!lengh.test(password)){
                return res.send("password must be 8-16 characters long");

            }

// email checking regular expression start

    // let pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    //     console.log(pattern.test(email))

    //         if(email == ""){
    //             return res.send("Email is required");
    //         }

    //         if(!pattern.test(email)){
    //             return res.send("Invalid email");

    //         }

            // email checking regular expression end 

            


            // password encrypt check

    // console.log(password);

    // bcrypt.hash(password, 10, function(err, hash) {
    //     // Store hash in your password DB.
    //     console.log(hash); // prints: $2a$10$...
    // });

    // bcrypt.compare(password, "$2b$10$Alz45aC3eYTinYBSv5O3G.GtYaEcIXw7PCa15CIlqSUGDCyjKZtW.", function(err, result) {
    //     // result == true
    //     console.log(result); // true
    // });


             // password encrypt check



    // if(name == ""){
    //     return res.send("Name is required");
    // }

    // else if(email == ""){
    //    return res.send("Email is required");
    // }

    // else if(password == ""){
    //    return res.send("Password is required");
    // }

    // else{
    //     res.send("Account created successfully");

    //     }

}

module.exports = registrationController;