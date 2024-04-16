const bcrypt = require('bcrypt');
const blogregister = require('../models/register');

exports.Register = (req, res) => {
    const { username, password, firstname, surname, email } = req.body

    /* for has password */    
    bcrypt.hash(password, 10)              
        .then(hash => {
            blogregister.create({ username, password:hash, firstname, surname, email })
            .then((result) => res.json({ res: "สมัครสมาชิกเรียบร้อย" }))/**result for lastest data from save on data base */
            .catch((error) => res.json({ error })) 
        })
        .catch(err => console.error(err.message))


    // switch (true) {
    //     case username.length < 6:
    //         return res.json({ res: "โปรดใช้ชื่อที่มีความยาวกว่า 8 ตัวอักษร" })
    //         break;
    //     case !password:
    //         return res.json({ res: "กรุณาทำการป้อนรหัสผ่านก่อนทำการยืนยัน" })
    // }
    //ทำการนำข้อมูลที่ได้จากการ requese มาทำการบันทึกลงใน model ที่เราทำการสร้างขึ้นมา
    
}

