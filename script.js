    window.addEventListener('load', function() {
        var el1 = document.getElementById('lol1')
        var id1 = el1.getAttribute('data-id')

        fetch('https://claire.seanmlbb.repl.co/avatar?id=' + id1)
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            var avatar = data.avatar
            var element = document.getElementById('lol1');
            var elz = document.getElementById('spanz1');
            element.style.setProperty('background-image', `url(${avatar})`, 'important');
            elz.innerHTML = data.name + " - Owner & Creator"
        })


        var el2 = document.getElementById('lol2')
        var id2 = el2.getAttribute('data-id')

        fetch('https://claire.seanmlbb.repl.co/avatar?id=' + id2)
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            var avatar = data.avatar
            var element = document.getElementById('lol2');
            var elz = document.getElementById('spanz2');
            element.style.setProperty('background-image', `url(${avatar})`, 'important');
            elz.innerHTML = data.name 
        })
    })