import React from 'react';
import { View, Text, StyleSheet, Pressable, TextInput } from 'react-native';

const CustomButton = ({
  onPress,
  text,
  type = 'PRIMARY',
  bgColor,
  fgColor,
}) => {
  return (
    <>
      {/*<Pressable
        onPress={onPress}
        style={[
          styles.container,
          styles[`container_${type}`],
          bgColor ? { backgroundColor: bgColor } : {},
        ]}
      >
        <Text
          style={[
            styles.text,
            styles[`text_${type}`],
            fgColor ? { color: fgColor } : {},
          ]}
        >
          {text}
        </Text>
        </Pressable>*/}

      <Pressable
        onPress={onPress}
        style={[
          styles.containerL,
          styles[`container_${type}`],
          bgColor ? { backgroundColor: bgColor } : {},
        ]}
      >
        <Text
          style={[
            styles.text,
            styles[`text_${type}`],
            fgColor ? { color: fgColor } : {},
          ]}
        >
          {text}
        </Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '34%',
    height: '40%',
    backgroundColor: '#BB3011',

    padding: 10,
    marginVertical: 5,

    alignItems: 'center',
    borderRadius: 25,
    marginLeft: 205,
  },

  containerL: {
    width: '90%',

    padding: 15,
    marginVertical: 5,

    alignItems: 'center',
    borderRadius: 25,
    left: 16,
  },

  container_PRIMARY: {
    backgroundColor: '#8C1C06',
    marginTop: 0,
  },

  container_SECONDARY: {
    borderColor: '#3B71F3',
    borderWidth: 2,
  },

  container_TERTIARY: {},

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
    marginBottom: -15,
    paddingLeft: 0,
    height: 20,
  },
});

export default CustomButton;
