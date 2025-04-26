import React from "react";
import { Text, View } from "react-native";

export const tabs = [
  {
    name: "Discover",
  },
  {
    name: "Favorites",
  },
  {
    name: "Profile",
  },
];

export default function TabBar() {
  return (
    <View
      style={{
        height: 58,
        borderBottomColor: "#D6CFE3",
        borderBottomWidth: 1,
        marginBottom: 24,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 16,
          height: "100%",
        }}
      >
        {tabs.map((tab) => (
          <View
            style={{
              flex: 1,
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              borderBottomWidth: 3,
              borderBottomColor:
                tab.name === "Discover" ? "#3B745D" : "#E5E8EB",
            }}
            key={tab.name}
          >
            <Text>{tab.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
