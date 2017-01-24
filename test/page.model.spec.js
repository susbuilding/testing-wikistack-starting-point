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


  describe('Class methods', function () {
      var page;
      beforeEach(function(){
          page = Page.build();
      })
        describe('findByTag', function () {
        it('gets pages with the search tag');
        it('does not get pages without the search tag');
        });
  });

  describe('Validations', function () {
    it('errors without title');
    it('errors without content');
    it('errors given an invalid status');
  });

  describe('Hooks', function () {
    it('it sets urlTitle based on title before validating');
  });

});
