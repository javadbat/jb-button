'use client';
import React, {  type PropsWithChildren, useImperativeHandle } from 'react';
import 'jb-button';
// eslint-disable-next-line no-duplicate-imports
import type { ColorVariants, JBButtonWebComponent, SizeVariants, StyleVariants } from 'jb-button';
import { type EventProps, useEvents } from './events-hook.js';
import { type JBButtonAttributes, useJBButtonAttribute } from './attributes-hook.js';
import type { JBElementStandardProps } from 'jb-core/react';

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

export const JBButton = React.forwardRef((props:Props, ref) => {
  const element = React.useRef<JBButtonWebComponent>(null);
  useImperativeHandle(
    ref,
    () => (element ? element.current : undefined),
    [element],
  );
  const {disabled, loadingText,isLoading, variant, size, onClick,color,children, name, ...otherProps} = props;
  useJBButtonAttribute(element,{disabled,isLoading});
  useEvents(element,{onClick});

  return (
    <jb-button {...otherProps} variant={variant} size={size} color={color} name={name} ref={element} loading-text={loadingText}>{children}</jb-button>
  );
});
JBButton.displayName = 'JBButton';
type JBButtonBaseProps = EventProps & JBButtonAttributes & {
    name?:string,
    color?:ColorVariants,
    variant?:StyleVariants,
    size?:SizeVariants,
    type?: string,
    loadingText?: string,
}
export type Props = PropsWithChildren<JBButtonBaseProps> & JBElementStandardProps<JBButtonWebComponent, keyof JBButtonBaseProps>

