import mongoose from "mongoose";

const registrationschema = new mongoose.Schema(
    {
      user_Id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
            required: true
        },
        event_Id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'events',
            required: true
        },
        days: {
            type: String
        },
        date: {
            type: date
        }
      }
    
)

export const registration = mongoose.Schema("registration", registrationschema)