import React from "react";
import { View } from "react-native";

import { Small } from "./styles";

export default function LazyImage({ smallSouce, souce, aspectRatio }) {
  return <Small souce={smallSouce} ratio={aspectRatio} resizeMode="contain" />;
}
