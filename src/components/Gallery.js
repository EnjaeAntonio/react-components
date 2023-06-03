function Gallery(props) {
  return (
    <section className="gallery">
        <div className="grid lg-4">
            {props.movies.map((movie, index) => (
                <div key={index}>
                    <img src={movie.img} alt={movie.name} className="image" />
                    <p>{movie.name}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Gallery;
