import React from 'react';

import StationPage from '../components/StationPage';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  name: {
    marginTop: 32,
    fontSize: 34,
    paddingHorizontal: 24,
    color: '#373a3c',
  },
});

const StationScreen = ({ route, navigation }) => {

  const station = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Text style={styles.name}>
            {station.name} ({station.crs})
          </Text>
          <StationPage title="Departures">
            Here is a list of departures
          </StationPage>
          <StationPage title="Arrivals">
            Here is a list of arrivals
          </StationPage>
          <StationPage title="Information">
            {JSON.stringify(station)}
          </StationPage>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StationScreen;
