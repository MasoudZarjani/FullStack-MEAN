import mongoose from 'mongoose';

const PostsSchema = mongoose.Schema({
    title: String,
});

export default mongoose.model('Posts', PostsSchema);
