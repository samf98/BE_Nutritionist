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

  '/': { view: 'pages/homepage' },

  'GET /entries': { action: 'entries/list' },
  'POST /entries': { action: 'entries/create' },
  'DELETE /entries': { action: 'entries/delete' },
  'PATCH /entries': { action: 'entries/update' },

  'GET /users': { action: 'users/list' },
  'POST /users': { action: 'users/create' },
  'DELETE /users': { action: 'users/delete' },
  'PATCH /users': { action: 'users/update' },

  'GET /roles': { action: 'roles/list' },
  'POST /roles': { action: 'roles/create' },
  'DELETE /roles': { action: 'roles/delete' },
  'PATCH /roles': { action: 'roles/update' },

  'GET /rolesUsers': { action: 'rolesUsers/list' },
  'POST /rolesUsers': { action: 'rolesUsers/create' },
  'DELETE /rolesUsers': { action: 'rolesUsers/delete' },
  'PATCH /rolesUsers': { action: 'rolesUsers/update' },

  'GET /categories': { action: 'categories/list' },
  'POST /categories': { action: 'categories/create' },
  'DELETE /categories': { action: 'categories/delete' },
  'PATCH /categories': { action: 'categories/update' },

  'GET /foods': { action: 'foods/list' },
  'POST /foods': { action: 'foods/create' },
  'DELETE /foods': { action: 'foods/delete' },
  'PATCH /foods': { action: 'foods/update' },

  'GET /tags': { action: 'tags/list' },
  'POST /tags': { action: 'tags/create' },
  'DELETE /tags': { action: 'tags/delete' },
  'PATCH /tags': { action: 'tags/update' },

  'GET /foodTags': { action: 'foodsTags/list' },
  'POST /foodTags': { action: 'foodsTags/create' },
  'DELETE /foodTags': { action: 'foodsTags/delete' },
  'PATCH /foodTags': { action: 'foodsTags/update' },

  'GET /appointments': { action: 'appointments/list' },
  'POST /appointments': { action: 'appointments/create' },
  'DELETE /appointments': { action: 'appointments/delete' },
  'PATCH /appointments': { action: 'appointments/update' },

  'GET /userAppointments': { action: 'usersAppointments/list' },
  'POST /userAppointments': { action: 'usersAppointments/create' },
  'DELETE /userAppointments': { action: 'usersAppointments/delete' },
  'PATCH /userAppointments': { action: 'usersAppointments/update' },

  'GET /NutritionFacts': { action: 'NutritionFacts/list' },
  'POST /NutritionFacts': { action: 'NutritionFacts/create' },
  'DELETE /NutritionFacts': { action: 'NutritionFacts/delete' },
  'PATCH /NutritionFacts': { action: 'NutritionFacts/update' },

  'GET /Goals': { action: 'Goals/list' },
  'POST /Goals': { action: 'Goals/create' },
  'DELETE /Goals': { action: 'Goals/delete' },
  'PATCH /Goals': { action: 'Goals/update' },

  'GET /usersTags': { action: 'usersTags/list' },
  'POST /usersTags': { action: 'usersTags/create' },
  'DELETE /usersTags': { action: 'usersTags/delete' },
  'PATCH /usersTags': { action: 'usersTags/update' },

  'GET /usersEntries': { action: 'userEntries/list' },
  'POST /usersEntries': { action: 'usersEntries/create' },
  'DELETE /usersEntries': { action: 'usersEntries/delete' },
  'PATCH /usersEntries': { action: 'usersEntries/update' },

  /*
  
    '/': { view: 'pages/homepage' },
    'GET /users': {action: 'users/list'},
    'POST /users': {action: 'users/create'},
    'DELETE /users': {action: 'users/delete'},
    'PATCH /users': {action: 'users/update'}
  
    '/': { view: 'pages/homepage' },
    'GET /entries': {action: 'entries/list'},
    'POST /entries': {action: 'entries/create'},
    'DELETE /entries': {action: 'entries/delete'},
    'PATCH /entries': {action: 'entries/update'}
  */

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
