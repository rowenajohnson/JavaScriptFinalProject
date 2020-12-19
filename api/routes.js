module.exports = router => {
  require('./routes/users')(router);
  require('./routes/sessions')(router);
  require('./routes/student_details')(router);

  return router;
};