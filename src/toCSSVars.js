import flattenObject from './vendor/flattenObject'

const toCSSVars = (theme) => {
  const flattenTheme = flattenObject(theme)
  let cssVars = ``
  Object.keys(flattenTheme).forEach((key) => {
    const name = `--color-${key.split('.').join('-')}`
    const value = flattenTheme[key]
    cssVars += `${name}: ${value};\n`
  })
  return cssVars
}

export default toCSSVars
