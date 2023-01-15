import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from '../assets/img/arrow1.svg';
import arrow2 from '../assets/img/arrow2.svg';
import colorSharp from '../assets/img/color-sharp.png';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Experience</h2>
              {/* <p>I have learned different programming languages ​​so far and as far as my skills are concerned<br></br></p> */}
              {/* <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider"> */}
              <div className="item">
                {/* <img src={meter1} alt="Image" /> */}
                <h5>
                  Full Stack Developer | Integrify | Helsinki, Finland | May
                  2021 – December 2021
                  <p>
                    • Taking numerous responsibilities in front-end development
                    with JavaScript and TypeScript and applied frameworks and
                    other tools such as React.js and Redux among many others.
                    <br />• Contributed to the back-end development of various
                    projects with Node.js and Express.js.
                  </p>
                </h5>
                ----------------------------------------------------------------
              </div>
              <div className="item">
                {/* <img src={meter2} alt="Image" /> */}
                <h5>
                  Full Stack Developer | Miragel Oy | Helsinki, Finland |
                  January 2022 – August 2022
                  <p>
                    • Developing web version of existing real estate software
                    using React.js, Redux.js, Typescript, C# and .Net.
                  </p>
                </h5>
                --------------------------------------------------------------------------------------------------------------------------------
              </div>
              <div className="item">
                {/* <img src={meter3} alt="Image" /> */}
                <h5>
                  CTO | Full Stack Developer, Board Member | Balticauto Oy |
                  Turku, Finland | September 2019 – July 2022
                  <p>
                    • Responsible for handling day-today operations of the
                    business. <br />• Developing van rental website using
                    Wordpress and involved in other projects using MERN
                    technology stack.
                  </p>
                </h5>
                --------------------------------------------------------------------------------------------------------------------------------
              </div>
              <div className="item">
                {/* <img src={meter3} alt="Image" /> */}
                <h5>
                  Enthusiast | Metatrader Programmer | Cryptocurrency & Forex
                  |Turku, Finland | September 2014 – August 2019
                  <p>
                    • Responsible for making Indicators and Expert Advisors to
                    simplify and automate trading.
                  </p>
                </h5>
              </div>
              {/* </Carousel> */}
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
