import React from 'react';
import { View, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { theme } from '../../theme';
import Typography from '../../components/common/Typography';
import Card from '../../components/common/Card';
import Icon from '../../components/common/Icon';
import Badge from '../../components/common/Badge';
import { styles } from './styles';

const SchoolCard = ({ school, onPress }) => (
  <Card variant="elevated" style={styles.schoolCard} onPress={onPress}>
    <View style={styles.schoolHeader}>
      <View style={styles.schoolInfo}>
        <Typography variant="subtitle1" weight="semiBold">
          {school.name}
        </Typography>
        <Typography variant="caption" color="secondary">
          {school.type}
        </Typography>
      </View>
      <Badge
        content={`${school.studentCount} élèves`}
        color="primary"
        size="small"
      />
    </View>
    <View style={styles.schoolDetails}>
      <View style={styles.detailItem}>
        <Icon name="map-marker" size={16} color="grey.500" />
        <Typography variant="body2" color="secondary">
          {school.address}
        </Typography>
      </View>
      <View style={styles.detailItem}>
        <Icon name="phone" size={16} color="grey.500" />
        <Typography variant="body2" color="secondary">
          {school.phone}
        </Typography>
      </View>
      <View style={styles.detailItem}>
        <Icon name="email" size={16} color="grey.500" />
        <Typography variant="body2" color="secondary">
          {school.email}
        </Typography>
      </View>
    </View>
  </Card>
);

const SchoolScreen = ({ navigation }) => {
  const schools = [
    {
      id: 1,
      name: 'École Jean Moulin',
      type: 'École Primaire',
      studentCount: 245,
      address: '12 Rue des Écoles, 75001 Paris',
      phone: '01 23 45 67 89',
      email: 'contact@jeanmoulin.edu',
    },
    {
      id: 2,
      name: 'Collège Victor Hugo',
      type: 'Collège',
      studentCount: 520,
      address: '24 Avenue de la République, 75011 Paris',
      phone: '01 98 76 54 32',
      email: 'contact@victorhugo.edu',
    },
  ];

  return (
    <LinearGradient
      colors={theme.colors.background.gradient}
      style={styles.container}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.background.gradient[0]}
      />

      <View style={styles.header}>
        <Typography variant="h4" weight="semiBold">
          Écoles
        </Typography>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('AddSchool')}
        >
          <Icon name="plus" size={24} color="primary" />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Statistics */}
        <View style={styles.statistics}>
          <Card variant="elevated" style={styles.statsCard}>
            <View style={styles.statItem}>
              <Icon name="school" size={24} color="primary" />
              <Typography variant="h4" weight="bold" color="primary">
                15
              </Typography>
              <Typography variant="caption" color="secondary">
                Écoles
              </Typography>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Icon name="account-group" size={24} color="primary" />
              <Typography variant="h4" weight="bold" color="primary">
                2850
              </Typography>
              <Typography variant="caption" color="secondary">
                Élèves
              </Typography>
            </View>
          </Card>
        </View>

        {/* Schools List */}
        <View style={styles.schoolsList}>
          <Typography variant="subtitle1" weight="medium" style={styles.listTitle}>
            Liste des écoles
          </Typography>
          {schools.map((school) => (
            <SchoolCard
              key={school.id}
              school={school}
              onPress={() =>
                navigation.navigate('SchoolDetails', { schoolId: school.id })
              }
            />
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default SchoolScreen;
