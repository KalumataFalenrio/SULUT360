import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimensions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



const SocialButton = ({
  buttonTitle,
  btnType,
  color,
  backgroundColor,
  ...rest
}) => {
  let bgColor = backgroundColor;
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, {backgroundColor: bgColor}]}
      {...rest}>
      <View style={styles.iconWrapper}>
        <MaterialIcons name={btnType} style={styles.icon} size={22} color={color} />
        
      </View>
      <View style={styles.btnTxtWrapper}>
        <Text style={[styles.buttonText, {color: color}]}>{buttonTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  buttonContainer: {
    top:-10,
    marginTop: -20,
    width: '40%',
    height: windowHeight / 17,
    left : 115,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 19,
  },
  iconWrapper: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontWeight: 'bold',
  },
  btnTxtWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});