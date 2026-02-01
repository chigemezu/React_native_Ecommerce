import { View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "@/assets/styles/styles";

export function Social(){
    return(
        <View style={styles.socialRow}>
            <View style={styles.socialBtn}>
            <FontAwesome name="google" size={20} color="#DB4437" />
            </View>
            <View style={styles.socialBtn}>
            <FontAwesome name="apple" size={20} color="#000" />
            </View>
            <View style={styles.socialBtn}>
            <FontAwesome name="facebook" size={20} color="#1877F2" />
            </View>
        </View>
    )
}