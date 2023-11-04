'use client';

import { useState } from 'react';

import data from '@/data/questions.json';
import QuestionList from '@/components/QuestionList';
import Result from '@/components/Result';

export default function Home() {
  const types = ['Beginner', 'Advance', 'Expert'];

  const [questions, setQuestions] = useState(
    data.map((question, index) => ({
      ...question,
      id: index,
      isChecked: false,
    }))
  );
  const [step, setStep] = useState('questions');

  function onEvaluateClicked() {
    setStep('results');
  }

  function onQuestionChecked(targetId: string, isChecked: boolean) {
    const id = parseInt(targetId.split('-')[1]);
    const nextQuestions = [...questions];
    nextQuestions[id].isChecked = isChecked;
    setQuestions(nextQuestions);
  }

  function onBackClicked() {
    setStep('questions');
  }

  return (
    <main className='flex min-h-screen w-screen flex-col'>
      <div className='mx-auto max-w-3xl grow px-8'>
        <div className='flex flex-col items-center'>
          <img src='/logo.svg' width='250' className='m-4' alt='logo' />
          <div className='text-center text-4xl font-bold'>
            Hey, let’s quickly self evaluate your Python expertise
          </div>
        </div>
        {step == 'questions' ? (
          <QuestionList
            questions={questions}
            questionTypes={types}
            onEvaluateClicked={onEvaluateClicked}
            onQuestionChecked={onQuestionChecked}
          />
        ) : (
          <Result questions={questions} onBackClicked={onBackClicked} />
        )}
      </div>
      <div className='flex justify-center py-10'>
        <div className='font-light text-gray-500'>
          <a href='https://github.com/xaventra/assess-python'>
            github.com/xaventra/assess-python
          </a>
        </div>
      </div>
    </main>
  );
}
