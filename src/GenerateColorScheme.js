import {
  getBrandColorName,
  getShades,
  getGreyScale,
  transformShadesArrToObjWithNames
} from '.'
import Color from './vendor/color'

const GenerateColorScheme = ({
  brandColors,
  settings,
  systemColors,
  systemColorSettings
}) => {
  const colorScheme = {}
  brandColors.forEach((color, index) => {
    const colorName = getBrandColorName(index)
    const colorSettings = settings[index]
    const {
      shadesNumber,
      lightenShadeGamma,
      darkenShadeGamma,
      useBezier,
      lightenShadeDarken,
      darkenShadeDarken,
      lightenShadeBrighten,
      darkenShadeBrighten,
      lightenShadeSaturate,
      darkenShadeSaturate,
      lightenShadeDesaturate,
      darkenShadeDesaturate
    } = colorSettings
    colorScheme[colorName] = colorScheme[colorName] || {}
    colorScheme[colorName].default = color
    colorScheme[colorName].accent = Color(color)
      .complementaryScheme()[1]
      .toCSS()
    const lightenShades = getShades({
      color,
      type: 'lighten',
      shadesNumber,
      lightenShadeGamma,
      useBezier,
      lightenShadeDarken,
      lightenShadeBrighten,
      lightenShadeSaturate,
      lightenShadeDesaturate
    })
    const darkenShades = getShades({
      color,
      type: 'darken',
      shadesNumber,
      darkenShadeGamma,
      useBezier,
      darkenShadeDarken,
      darkenShadeBrighten,
      darkenShadeSaturate,
      darkenShadeDesaturate
    })
    colorScheme[colorName].light = lightenShades[lightenShades.length - 1]
    colorScheme[colorName].dark = darkenShades[darkenShades.length - 2]
    const greyShades = getGreyScale()
    const lightenShadesObj = transformShadesArrToObjWithNames(
      lightenShades,
      'lighten'
    )
    const darkenShadesObj = transformShadesArrToObjWithNames(
      darkenShades,
      'darken'
    )
    const greyShadesObj = transformShadesArrToObjWithNames(greyShades, 'darken')

    colorScheme[colorName] = {
      ...colorScheme[colorName],
      lighten: lightenShadesObj,
      darken: darkenShadesObj
    }
    colorScheme.grey = greyShadesObj
  })

  Object.keys(systemColors).forEach((name, index) => {
    const color = systemColors[name]
    const {
      shadesNumber,
      lightenShadeGamma,
      darkenShadeGamma,
      useBezier,
      lightenShadeDarken,
      darkenShadeDarken,
      lightenShadeBrighten,
      darkenShadeBrighten,
      lightenShadeSaturate,
      darkenShadeSaturate,
      lightenShadeDesaturate,
      darkenShadeDesaturate
    } = systemColorSettings
    colorScheme[name] = colorScheme[name] || {}
    colorScheme[name].default = color
    colorScheme[name].accent = Color(color).complementaryScheme()[1].toCSS()
    const lightenShades = getShades({
      color,
      type: 'lighten',
      shadesNumber,
      lightenShadeGamma,
      useBezier,
      lightenShadeDarken,
      lightenShadeBrighten,
      lightenShadeSaturate,
      lightenShadeDesaturate
    })
    const darkenShades = getShades({
      color,
      type: 'darken',
      shadesNumber,
      darkenShadeGamma,
      useBezier,
      darkenShadeDarken,
      darkenShadeBrighten,
      darkenShadeSaturate,
      darkenShadeDesaturate
    })
    colorScheme[name].light = lightenShades[lightenShades.length - 1]
    colorScheme[name].dark = darkenShades[darkenShades.length - 2]
    const lightenShadesObj = transformShadesArrToObjWithNames(
      lightenShades,
      'lighten'
    )
    const darkenShadesObj = transformShadesArrToObjWithNames(
      darkenShades,
      'darken'
    )
    colorScheme[name] = {
      ...colorScheme[name],
      lighten: lightenShadesObj,
      darken: darkenShadesObj
    }
  })

  return colorScheme
}

export default GenerateColorScheme
