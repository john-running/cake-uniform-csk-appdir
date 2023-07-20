'use client';

import { FC, useCallback, useState } from 'react';
import { ComponentProps, registerUniformComponent, UniformText } from '@uniformdev/canvas-next-rsc';

type Props = ComponentProps<{
  title: string;
  description: string;
}>;

const AccordionItem: FC<Props> = ({
  component,
}) => {
  const [isOpened, setOpened] = useState(false);

  const toggleAccordion = useCallback(() => setOpened(isOpened => !isOpened), []);

  return (
    <div className="card rounded-none mb-6 last:mb-0">
      <button
        onClick={toggleAccordion}
        className="flex flex-row justify-between items-center p-4 md:p-8 text-2xl font-bold bg-primary w-full"
      >
        <UniformText
          placeholder="Title goes here"
          parameterId="title"
          as="p"
          className="text-start pr-2 text-primary-content"
          component={component}
        />
        <div className="flex items-center">
          {isOpened ? (
            <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.50013 0L0 7.13651L1.95843 9L7.5 3.7271L13.0416 9L15 7.13651L7.50013 0Z"
                fill="white"
              />
            </svg>
          ) : (
            <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.49987 9L15 1.86349L13.0416 0L7.5 5.2729L1.95843 0L0 1.86349L7.49987 9Z"
                fill="white"
              />
            </svg>
          )}
        </div>
      </button>
      {isOpened && (
        <UniformText
          placeholder="Description goes here"
          parameterId="description"
          as="p"
          className="p-10 text-secondary-content"
          component={component}
        />
      )}
    </div>
  );
};

export default AccordionItem;
