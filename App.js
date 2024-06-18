import React from 'react';
import { StyleSheet, View } from 'react-native';
import WeatherInfo from './src/components/WeatherInfo';
import WeatherSearch from './src/components/WeatherSearch';

const App = () => {
  return (
    <View style={styles.container}>
      <WeatherSearch />
      <WeatherInfo />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
})

export default App;