export const getCastNameString = castArray => {
  const mainCast = castArray.sort((a, b) => {
    if (a.cast_id < b.cast_id) {
      return -1
    } else if (a.cast_id > b.cast_id) {
      return 1
    } else {
      return 0
    }
  })
  .slice(0, 4)
  let names = mainCast.map(member => {
    return member.name
  })
  return names.join(', ')
}
