import React, { useContext, useState, useEffect } from 'react';
import { SetIndexContextType, SetIndexContext } from '../../core/set-index-context/set-index-context-provider';
import SetIndexModel from '../../core/set-index-context/set-index-model';
import styled, { keyframes } from 'styled-components';

const SetIndex: React.FC = () => {
    const setIndexContext = useContext<SetIndexContextType>(SetIndexContext);
    const [currentIndex, setCurrentIndex] = useState<SetIndexModel>(null);

    useEffect(() => {
        const subscriber = setIndexContext.eventEmitter.subscribe(onSetIndexUpdated);
        return () => {
            // clean up
            subscriber.unsubscribe();
        };
    })

    const onSetIndexUpdated = (newModel: SetIndexModel) => {
        setCurrentIndex(newModel);
    }

    return (
        <div>
            <h3>Set Index Widget</h3>
            <h4>{currentIndex && currentIndex.latest}</h4>
        </div>
    )
}

export default SetIndex;