import { ScrollView, View, ImageBackground } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#fff" }}
      edges={["left", "right"]}
    >
      <ThemedView
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
          paddingBottom: 24,
          gap: 8,
          minHeight: 300,
          justifyContent: "center",
        }}
      >
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 300,
          }}
        >
          <ImageBackground
            source={require("@/assets/images/utah.png")}
            resizeMode="cover"
            style={{
              width: "100%",
              height: "100%",
              // resizeMode: "cover",
              opacity: 0.6,
            }}
          ></ImageBackground>
        </View>
        <ThemedText
          type="title"
          style={{
            color: Colors.dark.tint,
            textShadowColor: Colors.dark.background,
            textShadowOffset: { width: 2, height: 2 },
            textShadowRadius: 2,
          }}
        >
          NBA Madness!
        </ThemedText>
      </ThemedView>
      <ScrollView
        style={{
          paddingHorizontal: 16,
          paddingVertical: 24,
        }}
      >
        <ThemedView
          style={{
            gap: 8,
            marginBottom: 16,
          }}
        >
          <ThemedText type="subtitle">NBA Joukkueet</ThemedText>
          <ThemedText>Katso joukkueet ja niiden line-up!</ThemedText>
        </ThemedView>
        <ThemedView
          style={{
            gap: 8,
            marginBottom: 16,
          }}
        >
          <ThemedText type="subtitle">Peliohjelma</ThemedText>
          <ThemedText>
            Kauden peliohjelma visuaalisesti kauniisti esitettynä.
          </ThemedText>
        </ThemedView>
        <ThemedView
          style={{
            gap: 8,
            marginBottom: 16,
          }}
        >
          <ThemedText type="subtitle">Otteluiden tulokset</ThemedText>
          <ThemedText>Tulokset reaaliaikaisesti tilastoineen.</ThemedText>
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
}
