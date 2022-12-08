import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>About Skills</h2>
              <p>
                I have learned different programming languages ​​so far and as
                far as my skills are concerned<br></br>
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <h5>Git</h5>
                  <h4>90%</h4>
                </div>
                <div className="item">
                  <h5>Github</h5>
                  <h4>90%</h4>
                </div>
                <div className="item">
                  <h5>HTML</h5>
                  <h4>90%</h4>
                </div>
                <div className="item">
                  <h5>CSS</h5>
                  <h4>75%</h4>
                </div>
                <div className="item">
                  <h5>JavaScript</h5>
                  <h4>75%</h4>
                </div>
                <div className="item">
                  <h5>React</h5>
                  <h4>75%</h4>
                </div>
                <div className="item">
                  <h5>Node js</h5>
                  <h4>75%</h4>
                </div>
                <div className="item">
                  <h5>Express JS</h5>
                  <h4>70%</h4>
                </div>
                <div className="item">
                  <h5>NextJs</h5>
                  <h4>60%</h4>
                </div>
                <div className="item">
                  <h5>NestJs</h5>
                  <h4>70%</h4>
                </div>
                <div className="item">
                  <h5>SQL</h5>
                  <h4>70%</h4>
                </div>
                <div className="item">
                  <h5>mongodb</h5>
                  <h4>70%</h4>
                </div>
                <div className="item">
                  <h5>Wordpress</h5>
                  <h4>70%</h4>
                </div>
                <div className="item">
                  <h5>Figma</h5>
                  <h4>85%</h4>
                </div>
                <div className="item">
                  <h5>Canva</h5>
                  <h4>85%</h4>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
}
