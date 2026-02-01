
import React from "react";
import {View,TextInput,TouchableOpacity,StyleSheet,} from "react-native";

import { Feather } from "@expo/vector-icons";
import styles from "@/assets/styles/styles";

type FeatherIconName = React.ComponentProps<typeof Feather>["name"];

interface InputFieldProps {
  icon: FeatherIconName;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  showToggle?: boolean;
  onToggle?: () => void;
}

const InputField = ({
  icon,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  showToggle = false,
  onToggle,
}: InputFieldProps) => {
  return (
    <View style={styles.inputContainer}>
      <Feather name={icon} size={18} color="#888" />

      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />

      {showToggle && onToggle && (
        <TouchableOpacity onPress={onToggle}>
          <Feather
            name={secureTextEntry ? "eye-off" : "eye"}
            size={18}
            color="#888"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputField;
