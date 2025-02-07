import { Stack } from "expo-router";

export default function TeamsLayout() {
  return <Stack screenOptions={{
    title: '',
  }}>
    <Stack.Screen name="index" options={{ title: 'Joukkueet' }} />
    <Stack.Screen name="new" options={{ title: 'Uusi joukkue' }} />
  </Stack>
}
