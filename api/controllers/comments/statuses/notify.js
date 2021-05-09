module.exports = {
  friendlyName: 'Tasks',

  description: 'Notify about tasks.',

  inputs: {},

  exits: {},

  fn: async function (inputs, exits) {
    sails.sockets.broadcast('tasks', 'tasks', {
      message: 'Tasks updated',
    });

    this.res.json({
      message: 'Successfully notified about statuses',
    });
  },
};
