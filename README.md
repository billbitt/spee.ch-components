# Spee.ch Component Library

## Getting started

### install
```
npm install spee.ch-components --save 
```

### use
#### basic components 
These components do not take an options and can be used as they are imported
```
import { NavBar } from 'spee.ch-components';
...
<NavBar />
```
#### customizeable components 
These components take a config param, and must be initialized by calling them as a function.

You can pass custom configs (see documentation for which customization each component takes)...
```
import { App } from 'spee.ch-components';
const customPages = {...};
MyApp = App(customPages)
...
<MyApp />
```
Or you can initialize without any configs in order to use the default component
```
import { App } from 'spee.ch-components';
MyApp = App()
...
<MyApp />
```

## More

This library was created by starting with the [react-npm-component-starter](https://github.com/yogaboll/react-npm-component-starter) boilerplate. 
[This article](https://medium.com/@_alanbsmith/building-a-react-component-library-part-1-d8a1e248fe6c) was also helpful.
