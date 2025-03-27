import React, { useRef, useState, useEffect } from 'react';
import { View, Animated, Image, StyleSheet, Dimensions } from 'react-native';

interface StoryComponentProps {
  imageUrls: string[];
  duration: number; // in milliseconds per image
  onClose?: () => void; // Optional onClose callback
}

const StoryComponent: React.FC<StoryComponentProps> = ({ imageUrls, duration, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const progressBarAnim = useRef(new Animated.Value(0)).current;
  const { width } = Dimensions.get('window');

  useEffect(() => {
    const nextImage = () => {
      if (currentImageIndex < imageUrls.length - 1) {
        setCurrentImageIndex(currentImageIndex + 1);
        resetAnimations();
      } else {
        if (onClose) {
          onClose(); // Call onClose when all images are shown
        }
      }
    };

    const resetAnimations = () => {
      fadeAnim.setValue(0);
      scaleAnim.setValue(0.8);
      progressBarAnim.setValue(0);

      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(progressBarAnim, {
          toValue: 1,
          duration: duration,
          useNativeDriver: false,
        }),
      ]).start(nextImage);
    };

    resetAnimations();

    return () => {
      fadeAnim.stopAnimation();
      scaleAnim.stopAnimation();
      progressBarAnim.stopAnimation();
    };
  }, [currentImageIndex, imageUrls, duration, fadeAnim, scaleAnim, progressBarAnim, onClose]);

  const progressBarWidth = progressBarAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        source={{ uri: imageUrls[currentImageIndex] }}
        style={[
          styles.image,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
        resizeMode="cover"
      />
      <Animated.View
        style={[
          styles.progressBar,
          {
            width: progressBarWidth,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  progressBar: {
    position: 'absolute',
    top: 0,
    height: 3,
    backgroundColor: 'white',
  },
});

export default StoryComponent;