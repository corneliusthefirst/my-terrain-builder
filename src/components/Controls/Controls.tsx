import React from 'react';
import { UndoRedoBlock } from './UndoRedoBlock';
import { ElementsBlock } from './ElementsBlock';
import { CreditBlock } from './CreditBlock';

export const Controls = () => {
    return (
        <div className="flex w-full  my-4 flex-col md:flex-row md:justify-between md:my-2">
           <div className="flex justify-between md:space-x-8">
            <CreditBlock />
            <UndoRedoBlock />
           </div>
           <ElementsBlock />
        </div>
    );
}
