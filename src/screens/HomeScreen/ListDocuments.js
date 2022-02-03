import React from 'react';
import {View, Text, FlatList, StyleSheet, RefreshControl} from 'react-native';

export const ListDocuments = ({productList, refreshing, onRefresh}) => {
  return (
    <View>
      {productList && (
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          keyExtractor={item => item.id}
          data={productList}
          renderItem={({item}) => {
            return <Text>Ok</Text>;
          }}
        />
      )}
    </View>
  );
};
