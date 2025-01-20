import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../../../styles/globalStyles';
import Header from '../../../components/Header';
import Dropdown from '../../../components/Dropdown';

const SaisieStatutScreen = ({ navigation }) => {
  const [statut, setStatut] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const statuts = [
    'Enfant',
    'Enseignant',
    'Moniteur FINC',
    'Parent',
    'Administrateur',
    'Animatrice Référente'
  ];

  const handleStatutChange = (selectedStatut) => {
    setStatut(selectedStatut);
    navigation.navigate('SaisieNom', { statut: selectedStatut });
  };

  return (
    <View style={styles.container}>
      <Header title="Sélection du statut" />
      <View style={styles.content}>
        <Dropdown
          label="Sélectionnez votre statut"
          value={statut}
          options={statuts}
          onChange={handleStatutChange}
          visible={dropdownVisible}
          onClose={() => setDropdownVisible(!dropdownVisible)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 16,
  },
});

export default SaisieStatutScreen;
