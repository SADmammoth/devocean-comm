module.exports = {
  friendlyName: 'Notifications',

  description: 'Subscribe to notifications.',

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

    sails.sockets.join(this.req, 'notifications', (err) => {
      this.res.json({
        message: 'Successfully subscribed to notifications',
      });
    });
  },
};
