const moduleTemplate = (theme) => {
  return `const Colors = ${JSON.stringify(theme)}

export default Colors
  `
}

const toJSModule = (theme) => {
  return moduleTemplate(theme)
}

export default toJSModule
