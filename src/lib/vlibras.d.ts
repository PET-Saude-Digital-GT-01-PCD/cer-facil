import 'react';

declare module 'react' {
  interface HTMLAttributes<T> extends React.AriaAttributes, React.DOMAttributes<T> {
    vw?: string;
    'vw-access-button'?: string;
    'vw-plugin-wrapper'?: string;
    'vw-plugin-top-wrapper'?: string;
  }
}

interface Window {
  VLibras: any;
}