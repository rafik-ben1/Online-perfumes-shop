import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import CartContextProvider from './context/CartContextProvider.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import UserContextProvider from './context/userContextProvider.tsx'

const queryClient  = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} >
      <UserContextProvider>
    <CartContextProvider>
    <App />
    </CartContextProvider>
    </UserContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
