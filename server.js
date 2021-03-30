const Koa=require('koa')
const bodyParser = require('koa-bodyparser');
const jwt=require('koa-jwt');

const homeRouter = require('./routes/home.router');
const postRouter = require('./routes/post.routes');

const app = new Koa();

app.use(bodyParser());

app.use(homeRouter.routes())
    .use(homeRouter.allowedMethods());

app.use(postRouter.routes())
    .use(postRouter.allowedMethods());

app.use(ctx => {
    ctx.body = 'Hello World';
});
app.listen(3000,err =>{
    if(err){
        console.log(err);
        return;
    }
});
console.log('Application is running on port 3000');