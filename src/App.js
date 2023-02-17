import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UsersListPage from './pages/userspage/UsersListPage';
import UserProfilePage from './pages/userprofilepage/UserProfilePage';

function App() {

  console.log("Logging:", process.env.REACT_APP_GITHUB_CLIENT_SECRET)

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<UsersListPage />} />
          <Route path="/user/:nickname" element={<UserProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
