import React from "react";
import { useFonts } from "expo-font";
import Screens from "./navigation/Screens";
import FirebaseState from "./context/firebase/firebaseState";
export default () => {
  const [loaded] = useFonts({
    Roboto_medium: require("./assets/Roboto-Medium.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <FirebaseState>
      <Screens />
    </FirebaseState>
  );
};
