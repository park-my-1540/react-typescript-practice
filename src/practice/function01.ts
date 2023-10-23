function printName(firstName : string, formatter:(name:string) => string){
    console.log('printName');
    console.log(formatter(firstName));
}

function formatName(name:string) : string {
    console.log('formatName');
    return `${name}야 안녕`;
}

printName('시아팍', formatName);