import Router from "express";
import {addNewEvent, addEventImages, searchEvents, generateRandomEventsData} from "../controllers/events.controllers.js";
import { upload } from "../middlewares/multer.middleware.js";
import verifyJWT from "../middlewares/auth.middleware.js";

const router = Router();

// Route to add a new event
router.route("/addNewEvent").post(upload.single("thumbnail"), addNewEvent)

// Route to add images to an event
router.route("/addeventImages").post(verifyJWT, addEventImages)

// Route to search events by query
router.route('/searchEventsByQuery').post(searchEvents)

router.route('/generateData').get(generateRandomEventsData);

export default router;
