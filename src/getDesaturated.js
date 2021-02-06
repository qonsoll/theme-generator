import chroma from 'chroma-js'

const getDesaturated = (colors, value) =>
  Array.isArray(colors)
    ? colors.map((color) =>
        chroma(color)
          .desaturate(value || 1)
          .hex()
      )
    : chroma(colors)
        .desaturate(value || 1)
        .hex()

export default getDesaturated
