import {Route , Routes} from 'react-router-dom';
import Homepage from './pages/homePage';
import Pagenotfound from './pages/pagenotfound';
import Aboutpage from './pages/about';
import Login from './pages/auth/login';
import SignUp from './pages/auth/signup';
import Dashboard from './pages/user/dashboard';
import Privateroute from './components/routes/privateroutes';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Privateroute/>}>
          <Route path='' element={<Dashboard/>} />
        </Route>
        <Route path="/about" element={<Aboutpage/>}/>
        <Route path='/*' element={<Pagenotfound/>}/>
      </Routes>
      
    </>
  );
}

export default App;
