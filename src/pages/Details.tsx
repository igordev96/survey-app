import { useNavigate, useParams } from 'react-router-dom';
import { mockData } from '../utils/data';
import { Button } from '../components/Button';

export function Details() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBackToList = () => {
    navigate('/questions');
  };

  const mockQuestion = mockData.find(
    (question) => question.id.toString() === id,
  );

  if (!mockQuestion) {
    return (
      <p className='animate-bounce text-4xl font-semibold text-red-500'>
        This question does not exist!
      </p>
    );
  }
  return (
    <main>
      <div className='mb-4 flex flex-wrap items-center justify-center gap-3 sm:justify-between'>
        <Button
          onClick={handleBackToList}
          className='w-full sm:w-fit'
          title='Back to list'
        />
        <Button
          className='w-full sm:w-fit'
          title='Share screen'
          buttonStyle='secondary'
        />
      </div>
      <h1 className='mb-4 text-center text-2xl text-amber-400'>
        {mockQuestion.question}
      </h1>
      <div className='-mx-8 h-80 overflow-hidden rounded-md sm:mx-auto sm:w-fit'>
        <img
          className='h-full w-full object-cover'
          src={mockQuestion.image_url}
          alt=''
        />
      </div>
      <div className='mx-auto mt-8 grid max-w-[480px] grid-cols-2 grid-rows-2 gap-4'>
        {mockQuestion.choices.map((choice) => (
          <Button
            title={choice.choice}
            subTitle={choice.votes}
            buttonStyle='tertiary'
          />
        ))}
      </div>
    </main>
  );
}
