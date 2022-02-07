const express = require('express');
const res = require('express/lib/response');
const { append } = require('express/lib/response');
const router = express.Router();
const post = require('../models/post');
const mongoose = require("mongoose");

router.use(express.json());





// ROUTES
router.get('/', async (req, res) => {
    try{
       const Posts = await post.find();
       res.json(Posts);
    }catch(err) {
        res.json({message:err});
    }
});


// router.post('/', (req,res) => {
//     console.log(req.body);
// });

router.post('/', async(req, res) => {
    const Post = new post ({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        occupation: req.body.occupation


    });

    // saves Post request to database
    try{
    const savedPost = await post.save();
// then it returns this promise
     res.json(savedPost);    
    }catch(err) {
        res.json({ message: err});
    } ;
    
});

// specific occuation
router.get("/:id", async (req, res) => {
    try {
      const Post = await post.findById(req.params.id);
  
      if (!Post)
        return res.status(404).json({ msg: "Does not exist." });
  
      return res.status(200).json(Post);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  });


  router.put("/:id", async (req, res) => {
    const { firstName, lastName, email, phoneNumber, address, occupation } = req.body;
  
    const Post = await post.findByIdAndUpdate(req.params.id, {
        firstName, lastName, email, phoneNumber, address, occupation
    });
   
  
    if (!Post) {
      return res.status(404).json({ msg: "This does not exist" });
    }
  
    return res.status(200).json({ msg: "updated successfully" });
  });

  router.delete("/:id", async (req, res) => {
    const Post = await post.findByIdAndDelete(req.params.id)

    if (!Post) {
        return res.status(404).json({msg: "Does not exist"})
    }

        return res.status(200).json({msg: "Deleted Successfully"})
});




module.exports = router;