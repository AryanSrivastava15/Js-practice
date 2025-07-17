const insert = document.querySelector('#insert');
const keyInfo = document.querySelector('.key-info');

window.addEventListener('keydown', function(e){
    // Prevent default for specific keys
    if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight','Tab'].includes(e.code)) {
        e.preventDefault();
    }
    insert.innerHTML = `
        <div class='color'>
            <table>
                <tr>
                    <th>Property</th>
                    <th>Value</th>
                </tr>
                <tr>
                    <td>Key</td>
                    <td>${e.key === ' ' ? 'Space' : e.key}</td>
                </tr>
                <tr>
                    <td>Code</td>
                    <td>${e.code}</td>
                </tr>
                <tr>
                    <td>KeyCode</td>
                    <td>${e.keyCode}</td>
                </tr>
                <tr>
                    <td>Location</td>
                    <td>${e.location}</td>
                </tr>
                <tr>
                    <td>Ctrl</td>
                    <td>${e.ctrlKey}</td>
                </tr>
                <tr>
                    <td>Shift</td>
                    <td>${e.shiftKey}</td>
                </tr>
                <tr>
                    <td>Alt</td>
                    <td>${e.altKey}</td>
                </tr>
                <tr>
                    <td>Meta</td>
                    <td>${e.metaKey}</td>
                </tr>
            </table>
        </div>
        <div class="key-info">You pressed: <strong>${e.key === ' ' ? 'Space' : e.key}</strong></div>
    `;
})