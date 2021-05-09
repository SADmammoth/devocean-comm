module.exports = {
  friendlyName: 'Discussions',

  description: 'Subscribe to discussions.',

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

    sails.sockets.join(this.req, 'discussions', (err) => {
      this.res.json({
        message: 'Successfully subscribed to discussions',
      });
    });
  },
};
