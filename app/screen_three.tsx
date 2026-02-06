import { Link } from "expo-router";
import React from "react";
import {Image,Text,TouchableOpacity,View,} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../assets/styles/screen";

export default function OnboardingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.step}>3/3</Text>
        <TouchableOpacity>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Illustration */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/screen3.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Get your Order</Text>
        <Text style={styles.description}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.prevBtn}>
          <Link href="/">
            <Text style={styles.prevText}>Prev</Text>
          </Link>
        </TouchableOpacity>

        <View style={styles.dots}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
        </View>

        <TouchableOpacity style={styles.nextBtn}>
          <Link href="/auth/signup">
            <Text style={styles.nextText}>Get Started</Text>
          </Link>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}