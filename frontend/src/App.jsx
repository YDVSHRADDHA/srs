import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import AreaPage from './pages/AreaPage';
import Contact from './pages/Contact';
import About from './pages/About';
import FindTutors from './pages/FindTutors';
import Blog from './pages/Blog';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';

import OnboardingWizard from './pages/onboarding/OnboardingWizard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tutors" element={<FindTutors />} />
          <Route path="/blog" element={<Blog />} />

          {/* Dynamic SEO Routes */}
          <Route path="/home-tutor-in-katara-hills-bhopal" element={<AreaPage area="Katara Hills" />} />
          <Route path="/home-tutor-in-mp-nagar-bhopal" element={<AreaPage area="MP Nagar" />} />
          <Route path="/home-tutor-in-kolar-road-bhopal" element={<AreaPage area="Kolar Road" />} />
        </Route>

        {/* Isolated Admin Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/onboarding" element={<OnboardingWizard />} />
      </Routes>
    </Router>
  );
}


export default App;
