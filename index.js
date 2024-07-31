function addingEventListener() {
    const input = document.getElementById('input');
    input.addEventListener('click', function() {
        alert('I was clicked!');
    });
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { addingEventListener };
}