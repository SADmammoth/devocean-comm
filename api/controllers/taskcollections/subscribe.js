module.exports = {
  friendlyName: 'Taskcollections',

  description: 'Subscribe to taskcollections.',

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

    sails.sockets.join(this.req, 'taskcollections', (err) => {
      this.res.json({
        message: 'Successfully subscribed to task collections',
      });
    });
  },
};
