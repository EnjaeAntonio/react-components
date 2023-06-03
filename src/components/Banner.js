import Button from "./Button";

function Banner() {
  return (
    <section className="banner">
        <h1>
            Having fun with React!
        </h1>
        <p>
            This is just a basic paragraph for now but I will add some more relatable content later!
        </p>
        <Button 
        primary="Primary"
        secondary="Secondary"
        ></Button>
    </section>
  )
}

export default Banner;