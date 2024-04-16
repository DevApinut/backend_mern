const mongoose = require('mongoose');


const blogjobdescription = mongoose.Schema({
    jobcontent: {
        type: String,
        default:"ไม่มีข้อมูล"        
    },
}, { timestamps: true })

module.exports = mongoose.model("jobdescription", blogjobdescription)