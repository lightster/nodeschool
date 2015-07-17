'use strict';

console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(template, ...vars) {
    var output = ''
    vars.forEach((variable) => {
        output += template.shift()
        output += variable
            .replace(/&/g, '&amp;')
            .replace(/'/g, '&apos;')
            .replace(/"/g, '&quot;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
    })
    output += template.shift()
    return output
}
