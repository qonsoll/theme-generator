import chroma from 'chroma-js'

const getSaturated = (colors, value) =>
  Array.isArray(colors)
    ? colors.map((color) =>
        chroma(color)
          .saturate(value || 1)
          .hex()
      )
    : chroma(colors)
        .saturate(value || 1)
        .hex()

export default getSaturated
