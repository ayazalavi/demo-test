import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Defs, Rect, LinearGradient, Stop } from 'react-native-svg';
import { SvgXml } from 'react-native-svg';

const FROM_COLOR = 'rgb(255, 255, 255)';
const TO_COLOR = '#EF7D00';


const xml = `
<svg width="192" height="119" viewBox="0 0 192 119">
<path d="M148.439 26.5613C135.904 -34.2273 174.585 -96.2466 191.223 -118.431C133.12 -163.329 9.62546 -213.984 -19.5315 -57.4235C-37.807 40.7081 -14.5591 84.8794 16.3045 104.991C49.2143 126.436 95.5706 122.213 124.961 96.1524C142.441 80.6528 154.886 57.8308 148.439 26.5613Z" fill="red"/>
</svg>
`;

const Background = () => {
    return (
        <View style={ { width: "100%", height:'100%' } }>

            <Svg height="100%" width="100%" style={ {zIndex:1} }>
                <Defs>
                    <LinearGradient id="grad" x1="0%" y1="30%" x2="0%" y2="100%">
                        <Stop offset="1" stopColor={ FROM_COLOR }/>
                        <Stop offset="0" stopColor={ TO_COLOR }/>
                    </LinearGradient>
                </Defs>
                <Rect width="100%" height="90%" fill="url(#grad)"/>
            </Svg>

        </View>
    );
};

export default Background;