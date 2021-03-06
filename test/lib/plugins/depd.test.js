'use strict';

const mm = require('egg-mock');
const utils = require('../../utils');

describe('test/lib/plugins/depd.test.js', () => {
  afterEach(mm.restore);

  let app;
  before(() => {
    mm(process.env, 'NO_DEPRECATION', '*');
    app = utils.app('apps/demo');
    return app.ready();
  });
  after(() => app.close());

  it('should use this.locals instead of this.state', () => {
    const ctx = app.mockContext();
    ctx.locals.test = 'aaa';
    ctx.locals.should.eql(ctx.state);
    ctx.locals.test.should.eql(ctx.state.test);
  });
});
