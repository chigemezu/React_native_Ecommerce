import InputField from "@/components/InputField";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import styles from "../../assets/styles/styles";
import { useRouter } from "expo-router";
import Toast from "react-native-toast-message";

export default function LoginScreen() {
  const [email,setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    if (!email) {
      // alert("Please enter your email");
      Toast.show({
        type: 'error',
        text1: 'Email Required',
        text2: 'Please enter your email address',
        position: 'top',
        visibilityTime: 2000
      });
      return;
    }
    router.push("/auth/confirm_otp");
    Toast.show({
      type: 'success',
      text1: 'OTP Sent',
      text2: 'Check your email for the OTP',
      position: 'top',
      visibilityTime: 2000
    });
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.forgotTitle]}>Forgotten Password!</Text>
      <InputField
        icon="mail"
        placeholder="Enter your Email Address"
        value={email}
        onChangeText={setEmail}
      />
      <Text style={styles.orText}>We will send you a message to set or reset your new password </Text>
      <Pressable style={styles.loginBtn} onPress={handleSubmit}>
        <Text style={styles.loginText}>Submit</Text>
      </Pressable>
    </View>
  );
}
