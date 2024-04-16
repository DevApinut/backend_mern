const blogregister = require('../models/register');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.updatepassword = async (req, res) => {
    try {
        const { username, newpassword } = req.params
        bcrypt.hash(newpassword, 10)
            .then(async (hash) => {
                const update = await blogregister.findOneAndUpdate({username}, {password: hash},{new:true})
                if (update) {
                    return res.json({ res: "อัพเดทรหัสผ่านสำเร็จ" });
                } else {
                    return res.json({ res: "อัพเดทไม่สำเร็จ" });
                }
            })
            .catch(err => {
                return res.json({ res: "เกิดข้อผิดพลาด" });
            })
    } catch (err) {
        return res.json({ res: "เกิดข้อผิดพลาด" });
    }
}

exports.checklogin = async (req,res,next)=>{
    try {
        //for check old password validate
        const user = await blogregister.findOne({username:req.params.username})
        bcrypt.compare(req.body.oldpassword,user.password, (err, result)=>{
            if (result) { 
                if (!req.headers["authorization"]) return res.json({ res: "ไม่พบ header" })        
                const token = req.headers["authorization"].replace("Bearer ", "")
                jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {        
                     if (err) { throw Error(err) }
                    else {
                        if (decode.data.username === req.params.username) {                    
                            // return res.json({res:"สำเร็จ"})
                            next();
                        } else {
                            return res.json({res:"เกิด error"})
                        }
        
                    }
                    
                })
                
            }else{
                res.json({res:"โปรดป้อนรหัสผ่านเก่าให้ถูกต้อง"})
            }                    
        })

       
    } catch (error) {
        return res.json({ err: "เกิด error" })
    }
}