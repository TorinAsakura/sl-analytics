const { ActionTransport, routerExtension } = require('@microfleet/core')
const path = require('path')

const { xSlrToken } = require('../auth')

exports.router = {
  routes: {
    directory: path.join(__dirname, '../actions'),
    prefix: 'au',
    setTransportsAsDefault: false,
    transports: [ActionTransport.amqp, ActionTransport.http],
    enabledGenericActions: ['health'],
  },
  extensions: {
    enabled: ['postRequest', 'preRequest', 'preResponse', 'postResponse'],
    register: [routerExtension('validate/schemaLessAction')],
  },
  auth: {
    strategies: { xSlrToken },
  },
}
