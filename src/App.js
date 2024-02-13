import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Home from './components/Home';
import Question from './components/question/Question';
import BiologyQuestion from './components/subjects/BiologyQuestion';
import ChemistryQuestion from './components/subjects/ChemistryQuestion';
import MathQuestion from './components/subjects/MathQuestion';
import Physics from './components/subjects/PhysicsQuestion';
import Subject from './components/subjects/Subject';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/question' element={<Question />} />
          <Route path='/subject' element={<Subject />} />
          <Route path='/physics' element={<Physics />} />
          <Route path='/chemistry' element={<ChemistryQuestion />} />
          <Route path='/math' element={<MathQuestion />} />
          <Route path='/biology' element={<BiologyQuestion />} />
  <Route exact path='/' element={<Home />} />
         {/*<Route exact path='/' element={<Ecommerce />} />
         <Route path='/bye' element={<ByeNow />} />
<Route path='/modal' element={<Modal />} />*/}
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
