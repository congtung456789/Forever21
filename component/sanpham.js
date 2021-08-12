import React from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet, StatusBar, Image, Dimensions } from 'react-native';
const DATA = [
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
		title: 'First Item',
		image: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw94e5c19a/1_front_750/00439369-01.jpg?sw=500&sh=750'
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
		title: 'Second Item',
		image: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dwd64165de/4_full_750/00436169-03.jpg?sw=500&sh=750'
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d72',
		title: 'Third Item',
		image: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw748a9183/4_full_750/00440469-02.jpg?sw=500&sh=750'
        
	},
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
		title: 'First Item',
		image: 'https://www.forever21.com/dw/image/v2/BFKH_PRD/on/demandware.static/-/Sites-f21-master-catalog/default/dw838e79e7/4_full_750/00389209-25.jpg?sw=500&sh=750'
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
		title: 'Second Item',
		image: 'https://image-us.24h.com.vn/upload/2-2021/images/2021-05-14/anh-3-1620960414-197-width660height825.jpg'
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d72',
		title: 'Third Item',
		image: 'https://image-us.24h.com.vn/upload/2-2021/images/2021-05-14/anh-3-1620960414-197-width660height825.jpg'
	},
];
const Myapp = () => {
    const { height, width } = Dimensions.get('window');
	const itemWidth = (width - 15) / 2;
    const renderItem = ({ item }) => (
		<View style={{ width: itemWidth, flex: 1, margin: 5 }}>
			<View>
				<Image
					style={styles.anh}
					source={{uri: item.image,}}
				/>
				<View style={{
					position: 'absolute', top: 10, right: 10, alignItems: 'center',
					backgroundColor: 'white', height: 40, width: 40, borderRadius: 50 / 2, justifyContent: 'center'
				}}>
					<Text>Heart</Text>
				</View>
			</View>
			<View>
				<View style={{ flexDirection: 'row' }}>
					<View style={styles.colors}>
					<View style={styles.colors1}></View>
					</View>

					<View style={{
						alignItems: 'center', marginTop: 10, marginLeft: 10,
						backgroundColor: 'grey', height: 46, width: 46, borderRadius: 50 / 2, justifyContent: 'center'
					}}>
					</View>
				</View>
				<Text style={styles.txt}>Tshirt blackwinter</Text>
				<Text style={styles.txt}>$20.05</Text>
			</View>
		</View>
	);
  return (
<SafeAreaView>
    <View>
        <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 1 }}>
                <Text>Sort By</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Relevance</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>aaaaa</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Filter</Text>
            </View>
        </View>
        <FlatList
            style={{ marginTop: 20 }}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={2}
        />
    </View>
</SafeAreaView>
  );
}
 const styles = StyleSheet.create({
    txt:{
        fontSize: 20, marginTop: 10,
    },
    anh:{
        height: 300, width: '100%',
    },
    colors:{
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
    colors1:{
		backgroundColor: 'orange', 
		borderWidth: 2, 
		borderColor: 'white', 
		height: 46, 
		width: 46, 
		borderRadius: 46 / 2
	}
 });
export default Myapp;