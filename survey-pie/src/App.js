import { Route, Routes } from 'react-router-dom';

import CompletionPage from './pages/CompletionPage';
import SurveyPage from './pages/SurveyPage';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/survey/:id" element={<SurveyPage />}>
          <Route path=":step" element={<CompletionPage />} />
        </Route>
        <Route path="/done" element={<CompletionPage />} />
      </Routes>
    </div>
  );
}
