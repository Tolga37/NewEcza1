import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface IconProps {
  size?: number;
  color?: string;
  style?: any;
}

const BankIcon: React.FC<IconProps> = ({ 
  size = 24, 
  color = '#000', 
  style 
}) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" style={style}>
    <Path
      d="M11.5,1L2,6V8H21V6M16,10V17H19V19H4V17H7V10H9V17H11V10H13V17H15V10H16Z"
      fill={color}
    />
  </Svg>
);

export default BankIcon; 