import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

interface CategoryItem {
  id: string;
  name: string;
  image?: string; // Şimdilik opsiyonel, görsel geldiğinde kullanılacak
  color?: string; // Placeholder rengi
}

interface CategoryStoriesProps {
  categories: CategoryItem[];
  onCategoryPress?: (category: CategoryItem) => void;
  showTitle?: boolean;
  title?: string;
  containerStyle?: any;
  itemSize?: number;
}

const CategoryStories: React.FC<CategoryStoriesProps> = ({
  categories,
  onCategoryPress,
  showTitle = true,
  title = 'Kategoriler',
  containerStyle,
  itemSize = 70,
}) => {
  const handleCategoryPress = (category: CategoryItem) => {
    onCategoryPress?.(category);
  };

  const renderCategoryItem = (category: CategoryItem) => {
    return (
      <TouchableOpacity
        key={category.id}
        style={[styles.categoryItem, { width: itemSize + 20 }]}
        onPress={() => handleCategoryPress(category)}
        activeOpacity={0.7}
      >
        <View style={[
          styles.categoryCircle,
          { 
            width: itemSize, 
            height: itemSize,
            backgroundColor: category.color || '#f0f0f0'
          }
        ]}>
          {category.image ? (
            <Image
              source={{ uri: category.image }}
              style={[styles.categoryImage, { width: itemSize - 4, height: itemSize - 4 }]}
              resizeMode="cover"
            />
          ) : (
            <View style={[styles.placeholderContainer, { width: itemSize - 4, height: itemSize - 4 }]}>
              <Text style={styles.placeholderText}>📦</Text>
            </View>
          )}
        </View>
        <Text style={styles.categoryName} numberOfLines={2}>
          {category.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {showTitle && (
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      )}
      
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        style={styles.scrollView}
      >
        {categories.map(renderCategoryItem)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  //  backgroundColor: '#fff',
    paddingVertical: 15,
  },
  titleContainer: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  scrollView: {
    paddingLeft: 16,
  },
  scrollContent: {
    paddingRight: 16,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 8,
  },
  categoryCircle: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#e9ecef',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryImage: {
    borderRadius: 50,
  },
  placeholderContainer: {
    borderRadius: 50,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    fontSize: 24,
  },
  categoryName: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 14,
  },
});

export default CategoryStories; 