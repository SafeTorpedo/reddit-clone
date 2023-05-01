import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import { Provider } from "./context/Provider";
import Post from "./components/Post";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/posts" element={<Posts />} />
                    <Route
                        path="/posts/:id"
                        element={
                            <Provider>
                                <Post />
                            </Provider>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
