/**
 * @fileoverview Ensure mongo ObjectId is called with &#34;new&#34; keyword
 * @author Maxence Leblanc
 */
'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../rules/common/no-mongo-objectid'),
  RuleTester = require('eslint').RuleTester

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester()
ruleTester.run('no-mongo-objectid', rule, {
  valid: [],

  invalid: [
    {
      code: 'var invalid = ObjectId()',
      errors: [
        {
          message: 'Mongo ObjectId must be used with "new" keyword.',
          type: 'VariableDeclarator',
        },
      ],
      output: 'var invalid = new ObjectId()',
    },
    {
      code: 'var invalid = { id: ObjectId() }',
      errors: [
        {
          message: 'Mongo ObjectId must be used with "new" keyword.',
          type: 'VariableDeclarator',
        },
      ],
      output: 'var invalid = { id: new ObjectId() }',
    },
  ],
})
