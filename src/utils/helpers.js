export const getCastNameString = castArray => {
  const mainCast = castArray.sort((a, b) => {
    if (a.cast_id < b.cast_id) return -1
    else if (a.cast_id > b.cast_id) return 1
    return 0
  })
  .slice(0, 4)
  let names = mainCast.map(member => member.name)
  return names.join(',  ')
}

export const getGenreNameString = (movieGenres, genres) => {
  let relevantGenres = []
  if (genres.length) {
    movieGenres.forEach(id => {
      const genreObject = genres.filter(genre => genre.id == id)
      relevantGenres.push(genreObject[0].name)
    })
    return relevantGenres.join(', ')
  } 
  return relevantGenres
}

export const addToLocalStorage = (label, data) => {
  const localStorage = window.localStorage
  localStorage.setItem(label, JSON.stringify(data))
}

export const getFromLocalStorage = label => {
  const localStorage = window.localStorage
  const item = localStorage.getItem(label)
  if (item) return JSON.parse(item)
  return false
}
