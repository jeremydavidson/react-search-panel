/**
 * Default CSS definition for typescript,
 * will be overridden with file-specific definitions by rollup
 */
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "react-use-keypress" {
  function useKeypress(keys: string | string[], callback: () => void): void;
  export = useKeypress;
}
