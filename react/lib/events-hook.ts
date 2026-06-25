import { useEvent } from "jb-core/react";
import type { RefObject } from "react";
import type {JBButtonEventType, JBButtonWebComponent} from 'jb-button';

export type EventProps = {
    onClick?: (e: JBButtonEventType<MouseEvent>) => void,
}
export function useEvents(element:RefObject<JBButtonWebComponent | null>,props:EventProps){
  useEvent(element, 'click', props.onClick);
}
