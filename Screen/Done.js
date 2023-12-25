import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const PaymentSuccessScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Image
            source={require('../assets/cartt.png')} // Đường dẫn đến icon giỏ hàng
            style={styles.cartIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Nút quay về màn hình chính */}
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.homeButton}>
        <Text style={styles.homeButtonText}>Quay về trang chủ</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartIcon: {
    width: 300,
    height: 300,
    marginTop: 20,
  },
  homeButton: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth:1,
  },
  homeButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default PaymentSuccessScreen;
