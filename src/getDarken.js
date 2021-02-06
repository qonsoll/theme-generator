import chroma from 'chroma-js'

const getDarken = (colors, value) =>
  Array.isArray(colors)
    ? colors.map((color) =>
        chroma(color)
          .darken(value || 1)
          .hex()
      )
    : chroma(colors)
        .darken(value || 1)
        .hex()

export default getDarken
