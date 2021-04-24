//import orange, butterlettuce, green oval for symbols
import styled from 'styled-components';
import orange from '../images/illusvg/orange.svg';
import butterlettuce from '../images/illusvg/butterlettuce.svg';
import herb from '../images/illusvg/herb.svg';


const CardWrapper = styled.div`
  width: 100%; 
  margin-bottom: 15px;
  background-color: var(--beige);
  border-radius: 25px;
  cursor: pointer;

  .card-container{
    display: flex;
    flex-direction: row;

  }

  .imgag{
    width: 40%;
    background-color: var(--yelloworange);
    border-radius: 25px 0px 0px 25px;
    overflow: hidden;
    position: relative;
  }
  .imgag img{
    height: 100%;
    width: 100%;
  }
  .card-body{
    width: 60%;
  }
`;

const Line = styled.div`
  background-color: var(--palegreen);
  width: 85%;
  margin: 0 auto;
  height: 3px;
`;

const CardHeader = styled.div`
  padding: 15px 15px 5px 15px;
  font-size: 14px;
`;
const CardBody = styled.div`
  padding: 5px 15px 15px 15px;
  font-size: 14px;

  div{
    color: var(--red);
    font-size: 12px;
    margin-top: 10px;
  }
  .produceIcon{
    height: 15px;
  }
  .extra-info{
    margin-top: 0px;
    display: flex; 
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
  }
`;


export default function BigCard(props){
  const {imgUrl, produceName, postOwner, postDesc, expireDate, postDateLast, mileAway, produceType} = props;
    console.log("imgULR:: ", imgUrl);
  let produceTypeImg = produceType === 'fruit' ? <img className="produceIcon" src={orange} alt='fruit'/> : <img className="produceIcon" src={butterlettuce} alt='veggie'/>

  return(
    <CardWrapper>
      <div className="card-container">
        <div className="imgag"><img className="imgag" src={ imgUrl } alt={produceName} /></div>
        <div className="card-body">
          <CardHeader>
            <h4>{produceName}</h4>
            <p>{postOwner}</p>
          </CardHeader>
          <Line/>
          <CardBody>
            <p className="desc">{postDesc}</p>
            <div>
              <p>Expires in {expireDate} days</p>
              <div className="extra-info">
                <span>{postDateLast} days ago  ||  {mileAway} miles away
                </span><span>{produceTypeImg}</span>
              </div>
            </div>
          </CardBody>
        </div>
      </div>
    </CardWrapper>
  )
}