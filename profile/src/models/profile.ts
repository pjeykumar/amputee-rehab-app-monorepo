import mongoose from 'mongoose';

interface ProfileAttrs {
    userId: string;
    isMilitary: boolean;
    branch: string;
    serviceId: string;
    email: string;
    fullName: string;
    displayName: string;
    profilePic: string;
    bio: string;
}

interface ProfileDoc extends mongoose.Document {
    userId: string;
    isMilitary: boolean;
    branch: string;
    serviceId: string;
    email: string;
    fullName: string;
    displayName: string;
    profilePic: string;
    bio: string;
}

interface ProfileModel extends mongoose.Model<ProfileDoc> {
    build(attrs: ProfileAttrs): ProfileDoc;
}

const profileSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        isMilitary: { type: Boolean, required: true },
        branch: { type: String, required: function(this: ProfileAttrs){
            return this.isMilitary;
        }},
        serviceId: { type: String, required: function(this: ProfileAttrs){
            return this.isMilitary;
        }},
        email: { type: String, required: true },
        fullName: { type: String, required: true },
        displayName: { type: String, required: true },
        profilePic: { type: String, required: false },
        bio: { type: String, required: false }
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

profileSchema.statics.build = (attrs: ProfileAttrs) => new Profile(attrs);

const Profile = mongoose.model<ProfileDoc, ProfileModel>('Profile', profileSchema);

export { Profile };
