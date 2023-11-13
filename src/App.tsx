import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes'
import { Toaster } from 'react-hot-toast'
const App: React.FC = () => {
  return (
    <div className='App'>
      <div className="toast">
      <Toaster 
        position='top-right'
      />
      </div>
      <RouterProvider
        router={router}
      />
    </div>
  )
}

export default App