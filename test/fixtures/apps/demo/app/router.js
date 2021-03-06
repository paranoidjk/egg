module.exports = app => {
  app.get('home', '/', 'home');
  app.get('/hello', app.controller.hello);
  app.get('/logger', app.controller.logger);
  app.get('/protocol', function*() {
    this.body = this.protocol;
  });

  app.get('/user.json', function*() {
    this.jsonp = { name: 'fengmk2' };
  });
};
