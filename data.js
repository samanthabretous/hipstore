let data = {

	apperal: [{name: 'All Black Beanie', image: 'https://s-media-cache-ak0.pinimg.com/564x/cd/ec/75/cdec7586d503e4b90a9bc6c39286b25f.jpg', price: 9.99, description: 'HipStore Hats', quantity: 0, rating: 0},
			{name: 'Idk, Google It ', image: 'https://s-media-cache-ak0.pinimg.com/564x/67/e7/ec/67e7ecc3ee0221acb832c3db6a3653a8.jpg', price: 14.99, description: 'hipStore Graphic Tee',quantity: 0, rating: 0}],

	food: [{name: 'Thai style peanut chicken wrap', image: 'http://globalassets.starbucks.com/assets/47e532188086402e9ef3b37292a61fde.jpg', price: 5.99, description: 'Grilled chicken breast tossed in a peanut coconut sauce, topped with a chile-lime veggie slaw, red bell peppers, lettuce and ginger cream cheese served on a chile tortilla. Paired with peanut-coconut sauce and a side of grapes.', quantity: 0, rating: 0}],


    tech: [{name: 'Amara Headphones', image: 'https://9fc150e398464d83928c-3d3ba9297f2f7303be162d5343c146a9.ssl.cf3.rackcdn.com/products/main/115671/mw60-wireless-over-ear-headphones-silver-brown-251808.jpg', price: 229.99, description: 'Style: Silver/Brown', quantity: 0, rating: 0}, 

          {name: 'Beyonce Vinyl Platinum Edition', image: 'http://images.urbanoutfitters.com/is/image/UrbanOutfitters/33666397_001_b?$xlarge$&defaultImage=', price: 43.99, description: 'The surprise self-titled album from Beyonce, available here on vinyl.', quantity: 0, rating: 0}],


    art: [{name: 'Art Not War Poster', image: 'https://s-media-cache-ak0.pinimg.com/236x/2f/53/73/2f537397bd7421fdca931a9ce7d5ecb9.jpg', price: 12.99, description: 'HipStore Poster', quantity: 0, rating: 0}, 

          {name: 'Soilder Poster', image: 'https://s-media-cache-ak0.pinimg.com/564x/b1/75/19/b175195f1bd3d3dc5f4c7fd7a36e66aa.jpg', price: 12.99, description: ' HipStore Poster', quantity: 0, rating: 0}],

	other: [{name: ' Vintage Roll Top BackPack', image: 'https://s-media-cache-ak0.pinimg.com/236x/43/59/69/435969d9048531c9d8719a94d082179a.jpg', price: 24.99, description: 'Black Leather Buckled Roll Top BackPack', quantity: 0, rating: 0}]


};

data.getApperal = function(){
	return this.apperal;
};

data.getFood = function(){
	return this.food;
};

data.getTech = function(){
	return this.tech;
};

data.getOther = function(){
	return this.other;
};

export default data;

