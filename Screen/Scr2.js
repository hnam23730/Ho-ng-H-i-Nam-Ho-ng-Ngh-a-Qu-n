import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const productList = [
  { id: '7', price: '85.99', name: 'Énergie', image: require('../assets/men1.jpg') },
  { id: '8', price: '65.99', name: 'Mode par Prophétie',image: require('../assets/men2.jpg') },
  { id: '9', price: '97.99', name: 'Accessoires par Lacune',image: require('../assets/men3.jpg') },
  { id: '10', price: '39.99', name: 'Étoile Filante',image: require('../assets/men4.jpg') },
  { id: '11', price: '87.99', name: 'Séduction',image: require('../assets/men5.jpg') },
  { id: '12', price: '95.99', name: 'Couture par Azur',image: require('../assets/men6.jpg') },
];

const Scr2 = ({ navigation }) => {
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

export default Scr2;
