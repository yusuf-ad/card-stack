import { theme } from "@/theme";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MealCard from "@/components/meal-card";
import { SafeAreaView } from "react-native-safe-area-context";
import TabBar from "@/components/recipes/tabbar";

export default function Index() {
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <TabBar />

      <View
        style={{
          paddingHorizontal: 16,
          flex: 1,
          justifyContent: "space-between",
          gap: 32,
        }}
      >
        {/* Search Bar Area */}
        <View style={styles.searchContainer}>
          <View
            style={[styles.searchBar, { backgroundColor: theme.lightGrey }]}
          >
            <Ionicons
              name="search"
              size={20}
              color={theme.grey}
              style={styles.searchIcon}
            />
            <TextInput
              placeholder="Search"
              style={[styles.searchInput, { color: theme.text }]}
              placeholderTextColor={theme.grey}
            />
          </View>
          <TouchableOpacity
            style={[styles.filterButton, { backgroundColor: theme.primary }]}
          >
            {/* Using 'options-outline' for filter icon, adjust if needed */}
            <Ionicons name="options-outline" size={24} color={theme.white} />
          </TouchableOpacity>
        </View>

        {/* Recipe Card */}
        <View
          style={{
            flex: 1,
            marginTop: 64,
          }}
        >
          {Array.from({ length: 5 }, (_, index) => (
            <MealCard key={index} order={index} active={index === 4} />
          ))}
        </View>
      </View>

      {/* Add more recipe cards or content here */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Add padding top to account for status bar, adjust as needed
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    paddingHorizontal: 10,
    // Adjust vertical padding for desired height
    paddingVertical: Platform.OS === "ios" ? 10 : 8,
    marginRight: 10,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  filterButton: {
    // Match vertical padding with searchBar
    paddingVertical: Platform.OS === "ios" ? 10 : 8,
    paddingHorizontal: 10, // Keep horizontal padding
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
