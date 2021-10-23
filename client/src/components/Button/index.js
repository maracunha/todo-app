import './style.css';

function Button({ isOutlined = false, ...props }) {
  return (
    <button
      type="button"
      className={`button ${isOutlined ? 'outlined' : ''}`}
      {...props}
    />
  );
}

export default Button;
