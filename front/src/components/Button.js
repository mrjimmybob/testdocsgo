import styles from './Button.module.css';

const Button = ({ onClick, children, as: Component = 'button', ...rest }) => {
    return (
      <Component className={styles.button} {...rest}>
        {children}
      </Component>
    );
};

export default Button;
