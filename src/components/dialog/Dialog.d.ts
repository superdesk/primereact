import * as React from 'react';

interface DialogProps {
    id?: string;
    header?: any;
    footer?: any;
    visible?: boolean;
    position?: string;
    modal?: boolean;
    contentStyle?: object;
    contentClassName?: string;
    closeOnEscape?: boolean;
    dismissableMask?: boolean;
    rtl?: boolean;
    closable?: boolean;
    style?: object;
    className?: string;
    maskClassName?: string;
    showHeader?: boolean;
    appendTo?: HTMLElement;
    zIndex?: number;
    maximizable?: boolean;
    blockScroll?: boolean;
    ariaCloseIconLabel?: string;
    focusOnShow?: boolean;
    maximized?: boolean;
    icons?: ((props: object) => any | any);
    onMaximize?(e: {originalEvent: Event, maximized: boolean}): void;
    onHide(): void;
    onShow?(): void;
    'data-test-id'?: string;
    superdeskTheme?: string;
}

export class Dialog extends React.Component<DialogProps,any> {}
