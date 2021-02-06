const getBrandColorName = (index) => {
  const map = {
    0: 'primary',
    1: 'secondary',
    2: 'tertiary'
  }
  return map[index]
}

export default getBrandColorName
