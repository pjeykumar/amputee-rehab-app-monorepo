import { Password } from '../services/password';
import mongoose from 'mongoose';

interface IUserAttrs {
  email: string;
  password: string;
  code: string;
  codeExpires: Date;
}

interface UserDoc extends mongoose.Document {
  email: string;
  password: string;
  code: string;
  codeExpires: Date;
}

interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: IUserAttrs): UserDoc;
}

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: { type: String, required: false },
    code: { type: String, required: false },
    codeExpires: { type: Date, required: false },
  },
  {
    toJSON: {
      transform(doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
  },
);

userSchema.pre('save', async function (done) {
  if (this.isModified('password')) {
    const hashed = await Password.toHash(this.get('password'));
    this.set('password', hashed);
  }
  done();
});

userSchema.statics.build = (attrs: IUserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };
