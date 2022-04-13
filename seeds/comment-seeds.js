const { Comment } = require('../models');

const commentdata = [
    {
        comment_test: "This is a comment",
        user_id: 1,
        post_id: 2
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;