import InputField from "@/components/InputField";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import styles from "../../assets/styles/styles";
import { useRouter } from "expo-router";
import Toast from "react-native-toast-message";

export default function LoginScreen() {
  const [code,setCode] = useState("");

  const router = useRouter();

  const handleSubmit = () => {
    if (!code) {
      Toast.show({
        type: 'error',
        text1: 'Email Required',
        text2: 'Please enter your email address',
        position: 'top',
        visibilityTime: 2000
      });
      return;
    }
    router.push("/auth/new_password");
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
      <Text style={[styles.title, styles.forgotTitle]}>Confirm OTP!</Text>
      <Text style={styles.orText}>Enter the OTP code that was sent your email</Text>
      <InputField
        icon="lock"
        placeholder="Confirm OTP"
        value={code}
        onChangeText={setCode}
      />
      <Pressable style={styles.loginBtn} onPress={handleSubmit}>
        <Text style={styles.loginText}>Submit</Text>
      </Pressable>
    </View>
  );
}
