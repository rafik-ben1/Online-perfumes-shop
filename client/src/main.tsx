import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import CartContextProvider from './context/CartContext.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient  = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} >
    <CartContextProvider>
    <App />
    </CartContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
