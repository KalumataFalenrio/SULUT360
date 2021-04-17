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
      {/* <Text style={styles.label}>{label} :</Text> */}
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
    padding: 10,
    margin: 15,
    width: 250,
    left:-5
  },
  textInputArea: {
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});