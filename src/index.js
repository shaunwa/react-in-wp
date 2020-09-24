import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { QuestionForm } from './QuestionForm';

ReactDOM.render(
  <React.StrictMode>
    <QuestionForm />
  </React.StrictMode>,
  document.getElementById('react-question-form')
);