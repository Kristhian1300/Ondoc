import React from 'react';
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';

const CustomButtonLogin = (
  onPress,
  text,
  type = 'PRIMARY',
  bgColor,
  fgColor
) => {
  return (
    <>
      <Pressable
        onPress={onPress}
        style={[
          styles.containerL,
          styles[`container_${type}`],
          bgColor ? { backgroundColor: bgColor } : {},
        ]}
      >
        <Text>{text}</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  containerL: {
    width: '90%',

    padding: 15,
    marginVertical: 5,

    alignItems: 'center',
    borderRadius: 25,
    left: 16,
  },

  container_PRIMARY: {
    backgroundColor: '#BB3011',
    marginTop: 30,
  },

  container_SECONDARY: {
    borderColor: '#3B71F3',
    borderWidth: 2,
  },

  container_TERTIARY: {
    backgroundColor: 'green',
  },

  text: {
    fontWeight: 'bold',
    color: 'white',
  },

  text_SECONDARY: {
    color: '#3B71F3',
  },

  text_TERTIARY: {
    color: '#BB3011',
    margin: -30,
  },
  text_TERTIARY2: {
    color: 'white',
    marginBottom: 60,
    paddingLeft: 0,
    height: 20,
  },
});

export default CustomButtonLogin;
