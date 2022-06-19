const highlight = document.querySelectorAll('.warnaHighlight');
        function Highlight() {
            highlight.forEach( (item) => {
                if(item.classList.contains('active')) {
                    item.classList.remove('active')
                } else {
                    item.classList.add('active')
                }
            })       
        };