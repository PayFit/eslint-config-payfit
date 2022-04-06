/**
 * @fileoverview Ensure mongo ObjectId is called with "new" keyword
 * @author Maxence Leblanc
 */
'use strict'

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/**
 * @type {import('eslint').Rule.RuleModule}
 */
module.exports = {
  meta: {
    type: 'problem', // `problem`, `suggestion`, or `layout`
    docs: {
      description: 'Ensure mongo ObjectId is called with "new" keyword',
      category: 'Fill me in',
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: 'code', // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },
  create: (context) => ({
    // visitor functions for different types of nodes
    VariableDeclarator: (node) => {
      if (
        node.init &&
        node.init.callee &&
        node.init.callee.name === 'ObjectId' &&
        node.init.type !== 'NewExpression'
      ) {
        context.report({
          node,
          message: 'Mongo ObjectId must be used with "new" keyword.',
          fix: (fixer) => {
            const sourceCode = context.getSourceCode()
            const fixedText = sourceCode.getText(node).split('=').join('= new')
            return fixer.replaceText(node, fixedText)
          },
        })
      }
      if (
        node.init &&
        node.init.type === 'ObjectExpression' &&
        node.init.properties.length > 0
      ) {
        node.init.properties.forEach((property) => {
          if (
            property.value &&
            property.value.callee &&
            property.value.callee.name === 'ObjectId' &&
            property.value.type !== 'NewExpression'
          ) {
            context.report({
              node,
              message: 'Mongo ObjectId must be used with "new" keyword.',
              fix: (fixer) => {
                const sourceCode = context.getSourceCode()
                const fixedText = sourceCode
                  .getText(node)
                  .split(':')
                  .join(': new')
                return fixer.replaceText(node, fixedText)
              },
            })
          }
        })
      }
    },
  }),
}
