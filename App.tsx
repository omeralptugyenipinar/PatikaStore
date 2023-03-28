/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  FlatList,
  Dimensions,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import ProductCard from './ProductCard';
import products_data from './products.json';
function App(): JSX.Element {
  return (
        <View style={styles.body}>
        <View>
          <Text  style={styles.header}>PATIKASTORE</Text>
        </View>
        <View style={styles.search}>
          <Text>Ara...</Text>
        </View>
        <FlatList
        data = {products_data}
        renderItem={({item}) =><ProductCard product={item} />}
        />
        </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 32,
    fontSize: 40,
    textAlign: "left",
    color: "purple",
    fontWeight: "bold"
  },
  body: {
    paddingHorizontal: 24,
    color:'white',
  },
  search: {
  backgroundColor:'lightgray',
  height:25,
  color:'darkgray',
  width: Dimensions.get('window').height/2.7,
  borderRadius:10,
  paddingLeft:8,
  justifyContent:'center',
  marginBottom: 10,
  },
});

export default App;
