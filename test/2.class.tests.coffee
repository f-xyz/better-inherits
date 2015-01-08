should = require('chai').should()
Class = require('../class')

describe 'inherits.Class() tests', ->
  Point = null
  Circle = null

  beforeEach ->

    Point = new Class({
      constructor:(x, y) ->
        this.x = x
        this.y = y
      length: () ->
        Math.sqrt(this.x * this.x + this.y * this.y)
    })

    Circle = new Class({
      prototype: Point
      constructor: (x, y, radius) ->
        this._super(x, y)
        this.radius = radius
      area: ->
        Math.PI * this.radius * this.radius
    })

  describe 'constructor and prototype tests', ->

    it 'should set should set `_super` on constructor', ->
      Circle._super.should.equal(Point)

    it 'should extend base\'s prototype', ->
      Circle.prototype.__proto__.should.equal(Point.prototype)
      Circle.prototype.constructor.should.equal(Circle)
      Circle.prototype._super.should.equal(Point)

    it 'should keep own prototype properties.', ->
      Circle.prototype.should.include.keys('area')

    it 'prototype property should not exist in prototype', ->
      Circle.prototype.should.not.include.keys('prototype')

    it 'should keep constructor\'s name', ->
      `var A = new Class({ constructor: function A() {}})`
      A.name.should.equal('A')

  describe 'instance tests', ->
    circle = null

    beforeEach ->
      circle = new Circle(1, 2, 3)

    it 'should be instance of base', ->
      circle.should.instanceOf(Point)

    it 'should be instance of self', ->
      circle.should.instanceOf(Circle)

    it 'should construct instance', ->
      circle.x.should.equal(1)
      circle.y.should.equal(2)
      circle.radius.should.equal(3)

    it 'should have own and inherited methods', ->
      circle.length().should.equal(Math.sqrt(5))
      circle.area().should.equal(Math.PI*circle.radius*circle.radius)

    it 'inistances should not share prototype fields', ->
      anotherCirlce = new Circle(3, 4, 5)
      anotherCirlce.should.not.deep.equal(circle)
