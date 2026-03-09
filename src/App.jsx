import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <>

         <header>
            <NavBar />
            <DaisyNav />
         </header>

         <main>
            <p>Welcome to my React application!</p>
         </main>

         <footer>
            <p>&copy; 2024 My React App. All rights reserved.</p>
         </footer>  
     
    </>
  )
}

export default App
