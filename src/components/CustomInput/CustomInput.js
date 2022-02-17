import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Controller } from 'react-hook-form';

const CustomInput = ({
  control,
  name,
  rules = {},
  placeholder,
  secureTextEntry,
  autoComplete,
  autoCapitalize,
  keyboardType,
  returnKeyType,
  autoFocus,
  onChangeText,
  onSubmitEditing,
  multiline,
  inputRef,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <View>
            <TextInput
              value={value}
              label="Email"
              onChangeText={onChange}
              onBlur={onBlur}
              placeholderTextColor="#ECEEEF"
              placeholder={placeholder}
              style={styles.input}
              secureTextEntry={secureTextEntry}
            />
          </View>
          {error && (
            <Text style={{ color: 'red', alignSelf: 'stretch' }}>
              {error.message || 'Error'}
            </Text>
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {
    paddingRight: 10,
    lineHeight: 23,
    flex: 0,
    width: 300,
    borderBottomColor: 'white',
    borderBottomWidth: 0.5,
    marginVertical: 5,
    marginTop: 0,
    marginLeft: 12,
    color: 'white',
    textDecorationLine: 'none',
    paddingLeft: 35,
  },
});

export default CustomInput;
