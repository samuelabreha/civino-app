import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ImageEvaluationScreen = ({ navigation, route }) => {
  const { t } = useTranslation();
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState(null);

  const locations = [
    { id: 'school', title: t('locations.school'), icon: 'school' },
    { id: 'center', title: t('locations.center'), icon: 'home-city' },
    { id: 'home', title: t('locations.home'), icon: 'home' },
  ];

  const periods = {
    school: [
      { id: 'morning', title: t('periods.schoolMorning') },
      { id: 'afternoon', title: t('periods.schoolAfternoon') },
    ],
    center: [
      { id: 'morning', title: t('periods.centerMorning') },
      { id: 'afternoon', title: t('periods.centerAfternoon') },
    ],
    home: [
      { id: 'morning', title: t('periods.homeMorning') },
      { id: 'afterSchool', title: t('periods.homeAfterSchool') },
    ],
  };

  const evaluationImages = {
    school: {
      morning: [
        { id: 1, source: require('../../../../assets/images/evaluations/school-morning-1.png') },
        { id: 2, source: require('../../../../assets/images/evaluations/school-morning-2.png') },
        // Add more images
      ],
      afternoon: [
        { id: 1, source: require('../../../../assets/images/evaluations/school-afternoon-1.png') },
        { id: 2, source: require('../../../../assets/images/evaluations/school-afternoon-2.png') },
        // Add more images
      ],
    },
    center: {
      morning: [
        { id: 1, source: require('../../../../assets/images/evaluations/center-morning-1.png') },
        { id: 2, source: require('../../../../assets/images/evaluations/center-morning-2.png') },
        // Add more images
      ],
      afternoon: [
        { id: 1, source: require('../../../../assets/images/evaluations/center-afternoon-1.png') },
        { id: 2, source: require('../../../../assets/images/evaluations/center-afternoon-2.png') },
        // Add more images
      ],
    },
    home: {
      morning: [
        { id: 1, source: require('../../../../assets/images/evaluations/home-morning-1.png') },
        { id: 2, source: require('../../../../assets/images/evaluations/home-morning-2.png') },
        // Add more images
      ],
      afterSchool: [
        { id: 1, source: require('../../../../assets/images/evaluations/home-afterschool-1.png') },
        { id: 2, source: require('../../../../assets/images/evaluations/home-afterschool-2.png') },
        // Add more images
      ],
    },
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setSelectedPeriod(null);
  };

  const handlePeriodSelect = (period) => {
    setSelectedPeriod(period);
  };

  const handleImageSelect = (image) => {
    // Save the selected image evaluation
    // Navigate to the next screen
    navigation.navigate('Questionnaires');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('imageEvaluation.title')}</Text>
        <Text style={styles.subtitle}>{t('imageEvaluation.description')}</Text>
      </View>

      <View style={styles.locationsContainer}>
        <Text style={styles.sectionTitle}>{t('imageEvaluation.selectLocation')}</Text>
        <View style={styles.locationButtons}>
          {locations.map((location) => (
            <TouchableOpacity
              key={location.id}
              style={[
                styles.locationButton,
                selectedLocation === location.id && styles.selectedLocation,
              ]}
              onPress={() => handleLocationSelect(location.id)}
            >
              <Icon
                name={location.icon}
                size={32}
                color={selectedLocation === location.id ? '#FFFFFF' : '#666'}
              />
              <Text
                style={[
                  styles.locationText,
                  selectedLocation === location.id && styles.selectedLocationText,
                ]}
              >
                {location.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {selectedLocation && (
        <View style={styles.periodsContainer}>
          <Text style={styles.sectionTitle}>{t('imageEvaluation.selectPeriod')}</Text>
          <View style={styles.periodButtons}>
            {periods[selectedLocation].map((period) => (
              <TouchableOpacity
                key={period.id}
                style={[
                  styles.periodButton,
                  selectedPeriod === period.id && styles.selectedPeriod,
                ]}
                onPress={() => handlePeriodSelect(period.id)}
              >
                <Text
                  style={[
                    styles.periodText,
                    selectedPeriod === period.id && styles.selectedPeriodText,
                  ]}
                >
                  {period.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}

      {selectedLocation && selectedPeriod && (
        <View style={styles.imagesContainer}>
          <Text style={styles.sectionTitle}>{t('imageEvaluation.selectImage')}</Text>
          <View style={styles.imagesGrid}>
            {evaluationImages[selectedLocation][selectedPeriod].map((image) => (
              <TouchableOpacity
                key={image.id}
                style={styles.imageButton}
                onPress={() => handleImageSelect(image)}
              >
                <Image source={image.source} style={styles.evaluationImage} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
  },
  locationsContainer: {
    padding: 20,
  },
  locationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  locationButton: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 15,
    margin: 5,
    borderRadius: 10,
  },
  selectedLocation: {
    backgroundColor: '#2196F3',
  },
  locationText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  selectedLocationText: {
    color: '#FFFFFF',
  },
  periodsContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  periodButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  periodButton: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    margin: 5,
  },
  selectedPeriod: {
    backgroundColor: '#2196F3',
  },
  periodText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  selectedPeriodText: {
    color: '#FFFFFF',
  },
  imagesContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  imagesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  imageButton: {
    width: '48%',
    aspectRatio: 1,
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  evaluationImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default ImageEvaluationScreen;
