import {
  Linter,
} from 'eslint'

declare module '@openreachtech/eslint-rules-default-jsdoc' {
  const config: Linter.Config
  const deprecated: Linter.Config

  export default config

  export {
    deprecated,
  }
}
