import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { CreatePost } from "./components/CreatePost/CreatePost";
import { Posts } from "./components/Posts/Posts";
import SinglePost from "./components/SinglePost/SinglePost";

function App() {
  return (
    <HashRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/capstone-project">
            Node Blog
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/capstone-project/#/CreatePost"
                >
                  CreatePost
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/CreatePost" element={<CreatePost />} />
        <Route path="/SinglePost/:postId" element={<SinglePost />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
