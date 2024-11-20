import React from 'react';
import ReactDOM from 'react-dom/client';
import { RegistrationForm } from './Registration/Registration';
 
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
<React.StrictMode>
<RegistrationForm />
</React.StrictMode>
);