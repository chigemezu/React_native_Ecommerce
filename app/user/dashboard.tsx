import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from "./styles/styles"

const categories = [
  { id: 1, name: 'Beauty', image: require('../../assets/images/p1.jpg') },
  { id: 2, name: 'Fashion', image: require('../../assets/images/p2.jpg') },
  { id: 3, name: 'Kids', image: require('../../assets/images/p3.jpg') },
  { id: 4, name: 'Mens', image: require('../../assets/images/p4.jpg') },
  { id: 5, name: 'Womens', image: require('../../assets/images/p5.jpg') },
  { id: 6, name: 'Mens', image: require('../../assets/images/p4.jpg') },
  { id: 7, name: 'Womens', image: require('../../assets/images/p5.jpg') },
];

const products = [
  { id: 1, name: 'Women Printed Kurta', image: require('../../assets/images/p6.jpg'), description: 'Matte Gunmetal Black Full Rim Rectangle Sunglasses.',price:"2300" },
  { id: 2, name: 'HRX by Hrithik Roshan', image: require('../../assets/images/p7.jpg') ,description: 'Matte Gunmetal Black Full Rim Rectangle Sunglasses.',price:"5000"},
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="menu" size={28} />
        <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
        <Image source={require('../../assets/images/profile.png')} style={styles.profile} />
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput 
          style={styles.searchInput} 
          placeholder="Search any Product.." 
        />
        <Ionicons name="mic" size={24} />
      </View>

      {/* Categories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
        {categories.map(cat => (
          <View key={cat.id} style={styles.categoryItem}>
            <Image source={cat.image} style={styles.categoryImage} />
            <Text>{cat.name}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Banner */}
      <TouchableOpacity style={styles.banner}>
        <Image source={require('../../assets/images/banner.jpg')} style={styles.bannerImage} />
        <Text style={styles.bannerText}>50-40% OFF</Text>
        <Text style={styles.bannerSubText}>Now in product, All colours</Text>
      </TouchableOpacity>

      {/* Deal of the Day */}
      <View style={styles.dealContainer}>
        <Text style={styles.dealTitle}>Deal of the Day</Text>
        <Text style={styles.dealTimer}>22h 55m 20s remaining</Text>
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={{ color: '#fff' }}>View all</Text>
        </TouchableOpacity>
      </View>

      {/* Products */}
      {/* <FlatList
        data={products}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Image source={item.image} style={styles.productImage} />
            <Text>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text>{item.price}</Text>
          </View>
        )}
      /> */}
      <FlatList
        data={products}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
      />

    </ScrollView>
  );
}


