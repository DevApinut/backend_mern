const jwt = require('jsonwebtoken');


exports.requireAdminLogin = (req, res ,next) => {
    try {
        if (!req.headers["authorization"]) return res.json({ res: "ไม่พบ header" })
        const token = req.headers["authorization"].replace("Bearer ", "")

        jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
            if (err) { throw Error(err) }
            else {
                if (decode.data.auth === "Admin") {
                    // res.send(decode)
                    // return res.send("มีสิทธ์เข้าถึง")
                    next();
                } else {
                    return res.json({res:"เกิด error"})
                }

            }

        })

    } catch (error) {
        return res.json({ err: "เกิด error" })
    }

}


exports.requirepersonelLogin = (req, res ,next) => {
    try {
        if (!req.headers["authorization"]) return res.json({ res: "ไม่พบ header" })
        const token = req.headers["authorization"].replace("Bearer ", "")

        jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
            if (err) { throw Error(err) }
            else {
                if (decode.data.auth === "Admin" || decode.data.auth === "personel") {
                    // res.send(decode)
                    // return res.send("มีสิทธ์เข้าถึง")
                    next();
                } else {
                    return res.json({res:"เกิด error"})
                }

            }

        })

    } catch (error) {
        return res.json({ err: "เกิด error" })
    }

}

// exports.CheckToken=(req,res)=>{
//     try{
//         if (!req.headers["authorization"]) return res.json({ res: "ไม่พบ header" })
//         const token = req.headers["authorization"].replace("Bearer ", "")

//         jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
//             if (err) { throw Error(err) }
//             else {
//                 if (decode.data.auth === "Admin") {
//                     // res.send(decode)
//                     return res.json({res:"authorization"})
//                 } else {
//                     return res.json({res:"Unauthorization"})
//                 }

//             }

//         })
//     }catch(err){
//         return res.json({res:"Unauthorization"})
//     }
// }


