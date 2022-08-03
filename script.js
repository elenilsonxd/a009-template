// const nome =  prompt('qual é o seu nome?');

// const cor = prompt('qual é sua cor favorita?');

// const citacao = prompt('qual é a sua citação favorita?')

// const nomeMaiusculas = nome.toUpperCase()
// console.log(nomeMaiusculas) 

// const tamanho = nome.length
// console.log('o seu nome tem', tamanho , 'caracteres')


// const stringConcatenada = 'a cor favorita de ' + nome + ' é ' + cor + ' e sua citação predileta é \'' + citacao + '\'.' 


// console.log('STRING CONCATENADA', stringConcatenada )

// const templateStrings =`a cor favorita de ${nome} \ncor favorita: ${cor}` 
// console.log("TEMPLATE STRINGS" , templateStrings)

// const tema = nomeMaiusculas.includes('a')
// console.log('seu nome tem a letra a?', tema)

const nomeDoUsuario = prompt('defina seu nome de usuário');
const emailDoUsuario = prompt('e seu email')
const tamanho = nomeDoUsuario.length

const stringConcatenada2 = 'o email ' + emailDoUsuario + ' foi cadastrado com sucesso. Boas vindas,' + nomeDoUsuario + '! E o nome de usuário tem ' + tamanho + ' letras.'

console.log(stringConcatenada2)

const email2 = emailDoUsuario.includes('@')
console.log('email com @?', email2)
