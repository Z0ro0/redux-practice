import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Box from './component/Box';
import GrandSonBox from './component/GrandSonBox';

function App() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);

  const increase = () => {
    dispatch({type:"INCREMENT"});

  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>증가</button>
      <Box />
      <GrandSonBox />
    </div>
  );
}

export default App;
