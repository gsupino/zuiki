function logger({ getState }) {
    return (next) => (action) => {
        const prevState = getState();
        const returnValue = next(action);
        const nextState = getState();
        const time = new Date();

        if (typeof console !== 'undefined') {
            //check if Server side
            if (__SERVER__) {
                if (action.type) {
                    const message = `action ${action.type} @ ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
                    console.log(message);
                    console.log(`prev state`, prevState);
                    console.log(`next state`, nextState);
                    try {
                        console.groupEnd('—— log end ——');
                    } catch (e) {
                        console.log('—— log end ——');
                    }
                }
            } else {
                const message = `action ${action.type} @ ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
                console.log(action.types)
                console.log(message);
                console.log(`%c prev state`, `color: #9E9E9E; font-weight: bold`, prevState);
                console.log(`%c next state`, `color: #4CAF50; font-weight: bold`, nextState);

                try {
                    console.groupEnd('—— log end ——');
                } catch (e) {
                    console.log('—— log end ——');
                }
            }
        }


        return returnValue;
    };
}

export default logger;