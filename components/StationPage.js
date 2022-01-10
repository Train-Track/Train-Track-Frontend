import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    color: '#373a3c',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#373a3c',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#373a3c',
  },
  highlight: {
    fontWeight: '700',
  },
});

const StationPage = ({children, title}): Node => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>
        {title}
      </Text>
      <Text style={styles.sectionDescription}>
        {children}
      </Text>
    </View>
  );
}

export default StationPage;
