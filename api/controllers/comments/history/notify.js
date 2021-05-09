module.exports = {
  friendlyName: 'History',

  description: 'Notify about history.',

  inputs: {},

  exits: {},

  fn: async function (inputs, exits) {
    sails.sockets.broadcast('history', 'history', {
      message: 'History updated',
    });

    this.res.json({
      message: 'Successfully notified about history',
    });
  },
};
