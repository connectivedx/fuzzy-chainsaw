# Goals

We have tried to be thoughtful in our architectural decisions, and drive based on a few goals:

- Emphasize modular development
- Component based Architecture
- Reuseability between projects
- Reduce development friction

## Emphasize module development

This might be subtitled, Unix Philosophy.  The system should be composed of many smaller pieces that each have a single responsibility.  This means making use of modules from [NPM](https://www.npmjs.com) and developing our files using CommonJS module format.

## Component-based architecture

We were inspired by the patterns in Brad Frost's [Atomic Design](http://atomicdesign.bradfrost.com/table-of-contents/) and Lonely Planet's [Rizzo](https://github.com/lonelyplanet/rizzo) component API.  Our goal is to think about user interfaces as compositions of many small components. We've tried to build tools that help us think in this fashion.

Components are written using React JSX, which provides a great model for composing component and managing dependencies.  Components are split into two categories, __Tags__ or __Components__. Tags are generally more reuseable, whereas Components are generally connected more directly to a CMS data model.

### Tags

Found in `/source/tags`

### Components

Found in `/source/components`


## Reuseability between projects

Using work between projects has historically been a difficult nut to crack. We've selected technologies that have proven to be easily portable, and used an opionated folder and file naming scheme that self contains components.

### Naming conventions

Defining strong naming conventions help to ease the pain of context switching between projects.  Instead of focusing on the naming style of your fellow developers, you can focus on the goals of their code.

### Component structure

All tags and components share a similar set of files. Once you learn how one component is put together, you will have a very good idea how all component operate. Our preference is to repeat simple patterns many times instead of building fewer complex monolithic components.


## Reduce development friction

The web development world is evolving rapidly. A tool that can automate the myriad tasks we regularly perform can redirect our focus on business decisions instead of trival tasks. We've provided a few different tools on your development adventures.

### Building and watching

There are some very helpful command line scripts to help with development and continuous-integration. You can build a static set of files using `npm run build` or `npm run production` and create a local server to preview using `npm run start`. Use `npm run watch` if you are developing, this creates a server at http://localhost:8080 that updates as file changes.

### Scaffolding components

Since you will likely be creating a number of tags and components, there are also some commands to help with that common task.
