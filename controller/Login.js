const blogregister = require('../models/register');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cryspto = require('crypto-js'); 

exports.Login = async (req, res) => {

    try {
        const varia = "donut";

        const {username,password} = req.body
        const user = await blogregister.findOne({username}) 
               
        if (user) {   
                const auth = user.auth;
                const data = {username , auth}                    
                bcrypt.compare(req.body.password, user.password, (err, result)=>{
                    if (result) { 
                         const token = jwt.sign({data},process.env.JWT_SECRET,{expiresIn:'1d', algorithm: "HS256"})
                         const encrypt = cryspto.AES.encrypt(auth,`${username}trakanta`)
                         res.json({res:"เข้าสู่ระบบสำเร็จ",token,username,auth:String(encrypt)})
                    }else{
                        res.json({res:"รหัสผ่านผิด"})
                    }                    
                })
            



            // bcrypt
            //     .compare(req.body.password, hash)
            //     .then(res => {
            //         res.json({ res: "เข้าสู่ระบบสำเร็จ", username: user.username, auth: user.auth })
            //     })
            //     .catch(err => res.json({ res: "รหัสผ่านไม่ถูกต้อง" }))

        } else {
            res.json({ res: "ชื่อผู้ใช้ไม่ถูกต้อง" })
        }
    }
    catch (error) {
        res.json({ error })
    }

}