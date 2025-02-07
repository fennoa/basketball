import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { Team } from ".";
import { useEffect, useState } from "react";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Colors } from "@/constants/Colors";

export default function TeamScreen() {
  const { back } = useRouter();
  const { id } = useLocalSearchParams();
  const [team, setTeam] = useState<Team>();
  const endpointUrl = `${process.env.EXPO_PUBLIC_API_URL}/teams/${id}`;

  const getTeam = async () => {
    try {
      const data = await fetch(endpointUrl, { method: "GET" });
      const parsedData: Team = await data.json();
      setTeam(parsedData);
    } catch (e) {
      console.error("Error fetching teams", e);
    }
  };

  const handleDelete = async () => {
    try {
      const result = await fetch(endpointUrl, { method: "DELETE" });
      console.log("Delete result", result.status);
    } catch (e) {
      console.error("Error deleting a team", e);
    }
    back();
  };

  useEffect(() => {
    getTeam();
  }, []);

  if (!team) {
    return null;
  }

  return (
    <View style={{ padding: 16 }}>
      <Stack.Screen
        options={{
          title: "Joukkueen tiedot",
          headerRight: () => (
            <Pressable onPress={handleDelete}>
              <IconSymbol
                size={28}
                name="trash"
                color={Colors.light.dangerText}
              />
            </Pressable>
          ),
        }}
      />

      <Text>TODO! Joukkueen id: {id}</Text>
    </View>
  );
}
