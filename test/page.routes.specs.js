var supertest = require('supertest');
var app = require('../app');
var agent = supertest.agent(app);
var Page = require('../models/index').Page;

describe('http requests', function () {
    //beforeEach(function(){
          Page.create({
              title: 'pagecreated',
              urlTitle:'pagecreated',
              content: 'content',
              status: 'open',
              tags: ['hi','bye']
          })
     // })

  describe('GET /wiki/', function () {

    it('responds with 200', function(done){
        agent
        .get('/wiki')
        .expect(200, done);
    });
  });

  describe('GET /wiki/add', function () {
    it('responds with 200', function(done){
        agent
        .get('/wiki/add')
        .expect(200, done);
    });
  });

  describe('GET /wiki/:urlTitle', function () {
    it('responds with 404 on page that does not exist', function(done){
        agent
        .get('/wiki/').params(urlTitle)
        .expect(404, done);
    });
    it('responds with 200 on page that does exist', function(done){
        agent
        .get('/wiki/:urlTitle')
        .expect(200, done);
    });

  });

  describe('GET /wiki/search/:tag', function () {
    it('responds with 200', function(done){
        agent
        .get('/wiki/search/:tag')
        .expect(200, done);
    });
  });

  describe('GET /wiki/:urlTitle/similar', function () {
    it('responds with 404 for page that does not exist', function(done){
        agent
        .get('/wiki/:urlTitle/similar')
        .expect(404, done);
    });
    // it('responds with 200 for similar page', function(done){
    //     agent
    //     .get('/wiki/:urlTitle/similar')
    //     .expect(200, done);
    // });
  });

  describe('POST /wiki', function () {
    it('responds with 302');
    it('creates a page in the database');
  });

});
