import React, { useEffect, useState } from "react";
import { TextInput } from "react-native";
import styles from "./form_style";

const NumberInput = ({ onChangeNumber, dataBody }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    onChangeNumber(value);
  }, [value]);
  return (
    <TextInput
      style={{ ...styles.formInput(dataBody && !value), flex: 4 }}
      onChangeText={(text) => setValue(text.replace(/[^0-9]/g, ""))}
      value={value}
      placeholder="Number"
    />
  );
};

export default NumberInput;
