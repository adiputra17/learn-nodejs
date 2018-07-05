var user = require('../controllers/user');
 
module.exports = {
    configure: function(app) {
        // app.route('/user').get(user.get);
        // app.route('/user').post(user.create);
        // app.route('/user').put(user.update);
        // app.route('/user').delete(user.delete);
        app.get('/user', user.getAll);
        app.post('/user', user.create);
    }
};