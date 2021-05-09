module.exports = {
  friendlyName: 'History',

  description: 'Subscribe to history.',

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

    sails.sockets.join(this.req, 'history', (err) => {
      this.res.json({
        message: 'Successfully subscribed to history',
      });
    });
  },
};
