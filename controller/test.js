const cryspto = require('crypto-js'); 


exports.test=(req,res)=>{
    
    const varia = "donut";

    const encrypt = cryspto.AES.encrypt(varia,"test");
    
    // const test  = cryspto.Rabbit.decrypt(enc,"test").toString(cryspto.enc.Utf8);
    return res.json({res:String(encrypt)})
}