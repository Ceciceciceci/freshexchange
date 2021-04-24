import styled from 'styled-components';
import {Container, Row, Col} from 'react-bootstrap';
import Sidebar from '../components/Navigations/Sidebar';
import DashboardRight from './Dashboard/DashboardRight';

const DashboardWrapper = styled.section`
  margin-left: 250px;
  position: relative;
`;

export default function Dashboard(props){
  const {setLangShow} = props;
  setLangShow(false);

  return(
    <>
      <Sidebar></Sidebar>
      <DashboardWrapper>
          <DashboardRight>

          </DashboardRight>
      </DashboardWrapper>
    </>
  )
}