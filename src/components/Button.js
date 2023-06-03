function Button(props) {
  return (
    <section className="button-wrapper">
        <button className="btn-secondary">
            {props.secondary}
        </button>
        <button className="btn-primary">
            {props.primary}
        </button>
    </section>
  )
}

export default Button;