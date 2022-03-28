import React from 'react'
import ReactDOM from 'react-dom'
import { createServer } from 'miragejs'
import {App} from './App'

createServer({
  routes() {
    this.namespace = 'api'
    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Almoço de final de semana',
          amount: 1000,
          type: 'deposit',
          category: 'Almoço',
          createDat: new Date()
        }
      ]
    })
  }
})

  

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
