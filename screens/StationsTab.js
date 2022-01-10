import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, TouchableHighlight, View } from 'react-native';

import StationsListItem from '../components/StationsListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
});

const StationsTab = ({ navigation }) => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getStations = async () => {
    try {
      const response = await fetch('http://dev.traintrackapp.co.uk:3000/stations.json');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getStations();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) =>
         <TouchableHighlight
            key={item.key}
            onPress={() => navigation.navigate('Station', item)}>
          <StationsListItem key={item.id} station={item} />
        </TouchableHighlight>}
      />
    </SafeAreaView>
  );
};

export default StationsTab;
