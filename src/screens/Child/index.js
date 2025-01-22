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

const ChildCard = ({ child, onPress }) => (
  <Card variant="elevated" style={styles.childCard} onPress={onPress}>
    <View style={styles.childCardContent}>
      <Avatar source={child.avatar} size="large" />
      <View style={styles.childInfo}>
        <Typography variant="subtitle1" weight="semiBold">
          {child.name}
        </Typography>
        <Typography variant="body2" color="secondary">
          {child.age} ans
        </Typography>
        <View style={styles.childTags}>
          <Badge
            content={child.status}
            color={child.status === 'Actif' ? 'success' : 'warning'}
            size="small"
          />
        </View>
      </View>
      <Icon name="chevron-right" size={24} color="grey.500" />
    </View>
  </Card>
);

const ChildScreen = ({ navigation }) => {
  const children = [
    {
      id: 1,
      name: 'Emma Martin',
      age: 8,
      status: 'Actif',
      avatar: require('../../assets/images/avatars/child1.png'),
    },
    {
      id: 2,
      name: 'Lucas Dubois',
      age: 7,
      status: 'En attente',
      avatar: require('../../assets/images/avatars/child2.png'),
    },
    // Add more children data here
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
          Enfants
        </Typography>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('AddChild')}
        >
          <Icon name="plus" size={24} color="primary" />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Statistics Section */}
        <View style={styles.statistics}>
          <Card variant="elevated" style={styles.statsCard}>
            <View style={styles.statItem}>
              <Typography variant="h4" weight="bold" color="primary">
                15
              </Typography>
              <Typography variant="caption" color="secondary">
                Total
              </Typography>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Typography variant="h4" weight="bold" color="success">
                12
              </Typography>
              <Typography variant="caption" color="secondary">
                Actifs
              </Typography>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Typography variant="h4" weight="bold" color="warning">
                3
              </Typography>
              <Typography variant="caption" color="secondary">
                En attente
              </Typography>
            </View>
          </Card>
        </View>

        {/* Children List */}
        <View style={styles.childrenList}>
          <Typography variant="subtitle1" weight="medium" style={styles.listTitle}>
            Liste des enfants
          </Typography>
          {children.map((child) => (
            <ChildCard
              key={child.id}
              child={child}
              onPress={() => navigation.navigate('ChildDetails', { childId: child.id })}
            />
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default ChildScreen;
