import * as rpp from 'react-device-detect'
import React from 'react';
import App from './App';
import { RotateDeviceMessage } from './RotateDeviceMessage';

let AppOrientationWrapper = props => {
  const { isPortrait } = props
  
  if (rpp.isMobile && isPortrait) {
    return  <RotateDeviceMessage />
  } else {
    return <App />
  }
}
 
AppOrientationWrapper = rpp.withOrientationChange(AppOrientationWrapper)
 
export { AppOrientationWrapper }