import React, { useEffect, useState, useContext } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { SnackBar } from "../components/snackBar";
import { SnackbarContext } from "./App";

export const PageTwo = () => {
  const SnackbarContextC = useContext(SnackbarContext);

  const {
    message,
    type,
    isOpen,
    onClose,
    setMessage,
    setIsOpen,
    setPageOne
  } = SnackbarContextC;

  console.log("PageTwo", setPageOne);
  const onPress = () => {
    setMessage("Message from page one");
    setIsOpen(true);
  };

  return (
    <View style={styles.app}>
      <Text> Paeg Two</Text>
      <Button onPress={() => setPageOne(true)} title={"Toggle pages"} />

      <Button onPress={() => setIsOpen(true)} title={"Open SnackBar"} />
    </View>
  );
};

export const PageOne = () => {
  const SnackbarContextC = useContext(SnackbarContext);

  const {
    message,
    type,
    isOpen,
    onClose,
    setMessage,
    setIsOpen,
    setPageOne
  } = SnackbarContextC;

  const onPress = () => {
    setMessage("Message from page two");
    setIsOpen(true);
  };

  return (
    <View style={styles.app}>
      <Text> Paeg One</Text>
      <Button onPress={() => setPageOne(false)} title={"Toggle pages"} />

      <Button onPress={() => onPress()} title={"Open SnackBar"} />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  snackBarWrapper: {
    padding: 20,
    flexDirection: "row",
    alignItems: "flexStart",
    justifyContent: "spaceBetween",
    alignSelf: "center",
    height: 100,
    width: "90%",
    zIndex: 99
  }
});
