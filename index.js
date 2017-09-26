const Koa = require('koa')
const impressRouter = require('impress-router')

const app = new Koa()
const router = new impressRouter()

router.get('/heartbeat', async (ctx) => {
    ctx.body = "This is a triumph!\n"
    ctx.response.status = 200
})

app.use(router)

app.listen(8080)