import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import CompletionPage from './pages/CompletionPage';
import SurveyPage from './pages/SurveyPage';

export default function App() {
  return (
    <AppWrapper>
      <BoxWrapper>
        <Routes>
          <Route path="/survey/:id" element={<SurveyPage />}>
            <Route path=":step" element={<SurveyPage />} />
          </Route>
          <Route path="/done" element={<CompletionPage />} />
        </Routes>
      </BoxWrapper>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f6f6;
`;

const BoxWrapper = styled.div`
  display: flex;
  width: 941px;
  min-height: 589px;
  padding: 60px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.07);
`;
