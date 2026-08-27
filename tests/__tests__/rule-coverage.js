import jsdocPlugin from 'eslint-plugin-jsdoc'

import extractUniqueIds from '../tools/extractUniqueIds.js'

import core from '../../rules/core.js'
import deprecated from '../../rules/deprecated.js'

describe('rule coverage', () => {
  describe('core rules', () => {
    const cases = [
      { id: 'check-access', expected: 'jsdoc/check-access' },
      { id: 'check-alignment', expected: 'jsdoc/check-alignment' },
      { id: 'check-indentation', expected: 'jsdoc/check-indentation' },
      { id: 'check-line-alignment', expected: 'jsdoc/check-line-alignment' },
      { id: 'check-param-names', expected: 'jsdoc/check-param-names' },
      { id: 'check-property-names', expected: 'jsdoc/check-property-names' },
      { id: 'check-syntax', expected: 'jsdoc/check-syntax' },
      { id: 'check-tag-names', expected: 'jsdoc/check-tag-names' },
      { id: 'check-template-names', expected: 'jsdoc/check-template-names' },
      { id: 'check-types', expected: 'jsdoc/check-types' },
      { id: 'check-values', expected: 'jsdoc/check-values' },
      { id: 'convert-to-jsdoc-comments', expected: 'jsdoc/convert-to-jsdoc-comments' },
      { id: 'empty-tags', expected: 'jsdoc/empty-tags' },
      { id: 'escape-inline-tags', expected: 'jsdoc/escape-inline-tags' },
      { id: 'implements-on-classes', expected: 'jsdoc/implements-on-classes' },
      { id: 'imports-as-dependencies', expected: 'jsdoc/imports-as-dependencies' },
      { id: 'informative-docs', expected: 'jsdoc/informative-docs' },
      { id: 'lines-before-block', expected: 'jsdoc/lines-before-block' },
      { id: 'match-description', expected: 'jsdoc/match-description' },
      { id: 'match-name', expected: 'jsdoc/match-name' },
      { id: 'multiline-blocks', expected: 'jsdoc/multiline-blocks' },
      { id: 'no-bad-blocks', expected: 'jsdoc/no-bad-blocks' },
      { id: 'no-blank-block-descriptions', expected: 'jsdoc/no-blank-block-descriptions' },
      { id: 'no-blank-blocks', expected: 'jsdoc/no-blank-blocks' },
      { id: 'no-defaults', expected: 'jsdoc/no-defaults' },
      { id: 'no-missing-syntax', expected: 'jsdoc/no-missing-syntax' },
      { id: 'no-multi-asterisks', expected: 'jsdoc/no-multi-asterisks' },
      { id: 'no-restricted-syntax', expected: 'jsdoc/no-restricted-syntax' },
      { id: 'no-types', expected: 'jsdoc/no-types' },
      { id: 'no-undefined-types', expected: 'jsdoc/no-undefined-types' },
      { id: 'normalize-see-links', expected: 'jsdoc/normalize-see-links' },
      { id: 'prefer-import-tag', expected: 'jsdoc/prefer-import-tag' },
      { id: 'reject-any-type', expected: 'jsdoc/reject-any-type' },
      { id: 'reject-function-type', expected: 'jsdoc/reject-function-type' },
      { id: 'require-asterisk-prefix', expected: 'jsdoc/require-asterisk-prefix' },
      { id: 'require-description', expected: 'jsdoc/require-description' },
      { id: 'require-description-complete-sentence', expected: 'jsdoc/require-description-complete-sentence' },
      { id: 'require-example', expected: 'jsdoc/require-example' },
      { id: 'require-file-overview', expected: 'jsdoc/require-file-overview' },
      { id: 'require-hyphen-before-param-description', expected: 'jsdoc/require-hyphen-before-param-description' },
      { id: 'require-jsdoc', expected: 'jsdoc/require-jsdoc' },
      { id: 'require-next-description', expected: 'jsdoc/require-next-description' },
      { id: 'require-next-type', expected: 'jsdoc/require-next-type' },
      { id: 'require-param', expected: 'jsdoc/require-param' },
      { id: 'require-param-description', expected: 'jsdoc/require-param-description' },
      { id: 'require-param-name', expected: 'jsdoc/require-param-name' },
      { id: 'require-param-type', expected: 'jsdoc/require-param-type' },
      { id: 'require-property', expected: 'jsdoc/require-property' },
      { id: 'require-property-description', expected: 'jsdoc/require-property-description' },
      { id: 'require-property-name', expected: 'jsdoc/require-property-name' },
      { id: 'require-property-type', expected: 'jsdoc/require-property-type' },
      { id: 'require-rejects', expected: 'jsdoc/require-rejects' },
      { id: 'require-returns', expected: 'jsdoc/require-returns' },
      { id: 'require-returns-check', expected: 'jsdoc/require-returns-check' },
      { id: 'require-returns-description', expected: 'jsdoc/require-returns-description' },
      { id: 'require-returns-type', expected: 'jsdoc/require-returns-type' },
      { id: 'require-tags', expected: 'jsdoc/require-tags' },
      { id: 'require-template', expected: 'jsdoc/require-template' },
      { id: 'require-template-description', expected: 'jsdoc/require-template-description' },
      { id: 'require-throws', expected: 'jsdoc/require-throws' },
      { id: 'require-throws-description', expected: 'jsdoc/require-throws-description' },
      { id: 'require-throws-type', expected: 'jsdoc/require-throws-type' },
      { id: 'require-yields', expected: 'jsdoc/require-yields' },
      { id: 'require-yields-check', expected: 'jsdoc/require-yields-check' },
      { id: 'require-yields-description', expected: 'jsdoc/require-yields-description' },
      { id: 'require-yields-type', expected: 'jsdoc/require-yields-type' },
      { id: 'sort-tags', expected: 'jsdoc/sort-tags' },
      { id: 'tag-lines', expected: 'jsdoc/tag-lines' },
      { id: 'text-escaping', expected: 'jsdoc/text-escaping' },
      { id: 'ts-method-signature-style', expected: 'jsdoc/ts-method-signature-style' },
      { id: 'ts-no-empty-object-type', expected: 'jsdoc/ts-no-empty-object-type' },
      { id: 'ts-no-unnecessary-template-expression', expected: 'jsdoc/ts-no-unnecessary-template-expression' },
      { id: 'ts-prefer-function-type', expected: 'jsdoc/ts-prefer-function-type' },
      { id: 'type-formatting', expected: 'jsdoc/type-formatting' },
      { id: 'valid-types', expected: 'jsdoc/valid-types' },
    ]

    describe('should prefix each id with the plugin namespace', () => {
      test.each(cases)('id: $id', ({ id, expected }) => {
        const received = `jsdoc/${id}`

        expect(received)
          .toBe(expected)
      })
    })

    describe('should declare each rule of the plugin as an error', () => {
      test.each(cases)('id: $id', ({ id, expected }) => {
        expect(jsdocPlugin.rules)
          .toHaveProperty(id)
        expect(core.rules)
          .toHaveProperty(expected, expect.any(Array))
        expect(core.rules)
          .toHaveProperty([expected, 0], 'error')
      })
    })

    test('should have a case for each declared rule', () => {
      const received = extractUniqueIds({ values: cases })

      expect(received)
        .toHaveLength(Object.keys(core.rules).length)
    })
  })

  describe('deprecated rules', () => {
    const cases = [
      { id: 'check-examples', expected: 'jsdoc/check-examples' },
    ]

    describe('should prefix each id with the plugin namespace', () => {
      test.each(cases)('id: $id', ({ id, expected }) => {
        const received = `jsdoc/${id}`

        expect(received)
          .toBe(expected)
      })
    })

    describe('should declare each rule of the plugin as off', () => {
      test.each(cases)('id: $id', ({ id, expected }) => {
        expect(jsdocPlugin.rules)
          .toHaveProperty(id)
        expect(deprecated.rules)
          .toHaveProperty(expected, expect.any(Array))
        expect(deprecated.rules)
          .toHaveProperty([expected, 0], 'off')
      })
    })

    test('should have a case for each declared rule', () => {
      const received = extractUniqueIds({ values: cases })

      expect(received)
        .toHaveLength(Object.keys(deprecated.rules).length)
    })
  })

  describe('plugin rules', () => {
    test('should have no rule left undeclared', () => {
      const expected = Object.keys(core.rules).length
        + Object.keys(deprecated.rules).length

      const received = Object.keys(jsdocPlugin.rules)

      expect(received)
        .toHaveLength(expected)
    })
  })
})
