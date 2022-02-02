import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Auth } from 'aws-amplify';

const index = () => {
  const signOut = () => {
    Auth.signOut();
  };

  return (
    <LinearGradient colors={['#8C1C06','#8C1C06','#8C1C06']} style={styles.body}>
      <View style={{flex: 1}}>
        <Text 
        style={{fontSize: 24, 
        alignSelf: 'center', 
        color: 'white',
        fontSize: 30,
        padding: 90
        }}>Titulos mineros</Text>
        <Text
          onPress={signOut}
          style={{
            width: '100%',
            textAlign: 'center',
            color: 'red',
            marginTop: 'auto',
            marginVertical: 20,
            fontSize: 20
          }}>
          Cerrar sesión
        </Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  body: {
    width: 400,
    height: 300
  }
});

export default index;
