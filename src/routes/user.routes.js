import {Router} from "express"
import {   registerUser } from "../controllers/user.controller.js"
import {upload} from "../middlewares/multer.middleware.js"
//import { verifyJWT } from "../middlewares/auth.middleware.js"


const router =Router()

router.route("/register").post(
    upload.fields([
        {
            name:"avatar",
            maxCount:1
        },{
            name:"coverImage",
            maxcount:1
        }
    ]),
    registerUser)
//router.route("/login").post(login)

//router.route("/login").post(loginUser)

//secured routed
//router.route("/logout").post(verifyJWT,logoutUser)

export default router