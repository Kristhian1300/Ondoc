import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import { Text, Card, Icon } from 'react-native-elements';
import CustomButton from '../CustomButton';

const CustomCards = ({
  title,
  minerals,
  modality,
  content,
  expirationData,
  municipalitiesDepartments,
  onPress,
}) => {
  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <Card>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <View
                style={{
                  backgroundColor: 'white',
                  width: 188,
                  height: 50,
                  padding: 11,
                }}
              >
                <Text style={{ color: '#BB3011', fontWeight: 'bold' }}>
                  Estado Expediente
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: 'white',
                  width: 150,
                  height: 50,
                  padding: 11,
                }}
              >
                <Text style={{ color: '#707070' }}>VIGENTE</Text>
              </View>
            </View>

            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <View
                style={{
                  backgroundColor: '#F8F8F8',
                  width: 188,
                  height: 75,
                  padding: 11,
                }}
              >
                <Text style={{ color: '#BB3011', fontWeight: 'bold' }}>
                  Titulares
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: '#F8F8F8',
                  width: 150,
                  height: 75,
                  padding: 11,
                }}
              >
                <Text style={{ color: '#707070' }}>{title}</Text>
              </View>
            </View>

            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <View
                style={{
                  backgroundColor: 'white',
                  width: 188,
                  height: 75,
                  padding: 11,
                }}
              >
                <Text style={{ color: '#BB3011', fontWeight: 'bold' }}>
                  Modalidad
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: 'white',
                  width: 150,
                  height: 75,
                  padding: 11,
                }}
              >
                <Text style={{ color: '#707070' }}>{modality}</Text>
              </View>
            </View>

            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <View
                style={{
                  backgroundColor: '#F8F8F8',
                  width: 188,
                  height: 80,
                  padding: 11,
                }}
              >
                <Text style={{ color: '#BB3011', fontWeight: 'bold' }}>
                  Minerales
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: '#F8F8F8',
                  width: 150,
                  height: 80,
                  padding: 11,
                }}
              >
                <Text style={{ color: '#707070' }}>{minerals}</Text>
              </View>
            </View>

            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <View
                style={{
                  backgroundColor: 'white',
                  width: 188,
                  height: 80,
                  padding: 11,
                }}
              >
                <Text style={{ color: '#BB3011', fontWeight: 'bold' }}>
                  Municipios / Departamentos
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: 'white',
                  width: 150,
                  height: 80,
                  padding: 11,
                }}
              >
                <Text style={{ color: '#707070' }}>
                  {municipalitiesDepartments}
                </Text>
              </View>
            </View>

            <View style={{ backgroundColor: 'white', padding: 15 }}>
              <TouchableOpacity
                onPress={onPress}
                style={{ paddingBottom: 15 }}
                style={styles.button}
              >
                <Text style={styles.buttonText}>Saber más</Text>
              </TouchableOpacity>
            </View>
          </Card>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 80,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  divider: {
    display: 'flex',
    flexDirection: 'column',
    width: 331,
  },
  button: {
    backgroundColor: '#BB3011',
    width: 110,
    height: 55,
    padding: 18,
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 30,
    marginLeft: 210,
  },
  buttonText: {
    color: 'white',
  },
});

export default CustomCards;
