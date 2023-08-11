import React, { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./form_style";
import NumberInput from "./NumberInput";
import { fonts } from "../../constants/fonts";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const filters = [
  "Vegan",
  "Meat",
  "Gluten Free",
  "Plant Based",
  "Spicy",
  "Sweet",
];

const FormComponent = ({ photo }) => {
  const [activeFilters, setActiveFilters] = useState([]);
  const [time, setTime] = useState(0);
  const [difficulty, setDifficulty] = useState(1);
  const [name, setName] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");
  const [dataBody, setDataBody] = useState();

  function createRequestBody() {
    setDataBody({
      name: name,
      subtitle: subtitle,
      adjectives: activeFilters,
      difficulty: difficulty,
      image: photo,
      time: time,
      preparation: preparation && preparation.split("."),
      ingredients: ingredients && ingredients.split(","),
    });
  }

  useEffect(() => {
    if (dataBody) {
      const values = [...Object.values(dataBody)].filter(
        (item) => !item || item.length === 0
      );
      if (values.length === 0) {
        // console.log(dataBody);
        fetch("http://192.168.1.105:5000/api/recipies", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataBody),
        })
          .then((res) => alert("Sent", res.status))
          .catch((err) => console.log(err));
      }
    }
  }, [dataBody]);

  return (
    <View style={styles.formContainer}>
      <View style={{ padding: 8 }}>
        <Text style={styles.formLabel}>Recipe name*</Text>
        <TextInput
          style={styles.formInput(dataBody && !name)}
          placeholder="Such as 'Barbeque ribs'."
          onChangeText={(text) => setName(text)}
          value={name}
        />
      </View>
      <View style={{ padding: 8 }}>
        <Text style={styles.formLabel}>Subtitle*</Text>
        <TextInput
          style={styles.formInput(dataBody && !subtitle)}
          placeholder="A memorable subtitle!"
          onChangeText={(text) => setSubtitle(text)}
          value={subtitle}
        />
      </View>
      <View style={{ padding: 8 }}>
        <Text style={styles.formLabel}>Ingredients*</Text>
        <TextInput
          style={styles.formInput(dataBody && !ingredients)}
          placeholder="List the ingredients separated by a comma."
          onChangeText={(text) => setIngredients(text)}
          value={ingredients}
        />
      </View>
      <View style={{ padding: 8 }}>
        <Text style={styles.formLabel}>Preparation*</Text>
        <TextInput
          style={{
            ...styles.formInput(dataBody && !preparation),
            paddingTop: 15,
            minHeight: 200,
            textAlignVertical: "top",
          }}
          multiline={true}
          placeholder="List of steps separated by a dot."
          onChangeText={(text) => setPreparation(text)}
          value={preparation}
        />
      </View>

      <View style={{ padding: 8 }}>
        <Text style={styles.formLabel}>Characteristics*</Text>
        <FlatList
          data={filters}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.filterTab(
                activeFilters.find((filter) => filter === item)
              )}
              onPress={() =>
                activeFilters.find((filter) => filter === item)
                  ? setActiveFilters((prev) => [
                      ...prev.filter((categ) => categ !== item),
                    ])
                  : setActiveFilters((prev) => [...prev, item])
              }
            >
              <Text
                style={{
                  color: activeFilters.find((filter) => filter === item)
                    ? "white"
                    : "black",
                }}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          horizontal
          style={{
            borderRadius: 10,
            backgroundColor:
              activeFilters.length === 0 && dataBody
                ? "rgba(249, 9, 9,0.1)"
                : "white",
            borderWidth: 1,
            borderColor:
              activeFilters.length === 0 && dataBody
                ? "rgba(249, 9, 9,0.6)"
                : "transparent",
            paddingTop: 15,
            paddingBottom: 15,
          }}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ padding: 8, width: "40%" }}>
          <Text style={styles.formLabel}>Time*</Text>
          <View style={{ flexDirection: "row", columnGap: 10 }}>
            <NumberInput
              onChangeNumber={(value) => setTime(value)}
              dataBody={dataBody}
            />
            <Text style={{ alignSelf: "center", flex: 2, fontSize: 15 }}>
              min
            </Text>
          </View>
        </View>

        <View style={{ padding: 8, width: "50%" }}>
          <Text
            style={{ fontSize: 16, fontFamily: fonts.medium, marginBottom: -7 }}
          >
            Difficulty*
          </Text>
          <View
            style={{
              paddingTop: 20,
              //   paddingBottom: 20,
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <TouchableOpacity
              style={styles.dotStyle(difficulty >= 1)}
              onPress={() => setDifficulty(1)}
            ></TouchableOpacity>
            <TouchableOpacity
              style={styles.dotStyle(difficulty >= 2)}
              onPress={() => setDifficulty(2)}
            ></TouchableOpacity>
            <TouchableOpacity
              style={styles.dotStyle(difficulty >= 3)}
              onPress={() => setDifficulty(3)}
            ></TouchableOpacity>
            <TouchableOpacity
              style={styles.dotStyle(difficulty >= 4)}
              onPress={() => setDifficulty(4)}
            ></TouchableOpacity>
            <TouchableOpacity
              style={styles.dotStyle(difficulty >= 5)}
              onPress={() => setDifficulty(5)}
            ></TouchableOpacity>
          </View>
        </View>
      </View>

      <View
        style={{
          padding: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => createRequestBody()}
          style={{
            padding: 10,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#5DD9C1",
            borderRadius: 500,
          }}
        >
          <Text
            style={{ fontSize: 15, fontFamily: fonts.bold, color: "white" }}
          >
            Add a recipe!
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={{ padding: 10, fontSize: 12, fontFamily: fonts.light }}>
          * - required field (field cannot be empty in in order to proceed with
          the upload)
        </Text>
      </View>
    </View>
  );
};

export default FormComponent;
