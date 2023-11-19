import { ChangeEvent, KeyboardEvent, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from '@phosphor-icons/react';
import { useEmail } from '../hooks/useEmail';
import { Button } from './Button';
import { Input } from './Input';

type ShareDialogProps = {
  className?: string;
};

export function ShareDialog(props: ShareDialogProps) {
  const { className = '' } = props;

  const { mutate } = useEmail();

  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const handleDialog = (open: boolean) => {
    setIsOpen(open);
    setEmail('');
  };

  const handleShare = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email && emailPattern.test(email)) {
      mutate({ email, url: window.location.href });
      setIsOpen(false);
    } else {
      alert('This is not a valid email!');
    }
  };

  const handleEnterKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      handleShare();
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={handleDialog}>
      <Dialog.Trigger asChild>
        <Button
          className={className}
          buttonStyle='secondary'
          title='Share screen'
        />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 bg-black/75' />
        <Dialog.Content className='fixed left-1/2 top-1/2 max-w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray-200 px-6 py-3'>
          <div className='flex items-center justify-between'>
            <Dialog.Title className='text-lg font-semibold'>
              Share screen
            </Dialog.Title>
            <Dialog.Close>
              <X
                weight='bold'
                className='cursor-pointer text-black'
                size={20}
              />
            </Dialog.Close>
          </div>
          <Dialog.Description className='mt-2 text-sm'>
            Share this page URL by email
          </Dialog.Description>
          <Input
            placeholder='Email here'
            handleShare={handleShare}
            containerClassName='mt-2'
            isShare
            value={email}
            onChange={handleChangeEmail}
            onKeyDown={handleEnterKey}
            type='text'
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
