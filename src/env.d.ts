/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module 'vue-cropper-h5';
declare module 'stack-keep-alive';

// 不关心外部库的类型，并且希望将所有没有类型的库导入为any
declare module '*.jsx'
