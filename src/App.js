import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import  {configureStore} from '@reduxjs/toolkit'
import {Provider } from 'react-redux'
import { reducer } from './Store/reducer'
import Home from './Pages/Home/Home'

function App() {
  let store = configureStore({reducer: reducer})
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
