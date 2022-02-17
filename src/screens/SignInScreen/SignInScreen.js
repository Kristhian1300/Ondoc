import React, { useState } from 'react';
import {
  View,
  Input,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TextInput,
  SafeAreaView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import logo from '../../img/OD.png';
import user from '../../img/user.png';
import google from '../../img/google.png';
import facebook from '../../img/facebook2.png';
import eye from '../../img/eye.png';
import password from '../../img/password.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
//import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import LinearGradient from 'react-native-linear-gradient';
import { Auth } from 'aws-amplify';

const SignInScreen = () => {
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [isSecureEntry, setIsSecureEntry] = useState(true);

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
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
    setLoading(false);
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <LinearGradient
      colors={['#BC1C06', '#000000', '#000000']}
      style={styles.body}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image
            source={logo}
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
                {/*<Input placeholder="Email" type="email"
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
                  />*/}
                <CustomInput
                  style={styles.input}
                  placeholder="Email"
                  type="email"
                  name="username"
                  placeholder="Username"
                  control={control}
                  rules={{ required: 'Username is required' }}
                />
                <Image
                  source={user}
                  style={{
                    width: 25,
                    height: 25,
                    borderRadius: 10,
                    marginTop: 0,
                    tintColor: 'white',
                    position: 'relative',
                    bottom: 46,
                    left: 12,
                  }}
                ></Image>

                <CustomInput
                  name="password"
                  placeholder="Password"
                  secureTextEntry={isSecureEntry}
                  icon={
                    <TouchableOpacity
                      onPress={() => {
                        setIsSecureEntry((prev) => !prev);
                      }}
                    >
                      <Text>{isSecureEntry ? 'Mostrar' : 'Esconder'}</Text>
                    </TouchableOpacity>
                  }
                  iconPosition="right"
                  onChangeText={(value) => {
                    onChange({ name: 'password', value });
                  }}
                  control={control}
                  rules={{
                    required: 'Password is required',
                    minLength: {
                      value: 3,
                      message: 'Password should be minimum 3 characters long',
                    },
                  }}
                />
                <Image
                  source={password}
                  style={{
                    width: 25,
                    height: 25,
                    borderRadius: 10,
                    marginTop: 0,
                    tintColor: 'white',
                    position: 'relative',
                    bottom: 45,
                    left: 12,
                  }}
                ></Image>
                <Text
                  style={{
                    position: 'relative',
                    bottom: 76,
                    left: 280,
                    width: 30,
                    height: 30,
                    borderRadius: 10,
                    tintColor: 'white',
                  }}
                  onPress={() => {
                    setIsSecureEntry((prev) => !prev);
                  }}
                >
                  <Image
                    source={eye}
                    style={{
                      width: 30,
                      height: 25,
                      borderRadius: 10,
                      marginTop: 0,
                      tintColor: 'white',
                    }}
                  ></Image>
                </Text>

                <CustomButton
                  style={{ backgroundColor: 'black' }}
                  text={loading ? 'Loading...' : 'Iniciar sesión'}
                  onPress={handleSubmit(onSignInPressed)}
                />

                <View style={styles.btnSocialmedia}>
                  <TouchableOpacity style={styles.googleBtn}>
                    <Text style={styles.buttonGoogle}>
                      <Image
                        source={google}
                        style={{
                          width: 25,
                          height: 25,
                          borderRadius: 10,
                          marginTop: 0,
                          tintColor: 'white',
                        }}
                      ></Image>
                      Google
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.googleBtn}>
                    <Text style={styles.buttonGoogle}>
                      <Image
                        source={facebook}
                        style={{
                          width: 25,
                          height: 25,
                          borderRadius: 10,
                          marginTop: 0,
                        }}
                      ></Image>
                      Facebook
                    </Text>
                  </TouchableOpacity>
                </View>

                <CustomButton
                  text="¿Olvidaste tu contraseña?"
                  onPress={onForgotPasswordPressed}
                  type="TERTIARY2"
                />

                <CustomButton
                  text="¿Ya estás registrado en onDoc?"
                  onPress={onSignUpPress}
                  //onPress={onForgotPasswordPressed}
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
    alignItems: 'center',
    padding: 20,
  },
  logo: {},
  body: {
    width: 500,
    height: 1000,
  },
  cardAction: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECEEEF',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    width: '100%',
    height: '14%',
  },
  textLogin: {
    color: '#B83011',
    fontWeight: 'bold',
    fontSize: 16,
  },
  card: {
    width: '75%',
    padding: 20,
    paddingTop: 20,
  },
  cardContent: {
    color: '#fff',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    height: 450,
  },
  container: {
    marginLeft: 15,
  },
  input: {
    color: '#fff',
    borderRadius: 4,
    fontSize: 15,
  },
  formField: {
    lineHeight: '2.5em',
    borderBottom: '15px solid #ECEEEF',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  buttonGoogle: {
    color: 'white',
  },
  googleBtn: {
    backgroundColor: '#8C1C06',
    width: 130,
    height: 70,
    padding: 15,
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 25,
    marginLeft: 15,
  },
  btnSocialmedia: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
  },
});

export default SignInScreen;
