## CONTRIBUTING

Fuzzy Chainsaw is written with the intent that it will grow and improve over time. We actively encourage your assistance in making that happen. This repository is the correct place for bug reports, feature requests, general questions, and any code or ideas you want to contribute. Before you open an issue or pull request, we simply ask that you consider the following:

1. Search existing issues and open PRs to see if your issue or idea has already been reported, fixed, or discussed. If you have more to add to an existing conversation, by all means please do so.

* All code being added to the project must follow our various coding style guides. (@TODO: #45; link those here)

* All PRs should:
	* start with a feature or bug branch (`feature/new-feature`) being compared against the `dev` branch
	* be able to be cleanly merge into `dev` at the time the PR is opened; any merge conflicts should be cleaned up by the submitter and pushed to the new branch before opening the PR

* To the best of your abilities, [write good commit messages](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html), [issues, and PRs](https://www.connectivedx.com/thinking/posts/2015/02/guidelines-better-github-messages). In short:
	* keep commits as atomic as possible
	* be as detailed as necessary in your issue and PR descriptions

* If writing a new task plugin for Fuzzy Chainsaw’s build system, be sure to read [the related wiki entry](https://github.com/connectivedx/fuzzy-chainsaw/wiki/Writing-a-task-plugin) and address all requirements there. Including and completing the checklists in that wiki within your PR description isn’t required but would be :+1: :100: :tada:. The primary takeaways from that document are for your new plugin to include:

	* a proper `package.json`
	* a `README` with appropriate/required documentation
	* a license (we use [the MIT](https://opensource.org/licenses/MIT))
	* tests, where appropriate

* This project is first and foremost the front end boilerplate for [Connective DX](connectivedx.com) client projects, but its flexibility and extensibility necessarily and intentionally allow it numerous uses. We’re happy to embrace and assist in the successful implementation of those uses. That said, even the best, most exciting ideas may not always get incorporated if they don’t meet [the 80/20 rule](https://en.wikipedia.org/wiki/Pareto_principle) for our primary user base.

* While we don't (yet) have an explicit code of conduct for this project, in order to ensure a community that is inviting, inclusive, and harassment-free, we insist our contributors be respectful, encouraging, open-minded, stay on topic, and generally [be excellent to each other](http://i.imgur.com/8R7aaNm.png).
