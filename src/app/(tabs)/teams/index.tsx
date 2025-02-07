import { FlatList, View, Text, Pressable } from "react-native";

import { IconSymbol } from "@/components/ui/IconSymbol";
import { useEffect, useState } from "react";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import { Stack, useRouter } from "expo-router";

export type Team = {
  id: number;
  name: string;
  code: string;
  nickname: string;
  city: string;
  logo: string | null;
};

export default function TeamsScreen() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const [teams, setTeams] = useState<Team[]>([]);

  const getTeams = async () => {
    const endpointUrl = `${process.env.EXPO_PUBLIC_API_URL}/teams`;

    try {
      const data = await fetch(endpointUrl, { method: "GET" });
      const parsedData: Team[] = await data.json();
      setTeams(parsedData.sort((a, b) => a.code.localeCompare(b.code)));
    } catch (e) {
      console.error("Error fetching teams", e);
    }
  };

  useEffect(() => {
    getTeams();
  }, []);

  return (
    <View style={{ paddingVertical: 8, backgroundColor: "white" }}>
      <Stack.Screen options={{
        headerRight: () => <Pressable onPress={() => router.push('/(tabs)/teams/new')}><IconSymbol size={28} name="plus.circle" color={Colors.light.tint} /></Pressable>
      }} />
      <FlatList
        data={teams}
        renderItem={({ item }: { item: Team }) => (
          <Pressable onPress={() => router.push(`/teams/${item.id}`)}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingVertical: 8,
                paddingHorizontal: 16,
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    lineHeight: 24,
                    fontWeight: 600,
                  }}
                >
                  {item.code} - {item.name}
                </Text>
                <Text style={{ fontSize: 12 }}>{item.city}</Text>
              </View>
              <IconSymbol
                size={16}
                name="chevron.right"
                color={Colors[colorScheme ?? "light"].tint}
              />
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}
