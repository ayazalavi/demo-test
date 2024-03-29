import React from 'react';
import {Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {xm} from './NameField';

export default function FAQButton() {
  return (
    <TouchableOpacity style={styles.faq}>
      <Text style={styles.title}>Frequently Asked Questions</Text>
      <Image
        source={require('../../assets/chevron_up.png')}
        style={{width: 16 * xm, height: 16 * xm}}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.4,
    flex: 1,
  },
  faq: {
    backgroundColor: '#FF9C27',
    flex: 1,
    padding: 20 * xm,
    marginTop: 16 * xm,
    marginHorizontal: 16 * xm,
    flexDirection: 'row',
    borderRadius: 16 * xm,
    alignItems: 'center',
  },
});
