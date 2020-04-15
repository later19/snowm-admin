const router = require('koa-router')()
const Query = require('../utils/query')
const sql = require('../utils/sql');

router.get('/', async(ctx,next) => {
  ctx.type = 'text/html'
  ctx.body = `<h1>这里是Koa首页</h1>`
})

router.get('/queryarticles', async (ctx, next) => {
  ctx.response.body = await sql.QUERY_TABLE(`titlelist`), function (err,result) {
      if(err){
          console.log('[SELECT ERROR]:',err.message);
          return err
      }
      return result;
  }
})

router.all('/*', async (ctx, next) => {
  ctx.response.status = 404;
  ctx.response.body = `<h1>~~oops page not found!</h1>`
})
module.exports = router
