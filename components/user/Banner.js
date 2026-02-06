import { Ionicons } from '@expo/vector-icons';
import { Pressable, Image,Text,  } from 'react-native';
import styles from "../../assets/styles/user/styles";

export default function Banner() {
    return (
       <Pressable style={styles.banner}>
          <Image source={require('../../assets/images/banner-1.jpg')} style={styles.bannerImage} />
          <Text style={styles.bannerText}>50-40% OFF</Text>
          <Text style={styles.bannerSubText}>Now in product, All colours</Text>
        </Pressable>
    );
  }