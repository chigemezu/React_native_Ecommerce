import React, { useState } from "react";
import { View, Text, TextInput, Pressable, } from "react-native";
import styles from "../../assets/styles/styles";
import { Social } from "@/components/social_icon";
import InputField from "@/components/InputField";
import { Link } from "expo-router";
import Toast from "react-native-toast-message";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = ()=>{
    if (!password || !username) {
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
      text1: 'Authenticated',
      text2: 'Login successfully',
      position: 'top',
      visibilityTime: 2000
    });
  }
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>

      <InputField
        icon="mail"
        placeholder="Email"
        value={username}
        onChangeText={setUsername}
      />
      <InputField
        icon="lock"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!passwordVisible}
        showToggle
        onToggle={() => setPasswordVisible(!passwordVisible)}
      />

      <Pressable style={styles.forgot}>
        <Link href="/auth/forgotten_password" style={styles.forgotText}>Forgot Password?</Link>
      </Pressable>

      <Pressable style={styles.loginBtn} onPress={handleSubmit}>
        <Text style={styles.loginText}>Login</Text>
      </Pressable>

      <Text style={styles.orText}> Or Continue with </Text>

      <Social />

      <Text style={styles.signupText}>
        Create An Account{" "}
        <Link href="/auth/signup"> <Text style={styles.signupLink}>Sign Up</Text></Link>
      </Text>
    </View>
  );
}
