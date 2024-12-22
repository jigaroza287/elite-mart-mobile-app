import React, { useState } from 'react';
import { Image, Modal, ScrollView, TouchableOpacity, View } from 'react-native';
import ImageViewing from 'react-native-image-viewing';
import Icon from 'react-native-vector-icons/Ionicons';
import style from './style';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (index: number) => {
    setCurrentIndex(index);
    setIsVisible(true);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <View style={style.container}>
      <ScrollView horizontal style={style.grid}>
        {images.map((image, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleOpen(index)}
            style={style.thumbnailWrapper}>
            <Image source={{ uri: image }} style={style.thumbnail} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Modal visible={isVisible} transparent={true}>
        <ImageViewing
          images={images.map(image => ({ uri: image }))}
          imageIndex={currentIndex}
          visible={isVisible}
          onRequestClose={handleClose}
          keyExtractor={(_, index) => index.toString()}
        />
        <TouchableOpacity style={style.closeButton} onPress={handleClose}>
          <Icon name="close" size={30} color="white" />
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default ImageGallery;
