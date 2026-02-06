// import React from "react";
import {View,Text,Image,TouchableOpacity, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { useState } from "react";
import styles from "../assets/styles/screen";

export default function OnboardingScreen() {
const [submit, setSubmit] = useState(true);

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
            <Text style={styles.nextText}>{submit ? 'Next' : 'Processing'}</Text>
          </Link>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
