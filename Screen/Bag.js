import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet,Image } from 'react-native';
import { FontAwesome,Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([]); 
  const [selectedTab, setSelectedTab] = useState('Bag'); 
  const navigation = useNavigation();
  useEffect(() => {
    const getCartItems = async () => {
      try {
        const cart = await AsyncStorage.getItem('Bag');
        if (cart !== null) {
          setCartItems(JSON.parse(cart));
        }
      } catch (error) {
        console.error('Error getting cart items: ', error);
      }
    };

    getCartItems();
  }, []);
  const increaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity++;
    setCartItems(updatedCart);
    updateCartInStorage(updatedCart);
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity--;
      setCartItems(updatedCart);
      updateCartInStorage(updatedCart);
    }
  };
  
  const updateCartInStorage = async (updatedCart) => {
    try {
      await AsyncStorage.setItem('Bag', JSON.stringify(updatedCart));
    } catch (error) {
      console.error('Error updating cart in storage: ', error);
    }
  };
  
  const [favoriteItems, setFavoriteItems] = useState([]);
  useEffect(() => {
    const getFavoriteItems = async () => {
      try {
        const favorites = await AsyncStorage.getItem('Favorites');
        if (favorites !== null) {
          setFavoriteItems(JSON.parse(favorites));
        }
      } catch (error) {
        console.error('Lỗi khi lấy danh sách sản phẩm yêu thích: ', error);
      }
    };
    getFavoriteItems();
  }, []);
  const removeItem = async (index) => {
    try {
      const updatedCart = cartItems.filter((item, i) => i !== index);
      setCartItems(updatedCart);
      await AsyncStorage.setItem('Bag', JSON.stringify(updatedCart));
    } catch (error) {
      console.error('Error removing item: ', error);
    }
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const handleCheckout = () => {
    navigation.navigate('Pay');
    console.log('Xử lý thanh toán...');
  };
  const removeFromFavorites = async (index) => {
    try {
      const updatedFavorites = favoriteItems.filter((item, i) => i !== index);
      setFavoriteItems(updatedFavorites);
      await AsyncStorage.setItem('Favorites', JSON.stringify(updatedFavorites));
    } catch (error) {
      console.error('Lỗi khi xóa khỏi danh sách yêu thích: ', error);
    }
  }
  return (
<View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Feather name="x" size={24} color="black" />
    </TouchableOpacity>

    <View style={styles.segmentContainer}>
      <View style={styles.segmentControl}>
        <TouchableOpacity
          onPress={() => setSelectedTab('Bag')}
          style={[styles.segmentButton, selectedTab === 'Bag' && styles.activeSegment]}
        >
          <Text>Giỏ hàng</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedTab('Favorite')}
          style={[styles.segmentButton, selectedTab === 'Favorite' && styles.activeSegment]}
        >
          <Text>Yêu thích</Text>
        </TouchableOpacity>
      </View>
    </View>
     
      {selectedTab === 'Bag' && (
        <>
        <FlatList
          data={cartItems}
          renderItem={({ item, index }) => (
            <View style={styles.itemContainer}>
              <View style={styles.productInfo}>
                <Image source={item.image} style={styles.productImage} />
                <View style={styles.productDetails}>
                  <Text>{item.name}</Text>
                  <Text>${item.price}</Text>
                </View>
              </View>
              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => increaseQuantity(index)} style={styles.quantityButton}>
                  <FontAwesome name="plus" size={15} color="black" />
                </TouchableOpacity>
                <Text style={styles.quantityText}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => decreaseQuantity(index)} style={styles.quantityButton}>
                  <FontAwesome name="minus" size={15} color="black" />
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => removeItem(index)}>
                <Text style={styles.removeButton}>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          style={styles.cartList}
        />
        <View style={styles.checkoutContainer}>
            <Text style={styles.totalPriceText}>Total: ${totalPrice.toFixed(2)}</Text>
            <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
              <Text style={styles.checkoutButtonText}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
     {selectedTab === 'Favorite' && (
        <FlatList
          data={favoriteItems}
          renderItem={({ item, index }) => (
            <View style={styles.itemContainer}>
              <View style={styles.productInfo}>
                <Image source={item.image} style={styles.productImage} />
                <View style={styles.productDetails}>
                  <Text>{item.name}</Text>
                  <Text>{item.price}</Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => removeFromFavorites(index)}>
                 <Text style={styles.removeButton}>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          style={styles.cartList}
        />
      )}
  </View>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  backButton: {
    top: 20,
    left: 10,
  },
  segmentContainer:{
    paddingTop:30,
  },
  segmentControl: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  segmentButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  activeSegment: {
    borderBottomColor: 'black',
  },
  cartList: {
    marginTop: 60,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  productInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  productDetails: {
    justifyContent: 'center',
  },
  removeButton: {
    color: 'red',
  },
  totalPriceContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  totalPriceText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkoutButton: {
    position: 'absolute',
    bottom: 0,
    right: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth:1,
  },
  checkoutButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    left:50,
  },
  quantityButton: {
    paddingHorizontal: 5, 
  },
  quantityText: {
    marginHorizontal: 5, 
  },
});

export default CartScreen;
