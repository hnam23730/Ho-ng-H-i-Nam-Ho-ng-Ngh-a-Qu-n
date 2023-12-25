import React, { useState } from "react";
import {StyleSheet,Text,View,TextInput,Image,TouchableOpacity,FlatList} from "react-native";
import { useNavigation } from '@react-navigation/native';

const Cate = () => {
const navigation = useNavigation();
  const Home = () => {
    navigation.navigate('Home');
  };
  const [categories, newcategories] = useState([
    {
        name: "HOUSES",
        image: require('../assets/1.png'),
    },
    {
        name: "APARTMENT",
        image: require('../assets/2.png'),
    },
    {
        name: "CONDOS",
        image: require('../assets/3.png'),
    },
    {
        name: "LAND",
        image: require('../assets/4.png'),
    },
    {
        name: "BUILDING",
        image: require('../assets/5.png'),
    },
    {
        name: "TOWN HOUSE",
        image: require('../assets/6.png'),
    },
  ]);
  
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Categories</Text>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
            <TouchableOpacity
                 key={item.name}
                style={styles.newcategory}
            >
            <Image
                style={styles.newcategoryImage}
                source={item.image}
            />
            <Text style={styles.newcategoryText}>{item.name}</Text>
            </TouchableOpacity>
        )}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop:20,
    marginBottom: 10,
    marginLeft:120,
  },
  newcategory: {
    width: 400,
    height: 130,
    backgroundColor: 'white',
    alignItems:'center',
    justifyContent: 'center',
  },
  newcategoryImage: {
    width: 370,
    height: 100, 
  },
  newcategoryText: {
    width:350,
    height:100,
    position:'absolute',
    fontSize: 18,
    borderRadius: 20,
    paddingTop:35,
    fontWeight: 'bold',
    color:'white',
    textAlign: 'center', 
    top: '50%',
    left: '50%', 
    transform: [{ translateX: -175 }, { translateY: -50 }],
    backgroundColor: 'rgba(255, 255, 255, 0)',
  },

});

export default Cate;
