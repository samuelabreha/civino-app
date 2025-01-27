import React from 'react';

const AccessibilityComponent = () => {
    return (
        <div>
            <h2>Accessibilité</h2>
            <p>Cette application respecte les normes WCAG 2.1 pour garantir l'accessibilité à tous les utilisateurs.</p>
            <ul>
                <li>Support des lecteurs d'écran</li>
                <li>Navigation au clavier</li>
                <li>Contraste suffisant</li>
                <li>Textes redimensionnables</li>
            </ul>
            <button onClick={() => alert('Informations sur l’accessibilité')}>Plus d'informations</button>
            <button>Interagir avec le composant d'accessibilité</button>
        </div>
    );
};

export default AccessibilityComponent;
