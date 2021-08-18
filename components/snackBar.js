import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SnackbarContext } from "../src/App";

export const SnackBar = (props) => {
  const backgroundColor = type == "error" ? "red" : "green";
  // console.log("SnackBar 7", message);

  const SnackbarContextC = useContext(SnackbarContext);

  const { message, type, isOpen, onClose } = SnackbarContextC;
  console.log("SnackBar SnackbarContextC 11", SnackbarContextC);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isOpen) onClose();
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [isOpen, onClose]);

  return isOpen ? (
    <View style={[styles.snackBarWrapper, { backgroundColor }]}>
      <Text>{message}</Text>
      <TouchableOpacity style={{ marginLeft: 20 }} onPress={onClose}>
        <Text>X</Text>
      </TouchableOpacity>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
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
