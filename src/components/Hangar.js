import React from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';

const Hangar = ({route, navigation}) => {
  const {p1N, p2N} = route.params;
  return (
    <div>
      <div>Hello {p1N}</div>
      <div>Hello {p2N}</div>
    </div>
  )
}

export default Hangar