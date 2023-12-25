import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image,Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';

const PaymentScreen = ({ navigation }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const getCartItems = async () => {
      try {
        const cart = await AsyncStorage.getItem('Bag');
        if (cart !== null) {
          const cartData = JSON.parse(cart);
          setCartItems(cartData);
          const totalPrice = cartData.reduce((total, item) => total + item.price * item.quantity, 0);
          setTotalPrice(totalPrice);
        }
      } catch (error) {
        console.error('Error getting cart items: ', error);
      }
    };

    getCartItems();
  }, []);

  const handlePayment = () => {
    if (cartItems.length > 0) {
      console.log('Thanh toán thành công');
      Alert.alert('Thanh toán thành công!');
    } else {
      Alert.alert('Vui lòng cập nhật giỏ hàng');
    }
  };

  return (
    <View style={styles.container}>
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
              <Text>{item.quantity}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        style={styles.cartList}
      />
      <View style={styles.checkoutContainer}>
        <Text style={styles.totalPriceText}>Total: ${totalPrice.toFixed(2)}</Text>
        <TouchableOpacity style={styles.checkoutButton} onPress={handlePayment}>
          <Text style={styles.checkoutButtonText}>Proceed to Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  cartList: {
    marginTop: 20,
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
    borderWidth: 1,
  },
  checkoutButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    right:50
  },
});

export default PaymentScreen;
