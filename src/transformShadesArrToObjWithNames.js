const transformShadesArrToObjWithNames = (colors, type, parentColorName) => {
  const obj = {}
  colors.forEach((color, index) => {
    obj[`${index + 1}`] = color
  })
  return obj
}

export default transformShadesArrToObjWithNames
