import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import CustomTextInput from './CustomTextInput';

const WeatherSearch = () => {
  return (
    <View>
      <CustomTextInput
        placeholder="Search the weather of your city"
        numberOfLines={1}
      />
      <View style={styles.buttonWrapper}>
        <Button title="Search" onPress={() => {}} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonWrapper: {
    marginTop: 20,
  },
})

export default WeatherSearch;