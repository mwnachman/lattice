const Koa = require('koa')
const Router = require('koa-router')
const cors = require('@koa/cors')
const bodyParser = require('koa-bodyparser')

const api = require('./api')

const koa = new Koa()
const app = new Router()
const port = process.env.PORT || 3000

app.get('/popular', async ctx => {
  try {
    const movies = await api.getPopularMovies()
    ctx.status = 200
    ctx.body = movies
  } catch (error) {
    ctx.status = 404
    console.log('Error fetching popular movies: ', error)
  }
})

koa.use(bodyParser())
koa.use(cors({
  origin: () => {
    if (process.env.NODE_ENV === 'development') {
      return '*'
    }
    return false
  },
  allowMethods: ['GET']
}))
koa.use(app.routes())
koa.listen(port)
