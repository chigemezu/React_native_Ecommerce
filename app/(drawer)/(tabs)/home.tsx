import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import styles from "../../../assets/styles/user/styles";
import Header from '../../../components/user/Header';
import SearchBar from '../../../components/user/SearchBar';
import CategoryBar from '../../../components/user/CategoryBar';
import Banner from '../../../components/user/Banner';

//import { DrawerActions } from '@react-navigation/native';
const products = [
  { id: 1, discount: "20%", name: 'Women Printed ', image: require('../../../assets/images/p6.jpg'), description: 'Matte Gunmetal Black Full Rim Rectangle Sunglasses.',price:"2300" },
  { id: 2, discount: "20%", name: 'HRX ', image: require('../../../assets/images/p7.jpg') ,description: 'Matte Gunmetal Black Full Rim Rectangle Sunglasses.',price:"5000"},
  { id: 3, discount: "20%", name: 'chair', image: require('../../../assets/images/p7.jpg') ,description: 'Matte Gunmetal Black Full Rim Rectangle Sunglasses.',price:"5000"},
  { id: 4, discount: "20%", name: 'lamp', image: require('../../../assets/images/lamp1.png') ,description: 'Matte Gunmetal Black Full Rim Rectangle Sunglasses.',price:"5000"},
  { id: 5, discount: "20%", name: 'Roshan', image: require('../../../assets/images/p7.jpg') ,description: 'Matte Gunmetal Black Full Rim Rectangle Sunglasses.',price:"5000"},
  { id: 6, discount: "20%", name: 'Roshan', image: require('../../../assets/images/p7.jpg') ,description: 'Matte Gunmetal Black Full Rim Rectangle Sunglasses.',price:"5000"},
];


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={
          <>
          <Header />
            <SearchBar />
            <CategoryBar />
            <Banner />

            <View style={styles.dealContainer}>
              <Text style={styles.dealTitle}>Deal of the Day</Text>
              <Text style={styles.dealTimer}>22h 55m 20s remaining</Text>
              <TouchableOpacity style={styles.viewAllButton}>
                <Text style={{ color: '#fff',fontSize:12  }}>View all</Text>
              </TouchableOpacity>
            </View>
          </>
        }
        renderItem={({ item }) => (
          <View style={styles.productItem}>
              <Image source={item.image} style={styles.productImage} />
                <Text style={styles.name}>{item.name}</Text>
                <View style={styles.priceRow}>
                  <Text style={styles.price}>${item.price}</Text>
                  <Text style={styles.discount}>{item.discount} off</Text>
                </View>
          </View>
        )}
      />
    </View>

  );
}


