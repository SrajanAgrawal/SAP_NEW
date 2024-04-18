import Router from "express";
import {addEvent, addEventImages, searchEvents} from "../controllers/events.controllers";
import { upload } from "../middlewares/multer.middleware";
import verifyJWT from "../middlewares/auth.middleware";

const router = express.Router();

// Route to add a new event
router.route("/addEvent").post(upload.single("thumbnail"), addEvent)

// Route to add images to an event
router.route("/addeventImages").post(verifyJWT, addEventImages)

// Route to search events by query
router.route('/searchEventsByQuery').post(searchEvents)

export default router;
