import { Link } from 'react-router-dom';
import { IQuestion } from '../interfaces/Question.interface';
import { formatDateToHumanDate } from '../utils/formatDate';

type QuestionCardProps = IQuestion;

export function QuestionCard(props: QuestionCardProps) {
  const { id, thumb_url, question, published_at } = props;

  return (
    <Link
      className='flex h-48 w-full flex-col gap-5 overflow-hidden rounded-md bg-zinc-600 p-1 shadow-md transition-transform hover:-translate-y-1'
      to={id.toString()}
      title={question}
    >
      <div className='h-20 w-full overflow-hidden rounded-md'>
        <img className='h-full w-full object-cover' src={thumb_url} alt='' />
      </div>
      <p className='break-all text-sm '>{question}</p>
      <p className='mt-auto text-center text-xs text-amber-500'>
        {formatDateToHumanDate(published_at)}
      </p>
    </Link>
  );
}
