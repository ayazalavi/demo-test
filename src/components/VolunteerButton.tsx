import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {xm} from './NameField';

export default function VolunteerButton() {
  return (
    <TouchableOpacity style={styles.faq}>
      <Text style={styles.title}>Volunteer with us</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#EF7D00',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.4,
    flex: 1,
  },
  faq: {
    marginTop: 16 * xm,
    borderRadius: 16 * xm,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
