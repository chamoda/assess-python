'use client';

import downloadCsvFile from '@/utils/utils';

export default function Result({
  questions,
  onBackClicked,
}: {
  questions: Array<any>;
  onBackClicked: any;
}) {
  function calulcateScore(questions: Array<any>): number {
    const checkedQuestions = questions.filter((q) => q.isChecked);
    const score = (checkedQuestions.length / questions.length) * 100;
    return parseInt(score.toString());
  }

  const score = calulcateScore(questions);

  function onDownloadClicked() {
    downloadCsvFile(questions);
  }

  return (
    <>
      <div className='pt-16 text-center text-lg font-normal text-gray-700'>
        Your score is <b className='text-blue-800'>{score}/100</b>
      </div>
      <div className='pt-8 text-center font-light text-gray-700'>
        Click downalod to get a shareable csv file with results.
      </div>
      <div className='flex justify-center space-x-4 py-10'>
        <button
          type='button'
          className='rounded-full bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
          onClick={onBackClicked}
        >
          Back
        </button>
        <button
          type='button'
          className='rounded-full bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
          onClick={onDownloadClicked}
        >
          Download
        </button>
      </div>
    </>
  );
}
