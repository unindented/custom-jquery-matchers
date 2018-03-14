/// <reference types="jest"/>

declare namespace jest {
  interface Matchers<R> {
    toExist(): boolean
    toHaveLength(len: number): boolean
    toHaveId(id: string): boolean
    toHaveClass(className: string): boolean
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

declare module "jest-jquery-matchers"
