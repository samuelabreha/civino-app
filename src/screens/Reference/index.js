import React from 'react';
import { View, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { theme } from '../../theme';
import Typography from '../../components/common/Typography';
import Card from '../../components/common/Card';
import Icon from '../../components/common/Icon';
import Badge from '../../components/common/Badge';
import { styles } from './styles';

const ResourceCard = ({ resource, onPress }) => (
  <Card variant="elevated" style={styles.resourceCard} onPress={onPress}>
    <View style={styles.resourceHeader}>
      <View style={styles.resourceIcon}>
        <Icon
          name={resource.type === 'pdf' ? 'file-pdf-box' : 'file-document'}
          size={24}
          color="primary"
        />
      </View>
      <View style={styles.resourceInfo}>
        <Typography variant="subtitle1" weight="semiBold">
          {resource.title}
        </Typography>
        <Typography variant="caption" color="secondary">
          {resource.category}
        </Typography>
      </View>
      <Badge
        content={resource.type.toUpperCase()}
        color="primary"
        size="small"
      />
    </View>
    <Typography variant="body2" color="secondary" style={styles.resourceDescription}>
      {resource.description}
    </Typography>
    <View style={styles.resourceFooter}>
      <View style={styles.resourceMeta}>
        <Icon name="clock-outline" size={16} color="grey.500" />
        <Typography variant="caption" color="secondary">
          {resource.updatedAt}
        </Typography>
      </View>
      <TouchableOpacity style={styles.downloadButton}>
        <Icon name="download" size={20} color="primary" />
      </TouchableOpacity>
    </View>
  </Card>
);

const ReferenceScreen = ({ navigation }) => {
  const resources = [
    {
      id: 1,
      title: 'Guide de l\'animateur',
      category: 'Documentation',
      type: 'pdf',
      description: 'Guide complet pour les animateurs CIVINO avec les meilleures pratiques et conseils.',
      updatedAt: 'Mis à jour il y a 2 jours',
    },
    {
      id: 2,
      title: 'Activités pédagogiques',
      category: 'Ressources',
      type: 'doc',
      description: 'Collection d\'activités éducatives pour différents groupes d\'âge.',
      updatedAt: 'Mis à jour il y a 1 semaine',
    },
  ];

  const categories = [
    { id: 1, name: 'Documentation', count: 15 },
    { id: 2, name: 'Ressources', count: 23 },
    { id: 3, name: 'Formulaires', count: 8 },
    { id: 4, name: 'Guides', count: 12 },
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
          Référence
        </Typography>
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => navigation.navigate('SearchReference')}
        >
          <Icon name="magnify" size={24} color="primary" />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Categories */}
        <View style={styles.categories}>
          <Typography variant="subtitle1" weight="medium" style={styles.sectionTitle}>
            Catégories
          </Typography>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryContainer}
          >
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={styles.categoryCard}
                onPress={() => navigation.navigate('CategoryDetails', { categoryId: category.id })}
              >
                <Typography variant="subtitle2" weight="medium">
                  {category.name}
                </Typography>
                <Badge
                  content={category.count.toString()}
                  color="primary"
                  size="small"
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Recent Resources */}
        <View style={styles.resources}>
          <Typography variant="subtitle1" weight="medium" style={styles.sectionTitle}>
            Ressources récentes
          </Typography>
          {resources.map((resource) => (
            <ResourceCard
              key={resource.id}
              resource={resource}
              onPress={() =>
                navigation.navigate('ResourceDetails', { resourceId: resource.id })
              }
            />
          ))}
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActions}>
          <Typography variant="subtitle1" weight="medium" style={styles.sectionTitle}>
            Actions rapides
          </Typography>
          <View style={styles.actionGrid}>
            <TouchableOpacity
              style={styles.actionCard}
              onPress={() => navigation.navigate('UploadResource')}
            >
              <Icon name="upload" size={24} color="primary" />
              <Typography variant="button" style={styles.actionText}>
                Ajouter une ressource
              </Typography>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.actionCard}
              onPress={() => navigation.navigate('ManageCategories')}
            >
              <Icon name="folder" size={24} color="primary" />
              <Typography variant="button" style={styles.actionText}>
                Gérer les catégories
              </Typography>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default ReferenceScreen;
