const Router=require('@koa/router')
const router = new Router({
    prefix: '/home'
});
router.get('/', ctx => {
    ctx.body = 'Hello World11';
});
router.post('/', ctx => {
    ctx.body = 'Hello World22';
});
module.exports=router;