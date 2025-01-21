import React from 'react';
import { View, ScrollView, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { theme } from '../../theme';
import { LAYOUT } from '../../constants/layout';
import Typography from '../../components/common/Typography';
import Card from '../../components/common/Card';
import Avatar from '../../components/common/Avatar';
import Button from '../../components/common/Button';
import { styles } from './styles';

const HomeScreen = () => {
  return (
    <LinearGradient
      colors={theme.colors.background.gradient}
      style={styles.container}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme.colors.background.gradient[0]}
      />
      
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Typography variant="h4" weight="semiBold">
              Bienvenue sur CIVINO
            </Typography>
            <Typography
              variant="body1"
              color="secondary"
              style={styles.headerSubtitle}
            >
              Votre assistant éducatif
            </Typography>
          </View>
          <Avatar
            size="large"
            source={require('../../assets/images/profile.png')}
          />
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <Typography variant="h6" weight="semiBold" style={styles.sectionTitle}>
            Actions rapides
          </Typography>
          <View style={styles.actionButtons}>
            <Button
              title="Nouveau contrat"
              variant="contained"
              style={styles.actionButton}
            />
            <Button
              title="Ajouter un enfant"
              variant="outlined"
              style={styles.actionButton}
            />
          </View>
        </View>

        {/* Recent Activities */}
        <View style={styles.recentActivities}>
          <Typography variant="h6" weight="semiBold" style={styles.sectionTitle}>
            Activités récentes
          </Typography>
          <Card variant="elevated" style={styles.activityCard}>
            <Typography variant="subtitle1" weight="medium">
              Nouveau contrat créé
            </Typography>
            <Typography variant="body2" color="secondary">
              Il y a 2 heures
            </Typography>
          </Card>
          <Card variant="elevated" style={styles.activityCard}>
            <Typography variant="subtitle1" weight="medium">
              Paiement reçu
            </Typography>
            <Typography variant="body2" color="secondary">
              Il y a 5 heures
            </Typography>
          </Card>
        </View>

        {/* Statistics */}
        <View style={styles.statistics}>
          <Typography variant="h6" weight="semiBold" style={styles.sectionTitle}>
            Statistiques
          </Typography>
          <View style={styles.statsGrid}>
            <Card variant="elevated" style={styles.statCard}>
              <Typography variant="h4" weight="bold" color="primary">
                12
              </Typography>
              <Typography variant="body2" color="secondary">
                Enfants actifs
              </Typography>
            </Card>
            <Card variant="elevated" style={styles.statCard}>
              <Typography variant="h4" weight="bold" color="primary">
                8
              </Typography>
              <Typography variant="body2" color="secondary">
                Contrats en cours
              </Typography>
            </Card>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default HomeScreen;
