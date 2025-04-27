import { theme } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  SlideInDown,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

type Meal = {
  id: string;
  cuisine: string;
  title: string;
  description: string;
  details: string;
  rating: number;
  imageUri: string;
};

export default function MealCard({
  meal,
  order,
  active,
}: {
  meal: Meal;
  order: number;
  active: boolean;
}) {
  const offset = useSharedValue(0);
  const screenWidth = useWindowDimensions().width;
  const cardWidth = screenWidth - 32; // Assuming 16px padding on each side

  console.log("screenWidth", screenWidth);

  const translateX = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: offset.value,
      },
      {
        rotate: `${offset.value / 10}deg`,
      },
      {
        translateY: -order * 16,
      },
    ],
  }));

  const pan = Gesture.Pan()
    .onChange((event) => {
      if (active) {
        offset.value += event.changeX;
      }
    })
    .onFinalize(() => {
      offset.value = withSpring(0);
    });

  return (
    <GestureDetector gesture={pan}>
      <Animated.View
        entering={SlideInDown.delay(order * 100)
          .springify()
          .damping(15)}
        style={[
          styles.card,
          {
            backgroundColor: theme.white,
            zIndex: order,
          },
          translateX,
        ]}
      >
        <Image
          source={{
            uri: meal.imageUri, // Use imageUri from meal prop
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardContent}>
          <Text style={[styles.cuisine, { color: theme.grey }]}>
            Cuisine: {meal.cuisine} {/* Use cuisine from meal prop */}
          </Text>
          <Text style={[styles.title, { color: theme.text }]}>
            {meal.title} {/* Use title from meal prop */}
          </Text>
          <Text style={[styles.description, { color: theme.textSecondary }]}>
            {meal.description} {/* Use description from meal prop */}
          </Text>
          <Text style={[styles.details, { color: theme.grey }]}>
            {meal.details} {/* Use details from meal prop */}
          </Text>
          <View style={styles.ratingContainer}>
            <Text style={[styles.ratingLabel, { color: theme.text }]}>
              Rating:
            </Text>
            {Array.from({ length: 5 }, (_, index) => (
              <Ionicons
                key={index}
                name={index < meal.rating ? "star" : "star-outline"} // Use rating from meal prop
                size={16}
                color={theme.primary}
              />
            ))}
          </View>
        </View>
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  card: {
    position: "absolute",
    width: "100%",
    borderRadius: 12,
    height: "75%",
    overflow: "hidden", // Clip image to rounded corners
    // Add shadow for card effect (iOS)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    // Add elevation for card effect (Android)
    elevation: 4,
    borderWidth: 1,
    borderColor: "#ddd", // Optional border for card
    bottom: 32,
  },
  cardImage: {
    width: "100%",
    height: 200, // Adjust height as needed
    resizeMode: "cover",
  },
  cardContent: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 24,
  },
  cuisine: {
    fontSize: 12,
    marginBottom: 4,
    textTransform: "uppercase", // Match design if needed
  },
  title: {
    fontSize: 20, // Slightly larger title
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    lineHeight: 20, // Improve readability
    marginBottom: 12,
  },
  details: {
    fontSize: 13, // Slightly larger details
    marginBottom: 12,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingLabel: {
    fontSize: 14,
    marginRight: 8,
  },
});
