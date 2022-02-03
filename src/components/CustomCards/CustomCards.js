import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';

const CustomCards = () => {
    return (
        <>
            <ScrollView>
                <View style={styles.container}>
                    <Card>
                        <Card.Title>HELLO WORLD</Card.Title>
                            <Text style={styles.fonts} h5>
                                Frontera de mineros de la Palma AFROMIPALMA
                            </Text>
                            <Card.Divider />
                            <Text style={{ marginBottom: 30 }}>
                            The idea with React Native Elements is more about component
                            structure than actual design.
                            </Text>
                            <Card.Divider />
                            <Text style={styles.fonts} h5>
                                Frontera de mineros de la Palma AFROMIPALMA
                            </Text>
                            <Card.Divider />
                            <Text style={{ marginBottom: 30 }}>
                            The idea with React Native Elements is more about component
                            structure than actual design.
                            </Text>
                            <Card.Divider />
                            <Text style={styles.fonts} h5>
                                Frontera de mineros de la Palma AFROMIPALMA
                            </Text>
                            <Card.Divider />
                            <Text style={{ marginBottom: 30 }}>
                            The idea with React Native Elements is more about component
                            structure than actual design.
                            </Text>
                            <Card.Divider />
                    </Card>
                </View>
            </ScrollView>
        </>
    );
}

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