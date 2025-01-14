export function useLenis(callback?: CallbackFunction, deps?: any[] | undefined, priority?: number | undefined): LenisInstance;
export const LenisContext: any;
export default ReactLenis;
export type EasingFunction = (rawValue: number) => number;
export type CallbackFunction = (instance: LenisInstance) => any;
export type CallbackEvents = {
    scroll: CallbackFunction[];
};
export type RAF = (time: number) => any;
export type ScrollToParams = {
    offset?: number;
    lerp?: number;
    duration?: number;
    easing?: EasingFunction;
    immediate?: boolean;
    lock?: boolean;
    force?: boolean;
    onComplete?: CallbackFunction;
};
export type ScrollTo = (target: number | string | HTMLElement, options?: ScrollToParams) => any;
export type ReactLenisOptions = {
    wrapper?: (HTMLElement | Window);
    content?: HTMLElement | undefined;
    wheelEventsTarget?: (HTMLElement | Window);
    lerp?: number | undefined;
    duration?: number | undefined;
    easing?: EasingFunction | undefined;
    orientation?: string | undefined;
    gestureOrientation?: string | undefined;
    smoothWheel?: boolean | undefined;
    smoothTouch?: boolean | undefined;
    syncTouch?: boolean | undefined;
    syncTouchLerp?: number | undefined;
    touchInertiaMultiplier?: number | undefined;
    normalizeWheel?: boolean | undefined;
    infinite?: boolean | undefined;
    autoResize?: boolean | undefined;
};
export type Dimensions = {
    wrapper: (HTMLElement | Window);
    content: HTMLElement;
    contentResizeObserver: ResizeObserver;
    resize: () => void;
    onContentResize: () => void;
    onWrapperResize: () => void;
    width: number;
    height: number;
    scrollWidth: number;
    scrollHeight: number;
};
export type Emitter = {
    events: CallbackEvents;
};
export type EventHandler = (id: string, fn: CallbackFunction) => any;
export type LenisInstance = {
    animatedScroll: number;
    dimensions: Dimensions;
    direction: number;
    emitter: Emitter;
    options: ReactLenisOptions;
    targetScroll: number;
    time: number;
    actualScroll: number;
    velocity: number;
    isHorizontal: boolean;
    isScrolling: boolean;
    isSmooth: boolean;
    isStopped: boolean;
    limit: number;
    progress: number;
    rootElement: HTMLElement;
    scroll: number;
    stop: () => void;
    start: () => void;
    resize: () => void;
    destroy: () => void;
    on: EventHandler;
    scrollTo: ScrollTo;
    raf: RAF;
};
export const ReactLenis: any;
export { ReactLenis as Lenis };
