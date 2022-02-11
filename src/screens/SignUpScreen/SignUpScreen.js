import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Alert } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import LinearGradient from "react-native-linear-gradient";
//import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from "@react-navigation/core";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;

const SignUpScreen = () => {
  const { control, handleSubmit, watch } = useForm();
  const pwd = watch("password");
  const navigation = useNavigation();

  const onRegisterPressed = async (data) => {
    const { username, password, email, phone_number, name } = data;
    try {
      await Auth.signUp({
        username,
        password,
        attributes: { email, name, phone_number, preferred_username: username },
      });
      navigation.navigate("ConfirmEmail", { username });
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
  };

  const onSignInPress = () => {
    navigation.navigate("SignIn");
  };

  const onTermsOfUsePressed = () => {
    console.warn("onTermsOfUsePressed");
  };

  const onPrivacyPressed = () => {
    console.warn("onPrivacyPressed");
  };

  return (
    <LinearGradient
      colors={["#BC1C06", "#000000", "#000000"]}
      style={styles.body}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <Text style={styles.title}>Crear cuenta</Text>

          <CustomInput
            name='name'
            control={control}
            placeholder='Nombre'
            rules={{
              required: "Nombre es requerido",
              minLength: {
                value: 3,
                message: "Nombre should be at least 3 characters long",
              },
              maxLength: {
                value: 24,
                message: "Nombre should be max 24 characters long",
              },
            }}
          />
          <CustomInput
            name='username'
            control={control}
            placeholder='Nombre de usuario'
            rules={{
              required: "Nombre de usuario es requerido",
              pattern: {
                value: EMAIL_REGEX,
                message: "Nombre de usuario es invalido",
              },
            }}
          />
          <CustomInput
            name='phone_number'
            control={control}
            placeholder='Celular'
            rules={{
              required: "Celular es requerid0",
              minLength: {
                value: 10,
                message: "Celular should be at least 10 characters long",
              },
            }}
          />
          <CustomInput
            name='email'
            control={control}
            placeholder='Email'
            rules={{
              required: "Email is required",
              pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
            }}
          />
          <CustomInput
            name='password'
            control={control}
            placeholder='Password'
            secureTextEntry
            rules={{
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password should be at least 8 characters long",
              },
            }}
          />
          <CustomInput
            name='password-repeat'
            control={control}
            placeholder='Repeat Password'
            secureTextEntry
            rules={{
              validate: (value) => value === pwd || "Password do not match",
            }}
          />

          <CustomButton
            text='Registrarse'
            onPress={handleSubmit(onRegisterPressed)}
          />

          <Text style={styles.text}>
            Al registrarse, usted confirma que acepta nuestras{" "}
            <Text style={styles.link} onPress={onTermsOfUsePressed}>
              Condiciones de uso
            </Text>{" "}
            y{" "}
            <Text style={styles.link} onPress={onPrivacyPressed}>
              Política de Privacidad
            </Text>
          </Text>

          {/*<SocialSignInButtons />*/}

          <CustomButton
            text='Ya tienes una cuenta? Inicia sesion'
            onPress={onSignInPress}
            type='TERTIARY'
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    margin: 10,
  },
  text: {
    color: "gray",
    marginVertical: 10,
  },
  link: {
    color: "white",
  },
  body: {
    width: 400,
    height: 1000,
  },
});

export default SignUpScreen;
