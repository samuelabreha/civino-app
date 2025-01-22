import React from 'react';
import { View, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { theme } from '../../theme';
import Typography from '../../components/common/Typography';
import Card from '../../components/common/Card';
import Avatar from '../../components/common/Avatar';
import Icon from '../../components/common/Icon';
import Badge from '../../components/common/Badge';
import { styles } from './styles';

const TeacherCard = ({ teacher, onPress }) => (
  <Card variant="elevated" style={styles.teacherCard} onPress={onPress}>
    <View style={styles.teacherHeader}>
      <Avatar source={teacher.avatar} size="medium" />
      <View style={styles.teacherInfo}>
        <Typography variant="subtitle1" weight="semiBold">
          {teacher.name}
        </Typography>
        <Typography variant="caption" color="secondary">
          {teacher.subject}
        </Typography>
        <View style={styles.teacherTags}>
          <Badge
            content={teacher.status}
            color={teacher.status === 'Actif' ? 'success' : 'warning'}
            size="small"
          />
          <Badge
            content={`${teacher.studentCount} élèves`}
            color="primary"
            size="small"
          />
        </View>
      </View>
      <Icon name="chevron-right" size={24} color="grey.500" />
    </View>
  </Card>
);

const TeacherScreen = ({ navigation }) => {
  const teachers = [
    {
      id: 1,
      name: 'Marie Dubois',
      subject: 'Mathématiques',
      status: 'Actif',
      studentCount: 45,
      avatar: require('../../assets/images/avatars/teacher1.png'),
    },
    {
      id: 2,
      name: 'Pierre Martin',
      subject: 'Sciences',
      status: 'En congé',
      studentCount: 38,
      avatar: require('../../assets/images/avatars/teacher2.png'),
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
          Enseignants
        </Typography>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('AddTeacher')}
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
              <Icon name="account-tie" size={24} color="primary" />
              <Typography variant="h4" weight="bold" color="primary">
                24
              </Typography>
              <Typography variant="caption" color="secondary">
                Enseignants
              </Typography>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Icon name="book-open-variant" size={24} color="primary" />
              <Typography variant="h4" weight="bold" color="primary">
                12
              </Typography>
              <Typography variant="caption" color="secondary">
                Matières
              </Typography>
            </View>
          </Card>
        </View>

        {/* Quick Filters */}
        <View style={styles.filters}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.filterContainer}
          >
            <TouchableOpacity style={[styles.filterChip, styles.filterActive]}>
              <Typography variant="button" color="primary">
                Tous
              </Typography>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterChip}>
              <Typography variant="button" color="secondary">
                Mathématiques
              </Typography>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterChip}>
              <Typography variant="button" color="secondary">
                Sciences
              </Typography>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterChip}>
              <Typography variant="button" color="secondary">
                Langues
              </Typography>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Teachers List */}
        <View style={styles.teachersList}>
          <Typography variant="subtitle1" weight="medium" style={styles.listTitle}>
            Liste des enseignants
          </Typography>
          {teachers.map((teacher) => (
            <TeacherCard
              key={teacher.id}
              teacher={teacher}
              onPress={() =>
                navigation.navigate('TeacherDetails', { teacherId: teacher.id })
              }
            />
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default TeacherScreen;
