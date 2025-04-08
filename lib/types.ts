import type {EventTypeWithTarget} from 'jb-core';
import type {JBButtonWebComponent} from './jb-button';
export type ElementsObject = {
    button: HTMLButtonElement;
    loadingText: HTMLDivElement;
    [key: string]: HTMLElement;
}
export type JBButtonEventType<TEvent> = EventTypeWithTarget<TEvent,JBButtonWebComponent>;
export type ColorVariants = 'primary' | 'positive' | 'danger'| 'light' | 'dark';