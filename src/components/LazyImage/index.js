import React from "react";

import { Small } from "./styles";

export default function LazyImage({ smallSource, source, aspectRatio }) {
  return (
    <Small
      source={smallSource}
      ratio={aspectRatio}
      resizeMode="contain"
      blurRadius={2}
    />
  );
}
