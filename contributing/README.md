# Welcome to Flutterwave’s open-source project contributing guide

Thank you for investing your time in contributing to our project! Any contribution you make to this project will help to drive our open-source efforts ✨.

If you don't want to contribute and simply have a question to ask, please don't raise an issue. You can ask questions on our [Forum](https://forum.flutterwave.com/) or [Developer Slack](https://join.slack.com/t/flutterwavedevelopers/shared_invite/zt-2cfruh8ts-1ysacqoFJjyYQgFTr4zyHw), and our army of Engineers will be on hand to answer your questions there.

This project and everyone participating in it is governed by the
[Code of Conduct](https://github.com/Flutterwave/FLW_OSS_PROJ_1/blob/main/.github/CODE_OF_CONDUCT.md).
By participating, you are expected to uphold this code and keep our community approachable and respectable. Please report unacceptable behavior
to developers@flutterwavego.com.

In this guide, you will get an overview of the contribution workflow from opening an issue, creating a PR, reviewing, and merging the PR.

Use the table of contents  icon on the top left corner of this document to get to a specific section of this guide quickly.

## Getting started

### Issues

#### Create a new issue

Have you spotted a bug? Fantastic! Before raising an issue, here are some things to do:
1. [Search to see if another user has reported the bug](https://docs.github.com/en/github/searching-for-information-on-github/searching-on-github/searching-issues-and-pull-requests#search-by-the-title-body-or-comments). For existing issues that are still open, add a comment instead of creating a new one.
2. Check our [Forum](https://forum.flutterwave.com/) or [Developer Slack](https://join.slack.com/t/flutterwavedevelopers/shared_invite/zt-2cfruh8ts-1ysacqoFJjyYQgFTr4zyHw) to confirm that we did not address it there.

When you [report an issue](https://github.com/Flutterwave/FLW_OSS_PROJ_1/blob/main/contributing/ISSUE_TEMPLATE.md), it is important to:
1. Explain the problem
    * Use a clear and descriptive title to help us to identify the problem.
    * Describe steps we can use to replicate the bug and be as precise as possible.
    * Include screenshots of the error messages.
2. Include details about your configuration and setup
    * What version of the library are you using?
    * Did you experience the bug in test mode or live?
    * Do you have the recommended versions of the library dependencies?

#### Solve an issue

Scan through our [existing issues](https://github.com/Flutterwave/FLW_OSS_PROJ_1/issues) to find one that interests you. As a general rule, we don’t assign issues to anyone. If you find an issue to work on, you are welcome to open a PR with a fix.

### Make Changes

Ultimately, this is an open-source community project, and community members should be able to easily make changes to the project. Here are the steps to do so:
1. Fork the repository and create your branch from main. This means that you will have a copy of the repository under `<github-username>/<repository-name>`.
2. Clone the repository to your local machine using `git clone https://github.com/<github-username>/<repository-name>.git`.
3. Create a new branch for your fix using `git checkout -b <branch-name>`.
4. Make the appropriate changes for the issue you are trying to address or the feature that you want to add.
5. If you are making a functionality change, update the [documentation](https://github.com/Flutterwave/FLW_OSS_PROJ_1/blob/main/README.md) to show how to use the new feature.
6. For all types of changes (excluding documentation updates), add tests for the changes.
7. Ensure all your tests pass.
8. Make sure your code lints. If you are not sure where to start, you can have a look at Facebook's Guidelines.
9. Use `git add <paths-of-changed-files>` to add the file contents of the changed files to the "snapshot" git uses to manage the state of the project, also known as the index.
10. Write clear log messages for your commits. one-liners are fine for small changes, but bigger changes should have a more descriptive commit message (see sample below).
```
git commit -m "A brief summary of the commit
>
> A paragraph describing what changed and its impact."
```
11. Use present tense for commit messages, "Add feature" not "Added feature”.
12. Push the changes to the remote repository using `git push origin <branch-name>`.

### Pull Request
When you're finished with the changes, create a pull request, also known as a PR.
1. Raise the PR against the `dev` branch.
2. Ensure that you fill out all sections of the [PR template](https://github.com/Flutterwave/FLW_OSS_PROJ_1/blob/main/contributing/PULL_REQUEST_TEMPLATE.md).
3. After you submit the PR, verify that all status checks are passing
4. Title the pull request with a short description of the changes made.
5. In the description of the pull request, explain the changes that you made, any issues you think exist with the pull request you made, and any questions you have for the maintainer. It's OK if your pull request is not perfect (no pull request is), the reviewer will be able to help you fix any problems and improve it!
6. Wait for the pull request to be reviewed by a maintainer.
7. Make changes to the pull request if the reviewing maintainer recommends them.
8. As you update your PR and apply changes, mark each conversation as resolved.

### Your PR is merged!

Congratulations 🎉 Your contribution is appreciated!

Now that you are an official contributor, you can [join Flutterwave’s developer community](https://join.slack.com/t/flutterwavedevelopers/shared_invite/zt-2cfruh8ts-1ysacqoFJjyYQgFTr4zyHw) and connect with other innovative individuals 🚀
