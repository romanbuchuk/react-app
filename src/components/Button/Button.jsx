import PropTypes from 'prop-types';
// const Button = ({ children, ...rest }) => {
const Button = ({ children }) => {
    // const { children, ...rest } = props;

    return <button>{children}</button>;
};

Button.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]),
};

export default Button;
