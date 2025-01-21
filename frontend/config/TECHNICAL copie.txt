# Documentation Technique - Civino

## Architecture

### Front-end
- **Framework** : React Native + Expo
- **State Management** : Redux + Redux Toolkit
- **Navigation** : React Navigation
- **Styles** : StyleSheet + Responsive Design
- **Tests** : Jest + React Testing Library

### Back-end
- **Framework** : Django + Django REST Framework
- **Base de données** : PostgreSQL
- **Cache** : Redis
- **WebSocket** : Django Channels
- **Tests** : pytest

## Structure du Projet

```
src/
├── Front-end/
│   ├── src/
│   │   ├── components/      # Composants réutilisables
│   │   ├── views/          # Pages et écrans
│   │   ├── services/       # Services API
│   │   ├── store/          # State management
│   │   ├── styles/         # Styles globaux
│   │   └── utils/          # Utilitaires
│   └── scripts/            # Scripts de développement
│
└── Back-end/
    ├── api/                # Endpoints API
    ├── translation/        # Logique métier
    └── tests/             # Tests unitaires
```

## Composants Principaux

### Navigation
- `ResponsiveNavigation` : Navigation adaptative web/mobile
- `BottomTabNavigator` : Navigation mobile
- `DrawerNavigator` : Menu latéral (desktop)

### Layout
- `ResponsiveContainer` : Conteneur adaptatif
- `ResponsiveGrid` : Grille responsive
- `Card` : Composant carte

### Formulaires
- `Input` : Champ de saisie
- `Button` : Bouton personnalisé
- `Form` : Gestionnaire de formulaire

## State Management

### Store Structure
```javascript
{
  auth: {
    user: null,
    token: null,
    loading: false
  },
  translation: {
    items: [],
    current: null,
    filters: {}
  },
  notifications: {
    items: [],
    unread: 0
  }
}
```

### Actions Principales
- `auth/login`
- `auth/logout`
- `translation/fetch`
- `translation/update`
- `notifications/fetch`

## API Endpoints

### Authentication
- POST `/api/auth/login/`
- POST `/api/auth/logout/`
- GET `/api/auth/user/`

### Traduction
- GET `/api/translations/`
- POST `/api/translations/`
- PUT `/api/translations/:id/`
- DELETE `/api/translations/:id/`

### Notifications
- GET `/api/notifications/`
- PUT `/api/notifications/:id/read/`
- DELETE `/api/notifications/:id/`

## WebSocket Events

### Traduction
- `translation.update`
- `translation.delete`
- `translation.comment`

### Notifications
- `notification.new`
- `notification.read`

## Responsive Design

### Breakpoints
```javascript
const breakpoints = {
  smallPhone: 320,
  phone: 375,
  tablet: 768,
  desktop: 1024,
  largeDesktop: 1440
};
```

### Media Queries
- Mobile : < 768px
- Tablet : 768px - 1024px
- Desktop : > 1024px

## Performance

### Optimisations
- Lazy loading des composants
- Mise en cache des traductions
- Compression des images
- Code splitting

### Métriques
- First Paint : < 1s
- Time to Interactive : < 3s
- Performance Score : > 90

## Sécurité

### Authentification
- JWT Tokens
- Refresh Tokens
- CSRF Protection

### API
- Rate Limiting
- Input Validation
- XSS Protection

## Tests

### Front-end
```bash
# Tests unitaires
npm run test

# Tests e2e
npm run test:e2e
```

### Back-end
```bash
# Tests unitaires
python manage.py test

# Tests de couverture
pytest --cov
```

## Déploiement

### Production
```bash
# Build front-end
npm run build
npm run build:web

# Build back-end
python manage.py collectstatic
python manage.py migrate
```

### Variables d'Environnement
```env
# Front-end
REACT_APP_API_URL=
REACT_APP_WS_URL=

# Back-end
DATABASE_URL=
REDIS_URL=
SECRET_KEY=
```

## Maintenance

### Logs
- Application : `/var/log/civino/app.log`
- Accès : `/var/log/civino/access.log`
- Erreurs : `/var/log/civino/error.log`

### Monitoring
- New Relic
- Sentry
- ELK Stack

### Backup
- Base de données : Quotidien
- Médias : Hebdomadaire
- Configuration : À chaque déploiement
