
window.onload = () => {
    const storedModeValue = localStorage.getItem('0d59053a-4bae-11f0-a526-00155d46ae3f-darkmode');
    document.getElementById('darkmode-checkbox').checked = storedModeValue === 'dark';
    updateStyleAndSetLocalStorage(storedModeValue === 'dark');

}

setMode = () => {
    const toggle = document.getElementById('darkmode-checkbox');

    updateStyleAndSetLocalStorage(toggle.checked);
}

updateStyleAndSetLocalStorage = (checked) => {
    if (checked) {
        document.body.style['background-color'] = '#121212'
        document.body.style['color'] = '#EEE'
    } else {
        document.body.style['background-color'] = '#fff'
        document.body.style['color'] = '#000'
    }

    localStorage.setItem('0d59053a-4bae-11f0-a526-00155d46ae3f-darkmode', checked ? 'dark' : 'light');
}