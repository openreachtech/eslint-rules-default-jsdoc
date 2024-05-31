import {
  ESLint,
} from 'eslint'

declare module '@openreachtech/eslint-rules-default-jsdoc' {
  const config: ESLint.ConfigData<ESLint.LintOptions>

  export = config
}
