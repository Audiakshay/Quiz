import React from 'react';

import './style.scss';
import './style1.scss';

import { createRoot } from 'react-dom/client';
import QuizApp from './app';

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<QuizApp />);
