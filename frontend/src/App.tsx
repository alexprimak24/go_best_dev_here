import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import HelloGo from './components/HelloGo'
import './App.css'

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <HelloGo />
    </QueryClientProvider>
  )
}

export default App
