import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
  size?: number;
  color?: string;
  style?: any;
}

const BlockIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = '#000', 
  style 
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style}>
    <Path
      d="M12,2C17.5,2 22,6.5 22,12C22,17.5 17.5,22 12,22C6.5,22 2,17.5 2,12C2,6.5 6.5,2 12,2M4,12C4,16.4 7.6,20 12,20C13.9,20 15.7,19.3 17.1,18.1L5.9,6.9C4.7,8.3 4,10.1 4,12M20,12C20,7.6 16.4,4 12,4C10.1,4 8.3,4.7 6.9,5.9L18.1,17.1C19.3,15.7 20,13.9 20,12Z"
      fill={color}
    />
  </Svg>
);

export default BlockIcon; 