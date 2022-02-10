import React from "react";
import { View, Text, FlatList, StyleSheet, RefreshControl } from "react-native";
import CustomCards from "../../components/CustomCards/CustomCards";

export const ListDocuments = ({ productList, refreshing, onRefresh }) => {
  return (
    <View>
      {productList && (
        <FlatList
          style={{
            borderBottomColor: "black",
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
                content={item.content}
                expirationData={item.expirationData}
              />
            );
          }}
        />
      )}
    </View>
  );
};
