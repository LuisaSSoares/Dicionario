const modal = document.querySelector(".sessao");
const span = document.querySelector("#modal");
const Palavra1 = document.querySelector(".Palavra1")
const des_palavra1 = document.querySelector(".des_palavra1")
const Palavra2 = document.querySelector(".Palavra2")
const des_palavra2 = document.querySelector(".des_palavra2")
const frase = document.querySelector(".frase")
const trechoConto = document.querySelector('#trechoConto')
const btnEng = document.querySelector(".btnEng")
const btnPtbr = document.querySelector(".btnPtbr")


let audioIngles, audioPortugues
let fraseAudio

p1.onclick = function() {
    span.classList.toggle("visible")
    Palavra1.textContent = "Utmost"
    des_palavra1.textContent = "NOUN: the most possible: the extreme limit: the highest attainable point or degree"
    Palavra2.textContent = "Máximo"
    des_palavra2.textContent = " SUBSTANTIVO: mais possível: o limite extremo: o ponto ou grau mais alto atingível"
    frase.textContent = "This new system represents the utmost in modern technology."
    audioIngles = new Audio('./musicas/Utmost.mp3')
    audioPortugues = new Audio('./musicas/maximo.mp3')
    fraseAudio = new Audio('./frases/Sentence - Utmost.mp3')
    trechoConto.textContent = 'Com o decorrer das músicas, o moço foi ofuscado pelo olhar de sua futura esposa, e a mesma ficou apaixonada tanto por ele quanto pela música, assim, havendo a primeira troca de olhares entre os jovens mesmo de muito longe. Depois da apresentação, os dois foram conversar um pouco no lado de fora do teatro, abordando o máximo de assuntos reflexivos possíveis[...]'

}
p2.onclick = function() {
    span.classList.toggle("visible")
    Palavra1.textContent = "Strawberry"
    des_palavra1.textContent = "NOUN: a sweet soft red fruit with a seed-studded surface."
    Palavra2.textContent = "Morango"
    des_palavra2.textContent = "SUBSTANTIVO: uma fruta vermelha doce e macia com uma superfície repleta de sementes."
    frase.textContent = "'We should bring strawberries to future meetings so we don't get hungry.'"
    audioIngles = new Audio('./musicas/strawberry.mp3')
    audioPortugues = new Audio('./musicas/morango.mp3')
    fraseAudio = new Audio('./frases/Sentence- strawberry.mp3')
    trechoConto.textContent = 'Dentro daquele cesto, haviam alguns morangos frescos [...]'
}

p3.onclick = function() {
    span.classList.toggle("visible")
    Palavra1.textContent = "Earth"
    des_palavra1.textContent = "NOUN: the planet on which we live; the world."
    Palavra2.textContent = "Terra"
    des_palavra2.textContent = "SUBSTANTIVO: o planeta em que vivemos; o mundo."
    frase.textContent = '"After the performance, the two talked for a while outside the theater, covering as many reflective topics as possible, such as the existence of aliens on Earth."'
    audioIngles = new Audio('./musicas/Earth.mp3')
    audioPortugues = new Audio('./musicas/Terra.mp3')
    fraseAudio = new Audio('./frases/Sentence- Earth.mp3')
    trechoConto.textContent = 'Depois da apresentação, os dois foram conversar um pouco no lado de fora do teatro, abordando o máximo de assuntos reflexivos possíveis, como por exemplo a existência de alienígenas na Terra.'
}

p5.onclick = function() {
    span.classList.toggle("visible")
    Palavra1.textContent = "Xylophone"
    des_palavra1.textContent = "NOUN: a musical instrument played by striking wooden bars of varying lengths with small mallets."
    Palavra2.textContent = "Xilofone"
    des_palavra2.textContent = "SUBSTANTIVO: instrumento musical tocado por batidas em barras de madeira de comprimentos variados com pequenas marretas."
    frase.textContent= '"A young man played the xylophone in a recognized orchestra in the city."'
    audioIngles = new Audio('./musicas/xylophone.mp3')
    audioPortugues = new Audio('./musicas/xilofone.mp3')
    fraseAudio = new Audio('./frases/Sentence - Xylophone.mp3')
    trechoConto.textContent = 'Eles estavam se referindo aos anos de 1950, época em que um jovem tocava xilofone em uma orquestra reconhecida na cidade e uma moça trabalhava em uma fábrica de tecidos.'
}

p4.onclick = function() {
    span.classList.toggle("visible")
    Palavra1.textContent = "Enormity"
    des_palavra1.textContent = "NOUN: the great or extreme scale, seriousness, or extent of something perceived as bad or morally wrong."
    Palavra2.textContent = "Enormidade"
    des_palavra2.textContent = "SUBSTANTIVO: a grande ou extrema escala, seriedade ou extensão de algo percebido como ruim ou moralmente errado."
    frase.textContent = '"While walking a little around the region, they found an Araucaria tree, where they were enchanted by the enormity of its trunk."'
    audioIngles = new Audio('./musicas/enormity.mp3')
    audioPortugues = new Audio('./musicas/Enormidade.mp3')
    fraseAudio = new Audio('./frases/Sentence - Enormity.mp3')
    trechoConto.textContent = 'Ao caminhar um pouco pela região, encontraram uma árvore de araucária, onde se encantaram com a enormidade de seu tronco, se sentaram debaixo de sua sombra e tiraram do cesto uma toalha vermelha xadrez para organizar o encontro.'
}

p6.onclick = function() {
    span.classList.toggle("visible")
    Palavra1.textContent = "Carbohydrate"
    des_palavra1.textContent = "NOUN: organic compounds like sugars, starch, and cellulose, with a 2:1 ratio of hydrogen to oxygen (similar to water), are used for structural purposes and energy storage in living tissues."
    Palavra2.textContent = "Carboidrato"
    des_palavra2.textContent = "SUBSTANTIVO: compostos orgânicos como açúcares, amido e celulose, com uma proporção de 2:1 de hidrogênio para oxigênio (semelhante à água), são usados ​​para fins estruturais e armazenamento de energia em tecidos vivos."
    frase.textContent = '"Inside that basket, there were some fresh strawberries and several foods rich in carbohydrates, such as bread, honey and some cereals."'
    audioIngles = new Audio('./musicas/carbohydrate.mp3')
    audioPortugues = new Audio('./musicas/carboidrato.mp3')
    fraseAudio = new Audio('./frases/Sentence - Carbohydrate.mp3')
    trechoConto.textContent = '[...] vários alimentos ricos em carboidratos, como pães, mel e alguns cereais.'
}

p7.onclick = function() {
    span.classList.toggle("visible")
    Palavra1.textContent = "Eighth"
    des_palavra1.textContent = "NUMBER: constituting number eight in a sequence; 8th."
    Palavra2.textContent = "Oitavo"
    des_palavra2.textContent = "NÚMERO: constituindo o número oito em uma sequência; 8º."
    frase.textContent = '"The young woman was one of those in the audience, sitting in the middle of the eighth row."'
    audioIngles = new Audio('./musicas/eighth.mp3')
    audioPortugues = new Audio('./musicas/oitavo.mp3')
    fraseAudio = new Audio('./frases/Sentence - eighth.mp3')
    trechoConto.textContent = 'Em uma noite onde o teatro estava lotado com a esperada apresentação da orquestra, a jovem era uma das que estavam na plateia, sentada no meio da oitava fileira. Ela amava música clássica e era apaixonada por concertos musicais.'
}

p8.onclick = function() {
    span.classList.toggle("visible")
    Palavra1.textContent = "Elderly"
    des_palavra1.textContent = "ADJECTIVE: (of a person) old or aging."
    Palavra2.textContent = "Idoso/Idosa"
    des_palavra2.textContent = "ADJETIVO: (de uma pessoa) velho ou envelhecido."
    frase.textContent = '"Two elderly people were looking for a place to hold their picnic that had been planned for years."'
    audioIngles = new Audio('./musicas/elderly.mp3')
    audioPortugues = new Audio('./musicas/Idoso.mp3')
    fraseAudio = new Audio('./frases/Sentence - Elderly.mp3')
    trechoConto.textContent = 'Em um belo e ensolarado dia no parque, dois idosos estavam procurando um lugar para realizar seu piquenique planejado há anos.'
}

p9.onclick = function() {
    span.classList.toggle("visible")
    Palavra1.textContent = "Overwhelmed"
    des_palavra1.textContent = "ADJECTIVE: A mixture of depression and stress. You feel like you want to cry because you have so much that is on your mind."
    Palavra2.textContent = "Sobrecarregado"
    des_palavra2.textContent = "SUBSTANTIVO: Uma mistura de depressão e estresse. Você sente vontade de chorar porque tem muita coisa em mente."
    frase.textContent = "His wife was overwhelmed to see him back safe."
    audioIngles = new Audio('./musicas/overwhelmed.mp3')
    audioPortugues = new Audio('./musicas/sobrecarregado.mp3')
    fraseAudio = new Audio('./frases/Sentence - Overwhelmed.mp3')
    trechoConto.textContent = 'A conversa estava chegando ao fim, quando um tempo sobrecarregado estava chegando na cidade, pequenos flashes de raios passaram a aparecer nas nuvens e a chuva começou a surgir [...]'
}

p10.onclick = function() {
    span.classList.toggle("visible")
    Palavra1.textContent = "Thunderstorm"
    des_palavra1.textContent = "NOUN: a storm with thunder and lightning and typically also heavy rain or hail."
    Palavra2.textContent = "Trovoada"
    des_palavra2.textContent = "SUBSTANTIVO: uma tempestade com trovões e relâmpagos e normalmente também chuva forte ou granizo."
    frase.textContent = '"The rain began to appear, getting thicker and thicker, giving rise to a thunderstorm."'
    audioIngles = new Audio('./musicas/Thunderstorm.mp3')
    audioPortugues = new Audio('./musicas/Trovoada.mp3')
    fraseAudio = new Audio('./frases/Sentence - thunderstorm.mp3')
    trechoConto.textContent = '[...] ficando mais densa cada vez mais, dando o início a uma trovoada. O cavalheiro, assustado, correu segurando a donzela pela mão e a levou até seu veículo, onde deu uma carona até a casa dela. Depois deste dia, eles nunca mais pararam de ser ver.'
}

btnEng.addEventListener('mouseover', function() {
    audioIngles.load()
    audioIngles.play()
})
btnEng.addEventListener('mouseout', function() {
    audioIngles.pause()
})  
btnPtbr.addEventListener('mouseover', function() {
    audioPortugues.load()
    audioPortugues.play()  
})

btnPtbr.addEventListener('mouseout', function() {
    audioPortugues.pause()
})

botaoFrase.addEventListener('mouseover', function() {
    fraseAudio.load()
    fraseAudio.play()
})

botaoFrase.addEventListener('mouseout', function() {
    fraseAudio.pause()
})

btn.onclick = function () {
    modal.classList.toggle("visible");
}