import { Component } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Movies from "./components/movies";
import Customers from "./components/common/customers";
import Rentals from "./components/common/rentals";
import NotFound from "./components/common/not-found";
import NavBar from "./components/common/navbar";
import MoviesForm from "./components/common/movieForm";
import LoginForm from "./components/common/loginForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <main className="container">
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/movies/:id" element={<MoviesForm />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/rentals" element={<Rentals />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="/" element={<Navigate to="/movies" replace />} />
            <Route path="*" element={<Navigate to="/not-found" replace />} />
          </Routes>
        </main>
      </>
    );
  }
}

export default App;
