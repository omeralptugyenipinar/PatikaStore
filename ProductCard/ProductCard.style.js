import {StyleSheet,Dimensions} from 'react-native';


export default StyleSheet.create({
container: {
backgroundColor:'lightgray',
height: Dimensions.get('window').height/2,
width: Dimensions.get('window').height/2.7,
borderRadius:10,
alignItems:'center',
justifyContent:'center',
marginBottom:5,
marginTop:5,
},
title: {
fontWeight:'bold',
fontSize:20,
color:'black'
},
image: {
height: Dimensions.get('window').height/3,
width: Dimensions.get('window').height/3,
borderWidth:1,
borderColor:'white',
borderRadius:10,
},
price: {
marginTop:5,
fontSize:20,
},
inStock: {
height: 10,
},
})