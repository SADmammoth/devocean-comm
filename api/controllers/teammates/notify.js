module.exports = {
  friendlyName: 'Teammates',

  description: 'Notify about teammates.',

  inputs: {},

  exits: {},

  fn: async function (inputs, exits) {
    sails.sockets.broadcast('teammates', 'teammates', {
      message: 'Teammates updated',
    });

    this.res.json({
      message: 'Successfully notified about teammates',
    });
  },
};
