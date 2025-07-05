import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
  size?: number;
  color?: string;
  style?: any;
}

const PackageIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = '#000', 
  style 
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style}>
    <Path
      d="M12,2L2,7V17L12,22L22,17V7L12,2M12,4.14L19.25,8L16.61,9.33L9.36,5.47L12,4.14M6.61,9.33L4,8L11.25,4.14L14,5.47L6.61,9.33M4,10L11,13.5V20.87L4,17.37V10M13,13.5L20,10V17.37L13,20.87V13.5Z"
      fill={color}
    />
  </Svg>
);

export default PackageIcon; 