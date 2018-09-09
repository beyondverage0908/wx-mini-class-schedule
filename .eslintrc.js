module.exports = {
  parserOptions: {
    sourceType: 'module'
  },
  parser: 'babel-eslint',
  extends: 'standard',
  plugins: [
    'html',
    'vue'
  ],
  settings: {
    'html/html-extensions': ['.html', '.wpy']
  },
  rules: {
    // 可能的错误
    'comma-dangle': [
      2,
      'never'
    ],
    'computed-property-spacing': [
      2,
      'never'
    ],
    'no-cond-assign': 2,
    'no-console': 0,
    'no-constant-condition': 2,
    'no-control-regex': 2,
    'no-debugger': 2,
    'no-dupe-keys': 2,
    'no-empty': 2,
    'jsx-quotes': 2,
    'no-empty-character-class': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': 0,
    'no-extra-semi': 2,
    'no-func-assign': 2,
    'no-inner-declarations': 2,
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-negated-in-lhs': 2,
    'no-obj-calls': 2,
    'no-regex-spaces': 2,
    'no-reserved-keys': 0,
    'no-sparse-arrays': 2,
    'no-unreachable': 0,
    'use-isnan': 2,
    'valid-jsdoc': 0,
    'valid-typeof': 2,
    // 最佳实践
    'block-scoped-var': 2,
    'complexity': 0,
    'consistent-return': 0,
    'curly': 2,
    'default-case': 0,
    'dot-notation': 2,
    'eqeqeq': 2,
    'guard-for-in': 0,
    'no-alert': 0,
    'no-caller': 2,
    'no-confusing-arrow': [
      0,
      {
        'allowParens': false
      }
    ],
    'no-div-regex': 2,
    'no-else-return': 2,
    'no-eq-null': 0,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-implied-eval': 2,
    'no-iterator': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-native-reassign': 2,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-process-env': 0,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-return-assign': 2,
    'no-script-url': 0,
    'no-self-compare': 2,
    'no-sequences': 0,
    'no-unused-expressions': [
      0,
      {
        'allowShortCircuit': true,
        'allowTernary': true
      }
    ],
    'no-void': 0,
    'no-warning-comments': 0,
    'no-with': 2,
    'prefer-arrow-callback': 2,
    'radix': 2,
    'vars-on-top': 0,
    'wrap-iife': 2,
    'yoda': 2,
    'no-useless-concat': 2,
    // 严格模式
    'strict': [
      2,
      'global'
    ],
    // 变量
    'prefer-const': 0,
    'no-catch-shadow': 2,
    'no-const-assign': 2,
    'no-delete-var': 2,
    'no-label-var': 2,
    'no-shadow': 0,
    'no-shadow-restricted-names': 2,
    'no-undef': 0,
    'no-undef-init': 2,
    'no-undefined': 0,
    'no-unused-vars': 0,
    'no-use-before-define': 2,
    'no-var': 2,
    // 文体问题
    'indent': 0,
    'arrow-body-style': [
      2,
      'as-needed'
    ],
    'arrow-parens': [
      2,
      'as-needed'
    ],
    'arrow-spacing': 2,
    'brace-style': 2,
    'camelcase': 0,
    'comma-spacing': 2,
    'comma-style': 2,
    'consistent-this': 0,
    'eol-last': 0,
    'func-names': 0,
    'func-style': 0,
    'key-spacing': [
      2,
      {
        'beforeColon': false,
        'afterColon': true
      }
    ],
    'max-nested-callbacks': 0,
    'new-cap': 2,
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-inline-comments': 0,
    'no-lonely-if': 2,
    'no-mixed-spaces-and-tabs': 0,
    'no-nested-ternary': 2,
    'no-new-object': 2,
    'semi-spacing': [
      2,
      {
        'before': false,
        'after': true
      }
    ],
    'no-spaced-func': 2,
    'no-ternary': 0,
    'no-trailing-spaces': 2,
    'no-multiple-empty-lines': 2,
    'no-underscore-dangle': 0,
    'one-var': 0,
    'operator-assignment': [
      2,
      'always'
    ],
    'padded-blocks': [
      2,
      {
        'blocks': 'never',
        'classes': 'never',
        'switches': 'never'
      }
    ],
    'quotes': [
      2,
      'single'
    ],
    'quote-props': [
      2,
      'as-needed'
    ],
    'semi': [
      2,
      'always'
    ],
    'sort-vars': [
      2,
      {
        'ignoreCase': true
      }
    ],
    'keyword-spacing': 2,
    'space-before-blocks': 2,
    'object-curly-spacing': [
      2,
      'always'
    ],
    'array-bracket-spacing': [
      2,
      'never'
    ],
    'space-in-parens': 2,
    'space-infix-ops': 2,
    'space-unary-ops': 2,
    'spaced-comment': 2,
    'wrap-regex': 0,
    'space-before-function-paren': 0,
    // 旧的
    'max-depth': 0,
    'max-len': [
      0,
      120,
      {
        'ignoreStrings': true,
        'ignoreTemplateLiterals': true,
        'ignoreComments': true
      }
    ],
    'max-params': 0,
    'max-statements': 0,
    'no-plusplus': 0,
    'no-prototype-builtins': 2,
    'prefer-template': 0,
    'template-curly-spacing': [
      2,
      'never'
    ]
  }
};