import chroma from 'chroma-js'

const getBrighten = (colors, value) =>
  Array.isArray(colors)
    ? colors.map((color) =>
        chroma(color)
          .brighten(value || 1)
          .hex()
      )
    : chroma(colors)
        .brighten(value || 1)
        .hex()

export default getBrighten
