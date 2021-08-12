import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, FlatList, StyleSheet, StatusBar,ScrollView, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper'
const DATA = [{
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    code: '100022587541',
    price: '$39.99',
    title: 'Ribbed Notched Blazer',
    color: 'WHITE/MULTI',
    Size: 'XS',
    image1:'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwe768816a/1_front_750/00443147-03.jpg?sw=500&sh=750',
    image2:'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw38e37f84/3_back_750/00443147-03.jpg?sw=500&sh=750',
    image3:'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw7a871022/4_full_750/00443147-03.jpg?sw=500&sh=750',
    image4:'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw93ba82ee/2_side_750/00443147-03.jpg?sw=500&sh=750',
    }, 
];
const AddToCart = () => {
    const { height, width } = Dimensions.get('window');
    const itemWidth = (width - 15) / 2;
    const renderItem = ({ item }) => ( 
   <View style={{flex:1}}>
        <ScrollView style={{flex:1}}>
         <View style = {{ flex: 1, margin: 5 }}>
        <View style = {{ flexDirection: 'row' }} >
            <View style = {{ flex: 1, justifyContent:'center', alignItems: 'center', borderRightWidth: 1, marginTop: 20, marginBottom: 10 }}>
                <Text style = {{ fontSize: 18 }} > { item.title }</Text>
            </View > 
                </View> 
                    <View >
                    <Swiper height={450} style={styles.wrapper}  >
                    <View style={[styles.slide1]}>
                      <Image style={[styles.anh,{}]}source={{uri: item.image1,}}/>
                    </View>
                    <View  style={styles.slide2}>
                        <Image style={[styles.anh,{}]}source={{uri: item.image2,}}/>
                    </View>
                    <View  style={styles.slide3}>
                    <Image style={[styles.anh,{}]}source={{uri: item.image3,}}/>
                    </View>
                    <View  style={styles.slide3}>
                    <Image style={[styles.anh,{}]}source={{uri: item.image4,}}/>
                    </View>
                </Swiper>
        </View> 
        <View style = { styles.kcach } >
            <Text style = { styles.txt } > { item.title } </Text> 
            <Text style = { styles.txt } > { item.price } </Text>          
        </View > 
        <View style = {{ width: '100%', borderWidth: 1, borderColor: '#e6e6e6', marginTop: 20, marginBottom: 20 }} >
        </View> 
        <View style = { styles.kcach } >
            <View >
                <Text style = {{ fontSize: 16 }} >Color: < Text style = { [styles.txt, { fontSize: 16, fontWeight: 'bold' }]}> { item.color }</Text></Text>   
            </View>
            <View style = {{ flexDirection: 'row', marginTop: 20 }}>
                < View style = { styles.colors } >
                    < View style = { styles.colors1 } >
                    </View> 
                </View >
                <View style = {{ alignItems: 'center', marginTop: 10, marginLeft: 10, backgroundColor: 'grey', height: 46, width: 46, borderRadius: 50 / 2, justifyContent: 'center'}}>
                </View>
            </View > 
        </View> 
        <View style = {[styles.kcach, { flex: 1, flexDirection: 'row', marginTop: 30 }]}>
            < View style = {[{ flex: 1 }]} >
                <Text style = {{ height: 40, justifyContent: 'center', marginTop: 15}}> Size: <Text style = { styles.txt }>{ item.Size }</Text></Text>
            </View> 
            < View style = { { flex: 1, color: 'black', marginTop: 10 }}>
                    < View style = { styles.button } >
                        <Text style = { [styles.buttonText]}> Size chart </Text>
                    </View > 
            </View >
        </View> 
        <View style = {[styles.kcach,{flexDirection:'row',width:'98%'}]}>
             <TouchableOpacity style = {{flex:1,color: 'black', marginTop: 10,}}>
                     <View style = { styles.sz }>
                         <Text style = {[styles.buttonText]}> XS </Text> 
                     </View >
              </TouchableOpacity >
             <TouchableOpacity style = {{flex:1,color:'black', marginTop: 10,}}>
                     <View style = { styles.sz } > 
                         <Text style = {[styles.buttonText]} > S </Text> 
                     </View > 
             </TouchableOpacity> 
             <TouchableOpacity style = {{flex:1,color: 'black', marginTop: 10,}}>
                     <View style = {styles.sz }>
                         <Text style = {[styles.buttonText]}> M </Text>
                     </View >
             </TouchableOpacity >
             <TouchableOpacity style = {{flex:1, color: 'black', marginTop: 10,}}>
                     < View style = { styles.sz } >
                         < Text style = {[styles.buttonText]} > L </Text>
                     </View> 
             </TouchableOpacity>
        </View> 
    </View >
    </ScrollView>
    <TouchableOpacity style = {{flex:1,height:50,width:360,margin:15,backgroundColor:'yellow' ,alignItems:'center',justifyContent: 'center',position:'absolute', bottom:15,left:0}}>
        <Text style = { [styles.buttonText]}> Add To Cart</Text>
    </TouchableOpacity>
   </View>
);
    return ( 
        <SafeAreaView >
            <View >
                <FlatList data = { DATA }
                renderItem = { renderItem }
                keyExtractor = { item => item.id }
                numColumns = { 2 }
                /> 
            </View >
         </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    sz: {
        width: 80,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f2f2f2',
        borderWidth: 1,
    },
    slider: {
        width: 5,
        height: 5,
        borderRadius: 5 / 2,
        marginTop: 15,
        margin: 5,
        backgroundColor: 'gray',
    },
    kcach: {
        marginLeft: 10,
        marginRight: 10,
    },
    txt: {
        fontSize: 18,
        marginTop: 10,
        fontWeight: 'bold'
    },
    anh: {
        height: 400,
        width: '100%',
    },
    colors: {
        alignItems: 'center',
        marginTop: 10,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'orange',
        height: 50,
        width: 50,
        borderRadius: 50 / 2,
        justifyContent: 'center'
    },
    colors1: {
        backgroundColor: 'orange',
        borderWidth: 2,
        borderColor: 'white',
        height: 46,
        width: 46,
        borderRadius: 46 / 2
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f2f2f2',
        height: 30,
        width: 100,
        marginLeft: 80,

    },
    buttonText: {
        color: 'black',
        fontSize: 14
    },
    wrapper: {
        height:400,
        justifyContent: 'center',
        alignItems: 'center',
      },
      slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
      },
});
export default AddToCart;