module.exports = {
  friendlyName: 'Tasks',

  description: 'Subscribe to tasks.',

  inputs: {},

  exits: {
    badRequest: {
      responseType: 'badRequest',
    },
  },

  fn: async function (inputs, exits) {
    if (!this.req.isSocket) {
      throw 'badRequest';
    }

    sails.sockets.join(this.req, 'tasks', (err) => {
      this.res.json({
        message: 'Successfully subscribed to tasks',
      });
    });
  },
};
