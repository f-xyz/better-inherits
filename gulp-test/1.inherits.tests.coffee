should = require('chai').should()
inherits = require('../inherits')

describe 'inherits() tests', ->
  Point = null
  Circle = null

  beforeEach () ->

    Point = (x, y) ->
      @x = x
      @y = y
    Point.prototype.length = ->
      Math.sqrt(@x*@x + @y*@y)

    Circle = (x, y, radius) ->
      @_base(x, y)
      @radius = radius
    inherits(Circle, Point, {
      area: ->
        Math.PI * @radius * @radius
    })

  describe 'constructor and prototype tests', ->

    it 'should set should set _base on constructor', ->
      Circle._base.should.equal(Point)

    it 'should extend base\'s prototype', ->
      Circle.prototype.__proto__.should.equal(Point.prototype)
      Circle.prototype.constructor.should.equal(Circle)
      Circle.prototype._base.should.equal(Point)

    it 'should copy properties from prototype param.', ->
      Circle.prototype.should.include.keys('area')

    it 'should do the same if called without prototype param.', ->
      `function A() {}`
      inherits(A, Point)
      A.prototype.__proto__.should.equal(Point.prototype)
      A.prototype.constructor.should.equal(A)
      A.prototype._base.should.equal(Point)

    it 'should keep constructor\'s name', ->
      `function A() {}`
      inherits(A, Point)
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

    it 'instances should not share prototype fields', ->
      anotherCircle = new Circle(3, 4, 5)
      anotherCircle.should.not.eql(circle)
