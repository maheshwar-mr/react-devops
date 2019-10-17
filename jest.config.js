"jest": {
  "collectCoverageFrom": [
    "**/*.{js,jsx}",
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

