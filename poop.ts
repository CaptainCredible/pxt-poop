
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */

declare const enum poopTypes {
    //% block="long and thin"
    longThin = 1,
    //% block="big and fat"
    bigFat = 2,
    //% block="sloppy mess"
    sloppyMess = 1,
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace poopMechanics {
    /**
     * Registers code to run when the device notifies about a particular event.
     * @param event event description
     * @param body code handler when event is triggered
     */

    //%blockId = devices_gamepad_event //% block="on poop|%event" icon="\uf152"
    export function onPoop(event: poopTypes, body: Action) {
        control.onEvent(1337, event, body);
    }

    /**
 * Attaches code to run when the splash occurrs.
 */

    //% blockId=devices_device_info_event block="on plas|%event" icon="\uf152"
    export function whenPoopSplashes(spanky: Action): void {
        control.onEvent(1338, 1, spanky);
    }



    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function makePoop(ofType: poopTypes): void {
        control.raiseEvent(1337, ofType)
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value - 1) + fib(value - 2);
    }
}
