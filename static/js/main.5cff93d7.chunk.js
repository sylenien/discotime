;(this.webpackJsonpcapacitor = this.webpackJsonpcapacitor || []).push([
  [0],
  {
    85: function(e, t, c) {},
    87: function(e, t, c) {
      'use strict'
      c.r(t)
      var n = c(9),
        a = c(0),
        i = c.n(a),
        r = c(36),
        o = c.n(r),
        s = (c(85), c(31)),
        d = c(135),
        l = c(2),
        j = c(134),
        b = c(61),
        u = c(145),
        h = c(133),
        m = c(138),
        O = c(141),
        x = c(137)
      Object(d.a)()
      var f = Object(l.x)({
          minWidth: 310,
          selectors: { '> *': { margin: '0 auto' } },
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: 15,
          borderRadius: 10,
          background: 'rgba(255, 255, 255, 0.1)',
        }),
        p = {
          iconName: 'TimePicker',
          className: Object(l.x)({
            color: 'black',
            fontSize: 16,
            lineHeight: 18,
            position: 'absolute',
            right: 4,
            padding: '7px 5px 5px',
          }),
        }
      var g = function() {
          var e = i.a.useState(''),
            t = Object(s.a)(e, 2),
            c = t[0],
            a = t[1],
            r = i.a.useState(),
            o = Object(s.a)(r, 2),
            d = o[0],
            l = o[1],
            g = i.a.useState(''),
            y = Object(s.a)(g, 2),
            v = y[0],
            M = y[1],
            S = i.a.useState(''),
            k = Object(s.a)(S, 2),
            w = k[0],
            C = k[1],
            D = i.a.useState(''),
            N = Object(s.a)(D, 2),
            T = N[0],
            E = N[1]
          return (
            i.a.useEffect(
              function() {
                if (c.length && !/_/.test(c)) {
                  var e = /^(?:(?:([01]?\d|2[0-3]):)?([0-5]?\d):)?([0-5]?\d)$/.test(
                    c,
                  )
                  M(e ? '' : 'Wrong time format')
                } else M('')
              },
              [c],
            ),
            i.a.useEffect(
              function() {
                if (d && c.length && !/_/.test(c)) {
                  var e = Object(m.a)(d, 'dd.MM.yyyy'),
                    t = ''.concat(e, ' ').concat(c)
                  C(t),
                    E(
                      ''.concat(
                        Object(O.a)(Object(x.a)(t, 'dd.MM.yyyy HH:mm', new Date())),
                      ),
                    )
                }
              },
              [d, c],
            ),
            Object(n.jsxs)('div', {
              className: f,
              children: [
                Object(n.jsx)(j.a, {
                  placeholder: 'Select a date...',
                  ariaLabel: 'Select a date',
                  strings: b.a,
                  highlightCurrentMonth: !0,
                  highlightSelectedMonth: !0,
                  initialPickerDate: new Date(),
                  onSelectDate: function(e) {
                    return e && l(e)
                  },
                  showGoToToday: !0,
                  value: d,
                  formatDate: function(e) {
                    return e ? Object(m.a)(e, 'MMMM do, yyyy') : ''
                  },
                }),
                Object(n.jsx)(u.a, {
                  mask: '99\\:99',
                  title: 'time',
                  iconProps: p,
                  onChange: function(e, t) {
                    return a(null !== t && void 0 !== t ? t : '')
                  },
                  errorMessage: v,
                }),
                Object(n.jsx)('br', {}),
                Object(n.jsxs)('div', {
                  children: [
                    Object(n.jsx)('b', { children: 'timezone:' }),
                    ' ',
                    Intl.DateTimeFormat().resolvedOptions().timeZone,
                  ],
                }),
                Object(n.jsxs)('div', {
                  children: [Object(n.jsx)('b', { children: 'date:' }), ' ', w],
                }),
                Object(n.jsx)('br', {}),
                T &&
                  'NaN' !== T &&
                  !v &&
                  Object(n.jsxs)(n.Fragment, {
                    children: [
                      Object(n.jsxs)('div', {
                        children: [
                          Object(n.jsx)('b', { children: 'discord timestamp:' }),
                          ' ',
                          '<t:'.concat(T, ':F>'),
                        ],
                      }),
                      Object(n.jsx)('br', {}),
                      Object(n.jsx)(h.a, {
                        text: 'Click to copy',
                        onClick: function() {
                          return (function(e) {
                            if (navigator.clipboard)
                              navigator.clipboard
                                .writeText(e)
                                .then(function() {
                                  return !0
                                })
                                .catch(function(e) {
                                  return !1
                                })
                            else {
                              var t = document.createElement('textarea')
                              ;(t.value = e),
                                document.body.appendChild(t),
                                t.select(),
                                document.execCommand('copy'),
                                document.body.removeChild(t)
                            }
                            return !0
                          })('<t:'.concat(T, ':F>'))
                        },
                      }),
                    ],
                  }),
              ],
            })
          )
        },
        y = function() {
          return Object(n.jsxs)('div', {
            children: [
              Object(n.jsx)('div', {
                style: { marginBottom: 100, width: 310, textAlign: 'center' },
                children: 'made by Delirium#0001',
              }),
              Object(n.jsx)(g, {}),
            ],
          })
        }
      o.a.render(
        Object(n.jsx)(i.a.StrictMode, {
          children: Object(n.jsx)('div', {
            className: 'wrapper',
            children: Object(n.jsx)(y, {}),
          }),
        }),
        document.getElementById('root'),
      )
    },
  },
  [[87, 1, 2]],
])
//# sourceMappingURL=main.5cff93d7.chunk.js.map
