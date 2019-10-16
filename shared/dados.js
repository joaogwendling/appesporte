export const tudo = { empresas : [
    {
        id:0,
        name: 'Centauro',
        local: 'Porto Alegre',
        state: 'RS',
        description: 'Loja de Departamento de artigos desportivos',
        category: 'Artigos Desportivos',
        sports:['futebol', 'basquete', 'tênis'],
        contact: '(51)99999999',
        user: 'centauro',
        password: 'senhacentauro',
    },
    {
        id:1,
        name: 'Paquetá Esportes',
        local: 'Canoas',
        state:'RS',
        description: 'Tudo para esportes',
        category: 'Artigos Desportivos',
        sports:['futebol', 'tênis', 'corrida'],
        contact: '(51)88888888',
        user: 'paqueta',
        password:'senhapaqueta',
    },
    {
        id:2,
        name: 'Genius Uniformes',
        local: 'Porto Alegre',
        state: 'RS',
        description: 'Uniformes para todos os esportes',
        category: 'Uniformes',
        sports:['futebol', 'basquete', 'tênis', 'natação'],
        contact: '(51)77777777',
        user:'genius',
        password:'senhagenius',
    },
    {
        id:3,
        name: 'AOC',
        local: 'Tramandaí',
        state: 'RS',
        description: 'Artigos para esportes náuticos',
        category:'Artigos Desportivos',
        sports:['vela','remo','surfe'],
        contact:'(51)666666666',
        user:'aoc',
        password:'senhaaoc',
    },
],
demandas: [
    {
        id:0,
        idempresa:0,
        title:'Orçamento para 50 Chuteiras',
        desc:'Estamos precisando de cinquenta chuteiras bla bla bla'
    },
    {
        id:1,
        idempresa:0,
        title:'Toucas de natação', 
        desc:'Bom dia, queremos 150 toucas de natação para evento próximo da nossa companhia'
    },
    {
        id:2,
        idempresa:2,
        title:'Orçamento 25 Goleiras',
        desc:'Somos a Genius e queremos goleiras'
    },
    {
        id:3,
        idempresa:2,
        title:'Orçamento Bermudas', 
        desc:'Oito mil bermudas por favor'
    },
]};