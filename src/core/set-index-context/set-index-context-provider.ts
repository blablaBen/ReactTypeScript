import EventEmitter from '../utils/event-emitter';
import React from 'react';
import SetIndexModel from './set-index-model';

export type SetIndexContextType = {
  eventEmitter: EventEmitter<SetIndexModel>;
};
export const SetIndexContext = React.createContext<SetIndexContextType>(null);
