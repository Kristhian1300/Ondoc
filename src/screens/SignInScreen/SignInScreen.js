import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TextInput,
  SafeAreaView,
  Alert,
} from "react-native";
import OD from "../../img/OD.png";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
//import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import LinearGradient from "react-native-linear-gradient";
import { Auth } from "aws-amplify";
import { Input } from "react-native-elements";

const SignInScreen = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSignInPressed = async (data) => {
    if (loading) {
      return;
    }

    setLoading(true);
    try {
      const response = await Auth.signIn(data.username, data.password);
      console.log(response);
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
    setLoading(false);
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPassword");
  };

  const onSignUpPress = () => {
    navigation.navigate("SignUp");
  };

  return (
    <LinearGradient
      colors={["#BC1C06", "#000000", "#000000"]}
      style={styles.body}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image
            source={OD}
            style={[
              styles.logo,
              {
                height: 180,
                width: 370,
                paddingTop: 130,
                paddingBottom: 80,
                marginTop: 30,
              },
            ]}
            resizeMode="contain"
          />
          <View style={styles.card}>
            <View style={styles.cardAction}>
              <Text style={styles.textLogin}>Inicio de sesion</Text>
            </View>

            <View style={styles.cardContent}>
              <SafeAreaView style={styles.formField}>
                <Input placeholder="Email" type="email"
                   name="username"
                   placeholder="Username"
                   control={control}
                   rules={{ required: "Username is required" }}
                />
                <Input placeholder="Email" type="email"
                   name="password"
                   placeholder="Password"
                   secureTextEntry
                   control={control}
                   rules={{
                     required: "Password is required",
                     minLength: {
                       value: 3,
                       message: "Password should be minimum 3 characters long",
                     },
                   }}
                />
                <CustomInput placeholder="Email"
                  type="email"
                  name="username"
                  placeholder="Username"
                  control={control}
                  rules={{ required: "Username is required" }}
                />

                <CustomInput
                  name="password"
                  placeholder="Password"
                  secureTextEntry
                  control={control}
                  rules={{
                    required: "Password is required",
                    minLength: {
                      value: 3,
                      message: "Password should be minimum 3 characters long",
                    },
                  }}
                />

                <CustomButton
                  style={{ backgroundColor: "black" }}
                  text={loading ? "Loading..." : "Iniciar sesión"}
                  onPress={handleSubmit(onSignInPressed)}
                />

                <CustomButton
                  text="Forgot password?"
                  onPress={onForgotPasswordPressed}
                  type="TERTIARY2"
                />

                <CustomButton
                  text="Ya estas registrado en onDoc?"
                  onPress={onForgotPasswordPressed}
                  type="TERTIARY2"
                />

                <CustomButton
                  text="Registrate"
                  onPress={onSignUpPress}
                  type="TERTIARY"
                />
              </SafeAreaView>
            </View>
          </View>
        </View>

        <View style={styles.root}></View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  logo: {
    
  },
  body: {
    width: 500,
    height: 1000,
  },
  cardAction: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ECEEEF",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    width: "100%",
    height: "14%",
},
textLogin: {
    color: '#B83011',
    fontWeight: 'bold',
    fontSize: 16,
},
card: {
    width: '75%',
    padding: 20,
    paddingTop: 80
},
cardContent: {
    color: '#fff',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    height: 400
},
container: {
    marginLeft: 15
},
input: {
    color: '#fff',
    borderRadius: 4,
    fontSize: 15,
  },
  formField: {
    lineHeight: "2.5em",
    borderBottom: "15px solid #4caf50",
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});

export default SignInScreen;
