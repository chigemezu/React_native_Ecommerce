import React from 'react';
import { View, Text,  Image,Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from "../../assets/styles/user/styles"
import { useNavigation } from "expo-router";
export default function UserHeader() {
   const navigation = useNavigation();
  return(
     <View style={styles.header}>
            {/* <Ionicons name="menu" size={28} /> */}
            <Pressable onPress={() => navigation.openDrawer()}>
              <Ionicons name="menu" size={28} />
            </Pressable>
    
            <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
            <Image source={require('../../assets/images/profile.png')} style={styles.profile} />
          </View>
  )
}