import chroma from 'chroma-js'
import { getDarken, getBrighten, getSaturated, getDesaturated } from '.'

const getShades = ({
  color,
  type, // lighten, darken
  shadesNumber, // default: 9
  lightenShadeGamma, // default: 1
  darkenShadeGamma,
  useBezier, // default: true
  lightenShadeDarken,
  darkenShadeDarken,
  lightenShadeBrighten,
  darkenShadeBrighten,
  lightenShadeSaturate,
  darkenShadeSaturate,
  lightenShadeDesaturate,
  darkenShadeDesaturate
}) => {
  let resultShades = []
  const isLighten = type === 'lighten'
  const blendingColor = isLighten ? '#ffffff' : '#000000'

  let shades = useBezier
    ? chroma.bezier([color, blendingColor]).scale()
    : chroma.scale([color, blendingColor])

  if (isLighten && lightenShadeGamma) {
    shades = shades.gamma(lightenShadeGamma)
  }
  if (!isLighten && darkenShadeGamma) {
    shades = shades.gamma(darkenShadeGamma)
  }

  shades = shades.colors(shadesNumber + 2 || 9 + 2)

  shades.shift()
  shades.pop()
  resultShades = shades

  if (isLighten) {
    if (lightenShadeDarken) {
      resultShades = getDarken(resultShades, lightenShadeDarken)
    }
    if (lightenShadeBrighten) {
      resultShades = getBrighten(resultShades, lightenShadeBrighten)
    }
    if (lightenShadeSaturate) {
      resultShades = getSaturated(resultShades, lightenShadeSaturate)
    }
    if (lightenShadeDesaturate) {
      resultShades = getDesaturated(resultShades, lightenShadeDesaturate)
    }
  } else {
    if (darkenShadeDarken) {
      resultShades = getDarken(resultShades, darkenShadeDarken)
    }
    if (darkenShadeBrighten) {
      resultShades = getBrighten(resultShades, darkenShadeBrighten)
    }
    if (darkenShadeSaturate) {
      resultShades = getSaturated(resultShades, darkenShadeSaturate)
    }
    if (darkenShadeDesaturate) {
      resultShades = getDesaturated(resultShades, darkenShadeDesaturate)
    }
  }

  return resultShades
}

export default getShades
