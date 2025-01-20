import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Button } from '../../components/Button';

const Home = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Button
          title="Create a Profile"
          onPress={() => navigation.navigate('CreateProfile')}
          style={styles.button}
        />
        <Button
          title="Select a Profile"
          onPress={() => navigation.navigate('SelectProfile')}
          style={styles.button}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  section: {
    padding: 20,
  },
  button: {
    marginVertical: 10,
    backgroundColor: '#2196F3',
  },
});

export default Home;
