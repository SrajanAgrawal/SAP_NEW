import mongoose from "mongoose";

const eventsschema = new mongoose.Schema({
   id: {
    type: String,
    required: true,
    unique: true
   },
   title: {
    type: String,
    required: true
   },
   description: {
    type: string
   },
   organizedBy: {
    type: objectId[] users,
   },
   attendies: {
    type: objectId[] users
   },
   speakers: {
    type: objectId[] users
   },
   thumbnail: {
    
   }
   date: {
    type: date
   },
   startTime: {
    type: timestamp
   },
   endTime: {
    type: timestamp
   },
   tags: {
    type: String
   }, 
   mode: {
    type: enum,
   },
   city: {
    type: String,
   },
   state: {
    type: String
   },
   country: {
    type: String
   }, 
   eventURL: {
    type: String
   },
   images: {
    type: String[]
   },
   ratings: {
    type: Number
   },
   eventsCategory: {
    type: enum,
   }
} , {timestamps: true}
)

export const events = mongoose.model("events", eventsschema);