import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';
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
      <ScrollView>
        <View style={styles.container}>
          <Card
            containerStyle={{ marginTop: 30, height: 290 }}
            style={styles.divider}
          >
            <View style={styles.divider}>
              <View>
                <Text style={{ color: '#BB3011', fontWeight: 'bold' }}>
                  Estado Expediente
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    paddingLeft: 266,
                    bottom: 16,
                  }}
                >
                  VIGENTE
                </Text>
              </View>
              <View>
                <Text style={{ color: '#BB3011', fontWeight: 'bold' }}>
                  Titulares
                </Text>
                <Card.Title
                  style={{
                    fontSize: 8,
                    paddingLeft: 80,
                    bottom: 16,
                    color: 'gray',
                  }}
                >
                  {title}
                </Card.Title>
              </View>
              <View>
                <Text style={{ color: '#BB3011', fontWeight: 'bold' }}>
                  Modalidad
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    paddingLeft: 109,
                    bottom: 16,
                    color: 'gray',
                  }}
                >
                  {modality}
                </Text>
              </View>
              <View>
                <Text style={{ color: '#BB3011', fontWeight: 'bold' }}>
                  Minerales
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    paddingLeft: 110,
                    bottom: 16,
                    color: 'gray',
                  }}
                >
                  {minerals}
                </Text>
              </View>
              <View>
                <Text style={{ color: '#BB3011', fontWeight: 'bold' }}>
                  Municipios /{'\n'} Departamentos
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    paddingLeft: 112,
                    bottom: 16,
                    color: 'gray',
                  }}
                >
                  {municipalitiesDepartments}
                </Text>
                <View>
                  <CustomButton
                    text="Ver mas"
                    onPress={onPress}
                    type="TERTIARY2"
                  />
                </View>
              </View>
            </View>
            <View>
              {/*<Card.Title>{title}</Card.Title>
              <Text style={styles.fonts} h5>
                N# documento: {content}, Fecha de vencimiento: {expirationData}
                </Text>*/}
              <Card.Divider style={{ paddingBottom: 20 }} />
              <CustomButton
                style={{ backgroundColor: 'red' }}
                text="Details"
                onPress={onPress}
                type="TERTIARY2"
              />
            </View>
          </Card>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
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
});

export default CustomCards;
