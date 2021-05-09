module.exports = {
  friendlyName: 'Teammates',

  description: 'Subscribe to teammates.',

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

    sails.sockets.join(this.req, 'teammates', (err) => {
      this.res.json({
        message: 'Successfully subscribed to teammates',
      });
    });
  },
};
