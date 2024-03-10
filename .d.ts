/**
 * WARNING: These are just TYPES declarations!
 * ///Start(new line)import { Maciko } from "@types/maciko.ts";(new line)//end
*/
export const Maciko: {
    /**
     * Adds properties to element with given id.
     * @param id id of element to change.
     * @param props properties to add to element.
     */
    propToId(id: string, props: object): HTMLElement;

    /**
     * Parses and applies a CSS StyleSheet to page.
     * @param css CSS Code to parse.
     */
    CSS(css: string): void;
    /**
     * Adds properties to elements with given class.
     * @param clas class name of elements to change.
     * @param props properties to add.
     */
    propToClass(clas: string, props: object): HTMLElement[];
    /**
     * Adds properties to elements with given tag name.
     * @param el tag name of elements to change.
     * @param props properties to add.
     */
    propToElement(el: string, props: object): HTMLElement
    /**
     * Creates a new DOM element with given properties.
     * @param tag Tag Name of element.
     * @param attributes Attributes to add.
     * @param children Children to add to element (can be a createElement call or string with text)
     */
    createElement(tag: string, attributes: object, ...children: (string | HTMLElement)[]): HTMLElement;
    /**
     * Setups the website.
     * @param title Title of the website.
     * @param elements elements to add to body.
     */
    Setup(title: string, ...elements: (HTMLElement | string)[]): void;
    /**
     * Collection of functions for creating elements.
     */
    elements: {
        /**
         * Creates a Img element.
         * @param url url to image.
         * @param title title of element (displayed on hover).
         */
        Img(url: string, title?: string): HTMLElement;
        /**
         * Creates a Link element.
         * @param url url to link.
         * @param title title of element (displayed on hover).
         * @param id id of element.
        */
        Link(url: string, title?: string, id?: string): HTMLElement;
        /**
         * Creates a line break.
         */
        Br(): HTMLElement;
        /**
         * Creates a header.
         * @param level Level of the header (from 1 to 6).
         * @param text text of the header.
         */
        H(level: 1 | 2 | 3 | 4 | 5 | 6 | "1" | "2" | "3" | "4" | "5" | "6", text: string): HTMLElement;

        /**
         * Creates a paragraph.
         * @param contents contents of paragraph.
         */
        P(...contents: string[]): HTMLElement

        /**
         * Creates an list.
         * @param elements elements to add to list.
         */
        List(mode: "ordered" | "unordered" | "ol" | "ul", ...elements: (string | HTMLElement)[]): HTMLElement

        /**
         * Collection of functions for making forms / interactive elements
         */
        form: {
            /**
             * Creates a new button
             * @param isSubmit Is it a submit button?
             * @param children Children of DOM element. 
             */
            Button(isSubmit: boolean, ...text: (string | HTMLElement)[]): HTMLElement;

            /**
             * Creates a new Form element.
             * @param post Post Link.
             * @param children Children of the DOM element.
             */
            Form(post: string, ...children: (string | HTMLElement)[]): HTMLElement;

            /**
             * Creates a new FieldSet element.
             * @param legend legend (title)
             * @param children children of element.
             */
            FieldSet(legend: string, ...children: (string | HTMLElement)[]): HTMLElement;

            /**
             * Creates a new Input element.
             * @param type Type of the input element.
             * @param name Name of the input element.
             * @param value Initial value of the input element.
             */
            Input(
                type:
                    | "text"
                    | "number"
                    | "password"
                    | "checkbox"
                    | "radio"
                    | "reset"
                    | "file"
                    | "hidden"
                    | "image"
                    | "button",
                name: string,
                value?: string
            ): HTMLElement;
        }

        /**
         * Collection of functions for creating media embeds.
         */
        media: {
            /**
             * Creates an youtube video embed.
             * @param id Id of the video
             * @param width width of the video (default: 560)
             * @param height height of the video (default: 315)
             */
            yt(id: string, width?: number, height?: number): HTMLElement;
        }
    }
};