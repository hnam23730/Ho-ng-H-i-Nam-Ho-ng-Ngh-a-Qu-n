import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const productList = [
  { id: '1', price: '47.99', name: 'Loup Blanc', image: require('../assets/woman1.jpg') },
  { id: '2', price: '53.99', name: 'Aristocrate',image: require('../assets/woman2.jpg') },
  { id: '3', price: '31.99', name: 'Couture par Réflexion',image: require('../assets/woman3.jpg') },
  { id: '4', price: '87.99', name: 'Empereur',image: require('../assets/woman4.jpg') },
  { id: '5', price: '74.99', name: 'Extase',image: require('../assets/woman5.jpg') },
  { id: '6', price: '61.99', name: 'Allume',image: require('../assets/woman6.jpg') },
];

const Scr1 = ({ navigation }) => {
  useEffect(() => {
    saveProductListToStorage();
  }, []);

  const saveProductListToStorage = async () => {
    try {
      const productListJSON = JSON.stringify(productList);
      await AsyncStorage.setItem('ProductListKey', productListJSON);
    } catch (error) {
      console.error('Error saving product list: ', error);
    }
  };
  const navigateToProductDetail = (product) => {
    navigation.navigate('ProductDetail', { product: product });
  };
  const renderProductItem = ({ item }) => (
    <TouchableOpacity style={styles.productItem} onPress={() => navigateToProductDetail(item)}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productDescription}>${item.price}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={productList}
        keyExtractor={(item) => item.id}
        renderItem={renderProductItem}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  productItem: {
    width: 150, 
    height: 250,
    justifyContent: 'center',
    margin: 10,
  },
  productImage: {
    width: 150, 
    height: 200,
    resizeMode: 'cover', 
    marginTop:10
  },
  productName: {
    fontSize: 16,
    color: 'white',
    
  },
  productDescription: {
    marginTop: 6,
    color: 'white',
  },
});

export default Scr1;
