function generateFormOnPattern(settings){
    const form = document.createElement('form');
    form.method = settings.method;
    form.action = settings.action;

    for(let i of settings.inputs){
        let el;
        switch (i.type) {
            case 'header':
                el = document.createElement('h4');
                el.innerHTML = i.label;
                form.append(el);
                break;
            case 'email':
                el = document.createElement('input');
                el.type = i.type;
                el.name = i.name;
                el.placeholder = i.placeholder;
                form.append(el);
                break;
            case 'textarea':
                el = document.createElement('textarea');
                el.name = i.name;
                el.placeholder = i.placeholder;
                form.append(el);
                break;
            case 'submit': 
                el = document.createElement('button');
                el.innerHTML = i.label;
                form.append(el);
                break;
        }
    }

    return form;
}

const testSettings = {
    action:'/contact/by-mail',
    method:'POST',
    inputs:[
        {type:'header', label:'Skontaktuj się z nami'},
        {name:'email', type:'email', placeholder:'Wpisz swój email'},
        {name:'content', type:'textarea', placeholder:'Wpisz treść wiadomości'},
        {type:'submit', label:'Wyślij wiadomość'}
    ]
}

let generatedForm = generateFormOnPattern(testSettings);
console.log(generatedForm);