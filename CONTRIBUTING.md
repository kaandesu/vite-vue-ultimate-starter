# How to contribute

### ❗ **Common mistakes**

- Opening a pull request without a description or a proper name is not fun for the reviewer, so try to explain your change as much as possible either by text or a code snippet.
- Adding new dependencies or modifying the `package.json` will most likely be not accepted or will be accepted in a long time since adding a new dependency to the codebase can be tricky.
- This project uses `npm`, so please try to respect the choice and try to use it.

### 📝 Useful scripts

These are the useful scripts that you can use while developing. You can find them in the `package.json` file. You can run them by using `npm run <script_name>`.

| Script               | Description                                                |
| -------------------- | ---------------------------------------------------------- |
| `dev`                | Start the development environment                          |
| `build`              | Type check and build the app                               |
| `build-test`         | Build the app and run the unit & e2e (headless) tests      |
| `preview`            | Run the app on _preview_ mode                              |
| `test`               | Run the unit tests and e2e tests                           |
| `test:headless`      | Run the unit tests and e2e tests (headless)                |
| `test:unit`          | Run only the unit tests                                    |
| `test:unit:watch`    | Watch the unit tests                                       |
| `test:e2e`           | Run only the e2e tests                                     |
| `test:e2e:headless`  | Run only the e2e tests (headless)                          |
| `test:e2e:desktop`   | Run only the e2e tests on desktop                          |
| `test:e2e:mobile`    | Run only the e2e tests on mobile                           |
| `e2e:report`         | Show the e2e test report                                   |
| `e2e:report:mobile`  | Show the e2e headless test report for mobile               |
| `e2e:report:desktop` | Show the e2e headless test report for desktop              |
| `vite:inspect`       | Inspect the vite build on the localhost (after build)      |
| `rollup:inspect`     | Inspect the rollup bundling on the localhost (after build) |
| `coverage`           | Run the unit tests and generate a coverage report (c8)     |
| `type-check`         | Type check the app                                         |
| `lint`               | Lint the app with ESlint                                   |
| `format`             | Format the app with prettier                               |

[//]: # 'When pushing your changes, always include a **changeset** file. You can do this by running the `changeset` script. It will ask you a few questions and then create a file for you. You can read more about it [here](https://github.com/changesets/changesets/blob/main/docs/adding-a-changeset.md).'

### 🐛 **Did you find a bug?**

Ensure the bug was not already reported by searching on GitHub under [Issues](https://github.com/kaandesu/vite-vue-ultimate-starter/issues). If you're unable to find an open issue addressing the problem, [open a new one](https://github.com/kaandesu/vite-vue-ultimate-starter/issues/new). Be sure to include a **title and clear description**, as much relevant information as possible demonstrating the expected behavior that is not occurring.

### 💡 **Do you want to add a new feature or change an existing one?**

[Open a GitHub issue](https://github.com/kaandesu/vite-vue-ultimate-starter/issues/new) stating your feature request clearly. We can discuss it on the issue thread, then you can implement it! 🎉

### ✨ **Did you write a change that fixes a bug?**

Open a new GitHub pull request with the patch.

1. Fork the repository
2. Modify the code and make your amazing change
3. Create your feature branch
   ```sh
   git checkout -b feature/<your_feature>
   ```
4. **IMPORTANT!** If your code contains minor or a major change that needs to be stated on the changelog, please run the command below and write down what you have changed in a brief manner.
   ```sh
   // skip this for now
   // npm run changeset
   ```
5. Add your changes
   ```sh
   git add .
   ```
6. Commit your changes _(please respect the commit message standards)_
   ```sh
   git commit -m "feat: added amazing things!"
   ```
7. Push your changes
   ```sh
   git push -u origin feature/<your_feature>
   ```
8. Open a pull request from your branch
   - State your change in the title according to the [conventional commit guidelines](https://www.conventionalcommits.org/en/v1.0.0/).
   - Please respect the pull request template while writing your PR description.

Open source software is beautiful, all of your contributions are much appreciated

Thanks!
