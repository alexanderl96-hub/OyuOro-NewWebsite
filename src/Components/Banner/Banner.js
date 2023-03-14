import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import navIcon3 from '../../assets/img/nav-icon3.svg'
 import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
   const [count, setCount] = useState(0);

  const toRotate = [ "Welcome to Afro-Cuban World ","Oyu Oro Dance Company ", "Oyu Oro New York & Cuba "  ];
  const period = 2000;
  const todos = ['https://www.alvinailey.org/sites/default/files/styles/instructor_image/public/2021-05/LaMoraDanysHeadshot.jpeg?itok=-ScRE5Ts',
                 'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/272859203_10224502342260148_41906176074214285_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=NtaDC4LCE6AAX-FO83F&_nc_oc=AQkApyeJ19zuvbflfx3iH7kxXo2t472p1b23a8fSLERyj_-bp1kRhhrJJwTEwGD-7CQ&_nc_ht=scontent-lga3-1.xx&oh=00_AfBGjC46O87lhU6K6k5gc41ZKboJxpl0AzQp0aE-EG1VHw&oe=64161406',
                 'https://epilepsytoronto.org/wp-content/uploads/2015/11/isabel1-e1447956777288-scaled.jpg',
                 'https://cruathletics.com/images/2019/8/26/estrada_isabel_19.jpg',
                 'https://photos.psychologytoday.com/f9f13785-3d23-44e3-9f9d-d1846c05c04f/2/320x400.jpeg',
                 'https://i0.wp.com/isabelohagin.com/wp-content/uploads/2021/09/Isabel-12-2.jpg?resize=683%2C1024&ssl=1']

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  useEffect(() => {
    let time = setInterval(() => {
        setCount(count + 1)
        if(count === (todos.length -1)){
          setCount(0)
        }
      
    }, 9000);

    return () => { clearInterval(time) };
  }, [count])

  return (
    
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                {/* <span className="tagline">Welcome to my Portfolio</span> */}
                <h1><span className="txt-rotate" dataPeriod="1100" data-rotate='["Welcome to Afro-Cuban World", "Oyu Oro Dance Company ", "Oyu Oro New York & Cuba" ]'><span className="wrap">{text}</span></span></h1>
                  <p style={{backgroundColor: '#44424299', borderRadius: '30px', width: '750px', minHeigth: '40px',
                             padding: '10px', letterSpacing: '1px', marginLeft: '30%', color: 'white',
                              marginTop: '10px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting 
                              industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                               when an unknown printer took a galley of type and scrambled it to make a type specimen 
                               book.</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /> </button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  {todos.map((a, ind)=>{
                    return(
                      <>
                     {count === Number(ind) && <img src={a} alt="Header Img" 
                                                style={{width: '200px', height: '195px', borderRadius: '35%', 
                                                        border: '14px solid #44424299'}}/>}
                     </>
                    )
                  })}
                  {/* <img src={navIcon3} alt="Header Img" style={{width: '200px'}}/> */}
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner