import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const CustomTextInput = ({
  text,
  onChange,
  multiline = false,
  placeholder,
  numberOfLines
}) => {
  return (
    <View>
      <TextInput
        multiline={multiline}
        numberOfLines={numberOfLines}
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChange}
        defaultValue={text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: '#DDDDDD',
    padding: 10,
  },
  container: {
    marginTop: 20,
  },
})

export default CustomTextInput;