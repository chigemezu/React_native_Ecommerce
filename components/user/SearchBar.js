import { Ionicons } from '@expo/vector-icons';
import { TextInput, View } from 'react-native';
import styles from "../../assets/styles/user/styles";

export default function SearchBar() {
    return (
      <View style={styles.searchContainer}>
        <TextInput 
          style={styles.searchInput} 
          placeholder="Search any Product.." 
        />
        <Ionicons name="mic" size={24} />
      </View>
    );
  }