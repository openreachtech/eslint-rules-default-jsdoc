export default {
  rules: {
    'jsdoc/check-examples': [
      /*
       * Deprecated. The implementation depends on CLIEngine, which was removed
       * in ESLint 8, so the rule reports nothing but a notice for ESLint 8 or
       * later. Use the getJsdocProcessorPlugin processor instead.
       *
       * Kept out of the exported ruleset, since a rule that cannot act has no
       * place in the config of a consumer. The options below hold the defaults
       * of the rule, some of which the schema rejects.
       */
      'off',
      {
        allowInlineConfig: true,
        baseConfig: {},
        captionRequired: false,
        checkDefaults: false,
        checkEslintrc: true,
        checkParams: false,
        checkProperties: false,
        // configFile: undefined, // There is no default
        exampleCodeRegex: null,
        matchingFileName: null,
        matchingFileNameDefaults: null,
        matchingFileNameParams: null,
        matchingFileNameProperties: null,
        noDefaultExampleRules: false,
        paddedIndent: 0,
        rejectExampleCodeRegex: null,
        reportUnusedDisableDirectives: true,
      },
    ],
  },
}
