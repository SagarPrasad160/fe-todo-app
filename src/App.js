import { BrowserRouter, Routes, Route } from "react-router-dom";

import ActiveTodos from "./components/ActiveTodos";
import CompletedTodos from "./components/CompletedTodos";

import Home from "./components/Home";

import SharedLayout from "./components/SharedLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="active" element={<ActiveTodos />} />
          <Route path="completed" element={<CompletedTodos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
