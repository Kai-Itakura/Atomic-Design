type ButtonProps = {
  label: string
  text: string
  disabled: boolean
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Button = (props: ButtonProps) => {
  const { label, text, disabled, onClick } = props

  return (
    <div>
      <span>{label}</span>
      <button disabled={disabled} onClick={onClick}>
        {text}
      </button>
    </div>
  )
}

export default Button
