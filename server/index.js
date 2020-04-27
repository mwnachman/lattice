const Koa = require('koa')
const Router = require('koa-router')
const cors = require('@koa/cors')
const bodyParser = require('koa-bodyparser')

const api = require('./api')

const koa = new Koa()
const app = new Router()
const port = process.env.PORT || 3000

app.get('/movie/popular', async ctx => {
  try {
    const movies = await api.getPopularMovies()
    ctx.status = 200
    ctx.body = movies
  } catch (error) {
    ctx.status = 404
    console.log('Error fetching popular movies: ', error)
  }
})

app.get('/movie/genres', async ctx => {
  try {
    const genres = await api.getMovieGenres()
    ctx.status = 200
    ctx.body = genres
  } catch (error) {
    ctx.status = 404
    console.log('Error fetching genres: ', error)
  }
})

app.get('/movie/:movieId/credits', async ctx => {
  try {
    const credits = await api.getCredits(ctx.params.movieId)
    ctx.status = 200
    ctx.body = credits
  } catch (error) {
    ctx.status = 404
    console.log('Error fetching credits: ', error)
  }
})

app.get('/search/movie/:searchTerm', async ctx => {
  try {
    const results = await api.searchMovies(ctx.params.searchTerm)
    ctx.status = 200
    ctx.body = results
  } catch (error) {
    ctx.status = 404
    console.log('Error fetching search results: ', error)
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
