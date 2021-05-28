const Router=require('@koa/router'),
{CreatePost,getPosts,getPost,deletePost,updatePost}=require('../api/posts.api');

const router = new Router({
    prefix: '/posts'
});
router.get('/', async ctx => {
    ctx.body = await getPosts();
});
router.put('/', async ctx => {
    let post = ctx.request.body;
    post = await CreatePost(post);
    ctx.response.status = 201;
    ctx.body = post;
});
//lab5
// router.post('/', ctx => {
//     let post=ctx.request.body;
//     post=CreatePost(post);
//     ctx.response.status=201;
//     ctx.body=post;
//     //ctx.body = 'Hello World22';
// });
router.get('/:id', async ctx => {
    const  id=ctx.params.id;
    ctx.body=await getPost(id);
    //ctx.body = 'Hello World11';
});
router.del('/:id', async ctx => {
    const  id=ctx.params.id;
    ctx.body=await deletePost(id);
    //ctx.body = 'Hello World11';
});
router.put('/:id', async ctx => {
    let post = ctx.request.body;
    let id = ctx.params.id;
    post = await updatePost(id,post);
    ctx.response.status = 201;
    ctx.body = post;
});
module.exports=router;