import React from 'react';
// @ts-expect-error JS domain module exports root AppRouter component
import { wF as AeroUltraRouter } from './modules/auth-router';
import { DemoQuickSwitch } from './components/DemoQuickSwitch';

export const App: React.FC = () => {
  return (
    <>
      <AeroUltraRouter />
      <DemoQuickSwitch />
    </>
  );
};

export default App;
