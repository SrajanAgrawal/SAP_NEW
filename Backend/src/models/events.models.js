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
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
   },
   attendies: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
   },
   speakers: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
   },
   thumbnail: {
      type: String,
      required: true
   },
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
      type: String,
      enums: [online, offline, hybrid, remote]
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
      type: String
   },
   ratings: {
      type: Number,
      min: 1,
      max: 5,
      default: 1
  },
   eventsCategory: {
      type: String,
      enums: [education, job]
   }
} , {timestamps: true}
)

export const events = mongoose.model("events", eventsschema);