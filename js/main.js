document.addEventListener('DOMContentLoaded', e => {
    const sidebar = document.getElementById('sidebar');
    

    document.addEventListener('click', function(e) {
        if (!e.target.classList.contains('region')) { return }
        var region = document.getElementById(e.target.id);
        const img = document.createElement('img');
        region.onclick = e => {
            if (sidebar.classList.contains('show')) {
                sidebar.classList.remove('show');
                sidebar.innerText = "";
            } else {
                sidebar.classList.add('show');
                if (region == document.getElementById('Temeria')) {
                    sidebar.innerText = 'Temeria';
                    img.src = 'media/Temeria.png';
                    sidebar.append(img);
                }
                if (region == document.getElementById('Nilfgaard')) {
                    sidebar.innerText = 'Nilfgaard';
                    img.src = 'media/Nilfgaard.png';
                    sidebar.append(img);
                }
            }
        }
    }); 
})
document.addEventListener('keydown', function(event) {
  if (event.code == 'Escape') {
    sidebar.innerText = "";
    sidebar.classList.remove('show');
  }
});
