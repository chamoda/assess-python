'use client';

export default function Question({
  question,
  onChecked,
}: {
  question: any;
  onChecked: any;
}) {
  return (
    <div className='flex py-2 font-light text-gray-700 hover:text-black'>
      <div className='flex h-6 items-center pe-4'>
        <input
          id={`q-${question.id}`}
          name={`q-${question.id}`}
          type='checkbox'
          className='focus:ring-none h-4 w-4 cursor-pointer rounded border-gray-300 accent-blue-800'
          checked={question.isChecked}
          onChange={(e) => onChecked(e.target.id, e.target.checked)}
        />
      </div>
      <div>
        <label
          htmlFor={`q-${question.id}`}
          dangerouslySetInnerHTML={{ __html: question.text }}
          className='cursor-pointer'
        ></label>
      </div>
    </div>
  );
}
