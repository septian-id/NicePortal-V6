function nice_alert(options){
    var modal = document.createElement('div');
    var title = document.createElement('div');
    var text = document.createElement('div');
    
    title.setAttribute('class', 'theme');
    title.innerHTML = options.title;
    
    
    text.innerHTML = options.text;
    
    modal.style.display = 'block';
    modal.appendChild(title);
    modal.appendChild(text);
    
    modal.setAttribute('class', 'modal');
    document.body.appendChild(modal);
}