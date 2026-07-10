import { HashRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import Services from './pages/Services'
import Login from './pages/Login'
import Navbar from './componenets/Navbar'
import Signup from './pages/Signup'
import Booking from './pages/Booking'
import Member from './pages/Member'
import Profile from './pages/Profile'
import MyBookings from './pages/MyBookings'
import ProviderRegister from './pages/ProviderRegister'
import ProviderDashboard from './pages/ProviderDashboard'
import Account from './pages/Account'
import MyUploads from './pages/MyUploads'
import MobileNavbar from "./componenets/MobileNavbar"
import MobileHeader from "./componenets/MobileHeader"
import CancelBooking from "./pages/CancelBooking"
import AdminLogin from "./pages/AdminLogin"
import AdminDashboard from "./pages/AdminDashboard"
import ServiceManagement from "./pages/ServiceManagement"
import ProviderManagement from "./pages/ProviderManagement"
import BookingManagement from "./pages/BookingManagement"
import CustomerManagement from "./pages/CustomerManagement"
import ScrollToTop from "./pages/ScrollToTop"
import Settings from "./pages/Settings"

function App() {
  return (
    <>
      <HashRouter>
        <ScrollToTop/>
        <Navbar />
        <MobileHeader />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/customerlogin' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/booking/:id' element={<Booking />} />
          <Route path="/member/:category" element={<Member />} />
          <Route path='/profile/:id' element={<Profile />} />
          <Route path='/mybooking' element={<MyBookings />} />
          <Route path='/account' element={<Account />} />
          <Route path='/providerregister' element={<ProviderRegister />} />
          <Route path='/providerdasbord' element={<ProviderDashboard />} />
          <Route path='/myuploads' element={<MyUploads />} />
          <Route path="/cancelbooking/:id" element={<CancelBooking />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/service-management" element={<ServiceManagement />} />
          <Route path="/provider-management" element={<ProviderManagement />} />
          <Route path="/booking-management" element={<BookingManagement />}/>
          <Route path="/customer-management"  element={<CustomerManagement/>}/>
          <Route path="/admin-setting" element={<Settings/>} />
        </Routes>
        <MobileNavbar />
      </HashRouter>
    </>
  )
}

export default App
