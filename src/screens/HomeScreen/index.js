import React from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomCards from '../../components/CustomCards';
import { Auth } from 'aws-amplify';

const index = () => {
  const signOut = () => {
    Auth.signOut();
  };

  return (
    <>
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
      <View style={styles.containerData}>
            <CustomCards />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    width: 400,
    height: 300,
    borderTopRadius: 20
  },
  containerData: {
    backgroundColor: 'white',
    width: 400,
    height: 600,
    borderRadius: 20
  },
  listWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderBottomWidth: 0.5
  },
  row: {
    flex: 1
  }
});

export default index;
