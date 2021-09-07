try {
    let Pagination = {
        code: '',

        Extend: function(data) {
            data = data || {}
            Pagination.size = data.size || 300
            Pagination.page = data.page || 1
            Pagination.step = data.step || 3
        },

        Add: function(s, f) {
            for (let i = s; i < f; i ++) {
                Pagination.code += '<a>' + i + '</a>'
            }
        },

        Last: function() {
            Pagination.code += '<i>...</i><a>' + Pagination.size + '</a>'
        },

        First: function() {
            Pagination.code += '<a>1</a><i>...</i>'
        },

        Click: function() {
            Pagination.page = + this.innerHTML
            Pagination.Start()
        },

        Prev: function() {
            Pagination.page --
            if (Pagination.page < 1) {
                Pagination.page = 1
            }
            Pagination.Start()
        },

        Next: function() {
            Pagination.page ++
            if (Pagination.page > Pagination.size) {
                Pagination.page = Pagination.size
            }
            Pagination.Start()
        },

        Bind: function() {
            let a = Pagination.e.getElementsByTagName('a')
            for (let i = 0; i < a.length; i ++) {
                if (+ a[i].innerHTML === Pagination.page) a[i].className = 'current'
                a[i].addEventListener('click', Pagination.Click, false)
            }
        },

        Finish: function() {
            Pagination.e.innerHTML = Pagination.code
            Pagination.code = ''
            Pagination.Bind()
        },

        Start: function() {
            if (Pagination.size < Pagination.step * 2 + 6) {
                Pagination.Add(1, Pagination.size + 1)
            } else if (Pagination.page < Pagination.step * 2 + 1) {
                Pagination.Add(1, Pagination.step * 2 + 4)
                Pagination.Last()
            } else if (Pagination.page > Pagination.size - Pagination.step * 2) {
                Pagination.First()
                Pagination.Add(Pagination.size - Pagination.step * 2 - 2, Pagination.size + 1)
            } else {
                Pagination.First()
                Pagination.Add(Pagination.page - Pagination.step, Pagination.page + Pagination.step + 1)
                Pagination.Last()
            }
            Pagination.Finish()
        },

        Buttons: function(e) {
            let nav = e.getElementsByTagName('a')
            nav[0].addEventListener('click', Pagination.Prev, false)
            nav[1].addEventListener('click', Pagination.Next, false)
        },

        Create: function(e) {

            let html = [
                `<a class="pagination-direction pagination-direction--prev">
                     <svg width="8" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.828 7l4.95 4.95-1.414 1.414L0 7 6.364.636 7.778 2.05 2.828 7z" fill="#fff"/></svg>
                 </a>`,
                '<span></span>',
                `<a class="pagination-direction pagination-direction--next">
                     <svg width="8" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.172 7L.222 2.05 1.636.636 8 7l-6.364 6.364L.222 11.95 5.172 7z" fill="#fff"/></svg>
                 </a>`
            ]

            e.innerHTML = html.join('')
            Pagination.e = e.getElementsByTagName('span')[0]
            Pagination.Buttons(e)
        },

        Init: function(e, data) {
            Pagination.Extend(data)
            Pagination.Create(e)
            Pagination.Start()
        }
    }

    let init = function() {
        Pagination.Init(document.getElementById('pagination'), {
            size: 15,
            page: 1,
            step: 3
        })
    }

    document.addEventListener('DOMContentLoaded', init, false)
} catch (e) {

}