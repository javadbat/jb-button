import React, { CSSProperties, PropsWithChildren, useEffect, useImperativeHandle, useState } from 'react';
import 'jb-button';
// eslint-disable-next-line no-duplicate-imports
import { ColorVariants, JBButtonWebComponent, SizeVariants, StyleVariants } from 'jb-button';
import { EventProps, useEvents } from './events-hook.js';
import { JBButtonAttributes, useJBButtonAttribute } from './attributes-hook.js';

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
      interface IntrinsicElements {
        'jb-button': JBButtonType;
      }
      interface JBButtonType extends React.DetailedHTMLProps<React.HTMLAttributes<JBButtonWebComponent>, JBButtonWebComponent> {
        "class"?:string,
        "loading-text"?:string;
        "variant"?:StyleVariants;
        "size"?:SizeVariants;
        "color"?:ColorVariants;
      }
    }
}

export const JBButton = React.forwardRef((props:Props, ref) => {
  const element = React.useRef<JBButtonWebComponent>(null);
  useImperativeHandle(
    ref,
    () => (element ? element.current : undefined),
    [element],
  );

  useJBButtonAttribute(element,props);
  useEvents(element,props);

  return (
    <jb-button slot={props.slot} variant={props.variant} size={props.size} color={props.color} style={props.style} ref={element} loading-text={props.loadingText ? props.loadingText : ''} class={props.className}>{props.children}</jb-button>
  );
});
JBButton.displayName = 'JBButton';
type JBButtonBaseProps = EventProps & JBButtonAttributes & {
    name?:string,
    style?:CSSProperties,
    color?:ColorVariants,
    variant?:StyleVariants,
    size?:SizeVariants,
    type?: string,
    className?:string,
    loadingText?: string,
    slot?: string,
}
export type Props = PropsWithChildren<JBButtonBaseProps>

