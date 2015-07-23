class Pizza{
	id: number;
	name: string;
	description:string;
	type:string;
	imageUrl:string;
}

class PizzaService{
    pizzas= [
		{ id: 1, name: 'Margharita', description: 'ser, szynka, pieczarki, cebula', type: 'Pizza', imageUrl: 'img/pizza1.jpg', cost: '21,54' },
		{ id: 2, name: 'Favorita', description: 'ser, szynka, pomidor, kukurydza', type: 'Pizza', imageUrl: 'img/pizza2.jpg', cost: '22,54' },
		{ id: 3, name: 'Bosmańska', description: 'ser, kukurydza, tuńczyk', type: 'Pizza', imageUrl: 'img/pizza3.jpg', cost: '23,54' },
		{ id: 4, name: 'Wegetariańska', description: 'ser, pieczarki, kukurydza, groszek, papryka', type: 'Pizza', imageUrl: 'img/pizza4.jpg', cost: '24,54' },
		{ id: 5, name: 'Pikantna', description: 'ser, pieczarki, cebula, groszek, papryka, kiełbasa', type: 'Pizza', imageUrl: 'img/pizza5.jpg', cost: '25,54' },
		{ id: 6, name: 'Tropikalna', description: 'ser, szynka, ananas, brzoskwinia, banan', type: 'Pizza', imageUrl: 'img/pizza6.jpg', cost: 22.54 },
		{ id: 7, name: 'Wiejska', description: 'ser, kukurydza, kiełbasa, boczek', type: 'Pizza', imageUrl: 'img/pizza7.jpg', cost: 21.54 },
		{ id: 8, name: 'Quatro', description: 'cztery rodzaje sera', type: 'Pizza', imageUrl: 'img/pizza8.jpg', cost: 22.54 },
		{ id: 9, name: 'Salami', description: 'ser, pieczarki, salami', type: 'Pizza', imageUrl: 'img/pizza9.jpg', cost: 27.54 },
		{ id: 10, name: 'Frutti Di Mare', description: 'ser, tuńczyk, owoce morza, oliwki', type: 'Pizza', imageUrl: 'img/pizza10.jpg', cost: 26.54 },
		{ id: 11, name: 'Connpollo', description: 'ser, cebula, kukurydza, papryka, kurczak', type: 'Pizza', imageUrl: 'img/pizza11.jpg', cost: 25.54 },
		{ id: 12, name: 'Lasagna', description: 'lasagna mięsna', type: 'Makarony', imageUrl: 'img/pasta1.jpg', cost: 14.84 },
		{ id: 13, name: 'Fetuccine Con Pollo', description: 'fetuccine z kurczakiem w sosie kremowo - pomidorowym', type: 'Makarony', imageUrl: 'img/lasagne1.jpg', cost: 29.34 },
		{ id: 14, name: 'Pepsi / 7up / Mirinda', description: '0.3l', type: 'Napoje', imageUrl: 'img/drink1.jpg', cost: 1.60 },
		{ id: 16, name: 'Lipton Ice Tea 0,5L', description: 'Lemon Tea, Peach Tea, Green Tea, Green Tea Mango, Red Tea', type: 'Napoje', imageUrl: 'img/drink2.jpg', cost: 2.50 },
		{ id: 15, name: 'Woda mineralna', description: 'gazowana lub niegazowana 0.5l', type: 'Napoje', imageUrl: 'img/drink3.jpg', cost: 2.00 }
	];
	
	// pizzas2(): Array<Pizza>{
	// 	return[
	// 		{ id: 1, name: 'Margharita', description: 'ser, szynka, pieczarki, cebula', type: 'Pizza', imageUrl: 'img/pizza1.jpg' },
	// 		{ id: 2, name: 'Favorita', description: 'ser, szynka, pomidor, kukurydza', type: 'Pizza', imageUrl: 'img/pizza2.jpg' },
	// 		{ id: 3, name: 'Bosmańska', description: 'ser, kukurydza, tuńczyk', type: 'Pizza', imageUrl: 'img/pizza3.jpg' },
	// 		{ id: 4, name: 'Wegetariańska', description: 'ser, pieczarki, kukurydza, groszek, papryka', type: 'Pizza', imageUrl: 'img/pizza4.jpg' },
	// 		{ id: 5, name: 'Pikantna', description: 'ser, pieczarki, cebula, groszek, papryka, kiełbasa', type: 'Pizza', imageUrl: 'img/pizza5.jpg' },
	// 		{ id: 6, name: 'Tropikalna', description: 'ser, szynka, ananas, brzoskwinia, banan', type: 'Pizza', imageUrl: 'img/pizza6.jpg' },
	// 		{ id: 7, name: 'Wiejska', description: 'ser, kukurydza, kiełbasa, boczek', type: 'Pizza', imageUrl: 'img/pizza7.jpg' },
	// 		{ id: 8, name: 'Quatro', description: 'cztery rodzaje sera', type: 'Pizza', imageUrl: 'img/pizza8.jpg' },
	// 		{ id: 9, name: 'Salami', description: 'ser, pieczarki, salami', type: 'Pizza', imageUrl: 'img/pizza9.jpg' },
	// 		{ id: 10, name: 'Frutti Di Mare', description: 'ser, tuńczyk, owoce morza, oliwki', type: 'Pizza', imageUrl: 'img/pizza10.jpg' },
	// 		{ id: 11, name: 'Connpollo', description: 'ser, cebula, kukurydza, papryka, kurczak', type: 'Pizza', imageUrl: 'img/pizza11.jpg' },
	// 		{ id: 12, name: 'Lasagna', description: 'lasagna mięsna', type: 'Makarony', imageUrl: 'img/pasta1.jpg' },
	// 		{ id: 13, name: 'Fetuccine Con Pollo', description: 'fetuccine z kurczakiem w sosie kremowo - pomidorowym', type: 'Makarony', imageUrl: 'img/lasagne1.jpg' },
	// 		{ id: 14, name: 'Pepsi / 7up / Mirinda', description: '0.3l', type: 'Napoje', imageUrl: 'img/drink1.jpg' },
	// 		{ id: 16, name: 'Lipton Ice Tea 0,5L', description: 'Lemon Tea, Peach Tea, Green Tea, Green Tea Mango, Red Tea', type: 'Napoje', imageUrl: 'img/drink2.jpg' },
	// 		{ id: 15, name: 'Woda mineralna', description: 'gazowana lub niegazowana 0.5l', type: 'Napoje', imageUrl: 'img/drink3.jpg' }
	// 	];
	// }
}

services.service('pizzaService', PizzaService);