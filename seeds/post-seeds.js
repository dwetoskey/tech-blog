const { Post } = require('../models');

const postdata = [
    {
        title: 'Some Title',
        user_id: 10
        
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;