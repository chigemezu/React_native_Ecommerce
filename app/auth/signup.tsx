import React, { useState } from "react";
import { Pressable, Text, TextInput, View, } from "react-native";
import { Link } from "expo-router";
import { Feather, FontAwesome } from "@expo/vector-icons";
import styles from "../../assets/styles/styles";
import { Social } from "@/components/social_icon";
import InputField from "@/components/InputField";

export default function Signup() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordvisible, setConfirmPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [fullname,setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account!</Text>

      <InputField
        icon="user"
        placeholder="Full name"
        value={fullname}
        onChangeText={setFullname}
      />
      <InputField
        icon="mail"
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
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
      <InputField
        icon="lock"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={!confirmPasswordvisible}
        showToggle
        onToggle={() => setConfirmPasswordVisible(!confirmPasswordvisible)}
      />


      <Pressable style={styles.loginBtn}>
        <Text style={styles.loginText}>Sign Up</Text>
      </Pressable>
      <Text style={styles.orText}> Or Continue with </Text>

      <Social />

      <Link href="/auth/signin" style={styles.signupText}> 
        Create An Account{" "} <Text style={styles.signupLink}> Sign in </Text>
      </Link>
    </View>
  );
}
