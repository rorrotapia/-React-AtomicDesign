import React from 'react';
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import Button, {colors} from "../ui/atoms/Button";

export default {
  title: 'Button',
  component: Button,
decorators: [withKnobs]
};

export const SuivisDefault = () => <Button disabled={boolean("Disabled", false)} icon={text("Icon", "favorite_border")} text={text("Texte", "Suivis")} color={colors.white}/>
export const SuivisActive = () => <Button disabled={boolean("Disabled", false)} icon={text("Icon", "favorite")} text={text("Texte", "Suivis")} color={colors.purple}/>;

export const DecouvrirDefault = () => <Button disabled={boolean("Disabled", false)} icon={text("Icon", "explore")} text={text("Texte", "Découvrir")} color={colors.white}/>
export const DecouvrirActive = () => <Button disabled={boolean("Disabled", false)} icon={text("Icon", "explore")} text={text("Texte", "Découvrir")} color={colors.purple}/>;

export const ParcourirDefault = () => <Button disabled={boolean("Disabled", false)} icon={text("Icon", "filter_none")} text={text("Texte", "Parcourir")} color={colors.white}/>
export const ParcourirActive = () => <Button disabled={boolean("Disabled", false)} icon={text("Icon", "filter_none")} text={text("Texte", "Parcourir")} color={colors.purple}/>;

export const EsportsDefault = () => <Button disabled={boolean("Disabled", false)} icon={text("Icon", "emoji_events")} text={text("Texte", "Esports")} color={colors.white}/>
export const EsportsActive = () => <Button disabled={boolean("Disabled", false)} icon={text("Icon", "emoji_events")} text={text("Texte", "Esports")} color={colors.purple}/>;