import React, { PropsWithChildren, useEffect, useImperativeHandle, useState } from 'react';
import 'jb-button';
// eslint-disable-next-line no-duplicate-imports
import { JBButtonWebComponent } from 'jb-button';
import { EventProps, useEvents } from './events-hook.js';

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
      interface IntrinsicElements {
        'jb-button': JBButtonType;
      }
      interface JBButtonType extends React.DetailedHTMLProps<React.HTMLAttributes<JBButtonWebComponent>, JBButtonWebComponent> {
        "class"?:string,
        "loading-text"?:string;
        "type"?:string;
      }
    }
}

export const JBButton = React.forwardRef((props:Props, ref) => {
  const element = React.useRef<JBButtonWebComponent>(null);
  const [refChangeCount, refChangeCountSetter] = useState(0);
  useImperativeHandle(
    ref,
    () => (element ? element.current : {}),
    [element],
  );
  useEffect(() => {
    refChangeCountSetter(refChangeCount + 1);
  }, [element.current]);
  useEffect(() => {
    if (props.disabled) {
      element.current?.setAttribute('disabled', 'disabled');
    } else {
      element.current?.removeAttribute('disabled');
    }
  }, [props.disabled]);
  useEffect(() => {
    if(element.current){
      element.current.isLoading = props.isLoading || false;
    }
  }, [props.isLoading]);

  useEvents(element,props);

  return (
    <jb-button ref={element} loading-text={props.loadingText ? props.loadingText : ''} type={props.type ? props.type : 'primary'} class={props.className}>{props.children}</jb-button>
  );
});
JBButton.displayName = 'JBButton';
type JBButtonBaseProps = EventProps & {
    name?:string,
    type?: string,
    isLoading?: boolean,
    className?:string,
    loadingText?: string,
    disabled?: boolean,
}
export type Props = PropsWithChildren<JBButtonBaseProps>

