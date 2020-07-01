import mongoose from 'mongoose';

interface ActivityAttrs {
    userId: string;
    exercise: string;
    distance:number;
    duration: number;
    description: string;
    difficulty: number;
    photos: string[];
    privacy: string;
}

interface ActivityDoc extends mongoose.Document {
    userId: string;
    exercise: string;
    distance:number;
    duration: number;
    description: string;
    difficulty: number;
    photos: string[];
    privacy: string;
}

interface ActivityModel extends mongoose.Model<ActivityDoc> {
    build(attrs: ActivityAttrs): ActivityDoc;
}

const activitySchema = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        exercise: { type: String, required: true },
        distance: { type: Number, required: true },
        duration: { type: Number, required: true },
        description: { type: String, required: false },
        difficulty: { type: Number, required: true },
        photos: { type: [String], required: false },
        privacy: { type: String, required: true },
    },
    {
        toJSON: {
            transform(doc, ret) {
                ret.id = ret._id;
                delete ret._id;
            },
        },
    },
);

activitySchema.statics.build = (attrs: ActivityAttrs) => new Activity(attrs);

const Activity = mongoose.model<ActivityDoc, ActivityModel>('Activity', activitySchema);

export { Activity };
