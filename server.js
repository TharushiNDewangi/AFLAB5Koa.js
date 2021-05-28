const Koa=require('koa')
//bodyParser convert data to json
const bodyParser = require('koa-bodyparser');
const jwt=require('koa-jwt');
serve = require('koa-static')
//db ongodb
require('./dal');


const homeRouter = require('./routes/home.router');
const postRouter = require('./routes/post.routes');

//create koa app
const app = new Koa();
//bodyParser() is middleware it convert body to json
app.use(bodyParser());
//create router (Introduce new router to route app)
 app.use(homeRouter.routes())
//     //registering all ther routers from home router and register
//     //all allowed methods from home router(get,post methods)
     .use(homeRouter.allowedMethods());

app.use(postRouter.routes())
    .use(postRouter.allowedMethods());
//lab 6
app.use(serve('public/'));
//
// app.use(ctx => {
//     //setting body to hello
//     ctx.body = 'Hello World';
// });
app.listen(3000,err =>{
    if(err){
        console.log(err);
        return;
    }
});

console.log('Application is running on port 3000');
