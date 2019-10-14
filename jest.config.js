"jest": {
  "collectCoverageFrom": [
    "**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/build/**",
    "!**/definitionfiles/**",
    "!**/WebWrokers/**",
    "!**/*.mock.ts",
    "!src/setupTests.ts"
  ],
  "coverageReporters": [
    "lcov",
    "text"
  ]
},
"jest-junit": {
  "suiteName": "jest tests",
  "output": "coverage/junit.xml",
  "classNameTemplate": "{classname} - {title}",
  "titleTemplate": "{classname} - {title}",
  "ancestorSeparator": " > ",
  "usePathForSuiteName": "true"
},
