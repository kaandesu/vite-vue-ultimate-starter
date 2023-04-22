const fs = require('fs')
const scripts = Object.keys(JSON.parse(fs.readFileSync('./package.json')).scripts || {})
const scriptList = {
  dev: '                 Start the development environment',
  build: '               Type check and build the app',
  'build-only': '          Build the app',
  'build-test': '          Build the app and run the unit & e2e (headless) tests',
  preview: '             Run the app on _preview_ mode',
  test: '                Run the unit tests and e2e tests',
  'test:headless': '       Run the unit tests and e2e tests (headless)',
  'test:unit': '           Run only the unit tests',
  'test:unit:watch': '     Watch the unit tests',
  'test:e2e': '            Run only the e2e tests',
  'test:e2e:headless': '   Run only the e2e tests (headless)',
  'test:e2e:desktop': '    Run only the e2e tests on desktop',
  'test:e2e:mobile': '     Run only the e2e tests on mobile',
  'e2e:report': '          Show the e2e test report',
  'e2e:report:mobile': '   Show the e2e headless test report for mobile',
  'e2e:report:desktop': '  Show the e2e headless test report for desktop',
  'vite:inspect': '        Inspect the vite build on the localhost (after build)',
  'rollup:inspect': '      Inspect the rollup bundling on the localhost (after build)',
  coverage: '            Run the unit tests and generate a coverage report (c8)',
  'type-check': '          Type check the app',
  lint: '                Lint the app with ESlint',
  format: '              Format the app with prettier'
}
scripts.forEach((script) => {
  if (Object.keys(scriptList).includes(script)) console.log(`${script}   ${scriptList[script]}`)
  else console.log(`${script}`)
})
