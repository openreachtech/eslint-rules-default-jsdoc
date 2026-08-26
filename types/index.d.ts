import {
  Linter,
} from 'eslint'

declare module '@openreachtech/eslint-rules-default-jsdoc' {
  const config: Linter.Config

  export default config
}
