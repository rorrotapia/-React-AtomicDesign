import React from "react";
import PropTypes from "prop-types";
import MaterialIcon from "material-icons-react";

export const colors = {
    purple: "purple",
    white: "white"
};


const TabbarIcons = props => {
    const { color, icon } = props;
    return <Icon><MaterialIcon icon={icon} color={color}/></Icon>
};

TabbarIcons.propTypes = {
    color: PropTypes.oneOf(Object.keys(colors)),
    text: PropTypes.string
};

TabbarIcons.defaultProps = {
    color: colors.white
};

export default TabbarIcons;
