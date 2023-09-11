import { store } from "./redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/home-page/HomePage";
import Header from "./components/header/Header";
import GamePage from "./Pages/game-page/game-page";
import OrderPage from "./Pages/order-page/OrderPage";

function App() {
  return (
    <Provider store={store}>
      <Router >
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <Routes>
            <Route path="/app/:title" element={<GamePage />} />
          </Routes>
          <Routes>
            <Route path="/order" element={<OrderPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
