module.exports = {
  friendlyName: 'Reports',

  description: 'Notify about reports.',

  inputs: {},

  exits: {},

  fn: async function (inputs, exits) {
    sails.sockets.broadcast('reports', 'reports', {
      message: 'Reports updated',
    });

    this.res.json({
      message: 'Successfully notified about reports',
    });
  },
};
