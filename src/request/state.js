// creates an object that contains the internal state for a request

const createRequestState = (id, peerId, validator, rootCID, selector) => {

    let promiseResolve, promiseReject
    const completed = new Promise((resolve, reject) => {
        promiseResolve = resolve
        promiseReject = reject
    })

    return {
        id,
        peerId,
        rootCID,
        selector,
        status: 0,
        blocksReceived: 0,
        bytesReceived: 0,
        completed,
        promiseResolve,
        promiseReject,
        validator
    }
}

module.exports = createRequestState