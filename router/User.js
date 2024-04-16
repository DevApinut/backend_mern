const express=require('express')
const router = express.Router()
const {Register} = require('../controller/Register')
const {Login} = require('../controller/Login')
const {Alluser , Updateauth ,deleteuser ,checkemail,checkusername,fetchandfind} = require('../controller/Alluser')
const {requireAdminLogin , requirepersonelLogin} = require('../controller/authcontroller')
const {updatepassword ,checklogin} = require('../controller/updatepassword')
const {Addsubstation ,fetchsubstation , updatesubstation ,deletesubstation , fetchinfosubstation ,checksubstation} =require('../controller/substation')
const {addfeeder,findfeeder,Edit_add_feeder,Edit_delete_feeder,Edit_update_feeder,updatepermissiontest} = require('../controller/Feeder')
const {Updateinsulation , fetchdatatest , Updatevaccuum , Updatetiming , Updatecounter, Updategas , updatenametest , deletenametest, Updatecontact} = require('../controller/CBTest')
const {jobdescription_save,jobdescription_update,jobdescription_find} = require('../controller/Jobdescription')
const {Updatecontact_Switchtyard,updatenametest_Switchtyard,deletenametest_Switchtyard,fetchdatatest_Switchtyard,Updateinsulation_Switchtyard,UpdateCoil_Switchyard,Updatecontact_Switchyard,Updatecounter_Switchtyard} = require('../controller/Switch_yard/Switch_yard')
const {findbay,addbay,Edit_add_bay,Edit_delete_bay,Edit_update_bay,updatepermissiontest_Switchtyard} = require('../controller/Switch_yard/Bay')
const {addTP,findTP,deletenametest_Transformer,updatenametest_Transformer,Edit_update_Transformer,Update_Testform_Transformer} = require('../controller/Transformer/Transformertest')

/* route for user manager */
router.post('/register',Register)
router.post('/login',Login)
router.post('/alluser',requireAdminLogin,fetchandfind)
router.post('/fetchandfind',requireAdminLogin,fetchandfind)

// router.post('/testfetch',fetchandfind)
router.get('/checkemail/:email',checkemail)
router.get('/checkusername/:username',checkusername)
router.put('/updateauth/:username/:auth',requireAdminLogin,Updateauth)
router.delete('/deleteuser/:username',requireAdminLogin,deleteuser)
router.put('/updatepassword/:username/:newpassword',checklogin,updatepassword)

/* rout for substation and result test */
router.post('/addsubstation',requireAdminLogin,Addsubstation)
router.post('/fetchsubstation',fetchsubstation)
router.post('/fetchinfosubstation',fetchinfosubstation)
router.post('/updatesubstation',requireAdminLogin,updatesubstation)
router.post('/deletesubstation',requireAdminLogin,deletesubstation)
router.post('/checksubstation',checksubstation)


/*route for Feeder */
router.post('/addfeeder',addfeeder)
router.post('/findfeeder',findfeeder)
router.post('/Edit_add_feeder',Edit_add_feeder)
router.post('/Edit_delete_feeder',Edit_delete_feeder)
router.post('/Edit_update_feeder',Edit_update_feeder)

router.post('/updatepermissiontest',updatepermissiontest)

/* For create newnameTest */
router.post('/updatenametest',updatenametest)

/* For Delete NameTest */
router.post('/deletenametest',deletenametest)

/*rout for insulation switchgear */
router.post('/Updateinsulation',requirepersonelLogin,Updateinsulation)

/*rout for contact switchgear*/
router.post('/Updatecontact',requirepersonelLogin,Updatecontact)

/* For fetch and redirect data  switchgear*/
router.post('/fetchdatatest',fetchdatatest)

/*rout for vaccuum switchgear*/
router.post('/Updatevaccuum',requirepersonelLogin,Updatevaccuum)

/*rout for Timing switchgear*/
router.post('/Updatetiming',requirepersonelLogin,Updatetiming)

/*rout for counter switchgear*/
// router.post('/Updatecounter',requirepersonelLogin,Updatecounter)
router.post('/Updatecounter',Updatecounter)

/*rout for Gas update switchgear*/
router.post('/Updategas',Updategas)

/* Job for description*/
router.post('/Jobdescription',jobdescription_save)
router.post('/Jobdescription_update',jobdescription_update)
router.post('/Jobdescription_find',jobdescription_find)


/*************************SWitch gear test route***************/
/*route for Feeder */
router.post('/addbay',addbay)
router.post('/findbay',findbay)
router.post('/Edit_delete_bay',Edit_delete_bay)
router.post('/Edit_update_bay',Edit_update_bay)

router.post('/updatepermissiontest_Switchtyard',updatepermissiontest_Switchtyard)

/* For create newnameTest */
router.post('/updatenametest_Switchtyard',updatenametest_Switchtyard)

/* For Delete NameTest */
router.post('/deletenametest_Switchtyard',deletenametest_Switchtyard)

/* For fetch and redirect data  switchgear*/
router.post('/fetchdatatest_Switchtyard',fetchdatatest_Switchtyard)


/* Route for Contact*/
router.post('/Updatecontact_Switchyard',requirepersonelLogin,Updatecontact_Switchyard)

/* Route for Insulation*/
router.post('/Updateinsulation_Switchtyard',requirepersonelLogin,Updateinsulation_Switchtyard)

/* Route for Coil*/
router.post('/UpdateCoil_Switchyard',requirepersonelLogin,UpdateCoil_Switchyard)

/* Route for Counter*/
router.post('/Updatecounter_Switchtyard',requirepersonelLogin,Updatecounter_Switchtyard)

/*************************Transformer test route***************/

router.post('/addTP',addTP)
router.post('/findTP',findTP)
router.post('/deletenametest_Transformer',deletenametest_Transformer)
router.post('/updatenametest_Transformer',updatenametest_Transformer)
router.post('/Edit_update_Transformer',Edit_update_Transformer)
router.post('/Update_Testform_Transformer',Update_Testform_Transformer)

module.exports=router