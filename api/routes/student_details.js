const {
    index,
    show,
    create,
    update,
    destroy
  } = require('../controllers/student_details');
  const passport = require('passport');
  
  
  module.exports = router => {
    // localhost:4000/music
    router.get('/student_details', index);
  
   // localhost:4000/music/12345
    router.get('/student_details/:id', show);
  
  // localhost:4000/music
    router.post('/student_details',passport.authenticate('jwt', { session: false }), create);
  
// localhost:4000/music/update
    router.post('/student_details/update',passport.authenticate('jwt', { session: false }), update);
  
    // localhost:4000/music/destroy
    router.post('/student_details/destroy',passport.authenticate('jwt', { session: false }), destroy);
    
  };