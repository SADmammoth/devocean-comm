module.exports = {
  friendlyName: 'Taskcollections',

  description: 'Notify about taskcollections.',

  inputs: {},

  exits: {},

  fn: async function (inputs, exits) {
    sails.sockets.broadcast('taskcollections', 'taskcollections', {
      message: 'Task collections updated',
    });

    this.res.json({
      message: 'Successfully notified about task collections',
    });
  },
};
