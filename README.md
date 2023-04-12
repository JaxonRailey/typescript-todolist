# TypeScript TodoList

Here's the usual todolist (yes, I've reused the same graphic for all repos of this kind), but in **TypeScript** version. The aim is to show various ways to achieve the same result. To run the project, **NodeJS** must be installed, which is required to run TypeScript.

Here's the entire procedure to run the project (assuming **NodeJS** is already installed):

Install TypeScript globally
```
npm i -g typescript
```

To verify that the installation was successful, get the version of TypeScript installed (at the time of writing this repo, we're on version 5)
```
tsc -v
```

From within the project, launch the `watch` command, which automatically detects any changes made to the source files, so there's no need to restart the compilation command every time changes are made to the .ts files
```
tsc -w
```

If the terminal returns the error "`cannot be loaded because running scripts is disabled on this system`", run this command (**for Windows users only**)
```
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Note that the _tsconfig.json_ file contains the compilation specifications. I've kept a minimal configuration, of course, these options can be modified to fit the needs of your project.

It's also possible to do without the _tsconfig.json_ file, but in this case, all compilation options would have to be specified manually in the command. For this reason, using a tsconfig.json file is generally considered a more convenient and scalable option.

:star: **If you liked what I did, if it was useful to you or if it served as a starting point for something more magical let me know with a star** :green_heart:
