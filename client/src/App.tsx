import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/posts" element={<Posts />} />
                    <Route path="/posts/:id" element={null} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
