import React from 'react';
import { View, FlatList, RefreshControl, ScrollView } from 'react-native';
import CustomCards from '../../components/CustomCards/CustomCards';

import { useNavigation } from '@react-navigation/core';

export const ListDocuments = ({
  productList,
  refreshing,
  onRefresh,
  setCurrentTab,
  setDocumentID,
}) => {
  const navigation = useNavigation();
  const detailsDocumentsPressed = (itemId) => {
    setDocumentID(itemId);
    setCurrentTab('Details');
  };
  return (
    <ScrollView>
      {productList && (
        <FlatList
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          keyExtractor={(item) => item.id}
          data={productList}
          renderItem={({ item }) => {
            return (
              <CustomCards
                title={item.title}
                content={item.minerals}
                expirationData={item.dateEnds}
                modality={item.modality}
                minerals={item.minerals}
                municipalitiesDepartments={item.municipalitiesDepartments}
                onPress={() => detailsDocumentsPressed(item.id)}
              />
            );
          }}
        />
      )}
    </ScrollView>
  );
};
