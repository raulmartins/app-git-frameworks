import React from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import Title from '../components/title'
import Input from '../components/input'
import CompareRepository from '../components/CompareRepository'

const Main = () => (
  <Provider store={store}>
    <Title />
    <Input />
    <CompareRepository />
  </Provider>
)

export default Main
