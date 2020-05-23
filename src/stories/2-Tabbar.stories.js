import React from 'react';
import { action } from '@storybook/addon-actions';
import Tabbar, { colors } from '../ui/organisme/Tabbar';
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
    title: 'Tabbar',
    component: Tabbar,
    parameters: {
        componentSubtitle: "La Tabbar est utlisé sur le site pour permettre au viewers de ce naviguer d’un onglet a un autre en connaissant sa position dans l’application. La page suivis est selectionner dès l’ouverture du site.",
        backgrounds: [
            { name: 'default', value: '#000000', default: true }
        ]
    },
    decorators: [withKnobs]
};

export const Grey = () => <Tabbar color={colors.grey}/>;

export const Purple = () => <Tabbar  color={colors.purple}/>;
