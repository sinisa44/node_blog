const Post = require('./../../../models/Post');
const faker = require('faker');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({path:path.join(__dirname,'./../../../config.env')})
const database = require('./../../../utils/database/connection' );


// console.log(process.env);
database.database();

const seed = async () => {
    let posts = []
    for(i = 0; i < 1; i++ ) {

        let newPost = {
            title: faker.name.title(),
            content: faker.lorem.paragraphs(),
            author: faker.name.firstName()
         }

         let images = [];

         for(i = 0; i < Math.floor( Math.random() * 6 ) + 1; i++ ) {
             let image = faker.image.imageUrl();

             images.push(image)
         }

        //  newPost.category.push( faker.lorem.slug );
         newPost.image.push(images);

        //  posts.push(newPost)
         console.log(newPost);
        }
    // try {
    //     await Post.insertMany(posts);
    //     console.log('database seed');
    //     process.exit();
    // } catch (error) {
    //     console.log( error);
    //     process.exit()
    // }

 
}

seed();