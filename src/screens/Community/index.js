import React from 'react';
import { View, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { theme } from '../../theme';
import Typography from '../../components/common/Typography';
import Card from '../../components/common/Card';
import Avatar from '../../components/common/Avatar';
import Icon from '../../components/common/Icon';
import Button from '../../components/common/Button';
import { styles } from './styles';

const EventCard = ({ event, onPress }) => (
  <Card variant="elevated" style={styles.eventCard} onPress={onPress}>
    <View style={styles.eventHeader}>
      <Typography variant="subtitle1" weight="semiBold">
        {event.title}
      </Typography>
      <Typography variant="caption" color="primary">
        {event.date}
      </Typography>
    </View>
    <Typography variant="body2" color="secondary" style={styles.eventDescription}>
      {event.description}
    </Typography>
    <View style={styles.eventFooter}>
      <View style={styles.participants}>
        {event.participants.slice(0, 3).map((participant, index) => (
          <Avatar
            key={participant.id}
            source={participant.avatar}
            size="small"
            style={[styles.participantAvatar, { zIndex: 3 - index }]}
          />
        ))}
        {event.participants.length > 3 && (
          <View style={styles.moreParticipants}>
            <Typography variant="caption" color="secondary">
              +{event.participants.length - 3}
            </Typography>
          </View>
        )}
      </View>
      <Button
        title="Participer"
        variant="outlined"
        size="small"
        onPress={() => {}}
      />
    </View>
  </Card>
);

const CommunityScreen = ({ navigation }) => {
  const events = [
    {
      id: 1,
      title: 'Atelier Créatif',
      date: '25 Jan 2025',
      description: 'Venez participer à notre atelier de création artistique pour les enfants de 6 à 12 ans.',
      participants: [
        { id: 1, avatar: require('../../assets/images/avatars/user1.png') },
        { id: 2, avatar: require('../../assets/images/avatars/user2.png') },
        { id: 3, avatar: require('../../assets/images/avatars/user3.png') },
        { id: 4, avatar: require('../../assets/images/avatars/user4.png') },
      ],
    },
    {
      id: 2,
      title: 'Sortie Nature',
      date: '28 Jan 2025',
      description: 'Découverte de la faune et de la flore locale avec un guide naturaliste.',
      participants: [
        { id: 5, avatar: require('../../assets/images/avatars/user5.png') },
        { id: 6, avatar: require('../../assets/images/avatars/user6.png') },
      ],
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
          Communauté
        </Typography>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('CreateEvent')}
        >
          <Icon name="plus" size={24} color="primary" />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Quick Stats */}
        <View style={styles.statsContainer}>
          <Card variant="elevated" style={styles.statsCard}>
            <View style={styles.statItem}>
              <Icon name="account-group" size={24} color="primary" />
              <Typography variant="h4" weight="bold" color="primary">
                156
              </Typography>
              <Typography variant="caption" color="secondary">
                Membres
              </Typography>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Icon name="calendar" size={24} color="primary" />
              <Typography variant="h4" weight="bold" color="primary">
                8
              </Typography>
              <Typography variant="caption" color="secondary">
                Événements
              </Typography>
            </View>
          </Card>
        </View>

        {/* Upcoming Events */}
        <View style={styles.eventsSection}>
          <Typography variant="subtitle1" weight="medium" style={styles.sectionTitle}>
            Événements à venir
          </Typography>
          {events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onPress={() => navigation.navigate('EventDetails', { eventId: event.id })}
            />
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default CommunityScreen;
