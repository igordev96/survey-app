import { ChangeEvent, useRef } from 'react';
import { Input } from '../components/Input';
import { QuestionCard } from '../components/QuestionCard';
import { IQuestion } from '../interfaces/Question.interface';
import { useFilterParams } from '../hooks/useFilterParams';
import { Button } from '../components/Button';

const mockData: Array<IQuestion> = [
  {
    id: 1,
    question: 'Favourite programming language?',
    image_url:
      'https://dummyimage.com/600x400/000/fff.png&text=question+1+image+(600x400)',
    thumb_url:
      'https://dummyimage.com/120x120/000/fff.png&text=question+1+image+(120x120)',
    published_at: '2015-08-05T08:40:51.620Z',
    choices: [
      {
        choice: 'Swift',
        votes: 2048,
      },
      {
        choice: 'Python',
        votes: 1024,
      },
      {
        choice: 'Objective-C',
        votes: 512,
      },
      {
        choice: 'Ruby',
        votes: 256,
      },
    ],
  },
  {
    id: 2,
    question: 'Favourite programming language?',
    image_url:
      'https://dummyimage.com/600x400/000/fff.png&text=question+1+image+(600x400)',
    thumb_url:
      'https://dummyimage.com/120x120/000/fff.png&text=question+1+image+(120x120)',
    published_at: '2015-08-05T08:40:51.620Z',
    choices: [
      {
        choice: 'Swift',
        votes: 2048,
      },
      {
        choice: 'Python',
        votes: 1024,
      },
      {
        choice: 'Objective-C',
        votes: 512,
      },
      {
        choice: 'Ruby',
        votes: 256,
      },
    ],
  },
  {
    id: 3,
    question: 'Favourite programming language?',
    image_url:
      'https://dummyimage.com/600x400/000/fff.png&text=question+1+image+(600x400)',
    thumb_url:
      'https://dummyimage.com/120x120/000/fff.png&text=question+1+image+(120x120)',
    published_at: '2015-08-05T08:40:51.620Z',
    choices: [
      {
        choice: 'Swift',
        votes: 2048,
      },
      {
        choice: 'Python',
        votes: 1024,
      },
      {
        choice: 'Objective-C',
        votes: 512,
      },
      {
        choice: 'Ruby',
        votes: 256,
      },
    ],
  },
  {
    id: 4,
    question: 'Favourite programming language?',
    image_url:
      'https://dummyimage.com/600x400/000/fff.png&text=question+1+image+(600x400)',
    thumb_url:
      'https://dummyimage.com/120x120/000/fff.png&text=question+1+image+(120x120)',
    published_at: '2015-08-05T08:40:51.620Z',
    choices: [
      {
        choice: 'Swift',
        votes: 2048,
      },
      {
        choice: 'Python',
        votes: 1024,
      },
      {
        choice: 'Objective-C',
        votes: 512,
      },
      {
        choice: 'Ruby',
        votes: 256,
      },
    ],
  },
  {
    id: 5,
    question: 'Favourite programming language?',
    image_url:
      'https://dummyimage.com/600x400/000/fff.png&text=question+1+image+(600x400)',
    thumb_url:
      'https://dummyimage.com/120x120/000/fff.png&text=question+1+image+(120x120)',
    published_at: '2015-08-05T08:40:51.620Z',
    choices: [
      {
        choice: 'Swift',
        votes: 2048,
      },
      {
        choice: 'Python',
        votes: 1024,
      },
      {
        choice: 'Objective-C',
        votes: 512,
      },
      {
        choice: 'Ruby',
        votes: 256,
      },
    ],
  },
  {
    id: 6,
    question: 'Favourite programming language?',
    image_url:
      'https://dummyimage.com/600x400/000/fff.png&text=question+1+image+(600x400)',
    thumb_url:
      'https://dummyimage.com/120x120/000/fff.png&text=question+1+image+(120x120)',
    published_at: '2015-08-05T08:40:51.620Z',
    choices: [
      {
        choice: 'Swift',
        votes: 2048,
      },
      {
        choice: 'Python',
        votes: 1024,
      },
      {
        choice: 'Objective-C',
        votes: 512,
      },
      {
        choice: 'Ruby',
        votes: 256,
      },
    ],
  },
  {
    id: 7,
    question: 'Favourite programming language?',
    image_url:
      'https://dummyimage.com/600x400/000/fff.png&text=question+1+image+(600x400)',
    thumb_url:
      'https://dummyimage.com/120x120/000/fff.png&text=question+1+image+(120x120)',
    published_at: '2015-08-05T08:40:51.620Z',
    choices: [
      {
        choice: 'Swift',
        votes: 2048,
      },
      {
        choice: 'Python',
        votes: 1024,
      },
      {
        choice: 'Objective-C',
        votes: 512,
      },
      {
        choice: 'Ruby',
        votes: 256,
      },
    ],
  },
  {
    id: 8,
    question: 'Favourite programming language?',
    image_url:
      'https://dummyimage.com/600x400/000/fff.png&text=question+1+image+(600x400)',
    thumb_url:
      'https://dummyimage.com/120x120/000/fff.png&text=question+1+image+(120x120)',
    published_at: '2015-08-05T08:40:51.620Z',
    choices: [
      {
        choice: 'Swift',
        votes: 2048,
      },
      {
        choice: 'Python',
        votes: 1024,
      },
      {
        choice: 'Objective-C',
        votes: 512,
      },
      {
        choice: 'Ruby',
        votes: 256,
      },
    ],
  },
  {
    id: 9,
    question: 'Favourite programming language?',
    image_url:
      'https://dummyimage.com/600x400/000/fff.png&text=question+1+image+(600x400)',
    thumb_url:
      'https://dummyimage.com/120x120/000/fff.png&text=question+1+image+(120x120)',
    published_at: '2015-08-05T08:40:51.620Z',
    choices: [
      {
        choice: 'Swift',
        votes: 2048,
      },
      {
        choice: 'Python',
        votes: 1024,
      },
      {
        choice: 'Objective-C',
        votes: 512,
      },
      {
        choice: 'Ruby',
        votes: 256,
      },
    ],
  },
  {
    id: 10,
    question: 'Favourite programming language?',
    image_url:
      'https://dummyimage.com/600x400/000/fff.png&text=question+1+image+(600x400)',
    thumb_url:
      'https://dummyimage.com/120x120/000/fff.png&text=question+1+image+(120x120)',
    published_at: '2015-08-05T08:40:51.620Z',
    choices: [
      {
        choice: 'Swift',
        votes: 2048,
      },
      {
        choice: 'Python',
        votes: 1024,
      },
      {
        choice: 'Objective-C',
        votes: 512,
      },
      {
        choice: 'Ruby',
        votes: 256,
      },
    ],
  },
];

export function QuestionsList() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { filterParams, handleFilterParams, handleClearParams } =
    useFilterParams(inputRef);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleFilterParams(e.currentTarget.value);
  };

  return (
    <main>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl'>Questions List</h1>
        <Button buttonStyle='secondary' title='Share screen' />
      </div>
      <Input
        containerClassName='mt-4 w-full sm:w-fit'
        className='w-full sm:w-fit'
        value={filterParams}
        onChange={handleOnChange}
        handleDismiss={handleClearParams}
        ref={inputRef}
      />
      <div className='mt-12 flex flex-wrap items-center gap-10'>
        {mockData.map((question) => (
          <QuestionCard key={question.id} {...question} />
        ))}
      </div>
    </main>
  );
}
