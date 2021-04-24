import {useState} from 'react';
import styled from 'styled-components';
import map from '../../images/map.png';
import featuretrade from '../../images/featuretrade.png';
import featuredonate from '../../images/featuredonate.png';
import featurepickup from '../../images/featurepickup.png';
import featurerequest from '../../images/featurerequest.png';
import featuredropoff from '../../images/featuredropoff.png';

import orange from '../../images/illusvg/orange.svg';
import grapes from '../../images/illusvg/grapes.svg';


const FeaturesWrapper = styled.section`
  padding: 75px 100px;
  position: relative;
`;

const FeatureContent = styled.div`
  display: flex;
  flex-direction: row;

  position: relative;
  width: 100%;
  margin-bottom: 50px;

  div .testytext{
    margin-top: 50px;
    font-weight: 600;
    margin-bottom: 30px;
  }

  .map-box{
    margin-bottom: 100px;
    width: 90%;
    position: absolute;
    z-index: -1;
    right: -25vh;
    text-align: center;
  }

  div .map{
    height: 214vh;
  }

  .feature-info{
    margin-top: 25px;
  }
`;

const FeaturesHeader = styled.h3`
  font-size: 72px;
  text-align: left;
`;

const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: var(--darkblue);
  position: absolute;
  z-index: 1;
  left: 0;
`;

const FeaturesBox = styled.div`
  margin: 25px 25px 25px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 75%;

  p{
    font-size: 18px;
    line-height: 30px;
    padding-right: 25px;
    margin-top: 10px;
  }
  img{
    width: 40vh;
    border-radius: 50%;
    border: 10px solid var(--beige);
  }
  .feature-text{
    position: relative;
    width: 400px;
  }

  .bullet{
    position:relative;
  }
`;

const FeatureBullet = styled.div`
  border-radius: 50px;
  width: 15px;
  height: 15px;
  border: 7px solid white;
  background-color: var(--yelloworange);
  display: inline-block;
`;
const MapBullet = styled.div`
  border-radius: 50px;
  width: 16px;
  height: 16px;
  border: 7px solid var(--red);
  background-color: var(--yelloworange);
  display: inline-block;
  cursor: pointer;
`;

const FeatureTitle = styled.h3`
  position: absolute;
  top:0;
  font-size: 36px;
  display: inline-block;
  margin-left: 15px;
  margin-top: -8px;
`;

const BgImg = styled.div`
  position: absolute;
  z-index: -2;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  .orange{
    align-self: flex-end;
    margin-right: 100px;
    margin-top: 14vh;
  }
  .grapes{
    align-self: flex-start;
    width: 20vh;
    margin-bottom: 15vh;
    margin-left: -15vh;
  }
`;
const LineTest = styled.div`
  height: 5px;
  background-color: var(--darkblue);
  width: 260px;
`;
const LineTest2 = styled.div`
  height: 5px;
  background-color: var(--darkblue);
  width: 250px;
`;
const LineTest3 = styled.div`
  height: 5px;
  background-color: var(--darkblue);
  width: 250px;
`;
const LineTest4 = styled.div`
  height: 5px;
  background-color: var(--darkblue);
  width: 250px;
`;
const LineTest5 = styled.div`
  height: 5px;
  background-color: var(--darkblue);
  width: 250px;
`;

const Testimonial = styled.div`
  background-color: white;
  padding: 15px;
  position: absolute;
  z-index: 5;
  width: 310px;
  line-height: 25px;
  border-radius: 15px 15px 15px 0px;
  opacity: 0;
  top: 0px;
  left: 21px;
  pointer-event: none;
  transition: all 200ms ease-in-out;
`;

export default function Features(){
  const [inHover, setHover] = useState(false);
  const [inHover2, setHover2] = useState(false);
  const [inHover3, setHover3] = useState(false);
  const [inHover4, setHover4] = useState(false);
  const [inHover5, setHover5] = useState(false);
  

  return(
    <FeaturesWrapper id="features">
      <BgImg>
        <img className="orange" src={orange} alt="orange"/>
        <img className="grapes" src={grapes} alt="grapes"/>
      </BgImg>
      <FeaturesHeader>Features</FeaturesHeader>
      <Line />
      <FeatureContent>
        <div className="feature-info">
          <FeaturesBox>
            <div className="feature-text">
              <FeatureBullet /> <FeatureTitle>Trade</FeatureTitle>
              <p>Perhaps someone near you has the zucchini you wanted and you have the elusive purple tomato that they are looking for.</p>
            </div>
            <img src={featuretrade} alt="man trading fruit with his neighbor"/>
            <LineTest></LineTest>
            <div className="bullet">
              <MapBullet 
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              />
              <Testimonial style={{top: inHover ? '-165px' : '50px', opacity: inHover ? 1 : 0}}>
                “My neighbor Irma had some cool pears she grew and she was looking for lettuce. 
                Luckily she was nice to meet with me and decided to exchange with her.  It was 
                nice to meet Irma and her pears!” - Tommy
              </Testimonial>
            </div>
          </FeaturesBox>
          <FeaturesBox>
            <div className="feature-text">
              <FeatureBullet /> <FeatureTitle>Donate</FeatureTitle>
              <p>Find food banks around you or give your fruits and vegetables away to other people near you.</p>
            </div>
            <img src={featuredonate} alt="volunteers at food bank"/>
            <LineTest2></LineTest2>
            <div className="bullet">
              <MapBullet 
                onMouseEnter={() => setHover2(true)}
                onMouseLeave={() => setHover2(false)}
              />
              <Testimonial style={{top: inHover2 ? '-140px' : '50px', opacity: inHover2 ? 1 : 0}}>
                “I enjoy helping people in need and think that no one should go hungry. 
                I’m glad this app exists so I don’t have to figure out what donation centers are near me.” - Hannah
              </Testimonial>
            </div>
          </FeaturesBox>
          <FeaturesBox>
            <div className="feature-text">
              <FeatureBullet /> <FeatureTitle>Pick Up</FeatureTitle>
              <p>Would you prefer to just walk over to a neighbor’s house instead of the grocery store, skip the check out line?</p>
            </div>
            <img src={featurepickup} alt="lady picking up fruit" />
            <LineTest3></LineTest3>
            <div className="bullet">
              <MapBullet 
                onMouseEnter={() => setHover3(true)}
                onMouseLeave={() => setHover3(false)}
              />
              <Testimonial style={{top: inHover3 ? '-190px' : '50px', opacity: inHover3 ? 1 : 0}}>
                “Having anxiety when I was little to now made it hard for me to go out to get 
                groceries sometimes, it feel like a chore and then having to wait in line as well. 
                This allows me to get produce and not have to meet the person and it's ORAGNIC!” - Tammy
              </Testimonial>
            </div>
          </FeaturesBox>
          <FeaturesBox>
            <div className="feature-text">
              <FeatureBullet /><FeatureTitle>Request</FeatureTitle>
              <p>Perhaps someone near you has the zucchini you wanted and you have the elusive purple tomato that they are looking for.</p>
            </div>
            <img src={featurerequest} alt="man getting his requested fruit" />
            <LineTest4></LineTest4>
            <div className="bullet">
              <MapBullet 
                onMouseEnter={() => setHover4(true)}
                onMouseLeave={() => setHover4(false)}
              />
              <Testimonial style={{top: inHover4 ? '-190px' : '50px', opacity: inHover4 ? 1 : 0}}>
                “There was a purple tomato my mom used to grow back the last country we lived in and 
                I enjoyed the sweetness of it.  It's hard to find now where I live so it so cool to see
                other neighbors attempt growing it and also offering them to others.” - Abayomi
              </Testimonial>
            </div>
          </FeaturesBox>
          <FeaturesBox>
            <div className="feature-text">
              <FeatureBullet /><FeatureTitle>Drop Off</FeatureTitle>
              <p>Looking for a certain fruit or vegetable? See if your people around you have them!</p>
            </div>
            <img src={featuredropoff} alt="lady going to the lockers to drop off fruit" />
            <LineTest5></LineTest5>
            <div className="bullet">
              <MapBullet 
                onMouseEnter={() => setHover5(true)}
                onMouseLeave={() => setHover5(false)}
              />
              <Testimonial style={{top: inHover5 ? '-195px' : '50px', opacity: inHover5 ? 1 : 0}}>
                “Holy cow this community locker thing been a cool thing to have in our neighborhood! 
                Sometimes I drive by this locker but ever since I started using it, it's been helpful 
                to give away fruit that I have too much of to anyone who is in need” - Jessica
              </Testimonial>
            </div>
          </FeaturesBox>
        </div>
        <div className="map-box">
          <p className="testytext">Hover the dots for testimonials!</p>

          <div className="mapbullets">

          </div>
          <img className="map" src={map} width="70%" alt="map"/>
        </div>
      </FeatureContent>
    </FeaturesWrapper>
  )
}