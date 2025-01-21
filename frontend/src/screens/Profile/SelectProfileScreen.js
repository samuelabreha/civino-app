import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { theme } from '../../theme';
import { Card, Typography, Button } from '../../components/common';
import { illustrations } from '../../constants/assets';

const SelectProfileScreen = ({ navigation }) => {
  // Example profiles, in real app this would come from storage/API
  const profiles = [
    {
      id: '1',
      firstName: 'Lucas',
      lastName: 'Martin',
      role: 'enfant',
      class: 'CE2',
    },
    {
      id: '2',
      firstName: 'Marie',
      lastName: 'Dubois',
      role: 'enseignant',
    },
    {
      id: '3',
      firstName: 'Sophie',
      lastName: 'Bernard',
      role: 'parent',
    },
  ];

  const getRoleIcon = (role) => {
    switch (role) {
      case 'enfant':
        return illustrations.child.avatar;
      case 'enseignant':
        return illustrations.teacher.avatar;
      case 'parent':
        return illustrations.parent.avatar;
      case 'moniteurFinc':
        return illustrations.monitor.avatar;
      case 'animatriceReferente':
        return illustrations.animator.avatar;
      default:
        return illustrations.default.avatar;
    }
  };

  const getRoleLabel = (role) => {
    switch (role) {
      case 'enfant':
        return 'Enfant';
      case 'enseignant':
        return 'Enseignant';
      case 'parent':
        return 'Parent';
      case 'moniteurFinc':
        return 'Moniteur FINC';
      case 'animatriceReferente':
        return 'Animatrice Référente';
      default:
        return role;
    }
  };

  const handleSelectProfile = (profile) => {
    // TODO: Implement profile selection logic
    navigation.navigate('Home');
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.headerCard}>
        <Typography variant="h2" style={styles.title}>
          Sélectionner un profil
        </Typography>
        <Button
          variant="primary"
          onPress={() => navigation.navigate('CreateProfile')}
          style={styles.createButton}
        >
          Créer un nouveau profil
        </Button>
      </Card>

      <View style={styles.profilesContainer}>
        {profiles.map((profile) => (
          <Card
            key={profile.id}
            style={styles.profileCard}
            onPress={() => handleSelectProfile(profile)}
          >
            <View style={styles.profileIcon}>
              {getRoleIcon(profile.role)}
            </View>
            <View style={styles.profileInfo}>
              <Typography variant="h3">
                {profile.firstName} {profile.lastName}
              </Typography>
              <Typography variant="subtitle1" style={styles.roleText}>
                {getRoleLabel(profile.role)}
              </Typography>
              {profile.class && (
                <Typography variant="caption" style={styles.classText}>
                  Classe: {profile.class}
                </Typography>
              )}
            </View>
          </Card>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background.grey,
    padding: theme.spacing.md,
  },
  headerCard: {
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
  },
  title: {
    marginBottom: theme.spacing.lg,
    textAlign: 'center',
  },
  createButton: {
    width: '100%',
  },
  profilesContainer: {
    gap: theme.spacing.md,
  },
  profileCard: {
    flexDirection: 'row',
    padding: theme.spacing.lg,
    alignItems: 'center',
    gap: theme.spacing.lg,
  },
  profileIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: theme.colors.primary.light,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInfo: {
    flex: 1,
  },
  roleText: {
    color: theme.colors.text.secondary,
    marginTop: theme.spacing.xs,
  },
  classText: {
    color: theme.colors.text.secondary,
    marginTop: theme.spacing.xs,
  },
});

export default SelectProfileScreen;
