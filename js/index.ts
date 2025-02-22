interface Carro {
    nome: string;
    img: string;
    descricao: string;
}

let carros: Carro[] = [
    {
        nome: "Ferrari 488",
        img: "img/car",
        descricao: "Um carro esportivo de alta performance com motor V8."
    },
    {
        nome: "Lamborghini Aventador",
        img: "img/car",
        descricao: "Um supercarro icônico com um motor V12."
    },
    {
        nome: "Porsche 911",
        img: "img/car",
        descricao: "Um dos carros esportivos mais famosos, conhecido por seu desempenho e design."
    },
    {
        nome: "BMW M3",
        img: "img/car",
        descricao: "Um sedã esportivo com excelente desempenho e dirigibilidade."
    },
    {
        nome: "Audi R8",
        img: "img/car",
        descricao: "Um supercarro de luxo com um motor V10."
    },
    {
        nome: "Tesla Model S",
        img: "img/car",
        descricao: "Um sedã elétrico de alta performance com tecnologia de ponta."
    },
    {
        nome: "Mercedes-Benz S-Class",
        img: "img/car",
        descricao: "Um sedã de luxo conhecido por seu conforto e tecnologia avançada."
    },
    {
        nome: "Jaguar F-Type",
        img: "img/car",
        descricao: "Um carro esportivo com um design elegante e desempenho poderoso."
    },
    {
        nome: "Chevrolet Camaro",
        img: "img/car",
        descricao: "Um carro esportivo americano clássico com um motor V8."
    },
    {
        nome: "Ford Mustang",
        img: "img/car",
        descricao: "Um icônico carro esportivo americano conhecido por seu desempenho robusto."
    }
];

let album = document.getElementById('album-carros');
let cont=0;

if(album){
    
    album!.innerHTML= "";
    carros.forEach(carro => {
        const item = document.createElement('div');
        item.className = 'col mb-3';
        item.innerHTML = `
            <div class="card">
                <img src="${carro.img + (++cont)}.jpg" class="img-fluid rounded-start p-3" alt="imagem${cont}" style="width = 300px;
                                                                                                                height: 150px;
                                                                                                                object-fit: cover">
                <div class="card-body text-center">
                    <h5 class="card-title">${carro.nome}</h5>
                    <p class="card-text" style="display: -webkit-box; -webkit-line-clamp: 2; 
                                                -webkit-box-orient: vertical;
                                                overflow: hidden;
                                                text-overflow: ellipsis;"
                    >${carro.descricao}</p>
                    <a href="#" class="btn btn-primary">Search</a>
                </div>
            </div>
        `;
        album!.appendChild(item);
    });
} else {
    console.error('Objecto album-carros inacessivel');
}