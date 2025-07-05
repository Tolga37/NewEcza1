import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

interface SliderItem {
  id: string;
  image?: string; // Görsel URL'i
  title?: string;
  subtitle?: string;
  backgroundColor?: string; // Placeholder rengi
}

interface ImageSliderProps {
  data: SliderItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  onSlidePress?: (item: SliderItem, index: number) => void;
  sliderHeight?: number;
  containerStyle?: any;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  data,
  autoPlay = true,
  autoPlayInterval = 3000,
  showDots = true,
  showArrows = false,
  onSlidePress,
  sliderHeight = 200,
  containerStyle,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Otomatik kaydırma
  useEffect(() => {
    if (autoPlay && data.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % data.length;
          scrollViewRef.current?.scrollTo({
            x: nextIndex * screenWidth,
            animated: true,
          });
          return nextIndex;
        });
      }, autoPlayInterval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoPlay, autoPlayInterval, data.length]);

  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffsetX / screenWidth);
    setCurrentIndex(newIndex);
  };

  const handleSlidePress = (item: SliderItem, index: number) => {
    onSlidePress?.(item, index);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    scrollViewRef.current?.scrollTo({
      x: index * screenWidth,
      animated: true,
    });
  };

  const renderSlideItem = (item: SliderItem, index: number) => {
    return (
      <TouchableOpacity
        key={item.id}
        style={[styles.slideItem, { width: screenWidth, height: sliderHeight }]}
        onPress={() => handleSlidePress(item, index)}
        activeOpacity={0.9}
      >
        <View style={[
          styles.slideContent,
          { backgroundColor: item.backgroundColor || '#f0f0f0' }
        ]}>
          {item.image ? (
            <Image
              source={{ uri: item.image }}
              style={styles.slideImage}
              resizeMode="cover"
            />
          ) : (
            <View style={styles.placeholderContainer}>
              <Text style={styles.placeholderText}>🖼️</Text>
              <Text style={styles.placeholderTitle}>
                {item.title || `Slide ${index + 1}`}
              </Text>
            </View>
          )}
          
          {/* Overlay content */}
          {(item.title || item.subtitle) && (
            <View style={styles.overlay}>
              {item.title && (
                <Text style={styles.slideTitle}>{item.title}</Text>
              )}
              {item.subtitle && (
                <Text style={styles.slideSubtitle}>{item.subtitle}</Text>
              )}
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  const renderDots = () => {
    if (!showDots || data.length <= 1) return null;

    return (
      <View style={styles.dotsContainer}>
        {data.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.dot,
              index === currentIndex ? styles.activeDot : styles.inactiveDot,
            ]}
            onPress={() => goToSlide(index)}
          />
        ))}
      </View>
    );
  };

  if (data.length === 0) {
    return null;
  }

  return (
    <View style={[styles.container, containerStyle]}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        scrollEventThrottle={16}
      >
        {data.map(renderSlideItem)}
      </ScrollView>
      
      {renderDots()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  slideItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideContent: {
    width: '100%',
    height: '100%',
    position: 'relative',
   // borderRadius: 12,
    overflow: 'hidden',
    marginHorizontal: 8,
  },
  slideImage: {
    width: '100%',
    height: '100%',
  },
  placeholderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  placeholderText: {
    fontSize: 40,
    marginBottom: 10,
  },
  placeholderTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 16,
  },
  slideTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  slideSubtitle: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#007AFF',
    width: 20,
  },
  inactiveDot: {
    backgroundColor: '#C7C7CC',
  },
});

export default ImageSlider; 