// import { Drawer } from "expo-router/drawer";

// export default function DrawerLayout() {
//   return (
//     <Drawer
//       screenOptions={{
//         headerShown: false,
//       }}
//     />
//   );
// }
import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
      headerShown: false,                                   
        drawerActiveTintColor: "#7B2EFF",
        drawerLabelStyle: { fontSize: 14 },
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          title: "Homepage",
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={20} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="orders"
        options={{
          title: "My Orders",
          drawerIcon: ({ color }) => (
            <Ionicons name="cube-outline" size={20} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="profile"
        options={{
          title: "My Profile",
          drawerIcon: ({ color }) => (
            <Ionicons name="person-outline" size={20} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}
