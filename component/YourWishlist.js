import React from 'react'
import { View, Text,TouchableHighlight, SafeAreaView, FlatList, StyleSheet, StatusBar, Image, Dimensions } from 'react-native';
const DATA = [
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        code: 'SKU#:100022587541',
        price:'$39.99',
		title: 'Ribbed Notched Blazer',
		image: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw94e5c19a/1_front_750/00439369-01.jpg?sw=500&sh=750'
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        code: 'SKU#:100022587558',
        price:'$19.99',
		title: 'Def leppard Graphic Tee',
		image: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwd64165de/4_full_750/00436169-03.jpg?sw=500&sh=750'
	},
];
const YourWishlist = () => {
   const renderItem = ({ item }) => (
		<View style={{flex:1,margin:5}}>
            <View style ={{borderTopWidth:1, borderColor:'#e6e6e6'}}>
            	<View style={{marginTop:20}}>	
                    <Text style={styles.txt}>{item.title}</Text>
			    </View>
                <View style = {{flex:1, flexDirection:'row', marginTop:20, marginBottom:30}}>
                	<View style={{flex:1, marginRight:20}}>
				        <Image style={styles.anh}source={{uri: item.image,}}/>
				    </View>
			        <View style={{flex:2,}}>
                        <Text style={[styles.txt,{fontWeight:'bold'}]}>{item.price}</Text>
				        <Text style={[styles.txt,styles.code]}>{item.code}</Text>
                    <View style={{width: 220, color:'black',marginTop:10}}>
                        <TouchableHighlight >
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Add to Cart</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={{width: 220, color:'black',marginTop:10}}>
                        <TouchableHighlight >
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Remove from Wishlist</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
			        </View>                    
                </View>

            </View>
		</View>
	);
  return (
<SafeAreaView>
    <View>
        <View style={{flexDirection:'row', justifyContent: 'center', borderRightWidth: 1,marginTop:20 }}>
            <Text style={{fontSize: 18, color:'#8c8c8c' }}>Your Wishlist</Text>
        </View>
        <FlatList
            style={{ marginTop: 20 }}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={1}
        />
    </View>
</SafeAreaView>
  );
}
const styles = StyleSheet.create({
    code:{
        marginTop:5,
        marginBottom:5,
        fontSize:14,
    },
    txt:{
        fontSize: 18, 
        marginTop: 0,
        fontFamily:'Roboto,sans-serif',
        color:'#595959'
    },
    anh:{
        height: 200, width: '100%',
    },
    button: {
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#f2f2f2',
        height:40
      },
    buttonText: {
        color: 'black',
        fontSize:16
      }
 });
export default YourWishlist;
