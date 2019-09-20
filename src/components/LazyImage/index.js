import React, { useState, useEffect } from "react";
import { Animated } from "react-native";
import { Small, Original } from "./styles";
import { styled } from "styled-components/native";

export default function LazyImage({
  smallSource,
  source,
  aspectRatio,
  shouldLoad
}) {
  const opacity = new Animated.Value(0);
  const [loaded, setLoaded] = useState(false);

  const OriginalAnimated = Animated.createAnimatedComponent(Original);

  function handleAnimate() {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start();
  }

  useEffect(() => {
    if (shouldLoad) {
      // setTimeout(() => {
      setLoaded(true);
      //}, 1000);
    }
  }, [shouldLoad]);

  return (
    <Small
      source={smallSource}
      ratio={aspectRatio}
      resizeMode="contain"
      blurRadius={2}
    >
      {loaded && (
        <OriginalAnimated
          styled={{ opacity }}
          source={source}
          ratio={aspectRatio}
          resizeMode="contain"
          onLoadEnd={handleAnimate}
        />
      )}
    </Small>
  );
}
