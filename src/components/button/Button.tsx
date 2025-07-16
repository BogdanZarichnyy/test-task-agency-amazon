import scss from './Button.module.scss';

interface IButton {
  styles?: string ,
  text: string,
  onClick: () => void,
  type?: 'button' | 'submit' | 'reset',
  disabled: boolean,
}

const Button = ({ styles = '', text, onClick, type = 'button', disabled = false }: IButton) => {
  return (
    <button 
      className={[scss.button, styles].join(" ")}
      style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
      onClick={onClick} 
      type={type} 
      disabled={disabled} 
    >
      {text}
    </button>
  )
}

export default Button;