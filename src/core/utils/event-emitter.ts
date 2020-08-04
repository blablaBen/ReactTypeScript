class EventEmitter<T> {
    cbFunctions: Map<Function, Function>;
    constructor() {
        this.cbFunctions = new Map();
    }

    subscribe(cb: Function) {
        this.cbFunctions.set(cb, cb);
        return {
            unsubscribe: () => {
                this.cbFunctions.delete(cb);
            }
        }
    }

    emit(value: T) {
        this.cbFunctions.forEach((cb: Function, key: Function) => {
            cb(value);
        })
    }
}

export default EventEmitter;