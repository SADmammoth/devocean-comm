module.exports = {
  friendlyName: 'Reports',

  description: 'Subscribe to reports.',

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

    sails.sockets.join(this.req, 'reports', (err) => {
      this.res.json({
        message: 'Successfully subscribed to reports',
      });
    });
  },
};
