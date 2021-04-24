import styled from 'styled-components';
import {Link} from 'react-router-dom';

import lynnprofileicon from '../../images/icons/lynnprofileicon.svg';
import chatemoji from '../../images/icons/chatemoji.svg';

import orange from '../../images/illusvg/orange.svg';
import orange1 from '../../images/orange1.png';
import orange2 from '../../images/orange2.png';
import orange3 from '../../images/orange3.png';
import butterlettuce from '../../images/illusvg/butterlettuce.svg';
import herb from '../../images/illusvg/herb.svg';
import searchicon from '../../images/icons/searchicon.svg';

import BigCard from '../../components/BigCard';

import {pickUpListings, tradeListings, requestListings} from '../../ListingsData';

const DashboardHeader = styled.div`
  padding: 0 25px;
  height: 69px;
  border-bottom: 1px solid var(--darkblue);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: white;
  position: fixed;
  z-index: 1;
  width: 79%;

  .right {
    display: flex;
    flex-direction: row;
    align-items: center;
    > * + *{
      margin-left: 10px;
    }
  }

  .search{
    width: 70%;
    position: relative;
  }

  .search-icon{
    position: absolute;
    left: 0px;
    top: 14px;
    color: white;
    font-weight: 600;
    display: block;
    padding: 0px 10px;
    border-radius: 50px;
    transition: all 250ms ease-in-out;
  }

  .profile{
    height: 40px;
  }
  .chat{
    height: 45px;
  }

  input{
    height: 45px;
    background-color: var(--beige);
    border-radius: 50px;
    border: 3px solid var(--green);
    width: 90%;
    padding: 0 20px 0 40px;
    transition: all 200ms ease-in-out;
  }
`;

const SearchBar = styled.input`
  font-family: var(--monty);
  &:focus{
    outline: 0px solid white;
    border: 3px solid var(--teal);
  }
`;

const DashboardBody = styled.div`
  padding-top: 70px;
  font-size: 14px;

  input{
    height: 40px;
    background-color: var(--beige);
    border-radius: 50px;
    border: 3px solid white;
    width: auto;
    padding: 0 20px;
    font-family: var(--monty);
    transition: all 200ms ease-in-out;
  }

  input:focus{
    outline: 0px solid white;
    border: 3px solid var(--teal);
  }
`;

const FilterWrapper = styled.div`
  padding: 0 25px;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  p{
    margin-right: 20px;
  }
  > * + *{
    margin-left: 25px;
  }

  span{
    color: white;
    display: block;
    background-color: var(--green);
    padding: 10px 25px;
    border-radius: 50px;
    transition: all 250ms ease-in-out;
  }
  span:hover{
    cursor: pointer;
    background-color: var(--submitorange);
  }
`;
const ProduceListWrapper = styled.div`
  // background-color: lightgrey;
  height: 100%;
  display: flex;
  flex-direction: row;
  margin: 25px 25px;

  .latest{
    width: 100%;
  }

  .latest-header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .latest-header span{
    color: var(--red);
    text-decoration: underline;
    font-weight: 800;
    cursor: pointer;
  }
  
  .pickup-box::-webkit-scrollbar {
    width: 5px;
  }
  
  /* Track */
  .pickup-box::-webkit-scrollbar-track {
    background: #f1f1f1; 
    border-radius: 25px;
  }
   
  /* Handle */
  .pickup-box::-webkit-scrollbar-thumb {
    background: var(--green); 
    border-radius: 25px;
  }
  
  /* Handle on hover */
  .pickup-box::-webkit-scrollbar-thumb:hover {
    background: var(--green); 
    border-radius: 25px;
  }

  .pickup-box{
    height: 65vh;
    overflow-y: scroll;
    margin-top: 15px;
    padding: 0 15px 15px 0;
  }

  h2{
    color: var(--yelloworange);
    font-weight: 400;
    font-size: 2em;
    display:inline;
  }
  > * + *{
    margin: 0 0 0 25px;
  }
`;

const Line = styled.div`
  background-color: var(--palegreen);
  width: 100%;
  margin: 0 auto;
  height: 3px;
`;

export default function DashboardRight(props){

  console.log(pickUpListings);
  let pickUpBox = pickUpListings.pickuplist.map((produce) => {
    return( 
      <BigCard key={produce._id} id={produce._id} 
               imgUrl={orange1} produceName={produce.produceName} 
               postOwner={produce.postOwner} postDesc={produce.postDesc} 
               expireDate={produce.expireDate} postDateLast={produce.postDateLast} 
               mileAway={produce.mileAway} produceType={produce.produceType} />
    )
  });
  let tradeBox = tradeListings.tradelist.map((produce) => {
    return( 
      <BigCard key={produce._id} id={produce._id} 
               imgUrl={orange2} produceName={produce.produceName} 
               postOwner={produce.postOwner} postDesc={produce.postDesc} 
               expireDate={produce.expireDate} postDateLast={produce.postDateLast} 
               mileAway={produce.mileAway} produceType={produce.produceType} />
    )
  });
  let requestBox = requestListings.requestlist.map((produce) => {
    return( 
      <BigCard key={produce._id} id={produce._id} 
               imgUrl={orange3} produceName={produce.produceName} 
               postOwner={produce.postOwner} postDesc={produce.postDesc} 
               expireDate={produce.expireDate} postDateLast={produce.postDateLast} 
               mileAway={produce.mileAway} produceType={produce.produceType} />
    )
  });

  return(
    <>
      <DashboardHeader>
        <div className="search">
          <img className="search-icon"src={searchicon} height='25px'/>
          <SearchBar placeholder="Search in Fresh Exchange" />
          {/* <span>Go</span>  */}
        </div>
        <div className="right">
           <p>Welcome, <b>Lynn</b>!</p>
           <img src={chatemoji} alt="My chats" className="chat"/>
           {/* //make a function to call history and move to / and also setLangToShow */}
           <Link to='/'><img src={lynnprofileicon} alt="my profile" className="profile" /></Link>
        </div>
      </DashboardHeader>
      <DashboardBody>
          <FilterWrapper>
            <p><b>Filters:</b></p>
            <input placeholder="Choose Fruit/Veggie"/>  <input placeholder="Miles Away"/>  <input placeholder="Expired when"/>  <input placeholder="Last Posted"/>
            <span><b>+ New Post</b></span>
          </FilterWrapper>
          <ProduceListWrapper>
            <div className="latest pickup">
            <div className="latest-header"><h2>Latest Pick Up</h2><span>View more</span></div>
              <Line />
              <div className="pickup-box">
                  {pickUpBox}
              </div>
            </div>
            <div className="latest trades">
            <div className="latest-header"><h2>Latest Trades</h2><span>View more</span></div>
              <Line />
              <div className="pickup-box">
                  {tradeBox}
              </div>
            </div>
            <div className="latest requests">
              <div className="latest-header"><h2>Latest Requests</h2><span>View more</span></div>
              <Line />
              <div className="pickup-box">
                  {requestBox}
              </div>
            </div>
          </ProduceListWrapper>
      </DashboardBody>
    </>
  )
}