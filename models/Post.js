const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required:[true, 'title is required']
    },
    content:{
        type:String,
        required:[true, 'Post content is required']
    },
    category:{
        type:[String],
        required:[true, 'Post category is required']
    },
    image:{
        type:[String]
    },
    author:{
        type:String
    },
    created_at:{
        type:Date,
        default:Date.now()
    }
})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;