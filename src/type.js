// @flow
import typeof FileSystem from 'fs';

export type CompilerOptions = {
  config: Object,
  basePath: string,
  watch: boolean,
  global: Object,
  outputPath: string
};

export interface ICompiler {
  constructor(fs: FileSystem, compilerOptions: Object): void;
  import(request: string): Promise<any>;
  load(requests: Array<string>): Promise<void>;
}

export type RendererOptions = {
  head: Object,
  plugins: Array<string | Object>,
  preCompile: Array<string>,
  global: Object
};

export type RendererContext = {
  state: Object,
  url: string
}

export type RenderOptions = {
  url: string,
  pure: boolean
}

export interface IRenderer {
  constructor(compiler: ICompiler, options: RendererOptions): void;
  renderToStream(path: string, state: Object, options: RenderOptions): Promise<stream$Readable>;
  renderToString(path: string, state: Object, options: RenderOptions): Promise<string>;
}
