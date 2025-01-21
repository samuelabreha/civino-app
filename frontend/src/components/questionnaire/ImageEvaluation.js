import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const ImageEvaluation = ({ images, onSelect, selectedImage }) => {
  return (
    <View style={styles.container}>
      {images.map((image, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => onSelect(image)}
          style={[
            styles.imageContainer,
            selectedImage === image && styles.selectedImage,
          ]}
        >
          <Image source={image.source} style={styles.image} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

ImageEvaluation.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      source: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
  selectedImage: PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  imageContainer: {
    padding: 5,
    borderRadius: 10,
  },
  selectedImage: {
    backgroundColor: '#e3f2fd',
    borderWidth: 2,
    borderColor: '#2196F3',
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
});

export default ImageEvaluation;
