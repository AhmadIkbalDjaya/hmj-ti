import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from '../utils/protectedRoute';
import MainLayout from '../layout/mainLayout';
import HomePage from '../pages/home/Index';
import ArticlePage from '../pages/article/Index';
import ArticleDetailPage from '../pages/article/Show';
import BusinessPage from '../pages/business/Index';
import AboutPage from '../pages/about/Index';

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="berita-dan-kegiatan">
          <Route index element={<ArticlePage />} />
          <Route path=":slug" element={<ArticleDetailPage />} />
        </Route>
        <Route path="tentang" element={<AboutPage />} />
        <Route path="ekonomi-kreatif" element={<BusinessPage />} />
      </Route>
    </Routes>
  );
}
