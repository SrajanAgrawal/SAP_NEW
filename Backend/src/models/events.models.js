import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    organizedBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }],
    attendees: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    speakers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    thumbnail: {
        type: String,
        required: true
    },
    date: {
        type: Date
    },
    startTime: {
        type: Date
    },
    endTime: {
        type: Date
    },
    tags: [{
        type: String
    }],
    mode: {
        type: String,
        enum: ['online', 'in-hand', 'hybrid']
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    eventURL: {
        type: String
    },
    images: [{
        type: String
    }],
    ratings: {
        type: Number,
        min: 1,
        max: 5,
        default: 1
    },
    eventsCategory: {
        type: String,
        enum: ['education', 'job', 'AI']
    }
}, { timestamps: true });

export const Event = mongoose.model("Event", eventSchema);
