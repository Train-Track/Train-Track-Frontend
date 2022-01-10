import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StationsTab from './StationsTab';
import FeedTab from './FeedTab';

const HomeScreen = ({ navigation }) => {

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedTab} />
      <Tab.Screen name="Stations" component={StationsTab} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
