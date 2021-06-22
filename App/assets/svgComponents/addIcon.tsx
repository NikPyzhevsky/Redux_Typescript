import React from "react";
import { View } from "react-native";
import Svg, {
    Circle,
    Ellipse,
    G,
    Text,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
  } from 'react-native-svg';

export const Icon = ({color="#ee6e73"}) => {
  return (
   
    <View >
    <Svg  
      height="100%"
      viewBox="0 0 512 512"
      width="100%" >
    <Path
    d="M256 0C114.836 0 0 114.836 0 256s114.836 256 256 256 256-114.836 256-256S397.164 0 256 0zm112 277.332h-90.668V368c0 11.777-9.555 21.332-21.332 21.332s-21.332-9.555-21.332-21.332v-90.668H144c-11.777 0-21.332-9.555-21.332-21.332s9.555-21.332 21.332-21.332h90.668V144c0-11.777 9.555-21.332 21.332-21.332s21.332 9.555 21.332 21.332v90.668H368c11.777 0 21.332 9.555 21.332 21.332s-9.555 21.332-21.332 21.332zm0 0"
    fill={color}
    stroke="black"
    strokeWidth="1"
  />
</Svg>
  </View>
    
  );
}

export const DeleteIcon = () => {
  return (
    <View>
    <Svg
      width="100%"
      height="100%"
      viewBox="0 0 20 20"
      // fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   {...props}
    >
      <Path
        d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16.001A8 8 0 0010 18zm0-9.414l2.828-2.829 1.415 1.415L11.414 10l2.829 2.828-1.415 1.415L10 11.414l-2.828 2.829-1.415-1.415L8.586 10 5.757 7.172l1.415-1.415L10 8.586z"
        fill="#777B7E"
      />
    </Svg>
    </View>
  )
}

export const NullIcon = () => {
  return (
    <View>
<Svg
      width="100%"
      height="100%"
      viewBox="0 0 40 40"
      fill="none"
   
    >
      <Path
        d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20zm0-4a16 16 0 100-32 16 16 0 000 32zm-10-6a10 10 0 0120 0h-4a6 6 0 10-12 0h-4zm2-12a3 3 0 110-6 3 3 0 010 6zm16 0a3 3 0 110-6 3 3 0 010 6z"
        fill="#DEDEDE"
      />
    </Svg>

</View>
)
}