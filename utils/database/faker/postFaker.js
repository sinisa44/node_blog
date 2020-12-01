const Post = require('./../../../models/Post');
const faker = require('faker');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({path:path.join(__dirname,'./../../../config.env')})
const database = require('./../../../utils/database/connection' );


// console.log(process.env);
database.database();

const seed = async () => {
    let images = [];
    let categories = [];
    let posts = []

    for(i = 0; i < Math.floor( Math.random() * 6 ) + 1; i++ ) {
        let image = faker.image.imageUrl();
        let category = faker.lorem.word();
        
        images.push(image)
        categories.push(category)
    }


    for(i = 0; i < 10; i++ ) {

        let newPost = {
            title: faker.name.title(),
            content: faker.lorem.paragraphs(),
            author: faker.name.firstName(),
            category:categories,
            images:images
         }
         posts.push(newPost)

        }

        try {
            await Post.insertMany( posts );
            console.log('Database insert ');
            process.exit();
        } catch (error) {
            console.log(error);
            process.exit();
        }
}



// seed();