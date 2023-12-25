
import React, { createContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = async (product) => {
    try {
      // Lấy danh sách sản phẩm từ AsyncStorage
      const existingCart = await AsyncStorage.getItem('Cart');
      let cart = [];

      if (existingCart !== null) {
        cart = JSON.parse(existingCart);
      }

      // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng hay chưa (dựa trên id)
      const existingProduct = cart.find(item => item.id === product.id);

      if (!existingProduct) {
        // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm vào
        product.quantity = 1;
        cart.push(product);
        await AsyncStorage.setItem('Cart', JSON.stringify(cart));
        setCartItems(cart);
        console.log('Sản phẩm đã được thêm vào giỏ hàng');
      } else {
        // Nếu sản phẩm đã tồn tại trong giỏ hàng, có thể xử lý thông báo hoặc hành động khác
        console.log('Sản phẩm đã có trong giỏ hàng');
      }
    } catch (error) {
      console.error('Lỗi khi thêm sản phẩm vào giỏ hàng: ', error);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      // Lấy danh sách sản phẩm từ AsyncStorage
      const existingCart = await AsyncStorage.getItem('Cart');
      let cart = [];

      if (existingCart !== null) {
        cart = JSON.parse(existingCart);
      }

      // Lọc ra sản phẩm cần xóa dựa trên productId
      const updatedCart = cart.filter(item => item.id !== productId);

      await AsyncStorage.setItem('Cart', JSON.stringify(updatedCart));
      setCartItems(updatedCart);
      console.log('Sản phẩm đã được xóa khỏi giỏ hàng');
    } catch (error) {
      console.error('Lỗi khi xóa sản phẩm khỏi giỏ hàng: ', error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
