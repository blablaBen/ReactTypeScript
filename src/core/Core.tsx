import React from 'react';
import { SetIndexContext, SetIndexContextType } from './set-index-context/set-index-context-provider';
import SetIndexModel from './set-index-context/set-index-model';
import EventEmitter from './utils/event-emitter';

type CoreProps = {
    children: React.ReactNode;
}

type CoreState = {
    setIndexContext: SetIndexContextType
}
class Core extends React.Component<CoreProps, CoreState> {

    constructor(props: CoreProps) {
        super(props);
        this.state = {
            setIndexContext: {
                eventEmitter: new EventEmitter<SetIndexModel>()
            }
        };
    }

    componentDidMount() {
        this.onWebSocketReady();
    }

    onWebSocketReady() {
        setInterval(() => {
            const { setIndexContext } = this.state;

            const newModel: SetIndexModel = new SetIndexModel();
            newModel.latest = Math.random() * 10000;
            setIndexContext.eventEmitter.emit(newModel);
        }, 1000);
    }

    render() {
        return (
            <div>
                <h1>Core:</h1>
                <SetIndexContext.Provider value={this.state.setIndexContext}>
                    {this.props.children}
                </SetIndexContext.Provider>
            </div>);
    }
}

export default Core;