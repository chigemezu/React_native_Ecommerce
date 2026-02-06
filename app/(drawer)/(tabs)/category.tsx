import styles from "../../../assets/styles/user/styles";
import { View, Text, FlatList, Image, Pressable } from "react-native";
import { useRouter } from "expo-router";
import Header from '../../../components/user/Header';

const menus = [
  {
    id: "1",
    title: "WOMEN",
    subtitle: "t-shirts, tops, bottoms..",
    image: require("../../../assets/images/p1.jpg"),
  },
  {
    id: "2",
    title: "MEN",
    subtitle: "jackets, jeans, denims..",
    image: require("../../../assets/images/p2.jpg"),
  },
  {
    id: "3",
    title: "KIDS",
    subtitle: "clothing, toys, books..",
    image: require("../../../assets/images/p3.jpg"),
  },
  {
    id: "4",
    title: "BEAUTY",
    subtitle: "skincare, haircare, makeup..",
    image: require("../../../assets/images/p4.jpg"),
  },
  {
    id: "5",
    title: "FOOTWEAR",
    subtitle: "shoes, sandals, activewear..",
    image: require("../../../assets/images/p5.jpg"),
  },
];

export default function CategoriesScreen() {
  const router = useRouter();

  const renderItem = ({ item }: any) => (
    <Pressable
      style={styles.card}
  //    onPress={() => router.push(`/menu/${item.id}`)}
    >
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>

      <Image source={item.image} style={styles.image} />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.header}>Categories</Text>
      <FlatList
        data={menus}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
