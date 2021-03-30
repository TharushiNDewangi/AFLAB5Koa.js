const UUID=require('uuid');
const posts=new Map();

const CreatePost =({name,description})=>
{
    const post = {
        id:UUID.v4(),
        name,
        description,
        postedDate:new Date()

    }
    posts.set(post.id,post);
    return post;
}
const getPosts =() =>
{
    return[...posts.values()];
}
const getPost = id =>
{
    return posts.get(id);
}
module.exports={
    CreatePost,
    getPosts,
    getPost
};