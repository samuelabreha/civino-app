const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

const SCREENS_DIR = path.join(__dirname, '../src/screens');
const STYLE_UPDATES = {
  imports: [
    "import { ScreenWrapper } from '../../components/common/ScreenWrapper';",
    "import { colors } from '../../theme/colors';",
    "import { typography } from '../../theme/typography';",
    "import { sharedStyles } from '../../theme/sharedStyles';",
    "import LinearGradient from 'react-native-linear-gradient';",
  ],
  styleReplacements: {
    // Couleurs
    '#FFFFFF': 'colors.background.paper',
    '#F5F5F5': 'colors.background.default',
    '#000000': 'colors.text.primary',
    '#666666': 'colors.text.secondary',
    '#2196F3': 'colors.primary.main',
    '#BDBDBD': 'colors.text.disabled',
    
    // Typographie
    'fontSize: 24': '...typography.styles.h1',
    'fontSize: 20': '...typography.styles.h2',
    'fontSize: 16': '...typography.styles.body1',
    'fontSize: 14': '...typography.styles.body2',
    
    // Styles communs
    'flex: 1,\\n    backgroundColor:': '...sharedStyles.screen,\\n    backgroundColor:',
    'padding: 20,': '...sharedStyles.contentContainer,',
    'borderRadius: 10,': 'borderRadius: 12,',
    'marginBottom: 15,': 'marginBottom: 16,',
  }
};

function updateScreenStyles(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Ajouter les imports nécessaires
  const importIndex = content.indexOf('import');
  STYLE_UPDATES.imports.forEach(importLine => {
    if (!content.includes(importLine)) {
      content = content.slice(0, importIndex) + importLine + '\\n' + content.slice(importIndex);
    }
  });
  
  // Remplacer les styles
  Object.entries(STYLE_UPDATES.styleReplacements).forEach(([oldStyle, newStyle]) => {
    content = content.replace(new RegExp(oldStyle, 'g'), newStyle);
  });
  
  // Wrapper le composant avec ScreenWrapper
  content = content.replace(
    /return \(\n(.*?)\);/s,
    'return (\\n      <ScreenWrapper>\\n        $1\\n      </ScreenWrapper>\\n    );'
  );
  
  // Formatter le code
  content = prettier.format(content, {
    parser: 'babel',
    semi: true,
    singleQuote: true,
    trailingComma: 'es5',
  });
  
  fs.writeFileSync(filePath, content);
}

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('Screen.js')) {
      console.log(`Updating styles in: ${filePath}`);
      updateScreenStyles(filePath);
    }
  });
}

// Démarrer la mise à jour des styles
console.log('Starting style update process...');
processDirectory(SCREENS_DIR);
console.log('Style update complete!');
