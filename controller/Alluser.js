const blogregister = require('../models/register');

exports.Alluser = async (req, res) => {
    try {
        const getalluser = await blogregister.find({})
        if (getalluser) {
            res.json(getalluser)
        } else {
            res.json({ res: "ไม่มีข้อมูลสมาชิก" })
        }
    } catch (err) {
        res.json(err)
    }
}

/*How to write mongoose with promise by use .exec */
exports.fetchandfind = async (req, res) => {
    try {
        const { find } = req.body
        if (find !== "") {
            await blogregister.find({ $or: [{ username: { $regex: find, $options: 'i' } }, { firstname: { $regex: find, $options: 'i' } }, { surname: { $regex: find, $options: 'i' } }, { email: { $regex: find, $options: 'i' } }, { auth: { $regex: find, $options: 'i' } }] }).exec()
                .then((getalluser) => {
                    res.json(getalluser)
                })
                .catch((err) => res.json(err))
        } else {
            await blogregister.find({}).exec()
                .then((getalluser) => {
                    res.json(getalluser)
                })
                .catch((err) => res.json(err))
        }



        // if (getalluser) {
        //     res.json(getalluser)
        // } else {
        //     res.json({ res: "ไม่มีข้อมูลสมาชิก" })
        // }
    } catch (err) {
        res.json(err)
    }
}

exports.Updateauth = async (req, res) => {
    try {
        const { username, auth } = req.params
        const updateauth = await blogregister.findOneAndUpdate({ username }, { auth }, { new: true })
        // .then((res)=>{
        if (updateauth != "") {
            res.json({ res: `เปลี่ยนแปลงสิทธ์การเข้าถึง ${username} สำเร็จเเล้ว` })
        } else {
            // })
            // .catch((err)=>{
            res.json(err)
        }
        // })
    }
    catch (err) {
        res.json(err)
    }
}

exports.deleteuser = async (req, res) => {
    try {
        const { username } = req.params
        await blogregister.findOneAndRemove({ username })
        res.json({ res: `ลบ ${username} สำเร็จ` })
    } catch (err) {
        res.json(err)
    }
}

exports.checkusername = async (req, res) => {
    try {
        const { username } = req.params
        const checkusername = await blogregister.findOne({ username: { $regex: username, $options: 'i' } }); //use regex for find all data not sensitive data

        if (checkusername) {
            res.json({ res: `ชื่อ ${username} มีผู้ใช้งานเเล้ว`, color: "red", verify: false })
        } else {
            res.json({ res: `สามารถใช้ชื่อ ${username} ได้`, color: "green", verify: true })

        }
    } catch (err) { res.json(err) }
}

exports.checkemail = async (req, res) => {
    try {
        const { email } = req.params
        const checkemail = await blogregister.findOne({ email });
        if (checkemail) {
            res.json({ res: `${email} มีผู้ใช้งานเเล้ว`, color: "red", verify: false })
        } else {
            res.json({ res: `สามารถใช้ ${email} นี้ได้`, color: "green", verify: true })

        }
    } catch (err) { res.json(err) }
}



