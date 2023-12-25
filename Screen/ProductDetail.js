import React, { useState,useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome,Ionicons,Feather } from '@expo/vector-icons'; // Import FontAwesome icons
import AsyncStorage from '@react-native-async-storage/async-storage';
const ProductDetail = ({ navigation,route }) => {
    const { product } = route.params;
    const [isBookmarked, setIsBookmarked] = useState(false);
      const [inCart, setInCart] = useState(false);
      useEffect(() => {
        const getProductFromStorage = async () => {
          try {
            const existingProducts = await AsyncStorage.getItem('Products');
            if (existingProducts !== null) {
              const products = JSON.parse(existingProducts);
              const foundProduct = products.find(item => item.id === products);
              if (foundProduct) {
                products(foundProduct);
              }
            }
          } catch (error) {
            console.error('Error fetching product: ', error);
          }
        };
    
        getProductFromStorage();
        checkIfInCart();
      }, [product]);
      const navigateToBag = () => {
        navigation.navigate('Bag');
      };
      const addToCart = async () => {
        try {
          const existingCart = await AsyncStorage.getItem('Bag');
          let cart = [];
      
          if (existingCart !== null) {
            cart = JSON.parse(existingCart);
          }

          const existingProduct = cart.find(item => item.id === product.id);
      
          if (existingProduct) {
            existingProduct.quantity = (existingProduct.quantity || 1) + 1;
          } else {
            product.quantity = 1;
            cart.push(product);
            console.log('Sản phẩm đã có trong giỏ hàng');
          }
          await AsyncStorage.setItem('Bag', JSON.stringify(cart));
        } catch (error) {
          console.error('Error adding to cart: ', error);
        }
      }
      const addToFavorite = async () => {
          try {
            const existingFavorites = await AsyncStorage.getItem('Favorites');
            let favorites = [];
      
            if (existingFavorites !== null) {
              favorites = JSON.parse(existingFavorites);
            }
            const existingFavorite = favorites.find((item) => item.id === product.id);
      
            if (!existingFavorite) {
              favorites.push(product);
              await AsyncStorage.setItem('Favorites', JSON.stringify(favorites));
              setIsBookmarked(true);
              console.log('Đã thêm vào danh sách yêu thích');
            } else {
              console.log('Sản phẩm đã có trong danh sách yêu thích');
            }
          } catch (error) {
            console.error('Lỗi khi thêm vào danh sách yêu thích: ', error);
          }
        };
        const checkIfInCart = async () => {
          try {
            const existingCart = await AsyncStorage.getItem('Bag');
            if (existingCart !== null) {
              const cart = JSON.parse(existingCart);
              const foundProduct = cart.find(item => item.id === product.id);
              if (foundProduct) {
                setInCart(true);
                setIsBookmarked(true);
              } else {
                setInCart(false);
                setIsBookmarked(false);
              }
            }
          } catch (error) {
            console.error('Error checking cart: ', error);
          }
        };
    return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="x" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.icon}>
            <Ionicons name="share-social-outline" size={21} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon} onPress={addToFavorite}>
            <FontAwesome name={isBookmarked && inCart ? 'bookmark' : 'bookmark-o'} size={21} color={isBookmarked && inCart ? 'black' : 'black'} />
          </TouchableOpacity>
        </View>
      </View>
        <View style={styles.productDetails}>
        <Image source={product.image} style={styles.productImage} />
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>${product.price}</Text>
        </View>
        <View style={styles.Button}>
        <TouchableOpacity style={styles.addButton} onPress={addToCart}>
        <Text style={styles.addButtonText}>Thêm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton} onPress={navigateToBag}>
        <Text style={styles.SButtonText}>Giỏ hàng</Text>
        </TouchableOpacity>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 50,
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      headerRight: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      },
      icon: {
        padding: 10,
      },
      productDetails: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor:'white',
      },
      productImage: {
        height:700,
        alignSelf:'center',
      },
      Text:{
        position:'absolute',
        bottom:0,
        left:0,
      },
      productName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      productPrice: {
        fontSize: 18,
        marginBottom: 20,
      },
      Button:{
        flexDirection: 'row',
        position:'absolute',
        bottom:90,
      },
      addButton: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderWidth: 1,
      },
      SButtonText: {
        color: 'black',
        fontSize: 18,
      },
      addButtonText: {
        paddingHorizontal: 80,
        color: 'black',
        fontSize: 18,
      },
});

export default ProductDetail;
