import React, { useEffect, useState } from "react";
import Lottie from 'lottie-react-native';
import { Animated, Easing, StyleSheet, View } from 'react-native';
import { SW } from '../utils';

function LottieAnimation(props) {
  const { source, Lottiewidthstyle } = props;
  const [animationProgress, setAnimationProgress] = useState(new Animated.Value(0));

  useEffect(() => {
    const animation = Animated.timing(animationProgress, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: false
    });
    animation.start();

    return () => animation.stop();
  }, [])

  const styles = StyleSheet.create({
    Setlottesfilestyle: {
      width: SW(330),
    },
    centerlottw: {
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%'
    }
  });

  return (
    <View style={styles.centerlottw}>
      <Lottie
        resizeMode="cover"
        style={[styles.Setlottesfilestyle, Lottiewidthstyle]}
        autoPlay={false}
        loop={false}
        source={source}
        progress={animationProgress}
      />
    </View>
  );
};

export default LottieAnimation;
