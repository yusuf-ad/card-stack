import { theme } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  SlideInDown,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export default function MealCard({
  order,
  active,
}: {
  order: number;
  active: boolean;
}) {
  const offset = useSharedValue(0);

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
            uri: "https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-threeByTwoMediumAt2X-v2.jpg?quality=75&auto=webp",
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardContent}>
          <Text style={[styles.cuisine, { color: theme.grey }]}>
            Cuisine: Mexican
          </Text>
          <Text style={[styles.title, { color: theme.text }]}>
            Camarones A La Diabla
          </Text>
          <Text style={[styles.description, { color: theme.textSecondary }]}>
            Spicy Mexican shrimp dish that's high in protein and vegan. Perfect
            for a quick meal.
          </Text>
          <Text style={[styles.details, { color: theme.grey }]}>
            30 min | ~350 kcal | Vegan | High Protein
          </Text>
          <View style={styles.ratingContainer}>
            <Text style={[styles.ratingLabel, { color: theme.text }]}>
              Rating:
            </Text>
            {Array.from({ length: 5 }, (_, index) => (
              <Ionicons
                key={index}
                name={index < 4 ? "star" : "star-outline"}
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
    overflow: "hidden", // Clip image to rounded corners
    marginBottom: 20,
    // Add shadow for card effect (iOS)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    // Add elevation for card effect (Android)
    elevation: 4,
    borderWidth: 1,
    borderColor: "#ddd", // Optional border for card
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
