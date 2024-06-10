type Option = {
    text: string;
    inputType?: string;
};

type Question = {
    text: string;
    nextQuestionId?: string;
    previousQuestionId?: string;
    options: Option[];
};

type Quiz = {
    name: string;
    firstQuestionId: string;
    resultCTALink: string;
    questions: Record<string, Question>;
};

export const quizzes: Record<string, Quiz> = {
    'liberar-potencial': {
        name: 'Libere seu Potencial',
        firstQuestionId: '1',
        resultCTALink: 'https://transformesuavida30dias.site/',
        questions: {
            '1': {
                text: 'Qual a sua faixa etária?',
                nextQuestionId: '2',
                options: [
                    { text: 'Menos de 18 anos' },
                    { text: '18-24 anos' },
                    { text: '25-34 anos' },
                    { text: '35-44 anos' },
                    { text: '45-54 anos' },
                    { text: '55 anos ou mais' },
                ],
            },
            '2': {
                text: 'Qual é o seu gênero?',
                previousQuestionId: '1',
                nextQuestionId: '3',
                options: [
                    { text: 'Masculino' },
                    { text: 'Feminino' },
                    { text: 'Prefiro não dizer' },
                    { text: 'Outro', inputType: 'text' },
                ],
            },
            '3': {
                text: 'Você sente que tem dificuldade em gerenciar seu tempo e suas tarefas diárias?',
                previousQuestionId: '2',
                nextQuestionId: '4',
                options: [
                    { text: 'Sempre' },
                    { text: 'Frequentemente' },
                    { text: 'Ocasionalmente' },
                    { text: 'Raramente' },
                    { text: 'Nunca' },
                ],
            },
            '4': {
                text: 'Com que frequência você se sente estressado(a) ou sobrecarregado(a) pelas demandas diárias?',
                previousQuestionId: '3',
                nextQuestionId: '5',
                options: [
                    { text: 'Sempre' },
                    { text: 'Frequentemente' },
                    { text: 'Ocasionalmente' },
                    { text: 'Raramente' },
                    { text: 'Nunca' },
                ],
            },
            '5': {
                text: 'Você se preocupa com sua situação financeira e sente que precisa de mais controle sobre suas finanças?',
                previousQuestionId: '4',
                nextQuestionId: '6',
                options: [
                    { text: 'Sempre' },
                    { text: 'Frequentemente' },
                    { text: 'Ocasionalmente' },
                    { text: 'Raramente' },
                    { text: 'Nunca' },
                ],
            },
            '6': {
                text: 'Você sente que procrastina frequentemente e isso afeta sua produtividade e seus objetivos?',
                previousQuestionId: '5',
                nextQuestionId: '7',
                options: [
                    { text: 'Sempre' },
                    { text: 'Frequentemente' },
                    { text: 'Ocasionalmente' },
                    { text: 'Raramente' },
                    { text: 'Nunca' },
                ],
            },
            '7': {
                text: 'Você sente que não está atingindo todo o seu potencial e gostaria de fazer mais com sua vida?',
                previousQuestionId: '6',
                nextQuestionId: '8',
                options: [
                    { text: 'Sempre' },
                    { text: 'Frequentemente' },
                    { text: 'Ocasionalmente' },
                    { text: 'Raramente' },
                    { text: 'Nunca' },
                ],
            },
            '8': {
                text: 'Qual dessas áreas você gostaria de melhorar em sua vida?',
                previousQuestionId: '7',
                nextQuestionId: '9',
                options: [
                    { text: 'Disciplina e organização' },
                    { text: 'Gestão do tempo' },
                    { text: 'Controle financeiro' },
                    { text: 'Resiliência emocional' },
                    { text: 'Todas as anteriores' },
                ],
            },
            '9': {
                text: 'O que você mais deseja alcançar nos próximos 6 meses?',
                previousQuestionId: '8',
                nextQuestionId: '10',
                options: [
                    { text: 'Melhorar minha produtividade e alcançar metas' },
                    { text: 'Reduzir o estresse e melhorar minha saúde mental' },
                    { text: 'Ter mais controle e segurança financeira' },
                    { text: 'Descobrir e perseguir minha verdadeira paixão' },
                    { text: 'Transformar minha vida em todas essas áreas' },
                ],
            },
            '10': {
                text: 'Como você se sentiria se pudesse superar a procrastinação e alcançar seus objetivos?',
                previousQuestionId: '9',
                nextQuestionId: '11',
                options: [
                    { text: 'Extremamente satisfeito(a) e realizado(a)' },
                    { text: 'Muito satisfeito(a)' },
                    { text: 'Moderadamente satisfeito(a)' },
                    { text: 'Pouco satisfeito(a)' },
                    { text: 'Indiferente' },
                ],
            },
            '11': {
                text: 'Se você tivesse acesso a um guia prático que te ajudasse a transformar sua vida em 30 dias, você estaria interessado(a) em conhecê-lo?',
                previousQuestionId: '10',
                nextQuestionId: '12',
                options: [
                    { text: 'Sim, com certeza!' },
                    { text: 'Sim, provavelmente' },
                    { text: 'Talvez' },
                    { text: 'Não tenho certeza' },
                    { text: 'Não' },
                ],
            },
            '12': {
                text: 'O que te impediria de investir em um guia completo para transformar sua vida?',
                previousQuestionId: '11',
                options: [
                    { text: 'Falta de tempo' },
                    { text: 'Falta de dinheiro' },
                    { text: 'Dúvidas sobre a eficácia' },
                    { text: 'Preferência por outros métodos' },
                    { text: 'Nada, estou pronto(a) para mudar' },
                ],
            },
        },
    },
};
