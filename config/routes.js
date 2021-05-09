/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` your home page.            *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/

  'get /notifications/notify': {
    action: 'notifications/notify',
  },

  'get /notifications/subscribe': {
    action: 'notifications/subscribe',
  },

  'get /tasks/subscribe': {
    action: 'tasks/subscribe',
  },

  'get /tasks/notify': {
    action: 'tasks/notify',
  },

  'get /teammates/subscribe': {
    action: 'teammates/subscribe',
  },

  'get /teammates/notify': {
    action: 'teammates/notify',
  },

  'get /discussions/subscribe': {
    action: 'comments/discussions/subscribe',
  },

  'get /discussions/notify': {
    action: 'comments/discussions/notify',
  },

  
  'get /reports/notify': {
    action: 'comments/reports/notify',
  },
  
  'get /reports/subscribe': {
    action: 'comments/reports/subscribe',
  },
  
  'get /history/notify': {
    action: 'comments/history/notify',
  },
  
  'get /history/subscribe': {
    action: 'comments/history/subscribe',
  },

  'get /statuses/notify': {
    action: 'comments/statuses/notify',
  },
  
  'get /statuses/subscribe': {
    action: 'comments/statuses/subscribe',
  },

  
  'get /taskcollections/notify': {
    action: 'taskcollections/notify',
  },
  
  'get /taskcollections/subscribe': {
    action: 'taskcollections/subscribe',
  },


  /***************************************************************************
   *                                                                          *
   * More custom routes here...                                               *
   * (See https://sailsjs.com/config/routes for examples.)                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the routes in this file, it   *
   * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
   * not match any of those, it is matched against static assets.             *
   *                                                                          *
   ***************************************************************************/
};
