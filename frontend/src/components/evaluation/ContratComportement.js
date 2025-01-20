import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

const ContratComportement = ({
  contrat,
  onUpdate,
  onValidate,
  onDelete,
  editable = false,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedObjectifs, setEditedObjectifs] = useState(contrat.objectifs);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      await onUpdate({
        ...contrat,
        objectifs: editedObjectifs,
      });
      setIsEditing(false);
    } catch (error) {
      Alert.alert('Erreur', 'Une erreur est survenue lors de la mise à jour du contrat');
    }
  };

  const handleDelete = () => {
    Alert.alert(
      'Supprimer le contrat',
      'Êtes-vous sûr de vouloir supprimer ce contrat ?',
      [
        {
          text: 'Annuler',
          style: 'cancel',
        },
        {
          text: 'Supprimer',
          onPress: onDelete,
          style: 'destructive',
        },
      ]
    );
  };

  const handleValidate = (objectifId) => {
    Alert.alert(
      'Valider l\'objectif',
      'Êtes-vous sûr de vouloir valider cet objectif ?',
      [
        {
          text: 'Annuler',
          style: 'cancel',
        },
        {
          text: 'Valider',
          onPress: () => onValidate(objectifId),
        },
      ]
    );
  };

  const getProgressColor = (progress) => {
    if (progress >= 75) return '#4CAF50';
    if (progress >= 50) return '#FF9800';
    return '#f44336';
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>{contrat.titre}</Text>
          <Text style={styles.date}>
            {`Du ${format(new Date(contrat.dateDebut), 'dd MMMM yyyy', { locale: fr })} au ${format(
              new Date(contrat.dateFin),
              'dd MMMM yyyy',
              { locale: fr }
            )}`}
          </Text>
        </View>
        {editable && (
          <View style={styles.actions}>
            {isEditing ? (
              <TouchableOpacity style={styles.actionButton} onPress={handleSave}>
                <Icon name="content-save" size={24} color="#2196F3" />
              </TouchableOpacity>
            ) : (
              <>
                <TouchableOpacity style={styles.actionButton} onPress={handleEdit}>
                  <Icon name="pencil" size={24} color="#2196F3" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton} onPress={handleDelete}>
                  <Icon name="delete" size={24} color="#f44336" />
                </TouchableOpacity>
              </>
            )}
          </View>
        )}
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View
            style={[
              styles.progressFill,
              {
                width: `${contrat.progression}%`,
                backgroundColor: getProgressColor(contrat.progression),
              },
            ]}
          />
        </View>
        <Text style={styles.progressText}>{contrat.progression}%</Text>
      </View>

      <ScrollView style={styles.objectifs}>
        {(isEditing ? editedObjectifs : contrat.objectifs).map((objectif, index) => (
          <View key={objectif.id} style={styles.objectifItem}>
            {isEditing ? (
              <TextInput
                style={styles.objectifInput}
                value={objectif.description}
                onChangeText={(text) => {
                  const newObjectifs = [...editedObjectifs];
                  newObjectifs[index] = { ...objectif, description: text };
                  setEditedObjectifs(newObjectifs);
                }}
                multiline
              />
            ) : (
              <View style={styles.objectifContent}>
                <Text style={styles.objectifText}>{objectif.description}</Text>
                {editable && !objectif.valide && (
                  <TouchableOpacity
                    style={styles.validateButton}
                    onPress={() => handleValidate(objectif.id)}
                  >
                    <Icon name="check-circle" size={24} color="#4CAF50" />
                  </TouchableOpacity>
                )}
                {objectif.valide && (
                  <Icon name="check-circle" size={24} color="#4CAF50" />
                )}
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    margin: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
  actions: {
    flexDirection: 'row',
  },
  actionButton: {
    marginLeft: 15,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    marginRight: 10,
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666',
    width: 45,
  },
  objectifs: {
    maxHeight: 300,
  },
  objectifItem: {
    marginBottom: 15,
  },
  objectifContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  objectifText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
  objectifInput: {
    fontSize: 16,
    color: '#333',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 10,
    minHeight: 40,
  },
  validateButton: {
    marginLeft: 10,
  },
});

export default ContratComportement;
