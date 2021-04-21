module.exports = {
  friendlyName: 'Notifications',

  description: 'Notify about notifications.',

  inputs: {},

  exits: {},

  fn: async function (inputs, exits) {
    sails.sockets.broadcast('notifications', 'notifications', {
      message: 'Notifications updated',
    });
  },
};
