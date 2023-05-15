// import Counter from './components/counter/Counter'
import Create from './components/create/Create'
import Home from './components/home/Home'
import Update from './components/update/Update'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <div>
      {/* <Counter /> */}
      <Router>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/create`} element={<Create />} />
          <Route path={`/update/:id`} element={<Update />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App