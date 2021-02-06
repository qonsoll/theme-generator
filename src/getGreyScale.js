import chroma from 'chroma-js'

const getGreyScale = (numberOfShades) => {
  const shades = chroma
    .scale(['#ffffff', '#000000'])
    .colors(numberOfShades + 2 || 20)
  shades.shift()
  shades.pop()
  return shades
}

export default getGreyScale
