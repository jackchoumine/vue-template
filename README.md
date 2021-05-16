# form-table

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).


$ nr build        

> form-table@0.1.0 build
> vue-cli-service build


⠙  Building for production.../Users/jackchou/vue/form-table/node_modules/mini-css-extract-plugin/dist/index.js:77
    const resource = this._identifier.split('!').pop();
  TypeError: Cannot read property 'split' of undefined
    at CssModule.nameForCondition (/Users/jackchou/vue/form-table/node_modules/mini-css-extract-plugin/dist/index.js:77:39)
    at Function.checkTest (/Users/jackchou/vue/form-table/node_modules/@vue/cli-service/node_modules/webpack/lib/optimize/SplitChunksPlugin.js:310:52)
    at Object.fn [as getCacheGroups] (/Users/jackchou/vue/form-table/node_modules/@vue/cli-service/node_modules/webpack/lib/optimize/SplitChunksPlugin.js:250:35)
    at /Users/jackchou/vue/form-table/node_modules/@vue/cli-service/node_modules/webpack/lib/optimize/SplitChunksPlugin.js:514:38
    at SyncBailHook.eval [as call] (eval at create (/Users/jackchou/vue/form-table/node_modules/tapable/lib/HookCodeFactory.js:19:10), <anonymous>:7:16)
    at SyncBailHook.lazyCompileHook (/Users/jackchou/vue/form-table/node_modules/tapable/lib/Hook.js:154:20)
    at Compilation.seal (/Users/jackchou/vue/form-table/node_modules/@vue/cli-service/node_modules/webpack/lib/Compilation.js:1236:38)
    at /Users/jackchou/vue/form-table/node_modules/@vue/cli-service/node_modules/webpack/lib/Compiler.js:550:17
    at _done (eval at create (/Users/jackchou/vue/form-table/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:9:1)
    at eval (eval at create (/Users/jackchou/vue/form-table/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:32:22)
    at /Users/jackchou/vue/form-table/node_modules/@vue/cli-service/node_modules/webpack/lib/Compilation.js:1093:12
    at /Users/jackchou/vue/form-table/node_modules/@vue/cli-service/node_modules/webpack/lib/Compilation.js:1005:9
    at processTicksAndRejections (internal/process/task_queues.js:75:11)