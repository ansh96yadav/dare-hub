import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import DareDetailsPage from './components/DareDetailsPage';
import AuthPage from './components/AuthPage'; 
import GamePage from './components/GamePage';
import ProfilePage from './components/ProfilePage';
import SettingsPage from './components/SettingPage';
import MoreGamesPage from './components/MoreGamesPage';
import NeverHaveIEverPage from './components/NeverHaveIEverPage';
import WouldYouRatherPage from './components/WouldYouRatherPage';
import RapidFirePage from './components/RapidFirePage';
import DumbCharadesPage from './components/DumbCharadesPage';
import MostLikelyToPage from './components/MostLikelyToPage';
import ExploreDaresPage from './components/ExploreDarePage';
import LeaderboardPage from './components/LeaderboardPage';
import CreateDarePage from './components/CreateDarePage';
import NotFoundPage from './components/NotFoundPage';
import StorePage from './components/StorePage';
import FriendsPage from './components/FriendsPage';
import NotificationsPage from './components/NotificationsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* The :id makes it dynamic */}
        <Route path="/dare/:id" element={<DareDetailsPage />} /> 
        <Route path="/login" element={<AuthPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/arcade" element={<MoreGamesPage />} />
        <Route path="/game/nhie" element={<NeverHaveIEverPage />} />
        <Route path="/game/wyr" element={<WouldYouRatherPage />} />
        <Route path="/game/rapid-fire" element={<RapidFirePage />} />
        <Route path="/game/charades" element={<DumbCharadesPage />} />
        <Route path="/game/likely" element={<MostLikelyToPage />} />
        <Route path="/dares" element={<ExploreDaresPage />} />
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/create-dare" element={<CreateDarePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/friends" element={<FriendsPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
      </Routes>
    </Router>
  );
}
export default App;