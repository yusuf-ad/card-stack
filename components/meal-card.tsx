import { dummyMeals } from "@/lib/dummy-data";
import { theme } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import { act, useState } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import {
  Directions,
  Gesture,
  GestureDetector,
} from "react-native-gesture-handler";
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  SlideInDown,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export type Meal = {
  id: string;
  cuisine: string;
  title: string;
  description: string;
  details: string;
  rating: number;
  imageUri: string;
};

const { width } = Dimensions.get("window");

const duration = 300;
const _size = width * 0.9;
const layout = {
  borderRadius: 12,
  width: _size,
  height: _size * 1.27,
  spacing: 12,
  cardsGap: 32,
};

const maxVisibleItems = 5;

export default function MealCardList() {
  const [meals, setMeals] = useState(dummyMeals);
  const activeIndex = useSharedValue(0);

  const flingUp = Gesture.Fling()
    .direction(Directions.DOWN)
    .onStart(() => {
      if (activeIndex.value === meals.length - 1) {
        return;
      }

      activeIndex.value = withTiming(activeIndex.value + 1, { duration });

      console.log("fling up");
    });

  const flingDown = Gesture.Fling()
    .direction(Directions.UP)
    .onStart(() => {
      if (activeIndex.value === 0) {
        return;
      }

      activeIndex.value = withTiming(activeIndex.value - 1, { duration });

      console.log("fling down");
    });

  return (
    <GestureDetector gesture={Gesture.Exclusive(flingUp, flingDown)}>
      <View
        style={{
          flex: 1,
          marginTop: meals.length > 0 ? 18 * meals.length : 0,
        }}
        pointerEvents="box-none"
      >
        {meals.map((meal, index) => (
          <MealCard
            key={meal.id}
            meal={meal}
            index={index}
            activeIndex={activeIndex}
            totalLength={meals.length - 1}
          />
        ))}
      </View>
    </GestureDetector>
  );
}

function MealCard({
  meal,
  index,
  activeIndex,
  totalLength,
}: {
  meal: Meal;
  index: number;
  activeIndex: SharedValue<number>;
  totalLength: number;
}) {
  const animatedStyles = useAnimatedStyle(() => {
    return {
      position: "absolute",
      zIndex: totalLength - index,
      opacity: interpolate(
        activeIndex.value,
        [index - 1, index, index + 1],
        [1 - 1 / maxVisibleItems, 1, 1]
      ),
      shadowOpacity: interpolate(
        activeIndex.value,
        [index - 1, index, index + 1],
        [0, 0, 1],
        {
          extrapolateRight: Extrapolation.CLAMP,
        }
      ),
      transform: [
        {
          translateY: interpolate(
            activeIndex.value,
            [index - 1, index, index + 1],
            [-layout.cardsGap, 0, layout.height - layout.cardsGap + 32],
            {
              extrapolateRight: Extrapolation.EXTEND,
            }
          ),
        },
        {
          scale: interpolate(
            activeIndex.value,
            [index - 1, index, index + 1],
            [0.96, 1, 1]
          ),
        },
      ],
    };
  });

  return (
    <Animated.View style={[styles.card, animatedStyles]}>
      <Image
        source={{
          uri: meal.imageUri,
        }}
        style={styles.cardImage}
      />
      <View style={styles.cardContent}>
        <Text style={[styles.cuisine, { color: theme.grey }]}>
          Cuisine: {meal.cuisine}
        </Text>
        <Text style={[styles.title, { color: theme.text }]}>{meal.title}</Text>
        <Text style={[styles.description, { color: theme.textSecondary }]}>
          {meal.description}
        </Text>
        <Text style={[styles.details, { color: theme.grey }]}>
          {meal.details}
        </Text>
        <View style={styles.ratingContainer}>
          <Text style={[styles.ratingLabel, { color: theme.text }]}>
            Rating:
          </Text>
          {Array.from({ length: 5 }, (_, index) => (
            <Ionicons
              key={index}
              name={index < meal.rating ? "star" : "star-outline"}
              size={16}
              color={theme.primary}
            />
          ))}
        </View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: layout.height,
    borderRadius: layout.borderRadius,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: theme.white,

    // Add shadow for card effect (iOS)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    // Add elevation for card effect (Android)
    elevation: 4,
  },
  cardImage: {
    width: "100%",
    height: "50%", // Adjust height as needed
    resizeMode: "cover",
  },
  cardContent: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 24,
  },
  cuisine: {
    fontSize: 12,
    textTransform: "uppercase",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
  details: {
    fontSize: 13,
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
