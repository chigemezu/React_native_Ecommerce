import React from "react";
import {View,Text,StyleSheet,Image,TouchableOpacity,SafeAreaView,} from "react-native";
import { Link } from "expo-router";

export default function OnboardingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.step}>1/3</Text>
        <TouchableOpacity>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Illustration */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/screen1.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Choose Products</Text>
        <Text style={styles.description}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>

        <View style={styles.dots}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <TouchableOpacity style={styles.nextBtn}>
          <Link href="/screen_two">
            <Text style={styles.nextText}>Next</Text>
          </Link>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      paddingHorizontal: 20,
    },
  
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
      padding:20

    },
    step: {
      fontSize: 14,
      color: "#555",
    },
    skip: {
      fontSize: 14,
      color: "#FF3D00",
      fontWeight: "500",
    },
  
    imageContainer: {
      flex: 4,
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      width: "100%",
      height: 260,
    },
  
    content: {
      flex: 2,
      alignItems: "center",
      paddingHorizontal: 10,
    },
    title: {
      fontSize: 22,
      fontWeight: "700",
      marginBottom: 10,
    },
    description: {
      fontSize: 14,
      textAlign: "center",
      color: "#777",
      lineHeight: 20,
    },
  
    footer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 20,
      padding:20
    },
  
    dots: {
      flexDirection: "row",
      justifyContent:"center"
    },
    dot: {
      width: 30,
      height: 8,
      borderRadius: 4,
      backgroundColor: "#ddd",
      marginHorizontal: 4,
    },
    activeDot: {
      backgroundColor: "#FF3D00",
      width:60
    },
  
    nextBtn: {
      alignSelf: "flex-end",
      backgroundColor: "#fff",
      paddingLeft:150,
    },
    nextText: {
      color: "#FF3D00",
      fontSize: 16,
      fontWeight: "600",
    },
  });