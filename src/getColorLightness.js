import Color from 'color'

const getColorLightness = color => (Color(color).isDark() ? 'dark' : 'light')

export default getColorLightness
