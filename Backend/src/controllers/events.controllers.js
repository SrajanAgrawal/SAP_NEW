import { Event } from '../models/Event';

// Add a new event
// make changes according the reuired field and check fields

const addEvent = async (req, res) => {
        try {
            const newEvent = await Event.create(req.body);
            return res.status(201).json({ success: true, data: newEvent });
        } catch (error) {
            return res.status(500).json({ success: false, error: error.message });
        }
    }

    // Add images to an event
   const addEventImages = async (req, res) => {
        try {
            const eventId = req.params.eventId;
            const images = req.body.images; // Assuming images are sent in the request body

            const event = await Event.findById(eventId);
            if (!event) {
                return res.status(404).json({ success: false, error: 'Event not found' });
            }

            event.images.push(...images);
            await event.save();

            return res.status(200).json({ success: true, data: event });
        } catch (error) {
            return res.status(500).json({ success: false, error: error.message });
        }
    }

    // Search events by query
   const searchEvents = async (req, res) => {
        try {
            const query = req.query.q;
            const events = await Event.find({ $text: { $search: query } }); // Assuming text index is created on fields you want to search

            return res.status(200).json({ success: true, data: events });
        } catch (error) {
            return res.status(500).json({ success: false, error: error.message });
        }
    }

export {addEvent, addEventImages, searchEvents}
