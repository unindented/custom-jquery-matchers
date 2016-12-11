import $ from 'jquery'

describe('Matchers', function () {
  let $el

  afterEach(function () {
    $el.remove()
  })

  describe('using a div', function () {
    beforeEach(function () {
      $el = $('<div/>').appendTo('body')
    })

    describe('#toExist', function () {
      it('does not pass if the element does not exist', function () {
        expect('.foo').not.toExist()
      })

      it('passes if the element exists', function () {
        $el.addClass('foo')
        expect('.foo').toExist()
      })
    })

    describe('#toHaveLength', function () {
      it('does not pass if the element does not have the length', function () {
        expect('.foo').not.toHaveLength(1)
      })

      it('passes if the element exists', function () {
        $el.addClass('foo')
        expect('.foo').toHaveLength(1)
      })
    })

    describe('#toHaveId', function () {
      it('does not pass if the element does not have the ID', function () {
        $el.attr('id', 'bar')
        expect($el).not.toHaveId('foo')
      })

      it('passes if the element has the ID', function () {
        $el.attr('id', 'foo')
        expect($el).toHaveId('foo')
      })
    })

    describe('#toHaveClass', function () {
      it('does not pass if the element does not have the class', function () {
        $el.addClass('bar baz')
        expect($el).not.toHaveClass('foo')
      })

      it('passes if the element has the class', function () {
        $el.addClass('foo bar')
        expect($el).toHaveClass('foo')
      })
    })

    describe('#toHaveTag', function () {
      it('does not pass if the element does not have the tag', function () {
        expect($el).not.toHaveTag('foo')
      })

      it('passes if the element has the tag', function () {
        expect($el).toHaveTag('div')
      })
    })

    describe('#toHaveAttr', function () {
      it('does not pass if the element does not have the attribute', function () {
        expect($el).not.toHaveAttr('foo')
      })

      it('does not pass if the element does not have the attribute with the specified value', function () {
        $el.attr('foo', 'baz')
        expect($el).not.toHaveAttr('foo', 'bar')
      })

      it('passes if the element has the attribute', function () {
        $el.attr('foo', 'baz')
        expect($el).toHaveAttr('foo')
      })

      it('passes if the element has the attribute with the specified value', function () {
        $el.attr('foo', 'bar')
        expect($el).toHaveAttr('foo', 'bar')
      })
    })

    describe('#toHaveText', function () {
      it('does not pass if the element does not contain the text', function () {
        $el.text('foobar')
        expect($el).not.toHaveText('baz')
      })

      it('does not pass if the element\'s text does not match the regex', function () {
        $el.text('foobar')
        expect($el).not.toHaveText(/baz$/)
      })

      it('passes if the element contains the text', function () {
        $el.text('foobar')
        expect($el).toHaveText('bar')
      })

      it('passes if the element\'s text matches the regex', function () {
        $el.text('foobar')
        expect($el).toHaveText(/bar$/)
      })
    })

    describe('#toHaveData', function () {
      it('does not pass if the element does not have the data', function () {
        expect($el).not.toHaveData('foo')
      })

      it('does not pass if the element does not have the data with the specified value', function () {
        $el.attr('data-foo', 'baz')
        expect($el).not.toHaveData('foo', 'bar')
      })

      it('passes if the element has the data', function () {
        $el.attr('data-foo', 'baz')
        expect($el).toHaveData('foo')
      })

      it('passes if the element has the data with the specified value', function () {
        $el.attr('data-foo', 'bar')
        expect($el).toHaveData('foo', 'bar')
      })
    })

    describe('#toHaveCss', function () {
      it('does not pass if the element does not have the CSS', function () {
        $el.css({'font-size': '20px', 'font-weight': 'bold'})
        expect($el).not.toHaveCss({'font-size': '20px', 'font-weight': 'normal'})
      })

      it('passes if the element has the CSS', function () {
        $el.css({'font-size': '20px', 'font-weight': 'bold'})
        expect($el).toHaveCss({'font-size': '20px', 'font-weight': 'bold'})
      })

      it('passes if the element has the CSS', function () {
        $el.css({'font-size': '20px', 'height': 'auto'})
        expect($el).toHaveCss({'font-size': '20px', 'height': 'auto'})
      })
    })

    describe('#toBeEmpty', function () {
      it('does not pass if the element is not empty', function () {
        $el.text('foobar')
        expect($el).not.toBeEmpty()
      })

      it('passes if the element is empty', function () {
        expect($el).toBeEmpty()
      })
    })

    // jQuery's ':hidden' selector is not reliable under jsdom.
    xdescribe('#toBeHidden', function () {
      it('does not pass if the element is not hidden', function () {
        expect($el).not.toBeHidden()
      })

      it('passes if the element is hidden', function () {
        $el.hide()
        expect($el).toBeHidden()
      })
    })

    // jQuery's ':visible' selector is not reliable under jsdom.
    xdescribe('#toBeVisible', function () {
      it('does not pass if the element is not visible', function () {
        $el.hide()
        expect($el).not.toBeVisible()
      })

      it('passes if the element is visible', function () {
        expect($el).toBeVisible()
      })
    })

    describe('#toBeInDom', function () {
      it('does not pass if the element is not attached to the DOM', function () {
        $el.detach()
        expect($el).not.toBeInDom()
      })

      it('passes if the element is attached to the DOM', function () {
        expect($el).toBeInDom()
      })
    })

    describe('#toBeMatchedBy', function () {
      it('does not pass if the element is not matched by the selector', function () {
        expect($el).not.toBeMatchedBy('input')
      })

      it('passes if the element is matched by the selector', function () {
        expect($el).toBeMatchedBy('div')
      })
    })
  })

  describe('using an input', function () {
    beforeEach(function () {
      $el = $('<input/>').appendTo('body')
    })

    describe('#toHaveProp', function () {
      it('does not pass if the element does not have the property', function () {
        expect($el).not.toHaveProp('disabled', true)
      })

      it('passes if the element has the property', function () {
        $el.prop('disabled', true)
        expect($el).toHaveProp('disabled', true)
      })
    })

    describe('#toHaveValue', function () {
      it('does not pass if the element does not have the value', function () {
        expect($el).not.toHaveValue('foobar')
      })

      it('passes if the element has the value', function () {
        $el.val('foobar')
        expect($el).toHaveValue('foobar')
      })
    })

    describe('#toBeDisabled', function () {
      it('does not pass if the element is not disabled', function () {
        expect($el).not.toBeDisabled()
      })

      it('passes if the element is disabled', function () {
        $el.prop('disabled', true)
        expect($el).toBeDisabled()
      })
    })

    describe('#toBeFocused', function () {
      it('does not pass if the element is not focused', function () {
        expect($el).not.toBeFocused()
      })

      it('passes if the element is focused', function () {
        $el.focus()
        expect($el).toBeFocused()
      })
    })
  })

  describe('using a checkbox', function () {
    beforeEach(function () {
      $el = $('<input type="checkbox"/>').appendTo('body')
    })

    describe('#toBeChecked', function () {
      it('does not pass if the element is not checked', function () {
        expect($el).not.toBeChecked()
      })

      it('passes if the element is checked', function () {
        $el.prop('checked', true)
        expect($el).toBeChecked()
      })
    })
  })

  describe('using a dropdown', function () {
    beforeEach(function () {
      $el = $('<select><option>Foo</option><option>Bar</option></select>').appendTo('body')
    })

    describe('#toBeSelected', function () {
      it('does not pass if the element is not selected', function () {
        expect($el.find('option:last')).not.toBeSelected()
      })

      it('passes if the element is selected', function () {
        $el.find('option:last').prop('selected', true)
        expect($el.find('option:last')).toBeSelected()
      })
    })

    describe('#toHaveDescendant', function () {
      it('does not pass if the element does not have the descendant', function () {
        expect($el).not.toHaveDescendant('> input')
      })

      it('passes if the element has the descendant', function () {
        expect($el).toHaveDescendant('> option')
      })
    })

    describe('#toHaveDescendantWithText', function () {
      it('does not pass if the element does not have a descendant with the text', function () {
        expect($el).not.toHaveDescendantWithText('> option', 'Baz')
      })

      it('does not pass if the descendant\'s text does not match the regex', function () {
        expect($el).not.toHaveDescendantWithText('> option', /Baz$/)
      })

      it('passes if the element has a descendant with the text', function () {
        expect($el).toHaveDescendantWithText('> option', 'Bar')
      })

      it('passes if the descendant\'s text matches the regex', function () {
        expect($el).toHaveDescendantWithText('> option', /Bar$/)
      })
    })
  })
})
