import type { JBButtonWebComponent } from "jb-button";
import { type RefObject, useEffect } from "react";

export type JBButtonAttributes = {
  isLoading?: boolean,
  disabled?: boolean,
}
export function useJBButtonAttribute(element: RefObject<JBButtonWebComponent | null>, props: JBButtonAttributes) {
  useEffect(() => {
    if (props.disabled) {
      element.current?.setAttribute('disabled', 'disabled');
    } else {
      element.current?.removeAttribute('disabled');
    }
  }, [props.disabled]);
  useEffect(() => {
    if (element.current) {
      element.current.isLoading = props.isLoading || false;
    }
  }, [props.isLoading]);
}
