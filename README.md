# Fuzzy Chainsaw

### What this is

This repo is intended to house a rewrite of the Phoenix front end boilerplate used at Connective DX leading to a 3.0 release. In addition to providing a starter kit of front end assets and intended best practices in CSS, HTML, JavaScript, and font and image management, the repo will also serve as the primary hub of conversation around codifying our goals with the project and those best practices and house styles we seek to enforce.

### Our goals

Our larger goal is a solid, well-tested, well-documented, easily extendable, easy understood codebase for The Sorts of Projects We Do<sup><small>TM</small></sup>. To that end, we should focus ourselves on:

1. a build system that is
  * modular
  * extensible
  * easily grokked by new and familiar users alike
  * not locked into specific technologies elsewhere in the stack
2. a test suite that acts as both boilerplate (examples of what can be tested and how to do so) and enforcement (an error-throwing part of the build system). This should at a minimum allow tests for:
  * HTML validation
  * JS linting
  * JS unit tests
  * JS functional DOM tests
  * visual regressions
  * CSS linting
  * Sass unit tests (if applicable)
3. a composable JavaScript-based templating system that:
  * compiles to HTML during the build
  * is available for use in the JavaScript environment
  * works for both project templates and a Style Guide/Component Library
  * allows for writing plain HTML inside template files
  * is easily extended to include helpers or advanced use cases
  * easily accepts data
  * is validated as part of the build
4. a CommonJS-based JavaScript environment that
  * encourages the use (though npm) and authoring of small modules
  * encourages ES6 & DOM API scripting over jQuery and its ecosystem
  * still allows for the easy use of jQuery/plugins when applicable for an author
5. a CSS environment that
  * encourages small components
  * enforces best practice through linting & style conventions
  * judiciously uses pre- or post-processors
6. documentation for all steps and pieces of our stack:
  * includes READMEs for any individually-published package outlining usage, dependencies, assumptions, and What It Does<sup><small>TM</small></sup>
  * has error messages that are friendly in tone and helpful in intent for both authors and implementors, including links where applicable to supporting documentation or missing pieces
  * has inline documentation wherever needed
  * errs on the side of over-explaining
  * speaks through comments and documentation as you would to peers, always assuming them smart and capable
  * assumes nothing is obvious
  * contains enough documentation that any smart, capable peer will be able to reason their way through a project without outside assistance or special knowledge
  * assumes an audience that includes not just front end developers but also internal & external backend implementors, QA engineers, PMs and other people gathering requirements, and even internal marketing team members looking for information.

### Decision making

In making decisions toward achieving these stated goals, we should keep in mind the needs of our larger front end and tech practices within Connective DX, the needs of Connective DX itself as they pertain to this project (marketing, sales, etc), the needs of implementors of our work both in and outside of Connective DX, and any known pain points in the existing code base. Decisions should therefore not be based solely on developer ergonomics or the shiny new hotness, but instead balance and reflect the goals and needs of our various stakeholders as best as possible. We should push our practice forward as much as possible, but only if in doing so we do not aversely affect or disrupt the work of our peers.

### Why fuzzy chainsaw?

GitHub gifted it to us as the randomly generated suggestion and we took it. Also because it's a pretty awesome phrase.
