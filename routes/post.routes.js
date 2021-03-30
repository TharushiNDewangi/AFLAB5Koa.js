const Router=require('@koa/router'),
{CreatePost,getPosts,getPost}=require('../api/posts.api');

const router = new Router({
    prefix: '/posts'
});
router.get('/', ctx => {
    ctx.body = getPosts();
});
router.post('/', ctx => {
    let post=ctx.request.body;
    post=CreatePost(post);
    ctx.response.status=201;
    ctx.body=post;
    //ctx.body = 'Hello World22';
});
router.get('/:id', ctx => {
    const  id=ctx.params.id;
    ctx.body=getPost(id);
    //ctx.body = 'Hello World11';
});
module.exports=router;