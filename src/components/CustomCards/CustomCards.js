import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';
import CustomButton from '../CustomButton';

const CustomCards = ({ title, content, expirationData, onPress }) => {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Card>
            <Card.Title>{title}</Card.Title>
            <Text style={styles.fonts} h5>
              N# documento: {content}, Fecha de vencimiento: {expirationData}
            </Text>
            <Card.Divider />
          </Card>
          <CustomButton text="Details" onPress={onPress} type="TERTIARY2" />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});

export default CustomCards;
