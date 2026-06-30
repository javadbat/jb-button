import type { ColorVariants, JBButtonWebComponent, SizeVariants, StyleVariants } from 'jb-button';

declare module "react" {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
      interface IntrinsicElements {
        'jb-button': JBButtonType;
      }
      interface JBButtonType extends React.DetailedHTMLProps<React.HTMLAttributes<JBButtonWebComponent>, JBButtonWebComponent> {
        "loading-text"?:string;
        "variant"?:StyleVariants;
        "size"?:SizeVariants;
        "color"?:ColorVariants;
        "name"?:string;
      }
    }
}
