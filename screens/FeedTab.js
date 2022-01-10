import React from 'react';

import StationPage from '../components/StationPage';
import StationScreen from './StationScreen';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Button,
  Text,
  View,
} from 'react-native';

const FeedTab = ({ navigation }) => {

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <StationPage title="Home Station">
            <Button
              title="Get me home"
              onPress={() => navigation.navigate('Station', { crs: 'LLO', name: 'Llandrindod'})}
            />
          </StationPage>
          <StationPage title="See Your Changes">
            Read the docs to discover what to do next:
          </StationPage>
          <StationPage title="Debug">
            Read the docs to discover what to do next:
          </StationPage>
          <StationPage title="Learn More">
            Read the docs to discover what to do next:
          </StationPage>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FeedTab;
