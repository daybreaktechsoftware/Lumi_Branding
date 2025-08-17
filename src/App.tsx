import { useEffect, useState } from "react";
import About from "./components/About";
import AdminDashboard from "./components/AdminDashboard";
import ClientDashboard from "./components/ClientDashboard";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LoginPage from "./components/LoginPage.tsx";
import Services from "./components/Services";
import { authService, User } from "./lib/auth";

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const user = authService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const handleLogin = (user: User) => {
    setCurrentUser(user);
    setShowLogin(false);
  };

  const handleLogout = async () => {
    await authService.logout();
    setCurrentUser(null);
    setShowLogin(false);
  };

  // If user is logged in, show appropriate dashboard
  if (currentUser) {
    if (currentUser.role === "admin") {
      return <AdminDashboard user={currentUser} onLogout={handleLogout} />;
    } else {
      return <ClientDashboard user={currentUser} onLogout={handleLogout} />;
    }
  }

  // If login page is requested, show login
  if (showLogin) {
    return <LoginPage onLogin={handleLogin} />;
  }

  // Default: show main website
  return (
    <div className="min-h-screen bg-beige-1">
      <Header onLoginClick={() => setShowLogin(true)} />
      <Hero />
      <About />
      <Services />
      {/* <Portfolio /> */}
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
