import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Colors from "../particles/Colors";
import MaterialIcon from "material-icons-react";
import {action} from "@storybook/addon-actions";

export const colors = {
    purple: Colors.brand_light,
    white: "white"
};

const ButtonIcon = styled.button`
  background: black;
  margin-right: 8px;
  padding: 5px;
  color: ${props => (props.color === colors.purple ? Colors.brand_light : Colors.neutral_white)};
  font-family: sans-serif;
  font-size: 30px;
  display:block;
  border:none;
`;
const TextButton = styled.div`
  color:${props => (props.color === colors.purple ? Colors.brand_light : Colors.neutral_white)};
  font-size: 10px;
`;


const Button = props => {
    const { text, color, icon } = props;
    return <ButtonIcon onClick={action('clicked')}><MaterialIcon icon={icon} color={color}/><TextButton color={color}>{text}</TextButton></ButtonIcon>
};

Button.propTypes = {
    color: PropTypes.oneOf(Object.keys(colors)),
    text: PropTypes.string
};

Button.defaultProps = {
    color: colors.white
};

export default Button;
