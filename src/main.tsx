import React from 'react'
import ReactDOM from 'react-dom'
import { createServer, Model } from 'miragejs'
import {App} from './App'

createServer({
  models: {
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions:[
        {
          id: 1,
          title: 'Freelancer de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createAt: new Date('2022-03-29 20:19')
        },
        {
          id: 2,
          title: 'aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 6000,
          createAt: new Date('2022-03-14 14:19')
        }
      ],
    })
  },

  routes() {
    this.namespace = 'api'
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)      
    })
  }
})

  

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
