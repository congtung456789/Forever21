import React from 'react'
import { View, Text,TouchableOpacity,TextInput, SafeAreaView, FlatList, StyleSheet, StatusBar, Image, Dimensions } from 'react-native';
const DATA = [
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        code: '100022587541',
        price:'$39.99',
		title: 'Ribbed Notched Blazer',
		color:'WHITE/MULTI',
		Size:'M',
		image: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw94e5c19a/1_front_750/00439369-01.jpg?sw=500&sh=750'
	},
];
const Bag = () => {
	const renderItem = ({ item }) => (
		<View style={{flex:1,margin:5}}>
            <View style ={{borderBottomWidth:1, borderColor:'#e6e6e6'}}>
            	<View style={{marginTop:20}}>	
                    <Text style={styles.txt}>{item.title}</Text>
			    </View>
                <View style = {{flex:1, flexDirection:'row', marginTop:20, marginBottom:30}}>
                	<View style={{flex:1, marginRight:40,justifyContent:'center',alignItems:'center', marginLeft:30}}>
				        <Image style={[styles.anh,{}]}source={{uri: item.image,}}/>
						<View style={{width:150, color:'black',marginTop:10}}>
                    	    <TouchableOpacity >
                    	        <View style={styles.button}>
                    	            <Text style={styles.buttonText}>Move to Whishlist</Text>
                    	        </View>
                    	    </TouchableOpacity>
                    	</View>
				    </View>
			        <View style={{flex:2,}}>
                        <Text style={[styles.txt,{fontWeight:'bold'}]}>{item.price}</Text>
						<Text style={[styles.code]}>SKU#: <Text style={[styles.txt,styles.code]}>{item.code}</Text></Text>
				        <Text style={[styles.code]}>Color: <Text style={[styles.txt,styles.code]}>{item.color}</Text></Text>
				        <Text style={[styles.code]}>Size: <Text style={[styles.txt,styles.code]}>{item.Size}</Text></Text>
					<View style={{flex:1,flexDirection:'row',marginTop:20}}>
						<View style={{flex:1,color:'black'}}>
                    	    <TouchableOpacity >
                    	        <View style={styles.tg}>
                    	            <Text style={[styles.buttonText],{fontSize:25}}>-</Text>
                    	        </View>
                    	    </TouchableOpacity>
                    	</View>
						<View style={{flex:1,justifyContent:'center', alignItems:'center', height:40}}>
						<Text style={{ width:40}}>Qty: 1</Text>
						</View>
						<View style={{flex:1, color:'black'}}>
                    	    <TouchableOpacity >
                    	        <View style={[styles.tg]}>
                    	            <Text style={[styles.buttonText,{fontSize:25}]}>+</Text>
                    	        </View>
                    	    </TouchableOpacity>
                    	</View>
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
        		    <Text style={{fontSize: 18, color:'#8c8c8c' }}>Your Bag</Text>
        		</View>
        		<FlatList
        		    data={DATA}
        		    renderItem={renderItem}
        		    keyExtractor={item => item.id}
        		    numColumns={1}
        		/>
    		</View>
			<View style = {{marginLeft:15, marginRight:15, marginTop:30}}>
				<View style={{color:'black'}}>
					<Text style = {{fontSize:15,color:"gray" }}>*Have A Promo?</Text>
            	    <TextInput
            	     style = {[styles.input,{borderColor:'black',}]}
            	    />
            	    <TouchableOpacity >
            	        <View style={[styles.button,styles.apply]}>
            	            <Text style={styles.buttonText}> Apply</Text> 
            	        </View>
            	    </TouchableOpacity>
            	</View>
			</View>
			<View style = {{marginLeft:15, marginRight:15, marginTop:30}}>
				<View style={{ width: 365, color:'black',}}>
            	    <TextInput style = {[styles.input]}/>
            	    <TouchableOpacity >
            	        <View style={[styles.button,{backgroundColor:'yellow'}]}>
            	            <Text style={[styles.buttonText,{fontWeight:'bold'}]}>Checkout</Text>
            	        </View>
            	    </TouchableOpacity>
            	    <TouchableOpacity >
            	        <View style={[styles.button,{borderWidth:1,backgroundColor:'white',marginTop:10}]}>
            	            <Text style={[styles.buttonText,{fontWeight:'bold',fontSize:20}]}>Pay</Text>
            	        </View>
            	    </TouchableOpacity>
					<TextInput style = {[styles.input]}/>
            	</View>
			</View>
		</SafeAreaView>
    )
}
const styles = StyleSheet.create({
	apply:{
		height:20,
		width:60,
		position: 'relative',
		bottom:35,
		left:280
		
	},
	tg:{
		alignItems: 'center',
        //justifyContent:'center',
        borderWidth:1,
        height:40,
		width:40,
		borderRadius: 40 / 2,
		
	},
    code:{
        marginTop:5,
        marginBottom:5,
        fontSize:14,
    },
    txt:{
        fontSize: 18, 
        marginTop: 0,
        fontFamily:'Roboto,sans-serif',
        color:'#595959',
		fontWeight:'bold'
    },
    anh:{
        height: 170, width: '100%',
    },
    button: {
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#f2f2f2',
        height:50
		
      },
    buttonText: {
        color: 'black',
        fontSize:16
      },
	input:{
        borderWidth:1,
		borderColor:'#E8E8E8',
        height: 50,
        width:365,
    },
 });

export default Bag;
