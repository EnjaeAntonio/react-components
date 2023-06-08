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
        <div className="button-wrapper">
        <Button 
          isPrimary={false}
          text={props.secondary}
        />
        <Button 
          isPrimary={true}
          text={props.primary}
        />
        </div>

    </section>
  )
}

export default Banner;
