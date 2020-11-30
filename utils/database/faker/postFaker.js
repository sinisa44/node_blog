const Post = require('./../../../models/Post');
const faker = require('faker');


for(i = 0; i < 10; i++ ) {
    const newPost = new Post();

    newPost.title = faker.title
    newPost.content = faker.paragraph
    newPost.category = faker.word,
    newPost.image = faker.imageUrl,
    newPost.author = faker.firstName

    try {
        newPost.save();

        console.log(newPost);
    } catch (error) {   
        console.log(error);
    }

    // console.log(newPost);
}