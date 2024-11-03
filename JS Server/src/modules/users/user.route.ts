// src/routes/user.route.ts
import express from "express";
import { UserController } from "./user.controller";
import createMulterUpload from "../../utils/multerUpload";

const router = express.Router();
const upload = createMulterUpload("uploads/");

router.post("/registration", upload.single("profileImage"), UserController.Registration);
router.get("/login", UserController.Login);

export const UserRoute = router;
