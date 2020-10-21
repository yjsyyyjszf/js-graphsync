const createRequestState = require('./state')
const createRequestProxy = require('./proxy')
const createRequestMutator = require('./mutator')
const createNewMessage = require('./new-message')
const sendMessage = require('../send-message')

const createRequest = async (node, requestId, peerId, rootCID, selector) => {
    const state = createRequestState(requestId, peerId, rootCID, selector)
    const proxy = createRequestProxy(state)
    const mutator = createRequestMutator(state)
    const message = createNewMessage(state)
    sendMessage(node, peerId, message)
    return {proxy, mutator}
}

module.exports = createRequest