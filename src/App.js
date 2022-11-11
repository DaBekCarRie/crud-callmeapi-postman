import Navbar from "./components/Navbar";
import Users from "./components/Users";
import {Routes,Route,Link} from 'react-router-dom'
import UserCreate from "./components/UserCreate";
import UserUpdate from "./components/UserUpdate";



function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Users/>}/>
        <Route path="create" element={<UserCreate/>}/>
        <Route path="update/:id" element={<UserUpdate/>}/>
      </Routes>
    </div>
  );
}

export default App;
