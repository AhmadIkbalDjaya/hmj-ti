import './App.css';
import AppRoutes from './routes/Index';
import ScrollToTop from './utils/scrollToTop';
import BtnScrollTop from './utils/btnScrollToTop';

function App() {
  return (
    <div className="App">
      <AppRoutes />
      <BtnScrollTop />
      <ScrollToTop />
    </div>
  );
}

export default App;
