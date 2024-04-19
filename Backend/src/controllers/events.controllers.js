import { Event } from '../models/events.models.js';
import { uploadFileOnCloudinary } from '../utils/cloudinary.js';


export const addNewEvent = async (req,res) => {

  // if there is no user in the request then do not allow the user to add event
  if(!req.user){
    return res.status(401).json({message: "You are not authorized"});
   }
   // required fields
   if(!req.body.title || !req.body.date || !req.body.thumbnail || !req.body.startTime || !req.body.endTime){
    return res.status(400).json({message : 'Please provide all required field'});
   }

   var response = ""
   if(req.file){
    const filePath = req.file.originalname;
    response = await uploadFileOnCloudinary(`\public\\temp\\${filePath}`)
    console.log(response)

    if(!response.url) {
        return res.status(500).json({message : "Please upload the image " })
    }
    response = response.url
   }

   const newEvent = new Event ({
    ...req.body,
    thumbnail: response,
    userID: req.user.id
   });
   try {
    const saveEvent = await newEvent.save();
    res.status(201).json(saveEvent);
   }
   catch (error){
    console.log(`Add event error ${error}`)
    res.status(500).json({ message: 'Internal Server Error' });
   }

}

// add image to an event

export const addEventImages = async (req, res) => {
    try {
        // Check if user is authenticated
        if (!req.user) {
            return res.status(401).json({ message: "You are not authorized to upload images." });
        }

        // Check if file exists in the request
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded." });
        }

        // Upload image to Cloudinary
        const response = await uploadFileOnCloudinary(`\public\\temp\\${filePath}`);

        // Check if image upload was successful
        if (!response || !response.url) {
            return res.status(500).json({ message: "Failed to upload image." });
        }

        // Create new image object
        const newImage = new Image({
            images: response.url,
            userId: req.user.id // Assuming userId is the correct field name
        });

        // Save image to database
        const savedImage = await newImage.save();

        // Return success response
        res.status(201).json(savedImage);
    } catch (error) {
        console.error("Error adding image:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


//search event by query

export const searchEvents = async (req,res) => {
    try {
        const startIndex = parseInt(req.query.startIndex) || 0;
        const limit = parseInt(req.query.limit) || 9;
        const sortDirection = req.query.order === 'asc' ? 1 : -1;

         const events = await Event.find({
            ...(req.query.userId && { userId : req.query.userID}),
            ...(req.query.eventId && { eventId : req.query.eventID}),
            ...(req.query.date && { date : req.query.date}),
            ...(req.query.startTime && { startTime : req.query.startTime}),
            ...(req.query.endTime && { endTime : req.query.endTime}),
            ...(req.query.city && { city : req.query.city}),
            ...(req.query.state && { state : req.query.state}),
            ...(req.query.country && { country : req.query.country}),
            ...(req.query.searchTerm && {
                $or:[
                    {title: {$regex: req.query.searchTerm, $options: 'i'}},
                    {description: {$regex: req.query.searchTerm, $options: 'i'}},
                    {eventsCategory: {$regex: req.query.searchTerm, $options: 'i'}},
                ]
            })
         })

        .sort({ updateAt: sortDirection})
        .skip(startIndex)
        .limit(limit);
   

        const totalEvents = await Event.countDocuments();
        const now = new Date();
        const oneMonthAgo = new Date(
            now.getFullYear(),
            now.getMonth() -1,
            now.getDate()
        );

        const lastMonthEvents = await Event.countDocuments({
            createAt: { $gte: oneMonthAgo},
        });

        res.status(200).json({
            events,
            totalEvents,
            lastMonthEvents
        });
}
  catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });

  }
}























// Add a new event
// make changes according the reuired field and check fields

// const addEvent = async (req, res) => {
//         try {
//             const newEvent = await Event.create(req.body);
//             return res.status(201).json({ success: true, data: newEvent });
//         } catch (error) {
//             return res.status(500).json({ success: false, error: error.message });
//         }
//     }

//     // Add images to an event
//    const addEventImages = async (req, res) => {
//         try {
//             const eventId = req.params.eventId;
//             const images = req.body.images; // Assuming images are sent in the request body

//             const event = await Event.findById(eventId);
//             if (!event) {
//                 return res.status(404).json({ success: false, error: 'Event not found' });
//             }

//             event.images.push(...images);
//             await event.save();

//             return res.status(200).json({ success: true, data: event });
//         } catch (error) {
//             return res.status(500).json({ success: false, error: error.message });
//         }
//     }

//     // Search events by query
//    const searchEvents = async (req, res) => {
//         try {
//             const query = req.query.q;
//             const events = await Event.find({ $text: { $search: query } }); // Assuming text index is created on fields you want to search

//             return res.status(200).json({ success: true, data: events });
//         } catch (error) {
//             return res.status(500).json({ success: false, error: error.message });
//         }
//     }

// export {addEvent, addEventImages, searchEvents}
