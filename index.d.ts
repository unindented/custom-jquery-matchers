export function toExist(): boolean
export function toHaveLength(len: number): boolean
export function toHaveId(id: string): boolean
export function toHaveClass(klass: string): boolean
export function toHaveTag(tag: string): boolean
export function toHaveAttr(key: string, val?: any): boolean
export function toHaveProp(key: string, val?: any): boolean
export function toHaveText(text: string | RegExp): boolean
export function toHaveData(key: string, val?: any): boolean
export function toHaveValue(val: any): boolean
export function toHaveCss(css: {[key: string]: any}): boolean
export function toBeChecked(): boolean
export function toBeDisabled(): boolean
export function toBeEmpty(): boolean
export function toBeHidden(): boolean
export function toBeSelected(): boolean
export function toBeVisible(): boolean
export function toBeFocused(): boolean
export function toBeInDom(): boolean
export function toBeMatchedBy(sel: string): boolean
export function toHaveDescendant(sel: string): boolean
export function toHaveDescendantWithText(sel: string, text: string | RegExp): boolean
