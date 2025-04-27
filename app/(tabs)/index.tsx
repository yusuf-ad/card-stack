import { theme } from "@/theme";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MealCardList, { Meal } from "@/components/meal-card";
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
            <Ionicons name="options-outline" size={24} color={theme.white} />
          </TouchableOpacity>
        </View>

        {/* Recipe Cards */}
        <MealCardList />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    paddingVertical: Platform.OS === "ios" ? 14 : 0,
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
