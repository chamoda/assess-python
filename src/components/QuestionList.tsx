'use client';

import Question from './Question';

export default function QuestionList({
  questions,
  questionTypes,
  onEvaluateClicked,
  onQuestionChecked,
}: {
  questions: Array<any>;
  questionTypes: Array<string>;
  onEvaluateClicked: any;
  onQuestionChecked: any;
}) {
  return (
    <>
      <div className='pt-16 text-lg font-light text-gray-700'>
        Sometimes you need to assess your own or a candidate&apos;s level of
        expertise in Python programming. Following statements roughly
        corresponds to varies level of expertise. A score will be calucalted at
        the end as a rough evaluation metric. After evaluation you will be able
        to download csv file to share.
      </div>
      {questionTypes.map((questionType) => (
        <>
          <div className='pb-4 pt-10 text-xl font-normal'>{questionType}</div>
          <div className=''>
            {questions
              .filter((q) => q.type == questionType)
              .map((question) => {
                return (
                  <Question
                    key={`${question.id}`}
                    question={question}
                    onChecked={onQuestionChecked}
                  />
                );
              })}
          </div>
        </>
      ))}
      <div className='flex justify-center py-10'>
        <button
          type='button'
          className='rounded-full bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
          onClick={onEvaluateClicked}
        >
          Evaluate
        </button>
      </div>
    </>
  );
}
