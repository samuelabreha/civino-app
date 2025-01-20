import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { ProfileCard } from '../../../components/ProfileCard';

const SelectProfile = ({ navigation }) => {
  const profiles = [
    {
      type: 'child',
      title: 'Child Profile',
      icon: 'child',
      route: 'ChildProfile'
    },
    {
      type: 'teacher',
      title: 'Teacher Profile',
      icon: 'chalkboard-teacher',
      route: 'TeacherProfile'
    },
    {
      type: 'finc',
      title: 'FINC Monitor Profile',
      icon: 'user-shield',
      route: 'FincMonitorProfile'
    },
    {
      type: 'parent',
      title: 'Parents\' Profile',
      icon: 'user-friends',
      route: 'ParentsProfile'
    },
    {
      type: 'admin',
      title: 'Administrator Profile',
      icon: 'user-cog',
      route: 'AdminProfile'
    }
  ];

  const handleProfileSelect = (route) => {
    navigation.navigate(route);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.grid}>
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            title={profile.title}
            icon={profile.icon}
            onPress={() => handleProfileSelect(profile.route)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  grid: {
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default SelectProfile;
