import React, { useState} from "react";
import {StyleSheet,Text,View,TextInput,Image,TouchableOpacity,FlatList, SafeAreaView} from "react-native";
const Cate = () => {
  const [categories, newcategories] = useState([
    {
        id:1,
        image: require('../assets/1.png'),
    },
    {
        id:2,
        image: require('../assets/2.png'),
    },
    {
        id:3,
        image: require('../assets/3.png'),
    },
    {
      id:4,
      image: require('../assets/4.png'),
  },
  {
      id:5,
      image: require('../assets/5.png'),
  },
  {
      id:6,
      image: require('../assets/6.png'),
  },
  ]);

  return (
    <SafeAreaView>
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
            <TouchableOpacity
                 key={item.id}
                style={styles.newcategory}
            >
            <Image
                style={styles.newcategoryImage}
                source={item.image}
            />
            <Text style={styles.newcategoryText}>{item.id}</Text>
            </TouchableOpacity>
        )}
    />
    </View>
    </SafeAreaView>
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
    height: 900,
    backgroundColor: 'white',
    alignItems:'center',
    justifyContent: 'center',
  },
  newcategoryImage: {
    width: 400,
    height: 900, 
  },

});

export default Cate;
