import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const StationsListItem = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.item}>{props.station.name}</Text>
    </View>
  );
}

export default StationsListItem;
