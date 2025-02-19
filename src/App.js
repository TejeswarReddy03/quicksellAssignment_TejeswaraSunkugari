import React, { useEffect } from 'react'
import './App.css';
import TopNav from './components/Navbar/Navbar';
// import Card from './components/Card/Card';
import DashView from './components/DashBoard/DashBoardView';
import { useDispatch, useSelector} from 'react-redux'
import { fetchAllData } from './Actions/DataAction';
import Loading from './components/LoadingScreen/LoadingScreen';

const App = () => {
  const dispatch = useDispatch();
  const {allTickets} = useSelector(state => state.DataReducer);
   
  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch])

  return allTickets ? (
    <div style={{paddingTop : "9px"}} >
      <TopNav/>
      <hr style={{marginTop : "9px"}} />
      <DashView/>
    </div>
  ) : <Loading/>
}

export default App