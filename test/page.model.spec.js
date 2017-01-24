var Page = require('../models/index').Page;
const assert = require('assert');
const expect = require('chai').expect;
const chai = require('chai');
const spies = require('chai-spies');

describe('Page model', function () {

  describe('Virtuals', function () {
      var page;
      beforeEach(function(){
          page = Page.build();
      })

      describe('route', function () {
        it('returns the url_name prepended by "/wiki/"', function(){
            page.urlTitle = 'some_title';
            expect(page.route).to.equal('/wiki/' + page.urlTitle);
        });
      });
  });


  // describe('Class methods', function () {

  //     beforeEach(function(done){
  //       Page.create({
  //         title: 'test_title',
  //         content: 'test_content',
  //         tags: ['test1', 'test2']
  //       })
  //       .then(function() {
  //         done();
  //       })
  //       .catch(done);
  //     })

  //     describe('findByTag', function () {
  //       it('gets pages with the search tag', function(done) {
  //         Page.findByTag('test1')
  //         .then(function(pages) {
  //           expect(pages).to.have.lengthOf(1);
  //           done();
  //         })
  //         .catch(done);
  //       });

  //       it('does not get pages without the search tag', function(done) {
  //         Page.findByTag('test3')
  //         .then(function(pages) {
  //           expect(pages).to.have.lengthOf(0);
  //           done();
  //         })
  //         .catch(done);
  //         });
  //       });


  // });

  // describe('Instance methods', function () {
  //   var page1, page2, page3;
  //   beforeEach(function(done){
  //     Page.create({
  //         title: 'test_title1',
  //         content: 'test_content',
  //         tags: ['test1', 'test2']
  //       })
  //     .then(function() {
  //       done()
  //     })
  //     .catch(done);
    
  //   Page.create({
  //         title: 'test_title2',
  //         content: 'test_content',
  //         tags: ['test2']
  //       })
  //     .then(function() {
  //       done()
  //     })
  //     .catch(done);

  //   Page.create({
  //         title: 'test_title3',
  //         content: 'test_content',
  //         tags: ['test3']
  //       })
  //     .then(function() {
  //       done()
  //     })
  //     .catch(done);
  //   });

  //   describe('findSimilar', function () {
  //     it('never gets itself', function(done) {
  //       Page.findSimilar()
  //       .then(function(pages) {
  //         expect(pages).to.have.lengthOf(1);
  //         done()
  //       .catch(done);
  //       })
  //     });
  //     it('gets other pages with any common tags');
  //     it('does not get other pages without any common tags');
  //   });
  // });

  describe('Validations', function () {
    var page;
    beforeEach(function(){
      page = Page.build();
    })

    it('errors without title', function(done) {
      page.validate() // 
      .then(function(err){
        expect(err).to.exist;
        expect(err.errors).to.exist;
        expect(err.errors[0].path).to.equal('title');
        done();
      });
    });

    it('errors without content', function(done) {
      page.validate() // [title, urlTitle, content, status, tags ]
      .then(function(err){
        expect(err).to.exist;
        expect(err.errors).to.exist;
        expect(err.errors[2].path).to.equal('content');
        done();
      });
    });

    it.only('errors given an invalid status', function() {
      var failedStatus = function(page) {
        if (page.status !== "open" || page.status !== "closed") {
            return true; 
        }
      }

      expect(failedStatus(page)).to.equal(true);
      });
  });

  describe('Hooks', function () {
    it('it sets urlTitle based on title before validating');
  });

});
