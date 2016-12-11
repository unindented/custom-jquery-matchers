import $ from 'jquery'

const hasProperty = function (actual, expected) {
  return (expected === undefined ? actual !== undefined : actual === expected)
}

const hasCss = function (el, css) {
  let prop
  let value
  const $el = $(el)

  for (prop in css) {
    if (css.hasOwnProperty(prop)) {
      value = css[prop]
      if (value === 'auto' && $el.get(0).style[prop] === 'auto') {
        continue
      }
      if ($el.css(prop) !== value) {
        return false
      }
    }
  }
  return true
}

const comparator = (func) => () => ({
  compare: func
})

export const toExist = comparator((el) => {
  const actual = $(el).length
  const pass = (actual > 0)
  const message = `Expected element${pass ? ' not' : ''} to exist`
  return {pass, message}
})

export const toHaveLength = comparator((el, expected) => {
  const actual = $(el).length
  const pass = (actual === expected)
  const message = `Expected element${pass ? ' not' : ''} to have length ${expected}, but had ${actual}`
  return {pass, message}
})

export const toHaveId = comparator((el, expected) => {
  const actual = $(el).attr('id')
  const pass = (actual === expected)
  const message = `Expected element${pass ? ' not' : ''} to have ID '${expected}', but had '${actual}'`
  return {pass, message}
})

export const toHaveClass = comparator((el, expected) => {
  const actual = $(el).attr('class')
  const pass = $(el).hasClass(expected)
  const message = `Expected element${pass ? ' not' : ''} to have class '${expected}', but had '${actual}'`
  return {pass, message}
})

export const toHaveTag = comparator((el, expected) => {
  expected = expected.toLowerCase()
  const actual = $(el).prop('tagName').toLowerCase()
  const pass = (actual === expected)
  const message = `Expected element${pass ? ' not' : ''} to have tag '${expected}', but had '${actual}'`
  return {pass, message}
})

export const toHaveAttr = comparator((el, attr, expected) => {
  const actual = $(el).attr(attr)
  const addendum = (expected !== undefined ? (` with value '${expected}'`) : '')
  const pass = hasProperty(actual, expected)
  const message = `Expected element${pass ? ' not' : ''} to have attribute '${attr}'${addendum}, but had '${actual}'`
  return {pass, message}
})

export const toHaveProp = comparator((el, prop, expected) => {
  const actual = $(el).prop(prop)
  const addendum = (expected !== undefined ? (` with value '${expected}'`) : '')
  const pass = hasProperty(actual, expected)
  const message = `Expected element${pass ? ' not' : ''} to have property '${prop}'${addendum}, but had '${actual}'`
  return {pass, message}
})

export const toHaveText = comparator((el, expected) => {
  const actual = $.trim($(el).text())
  if (expected && $.isFunction(expected.test)) {
    const pass = expected.test(actual)
    const message = `Expected element${pass ? ' not' : ''} to have text matching '${expected}', but had '${actual}'`
    return {pass, message}
  }
  const pass = (actual.indexOf(expected) !== -1)
  const message = `Expected element${pass ? ' not' : ''} to have text '${expected}', but had '${actual}'`
  return {pass, message}
})

export const toHaveData = comparator((el, data, expected) => {
  const actual = $(el).data(data)
  const addendum = (expected !== undefined ? (` with value '${expected}'`) : '')
  const pass = hasProperty(actual, expected)
  const message = `Expected element${pass ? ' not' : ''} to have data '${data}'${addendum}, but had '${actual}'`
  return {pass, message}
})

export const toHaveValue = comparator((el, expected) => {
  const actual = $(el).val()
  const pass = (actual === expected)
  const message = `Expected element${pass ? ' not' : ''} to have value '${expected}', but had '${actual}'`
  return {pass, message}
})

export const toHaveCss = comparator((el, expected) => {
  const pass = hasCss(el, expected)
  const message = `Expected element${pass ? ' not' : ''} to have CSS ${jasmine.pp(expected)}`
  return {pass, message}
})

export const toBeChecked = comparator((el) => {
  const pass = $(el).is(':checked')
  const message = `Expected element${pass ? ' not' : ''} to be checked`
  return {pass, message}
})

export const toBeDisabled = comparator((el) => {
  const pass = $(el).is(':disabled')
  const message = `Expected element${pass ? ' not' : ''} to be disabled`
  return {pass, message}
})

export const toBeEmpty = comparator((el) => {
  const pass = $(el).is(':empty')
  const message = `Expected element${pass ? ' not' : ''} to be empty`
  return {pass, message}
})

export const toBeHidden = comparator((el) => {
  const pass = $(el).is(':hidden')
  const message = `Expected element${pass ? ' not' : ''} to be hidden`
  return {pass, message}
})

export const toBeSelected = comparator((el) => {
  const pass = $(el).is(':selected')
  const message = `Expected element${pass ? ' not' : ''} to be selected`
  return {pass, message}
})

export const toBeVisible = comparator((el) => {
  const pass = $(el).is(':visible')
  const message = `Expected element${pass ? ' not' : ''} to be visible`
  return {pass, message}
})

export const toBeFocused = comparator((el) => {
  el = $(el).get(0)
  const pass = (el === el.ownerDocument.activeElement)
  const message = `Expected element${pass ? ' not' : ''} to be focused`
  return {pass, message}
})

export const toBeInDom = comparator((el) => {
  el = $(el).get(0)
  const pass = $.contains(document.documentElement, el)
  const message = `Expected element${pass ? ' not' : ''} to be attached to the DOM`
  return {pass, message}
})

export const toBeMatchedBy = comparator((el, expected) => {
  const actual = $(el).filter(expected).length
  const pass = (actual > 0)
  const message = `Expected element${pass ? ' not' : ''} to be matched by '${expected}'`
  return {pass, message}
})

export const toHaveDescendant = comparator((el, selector) => {
  const actual = $(el).find(selector).length
  const pass = (actual > 0)
  const message = `Expected element${pass ? ' not' : ''} to contain child '${selector}'`
  return {pass, message}
})

export const toHaveDescendantWithText = comparator((el, selector, expected) => {
  const actual = $.trim($(el).find(selector).text())
  if (expected && $.isFunction(expected.test)) {
    const pass = expected.test(actual)
    const message = `Expected element${pass ? ' not' : ''} to have descendant '${selector}' with text matching '${expected}', but had '${actual}'`
    return {pass, message}
  }
  const pass = (actual.indexOf(expected) !== -1)
  const message = `Expected element${pass ? ' not' : ''} to have descendant '${selector}' with text '${expected}', but had '${actual}'`
  return {pass, message}
})
