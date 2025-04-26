import { theme } from "@/theme";
import { Stack } from "expo-router/stack";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar backgroundColor={theme.background} style="dark" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
