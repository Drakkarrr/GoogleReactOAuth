import './styles/App.css'
import Header from './components/Header'
import Button from '@mui/material/Button'

function App() {
  return (
    <div className='App'>
      <Header />
      <h1>La photographia initial setup</h1>
      <Button variant='contained'>Hello World</Button>
      <button className='bg-black w-25 hover:bg-blue-700 h-10 border-blue-700 rounded'>
        Button
      </button>
    </div>
  )
}

export default App
