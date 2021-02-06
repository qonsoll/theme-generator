import flattenObject from './vendor/flattenObject'

const toFlattenObject = (theme) => {
  const transformedObj = flattenObject(theme)
  const result = {}
  Object.keys(transformedObj).map((key) => {
    result[`color-${key.split('.').join('-')}`] = transformedObj[key]
  })
  return result
}

export default toFlattenObject
