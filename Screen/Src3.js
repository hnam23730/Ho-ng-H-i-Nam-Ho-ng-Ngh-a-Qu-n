import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const productList = [
  { id: '13', price: '70.99', name: 'Projet', image:require('../assets/kid1.jpg')},
  { id: '14', price: '96.99', name: 'Paon', image:require('../assets/kid2.jpg')},
  { id: '15', price: '52.99', name: 'Mode par Vision', image:require('../assets/kid3.jpg')},
  { id: '16', price: '80.99', name: 'Couture par Saule', image:require('../assets/kid4.jpg')},
  { id: '17', price: '43.99', name: 'Sion', image:require('../assets/kid5.jpg')},
  { id: '18', price: '77.99', name: 'Orchidée', image:require('../assets/kid6.jpg')},
];

const Scr3 = ({ navigation }) => {
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

export default Scr3;
