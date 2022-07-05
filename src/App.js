import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import HomePageLayout from "./components/templates/HomePageLayout.js";
import BlogPageLayout from "./components/templates/BlogPageLayout.js";
import UserRegistrationPageLayout from "./components/templates/UserRegistrationPageLayout.js";
import SimplePageLayout from "./components/templates/SimplePageLayout.js";
import { Route, Switch } from "react-router-dom";
import Platform from "./components/pages/Platform.js";
import Login from "./components/pages/Login.js";
import NewsAndEvents from "./components/pages/NewsAndEvents.js";
import Resources from "./components/pages/Resources.js";
import AdminPanel from "./components/pages/AdminPanel.js";
import Leadership from "./components/pages/Leadership.js";
import UserRegistration from "./components/pages/UserRegistration.js";
import { UserProvider } from "./auth/UserProvider.js";
import ContactUsPageLayout from "./components/templates/ContactUsPageLayout.js";
import ContactUs from "./components/pages/ContactUs.js";
import { UserContext } from "./auth/UserProvider.js";
import AboutUs from './components/pages/AboutUs.js';
import UserAccount from "./components/pages/UserAccount.js";
import { VegaVaultPage } from "./components/pages/VegaVault";

function App() {
  const { user, setUserInfo, logout } = useContext(UserContext);

  return (
    <UserProvider value={(user, setUserInfo, logout)}>
      <Switch>
        <Route path="/contactus" component={ContactUs} exact />
        <Route path="/leadership" component={Leadership} exact />
        <Route path="/news" component={NewsAndEvents} exact />
        <Route path="/platform" component={Platform} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/aboutus" component={AboutUs} exact />
        <Route path="/account" component={UserAccount} exact />
        <Route path="/resources" component={Resources} exact />
        <Route path="/adminpanel" component={AdminPanel} exact />
        <Route path="/vegavault" component={VegaVaultPage} exact />
        <Route path="/" component={HomePageLayout} />
      </Switch>
    </UserProvider>
  );
}

export default App;
