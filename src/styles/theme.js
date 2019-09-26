import { Dimensions, Platform } from 'react-native'
import icons from '../assets/icons'
import images from '../assets/images'
function isIPhoneX() {
  return Platform.OS === 'ios' && Dimensions.get('window').height === 812
}

const padding = 20
export const Images = images
export const Icons = icons

export default {
  backgroundColor: '#f5f4fc',

  grey: '#333745',
  linkColor: '#4b87a7',
  border: '#d3d8db',
  padding: padding,
  cloudHeight:200,
  white:(percent)=>`rgba(255,255,255,${percent / 100})`,
  black:(percent)=>`rgba(0,0,0,${percent / 100})`,
  shadow:{
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    backgroundColor: '#f1f4f7',
  },
}