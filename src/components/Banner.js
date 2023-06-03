import Button from "./Button";

function Banner(props) {
  return (
    <section className="banner">
        <h1>
            {props.title}
        </h1>
        <p>
            {props.desc}
        </p>
        <Button 
          primary={props.primary}
          secondary={props.secondary}
        ></Button>
    </section>
  )
}

export default Banner;