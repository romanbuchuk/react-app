import PropTypes from 'prop-types';
// const Button = ({ children, ...rest }) => {
const Button = ({ children, onClick }) => {
    // const { children, ...rest } = props;

    return <button onClick={onClick}>{children}</button>;
};

Button.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]),
    onClick: PropTypes.func,
};

export default Button;
