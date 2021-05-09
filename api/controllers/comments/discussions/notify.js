module.exports = {
  friendlyName: 'Discussions',

  description: 'Notify about discussions.',

  inputs: {},

  exits: {},

  fn: async function (inputs, exits) {
    sails.sockets.broadcast('discussions', 'discussions', {
      message: 'Discussions updated',
    });

    this.res.json({
      message: 'Successfully notified about discussions',
    });
  },
};
