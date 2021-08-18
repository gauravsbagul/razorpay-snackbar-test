import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { SnackBar } from "../components/snackBar";
import { PageOne, PageTwo } from "./pageTow";

// Snackbar :-
// - the snackbar can be opened or closed from any route
// - snackbars should be persisted across route changes
// - there can be multiple snackbars opened at a time they can just be one after
// the other instead of stacking them(like you status bar in android)
// - They can be auto closed or can have a button to close them

export const SnackbarContext = React.createContext("snackbarContext");

const App = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isPageOne, setPageOne] = useState(true);
  const [myMessage, setMessage] = useState("Hello Razorpay");

  const onClose = () => {
    setIsOpen(false);
  };

  // const buffer =[{message:'', isOpen, setClose},{message:'', isOpen, setClose} ]

  const snackBarProps = {
    message: myMessage,
    isOpen,
    onClose,
    setIsOpen,
    setPageOne,
    setMessage
  };
  return (
    <SnackbarContext.Provider value={snackBarProps}>
      <View style={styles.app}>
        {isPageOne ? <PageOne /> : <PageTwo />}

        <SnackBar />
      </View>
    </SnackbarContext.Provider>
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

export default App;
