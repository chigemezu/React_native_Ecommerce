import { Ionicons } from '@expo/vector-icons';
import {View,Image,Text,ScrollView } from 'react-native';
import styles from "../../assets/styles/user/styles";

export default function CategoryBar() {
  const categories = [
    { id: 1, name: 'Beauty', image: require('../../assets/images/p1.jpg') },
    { id: 2, name: 'Fashion', image: require('../../assets/images/p2.jpg') },
    { id: 3, name: 'Kids', image: require('../../assets/images/p3.jpg') },
    { id: 4, name: 'Mens', image: require('../../assets/images/p4.jpg') },
    { id: 5, name: 'Womens', image: require('../../assets/images/p5.jpg') },
    { id: 6, name: 'Mens', image: require('../../assets/images/p4.jpg') },
    { id: 7, name: 'Womens', image: require('../../assets/images/p5.jpg') },
  ];
    return (
     <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
        {categories.map(cat => (
          <View key={cat.id} style={styles.categoryItem}>
            <Image source={cat.image} style={styles.categoryImage} />
            <Text>{cat.name}</Text>
          </View>
        ))}
      </ScrollView>
    );
  }