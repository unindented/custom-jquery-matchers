/// <reference types="jasmine"/>

declare namespace jasmine {
  interface Matchers {
    toExist(): boolean
    toHaveLength(len: number): boolean
    toHaveId(id: string): boolean
    toHaveClass(klass: string): boolean
    toHaveTag(tag: string): boolean
    toHaveAttr(key: string, val?: any): boolean
    toHaveProp(key: string, val?: any): boolean
    toHaveText(text: string | RegExp): boolean
    toHaveData(key: string, val?: any): boolean
    toHaveValue(val: any): boolean
    toHaveCss(css: {[key: string]: any}): boolean
    toBeChecked(): boolean
    toBeDisabled(): boolean
    toBeEmpty(): boolean
    toBeHidden(): boolean
    toBeSelected(): boolean
    toBeVisible(): boolean
    toBeFocused(): boolean
    toBeInDom(): boolean
    toBeMatchedBy(sel: string): boolean
    toHaveDescendant(sel: string): boolean
    toHaveDescendantWithText(sel: string, text: string | RegExp): boolean
  }
}
