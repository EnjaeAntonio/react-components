function Button(props) {
  return (
    <button className={props.isPrimary ? "btn-primary" : "btn-secondary"}>
        {props.text}
    </button>
  )
}

export default Button;
