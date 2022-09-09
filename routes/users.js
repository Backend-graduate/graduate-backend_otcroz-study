const express = require('express');
const router = express.Router();

const { User } = require('../models/users')

// 유저 등록하기
router.post("/register", (req, res)=>{
  let newUser = new User(req.body)
  newUser.save(
    (err, userInfo) =>{
      if(err) return res.status(400).json({success: false, err})
      return res.status(200).json({
        success: true,
        message: "유저 등록이 완료되었습니다."
      });
    }
  )
});

// 유저 전체 불러오기
router.get("/total", (req, res) => {
  User.find({})
  .exec((err, userInfo)=>{
    if(err) return res.status(400).send(err);
    return res.status(200).send({success: true, message: "유저 전체 불러오기 완료!", userInfo})
  });
});

// 특정 유저 정보 불러오기
router.get("/user/:email", (req, res) => {
  let email = req.params.email
  User.findOne({email: email})
  .exec((err, userInfo) =>{
    if(err) return res.status(400).send(err);
    return res.status(200).send({success: true, userInfo})
  })
})

// 유저 정보 수정하기
router.put("/user/:email", (req, res) => {
  let email = req.params.email
  User.updateOne({email: email}, {$set: {name: req.body.name, age: req.body.age, mbti: req.body.mbti}},
    (err, userInfo) =>{
      if(err) return res.json({success:false, err})
      return res.status(200).json({ success: true, message:"정보 수정 완료", userInfo})
    })
})

// 유저 삭제하기
router.delete("/delete/:email", (req, res)=>{
  let email = req.params.email
  User.deleteOne({email: email}, (err, place) =>{
    if(err) return res.json({success: false, err})
    return res.status(200).json({
      success: true, message:"유저 삭제를 완료했습니다."
    })
  }
  )
})

module.exports = router;