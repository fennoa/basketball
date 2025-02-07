import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { Team } from ".";

type TextFieldProps = {
  name: string;
  value: string;
  onChangeText: (newText: string) => void;
};

function TextField({ name, value, onChangeText }: TextFieldProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>{name}</Text>
      <TextInput
        value={value}
        style={{
          borderWidth: 1,
          margin: 12,
          height: 40,
          padding: 4,
          fontSize: 16,
          width: 220,
          backgroundColor: "white",
        }}
        onChangeText={onChangeText}
      />
    </View>
  );
}

export default function NewTeamScreen() {
  const [entry, setEntry] = useState<Omit<Team, "id">>({
    name: "Suomen maajoukkue",
    city: "Helsinki, Finland",
    code: "FIN",
    nickname: "Susijengi",
    logo: "https://d3syc56w7foqy0.cloudfront.net/assets/files/1025/negasusi_cmyk.500x300.png",
  });

  function updateEntry(fieldName: string, newText: string) {
    setEntry((old) => ({
      ...old,
      [fieldName]: newText,
    }));
  }

  return (
    <View style={{ padding: 16, gap: 8 }}>
      <TextField
        name="Nimi"
        value={entry.name}
        onChangeText={(text) => updateEntry("name", text)}
      />
      <TextField
        name="Kotikaupunki"
        value={entry.city}
        onChangeText={(text) => updateEntry("city", text)}
      />
      <TextField
        name="Tunnus"
        value={entry.code}
        onChangeText={(text) => updateEntry("code", text)}
      />
      <TextField
        name="Lempinimi"
        value={entry.nickname}
        onChangeText={(text) => updateEntry("nickname", text)}
      />
      <TextField
        name="Logo-URL"
        value={entry.logo || ""}
        onChangeText={(text) => updateEntry("logo", text)}
      />
      <View style={{ width: "100%", padding: 12, alignItems: "flex-end" }}>
        <Button title="Tallenna" onPress={() => {}} />
      </View>
    </View>
  );
}
