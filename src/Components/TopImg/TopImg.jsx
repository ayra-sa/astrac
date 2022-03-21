const TopImg = ({topImg}) => {
    return (
        <section
          className="image-top"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="container">
            <img src={topImg} alt="db" />
          </div>
        </section>
    )
}

export default TopImg