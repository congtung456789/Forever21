import React from 'react'
import { View,StyleSheet ,Text, ScrollView } from 'react-native'
import Swiper from 'react-native-swiper'
const DATA = [{
  id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
  code: '100022587541',
  price: '$39.99',
  title: 'Ribbed Notched Blazer',
  color: 'WHITE/MULTI',
  Size: 'XS',
  image1:'',
  image2:'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw94e5c19a/1_front_750/00439369-01.jpg?sw=500&sh=750',
  image3:'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw94e5c19a/1_front_750/00439369-01.jpg?sw=500&sh=750',
  image4: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw94e5c19a/1_front_750/00439369-01.jpg?sw=500&sh=750'
  }, 
];
const swiper = () => {
    return (
      <ScrollView style ={{flex:1}}>
        <Swiper height={400} style={styles.wrapper}  >
        <View style={[styles.slide1]}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View  style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View  style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
        <View  style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
      </ScrollView>

    )
}
const styles = StyleSheet.create ({
    wrapper: {
      height:400,
      justifyContent: 'center',
      alignItems: 'center',
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
      justifyContent: 'center',
      alignItems: 'center',
    }
  });
export default swiper;
