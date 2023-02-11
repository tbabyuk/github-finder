import Navbar from './components/Navbar';
import SingleUser from './pages/SingleUser';
import UsersList from './pages/UsersList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  console.log("Logging:", process.env.REACT_APP_GITHUB_CLIENT_SECRET)

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="/user/:nickname" element={<SingleUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
