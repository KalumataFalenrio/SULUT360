import React from 'react';
import {StyleSheet,TextInput} from 'react-native';

const InputData = ({
  placeholder,
  keyboardType,
  onChangeText,
  stateName,
  value
}) => {
  return (
    <>
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        keyboardType={keyboardType}
        value={value}
        onChangeText={(text) => onChangeText(stateName, text)}
      />
    </>
  );
};

export default InputData;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius:10,
    padding: 10,
    margin: 15,
    width: 250,
    left:-5
  },
});