//import firebase from 'firebase/app';
const firebase = require('firebase');
const admin = require("firebase-admin");
const express = require('express');
const router = express.Router();

const UserImport = require('../models/User');
const User = UserImport.User


router.post('/signup', async(req,res)=>{
   
    let userInfo;
    let errorInfo;
    console.log(req.body.token)
    await admin
    .auth()
    .verifyIdToken(req.body.token)
    .then((decodedToken) => {
        const uid = decodedToken.uid;
        
        userInfo=uid;
        console.log(userInfo);
        //res.json(uid + "abc");
        // ...
    })
    .catch((error) => {
        // Handle error
        errorInfo=error;
        res.json("unable to signin")
    });

    
    // firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password)
    // .then((userCredential) => {
    //     // Signed in 
    //     var user = userCredential.user;
    //     userInfo = user;
    //     console.log("!!!!!new user signed in!!!!!!");
    //     res.json(userInfo);
    // })
    // .catch((error) => {
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     errorInfo = errorMessage;
    //     res.json(errorInfo)
        
       
    // });
   
        const newUser = new User({
            ufd : userInfo,
            username : req.body.username,
            email: req.body.email
        })
        newUser.save().then(users=>res.json(users)).catch(error=>res.json(error));
    
    
})


router.post('/',async(req,res) => {

    let userUiId;
await admin
    .auth()
    .verifyIdToken(req.body.token)
    .then((decodedToken) => {
        const uid = decodedToken.uid;
        userUiId=uid;
        // ...
    })
    .catch((error) => {
        // Handle error
        errorInfo=error;
        res.json("unable to confirm req from firebase")
    });

    User.findOne({ufd : userUiId}).then(user=>res.json(user)).catch(error=>res.json("unable to fetch data from db"));

})



module.exports = router ;