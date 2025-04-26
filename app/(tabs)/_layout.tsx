import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: "#69528F",
        tabBarActiveTintColor: "#120F1A",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarLabel: "Recipes",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="silverware-fork-knife"
              color={color}
              size={20}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="meal-plan"
        options={{
          headerShown: false,
          tabBarLabel: "Meal Plan",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="clipboard-text-outline"
              color={color}
              size={20}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="log"
        options={{
          headerShown: false,
          tabBarLabel: "Log",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="timeline-text-outline"
              color={color}
              size={20}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="groceries"
        options={{
          headerShown: false,
          tabBarLabel: "Groceries",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="cart-outline"
              color={color}
              size={20}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-outline"
              color={color}
              size={20}
            />
          ),
        }}
      />
    </Tabs>
  );
}
