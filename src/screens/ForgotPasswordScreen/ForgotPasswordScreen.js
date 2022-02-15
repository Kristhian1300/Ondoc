import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
//import SocialSignInButtons from '../../components/SocialSignInButtons';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/core';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';
import { color } from 'react-native-elements/dist/helpers';

const ForgotPasswordScreen = () => {
  const { control, handleSubmit } = useForm();
  const navigation = useNavigation();

  const onSendPressed = async (data) => {
    try {
      await Auth.forgotPassword(data.username);
      navigation.navigate('NewPassword');
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

  return (
    <LinearGradient
      colors={['#BC1C06', '#000000', '#000000']}
      style={styles.body}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <Text style={styles.title}>Restablecer la contraseña</Text>

          <CustomInput
            name="username"
            control={control}
            placeholder="Nombre de usuario"
            rules={{
              required: 'Username is required',
            }}
          />
          <View style={{ paddingBottom: 12, width: 190 }}>
            <CustomButton text="Enviar" onPress={handleSubmit(onSendPressed)} />
          </View>
          {/*<CustomButton
            text="Enviar"
            style={{ marginLeft: 45 }}
            onPress={handleSubmit(onSendPressed)}
          />*/}

          <View>
            <Text
              style={{ color: 'white', fontWeight: 'bold', marginLeft: 15 }}
              onPress={onSignInPress}
            >
              Regresar a Inicio
            </Text>
          </View>

          {/*<CustomButton
            style={{ marginLeft: 5 }}
            text="Regresar a Inicio"
            onPress={onSignInPress}
            type="TERTIARY"
          />*/}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: 'white',
  },
  body: {
    width: 400,
    height: 1000,
  },
});

export default ForgotPasswordScreen;
