const Discord = require('discord.js');
const { color, prefix } = require('../sts.json');

exports.run = (client, message, args) => {
    message.delete()
    .catch(err => console.log(err));

    var load = message.guild.emojis.cache.find(r => r.name === 'carregando')

    if(args[0]){
        return message.reply('Formato correto: ' + prefix + 'iniciar')
        .then(m => m.delete({ timeout: 5000 }))
        .catch(err => console.log(err));
    }

    message.channel.send(new Discord.MessageEmbed()
    .setColor(color)
    .setTitle(`Carregando, Aguarde ${load}`))
    .then(m => m.delete({ timeout: 5000 }))
    .catch(err => console.log(err))
    .then(() => {
        
        message.channel.send(new Discord.MessageEmbed()
        .setColor(color)
        .setTitle('Atenção, as perguntas mudarão de 20 em 20 segundos;'))
        .then(m => m.delete({ timeout: 5000 }))
        .catch(err => console.log(err))
        
        .then(() => {
            message.channel.send(new Discord.MessageEmbed()
            .setColor(color)
            .setTitle('Caso queira finalizar o jogo, utilize: e.parar;'))
            .then(m => m.delete({ timeout: 5000 }))
            .catch(err => console.log(err))
            .then(() => {
                message.channel.send(new Discord.MessageEmbed()
                .setColor(color)
                .setTitle(`Iniciando o jogo, Aguarde ${load}`))
                .then(m => m.delete({ timeout: 10000 }))
                .catch(err => console.log(err))

        })
        
        
            setInterval(() => {
                var list = [
                "Eu nunca fiquei obcecado em stalkear alguém nas redes sociais.",
                "Eu nunca fui expulso da sala de aula.",
                "Eu nunca desmaiei na rua.",
                "Nunca peguei carona com estranhos.",
                "Eu nunca fui parado por policiais.",
                "Nunca andei de cavalo.",
                "Eu nunca quebrei um osso.",
                "Eu nunca quebrei um dente.",
                "Eu nunca criei uma conta fake nas redes sociais.",
                "Eu nunca tive uma experiência paranormal.",
                "Eu nunca tive algum perfil de rede social hackeado.",
                "Nunca roubei alguma coisa em uma loja.",
                "Eu nunca tive paralisia do sono.",
                "Eu nunca fiquei preso no elevador.",
                "Eu nunca tentei cortar meu próprio cabelo.",
                "Eu nunca pintei o cabelo de alguma cor estranha.",
                "Nunca cantei num karaokê na frente de várias pessoas.",
                "Eu nunca apareci na TV.",
                "Eu nunca passei mal num parque de diversões.",
                "Eu nunca corri da polícia.",
                "Eu nunca pedi dinheiro no sinal.",
                "Eu nunca me arrependi imediatamente após enviar uma mensagem.",
                "Eu nunca levei um tapa no rosto.",
                "Eu nunca dei um tapa no rosto de alguém.",
                "Eu nunca participei de uma briga.",
                "Eu nunca chorei no transporte público.",
                "Eu nunca passei mais de dois dias sem tomar banho.",
                "Eu nunca olhei o celular de alguém sem que a pessoa soubesse.",
                "Eu nunca fui demitido.",
                "Eu nunca dormi na rua.",
                "Nunca peguei comida do lixo e comi.",
                "Eu nunca consegui algo de graça dando em cima de alguém.",
                "Nunca caí na rua porque estava olhando o celular.",
                "Eu nunca tive um vídeo constrangedor postado na internet.",
                "Eu nunca quebrei algo na casa de alguém e escondi.",
                "Eu nunca saí de uma festa ou bar sem pagar.",
                "Eu nunca me gabei por algo que não fiz.",
                "Eu nunca menti tanto sobre alguma coisa que acreditei que fosse verdade.",
                "Eu nunca sofri bullying na escola.",
                "Eu nunca segurei a mão da pessoa errada na rua.",
                "Eu nunca fui expulso de uma festa.",
                "Eu nunca postei algo enquanto estava bêbado e me arrependi.",
                "Eu nunca fingi estar sóbrio na frente dos meus pais.",
                "Eu nunca roubei dinheiro da carteira dos meus pais.",
                "Eu nunca nadei pelado em uma praia ou cachoeira.",
                "Eu nunca acordei e ainda estava bêbado.",
                "Eu nunca comi comida que caiu no chão.",
                "Eu nunca fiquei com mais de uma pessoa ao mesmo tempo.",
                "Eu nunca dirigi bêbado.",
                "Eu nunca fiquei com uma pessoa e depois nunca mais falei com ela.",
                "Eu nunca vi algum vizinho sem roupa.",
                "Eu nunca usei o Tinder.",
                "Eu nunca fiquei com gêmeos.",
                "Eu nunca tive medo de ter pego alguma DST.",
                "Eu nunca marquei de ficar com alguém do Tinder.",
                "Eu nunca fiquei com alguém no banheiro de uma festa.",
                "Eu nunca fiquei com alguém na praia.",
                "Eu nunca usei drogas.",
                "Eu nunca fiquei com alguém na rua.",
                "Nunca fiquei com alguém do mesmo gênero que eu.",
                "Eu nunca fingi ter prazer.",
                "Eu nunca mandei fotos íntimas para alguém.",
                "Eu nunca mandei a mesma foto íntima para duas pessoas ao mesmo tempo.",
                'Eu nunca tive um sonho "picante" com alguém que está aqui.',
                'Eu nunca tive um sonho "picante" com algum professor.',
                "Eu nunca matei algum animal com as próprias mãos.",
                "Eu nunca fiquei tão louco que esqueci o próprio nome.",
                "Eu nunca fui carregado para casa depois de dar PT.",
                "Nunca me senti atraído(a) pelo pai/mãe de algum amigo.",
                "Eu nunca enviei fotos íntimas para a pessoa errada.",
                "Eu nunca fiquei com alguém na cama dos meus pais.",
                "Eu nunca dancei enquanto tirava a roupa para alguém.",
                "Usei o Tinder enquanto namorava.",
                "Eu nunca precisei ir ao médico devido a um objeto estranho preso dentro do meu corpo.",
                "Eu nunca vi duas pessoas tendo relações íntimas.",
                "Eu nunca fui num clube para adultos.",
                "Eu nunca tive uma foto íntima vazada na internet.",
                "Eu nunca faltei ao trabalho porque estava morrendo de ressaca.",
                "Eu nunca fiquei com alguém que eu nem sabia o nome.",
                "Eu nunca fumei um cigarro alucinógeno.",
                "Eu nunca fiquei com alguém desta roda.",
                "Eu nunca tirei a roupa em uma festa.",
                'Eu nunca tive um "amigo colorido" ou "amigo com benefícios".',
                "Eu nunca fiquei com alguém na universidade.",
                "Eu nunca comi comida que alguém largou na área de alimentação do shopping.",
                "Nunca fiquei com mais de 5 pessoas em uma festa.",
                "Nunca beijei alguém que eu não conhecia.",
                "Eu nunca dei um beijo triplo.",
                "Eu nunca fiz topless na praia.",
                "Eu nunca fiquei com o irmão/irmã de um amigo.",
                "Eu nunca dormi no ônibus e perdi o meu ponto.",
                "Eu nunca fiquei apaixonado por algum professor.",
                "Eu nunca fui assaltado.",
                "Eu nunca enviei/recebi flores.",
                "Eu nunca menti para meus pais sobre onde estou indo.",
                "Eu nunca fiz xixi em uma piscina do lado dos meus amigos.",
                "Eu nunca usei Crocs.",
                "Eu nunca vomitei na frente de outras pessoas.",
                "Eu nunca peidei num elevador e fingi que não era eu.",
                "Eu nunca segui a pessoa errada na rua.",
                "Eu nunca deixei meu celular cair na privada.",
                "Eu nunca fui em uma festa sem ser chamado.",
                "Nunca matei um animal de estimação por acidente.",
                "Eu nunca beijei alguém famoso.",
                "Eu nunca fiquei com gêmeos.",
                "Eu nunca vomitei e tive que engolir.",
                "Eu nunca gostei mais de um filme do que do seu livro.",
                "Eu nunca entrei em casa pela janela.",
                "Eu nunca ri tanto que fiz um pouco de xixi.",
                "Nunca passei o número errado para alguém.",
                "Eu nunca menti para alguém sobre qual era meu nome.",
                "Eu nunca tive o meu nome no SPC.",
                "Eu nunca dei em cima do namorado(a) de algum amigo.",
                "Eu nunca disse eu te amo para alguém que eu não amava de verdade.",
                "Nunca me apaixonei à primeira vista.",
                "Eu nunca passei a madrugada mandando mensagem para alguém.",
                "Eu nunca fui ignorado no WhatsApp por alguém que eu gostava.",
                "Eu nunca inventei boatos sobre um ex namorado.",
                "Eu nunca traí um namorado(a) e nunca fui descoberto.",
                "Eu nunca implorei para algum ex voltar para mim.",
                "Eu nunca estive um relacionamento aberto.",
                "Eu nunca tive um namorado virtual.",
                "Eu nunca me arrependi de ter namorado alguém.",
                "Nunca beijei meu melhor amigo.",
                "Eu nunca duvidei sobre minha orientação sexual."
                ];
            let rand = list[Math.floor(Math.random() * list.length )];
    
                message.channel.send(new Discord.MessageEmbed()
                .setColor(color)
                .setTitle(rand))
                .catch(err => console.log(err));
                }, 20000 )
        })
    });
};