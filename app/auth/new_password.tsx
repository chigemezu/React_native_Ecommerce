import React, { useState } from "react";
import { Pressable, Text, TextInput, View, } from "react-native";
import styles from "../../assets/styles/styles";
import InputField from "@/components/InputField";
import Toast from "react-native-toast-message";
import { useRouter } from "expo-router";

export default function Signup() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordvisible, setConfirmPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    if (!password) {
      Toast.show({
        type: 'error',
        text1: 'Email Required',
        text2: 'Please enter your email address',
        position: 'top',
        visibilityTime: 2000
      });
      return;
    }
    router.push("/user/dashboard");
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
      <Text style={styles.title}>Create New Password</Text>
      <InputField
        icon="lock"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!passwordVisible}
        showToggle
        onToggle={() => setPasswordVisible(!passwordVisible)}
      />
      <InputField
        icon="lock"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={!confirmPasswordvisible}
        showToggle
        onToggle={() => setConfirmPasswordVisible(!confirmPasswordvisible)}
      />


      <Pressable style={styles.loginBtn} onPress={handleSubmit}>
        <Text style={styles.loginText}>Submit</Text>
      </Pressable>
    </View>
  );
}
