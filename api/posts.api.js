const UUID=require('uuid');
const posts=new Map();
//post.doa wala functions me
const {getAll, getById, removeById, save, update} =
    require('../dal/post.dao.js');
const CreatePost = async ({name,description})=>
{
    const post = {
        id:UUID.v4(),
        name:name,
        description:description,
        postedDate:new Date()

    }
    //posts.set(post.id,post);
    return await save(post);
}
const getPosts =async () =>
{
    //return[...posts.values()];
    return await getAll();
}
const getPost = async (id)=>
{
    //return posts.get(id);
    return await getById(id);
}
const deletePost = async (id)=>
{
    //return posts.get(id);
    return await removeById(id);
}
const updatePost = async (id,{name,description})=>{
    const post = {
        name:name,
        description: description,
        postedDate:new Date()

    }
    return await update(id,post);
}

module.exports={
    CreatePost,
    getPosts,
    getPost,
    deletePost,
    updatePost
};