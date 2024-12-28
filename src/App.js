import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/mainLayout";
import Index from "./pages";
// import Article from './pages/article';
import Berita from "./pages/berita";
import Ekref from "./pages/ekref";
import Login from "./pages/login";
import Tentang from "./pages/tentang";
import ProtectedRoute from "./utils/protectedRoute";
import ArticleDetail from "./pages/article-detail";
import ScrollToTop from "./utils/scrollToTop";
import BtnScrollTop from "./utils/btnScrollToTop";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <MainLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<Index />} />
                    <Route path="berita-dan-kegiatan">
                        <Route index element={<Berita />} />
                        <Route path=":id" element={<ArticleDetail />} />
                    </Route>
                    <Route path="tentang" element={<Tentang />} />
                    <Route path="ekonomi-kreatif" element={<Ekref />} />
                </Route>
            </Routes>
            <BtnScrollTop />
            <ScrollToTop />
        </div>
    );
}

export default App;
