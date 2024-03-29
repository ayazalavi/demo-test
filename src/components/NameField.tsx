import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

export const xm = Dimensions.get('window').width / 427;
export default function NameField() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>
        Salam, <Text style={styles.text_normal}>Ahmed</Text>
      </Text>
      <Image
        source={require('../../assets/search_icon.png')}
        style={{width: 26 * xm, height: 26 * xm}}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginTop: 60,
    marginRight: 20 * xm,
  },
  text: {
    fontWeight: '800',
    fontSize: 20 * xm,
    lineHeight: 28 * xm,
    color: 'white',
    marginRight: 16 * xm,
  },
  text_normal: {
    fontWeight: '600',
  },
});
