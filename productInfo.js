// productInfo.js

  // HEre i  created a Function to show product details when a product is selected
function showDetails(productId) {
  const selectedProduct = allProducts.find(product => product.id === productId);

  if (selectedProduct) {

    // created an URL with product details and navigate to productDetails.html
      const url = `productDetails.html?id=${selectedProduct.id}&name=${encodeURIComponent(selectedProduct.name)}&description=${encodeURIComponent(selectedProduct.description)}&price=${selectedProduct.price}&image=${selectedProduct.image}`;

      // this command redirects to the productDetails.html page in the folder
      window.location.href = url;
  } else {
      console.error('Product not found');
  }
}

// created the function for close the modal

function closeModal() {
  // Implement close modal functionality if needed
}
// created the Function to reterive product details 

function getDetails(productId) {
  showProductInfo(productId);
  

}

function populateData() {
  allProducts.forEach(createProduct);
}
// created the function to create HTML elements for a product and append them
function createProduct(product) {
  varel.innerHTML = `
  <div>
      <img src="${product.image}" onclick="getDetails(${product.id})"/>
      <h4>${product.descr}</h4>
      <h5>${product.price}</h5>
      <button onclick="showDetails(${product.id})">Show Details</button>
      <div id="myModal" class="modal">
          <span class="crossMark" onclick="closeModal()">&times;</span>
          <p id="modalContent"></p>
      </div>
  </div>
`;
}

// productInfo.js

// created the array of product objects and also defined the same 
var allProducts = [
  {
    // Details for each product from here the Javascript calls the data and shows it to us 
      id : 1,
      image: 'img/DB1.jpg',
      descr: 'Weights',
      name: 'Handheld weights fastened to a short bar make up dumbbells, a multipurpose piece of exercise equipment. These little weights come in different sizes and are great for strength training. Dumbbells offer a variety of exercises that concentrate on particular muscle areas, promoting balanced growth and enhanced stability. Dumbbells support a variety of training objectives, from increasing muscular bulk to improving cardiovascular fitness. They enhance functional motions and promote overall wellness, making them ideal for both novice and experienced workout lovers. Dumbbells continue to be an essential part of any workout program because of its ease of use and efficacy in helping users build strength, tone, and endurance..',
      price: '€ 10.00'
      
  },
  {
      id : 2,
      image: 'img/Yogamat.jpg',
      descr: 'Yoga Mat',
      name: 'The yoga mat is a useful and necessary piece of equipment for everyone who does yoga or fitness. Made from premium, environmentally friendly materials, it offers a cozy, non-slip surface for a range of postures and workouts. Long-lasting support and stability during workouts are ensured by its durability, and its lightweight design makes it portable for use anywhere.Peace begins on the yoga mat.. ',
      price: '€ 39.00'
  },
  {
      id : 3,
      image: 'img/RB1.jpg',
      descr: 'Stretch Band',
      name: 'The flexible fitness band, known as the Stretch Band, is ideal for toning muscles, resistance training, and flexibility exercises. Its resilient and flexible material offers different intensities of resistance to suit users of all fitness levels',
      price: '€ 16.00'
  },
  {
    id : 4,
    image: 'img/Exclusive_img_1.webp',
    descr: 'Gym Rack ',
    name: 'A multipurpose piece of exercise equipment for strength training is the gym rack. It is a robust, portable platform that may be used for a variety of workouts, such as pull-ups, bench presses, and squats. Its customizable features allow it to handle a variety of routines, making it a great option for anyone looking for a complete and space-saving home gym.Push Harder the Yesterday',
    price: '€ 1000.00'
},
{
  id : 5,
    image: 'img/Exclusive_img_3.webp',
    descr: 'Plates',
    name: 'Deadlift plates are large, dense discs used in deadlift exercises that are crucial to strength training. Made from sturdy materials, they provide support and encourage appropriate form. These varying-weight plates enable users to challenge themselves more and more, which makes them an essential part of deadlift training for developing strength and power.Add more to it',
    price: '€ 27.00'
},
{
  id : 6,
    image: 'img/Exclusive_img_2.webp',
    descr: 'Tredmill',
    name: 'An adaptable piece of fitness equipment, the treadmill allows users to work out their cardiovascular systems efficiently in the comfort of their own homes or gyms. It may be adjusted to suit different levels of fitness with different speed and incline settings. Its padded surface lessens the strain on joints. Convenient and effective workout regimens are facilitated by the treadmill, which is lightweight and easy to operate.Run to your core',
    price: '€ 2500.00'
},

  {
      id :7,
      image: 'img/Strength Bag.jpg',
      descr: 'Strength Bag ',
      name: 'The Strength Bag is a multipurpose exercise tool intended for full body exercises. It provides dynamic resistance training and is made with a sturdy design with multiple grip possibilities. The bag improves strength, stability, and endurance, making it perfect for functional training. Because of its flexible design, it may be used by people of all fitness levels and offers a demanding and productive workout.Lift your Strength',
      price: '€ 100.00'
  },
  {
      id : 8,
      image: 'img/Bench Press.jpg',
      descr: 'Bench Press',
      name: 'An essential upper body strength training exercise is the bench press. It works the triceps, shoulders, and chest and is done while reclining on a weight bench with a barbell pressed upward. Strengthening the chest and upper body through repetitions, the Bench Press is a mainstay of fitness regimens.Once and forever',
      price: '€ 19.00'
  },
  {
      id : 9,
      image: 'img/Skiprope.jpg',
      descr: 'Rope',
      name: 'A skipping rope is a multipurpose exercise equipment that is well-known for being easy to use and efficient. This lightweight equipment increases agility, improves coordination, and supports cardiovascular health. Fitness aficionados choose it because its a popular option since its perfect for a variety of workout programs and provides an effective and enjoyable approach to increase endurance, burn calories, and achieve a full-body workout.Jumping rope that you cannot live without.',
      price: '€ 15.00'
  },
  {
      id : 10,
      image: 'img/product_3.png',
      descr: 'Indoor Exercise Bike',
      name: 'A flexible piece of exercise gear for indoor cycling exercises is the indoor exercise bike. It provides a good cardiovascular workout with its adjustable resistance levels, ergonomic design, and real-time performance tracking. Because of its small size, it can be used at home and offers a quick and easy approach to improve fitness and encourage a healthy lifestyle.',
      price: '€179.00'
  },
  {
    id : 11,
    image: 'img/product_2.jpg',
    descr: 'Home Weight Bench',
    name: 'One adaptable and necessary piece of exercise equipment for home gyms is the home weight bench. Designed for strength training, it offers a firm surface for a range of activities, such as weightlifting and bench presses. It is a great option for reaching fitness objectives in the comfort of your own home because it is sturdy yet portable and provides a comfortable workout experience.',
    price: '€122.00'
  },
  {
    id : 12,
    image: 'img/product_4.jpg',
    descr: 'Kettle Bells',
    name: 'Kettle bells are a flexible and dynamic exercise equipment that work the entire body. Their ergonomic handle and small size allow for a variety of exercises that improve strength, flexibility, and endurance. Kettle Bells are ideal for both novice and expert athletes, since they aid in functional training, which enhances cardiovascular health, fat loss, and muscle toning.',
    price: '€18.00'
  }
]


function createProduct(product) {
  var el = '<li>' +
      '<div>' +
      '<img src="' + product.image + '" ' +
      'onclick="showReservationModal(' + product.id + ')"/>' +
      '<h4>' + product.descr + '</h4>' +
      '<h5>' + product.price + '</h5>' +
      '<button onclick="showDetails(' + product.id + ')">Show Details</button>' +
      '<button onclick="showReservationModal(' + product.id + ')">Reserve Now</button>' +
      '</div>' +
      '</li>';

  document.querySelector('.content').innerHTML += el;
}

function showReservationModal(productId) {
  const reservationModal = document.getElementById('reservationModal');
  const selectedProduct = allProducts.find(product => product.id === productId);

  if (selectedProduct) {
    // Set the product details in the form
    document.getElementById('productName').innerText = selectedProduct.name;
    document.getElementById('productImage').src = selectedProduct.image;
    document.getElementById('productId').value = selectedProduct.id;

    // Show the reservation modal here
    reservationModal.style.display = 'block';
  } else {
    console.error('Product not found');
  }
}

function closeReservationModal() {
  const reservationModal = document.getElementById('reservationModal');
  reservationModal.style.display = 'none';

  // we need to c;lear the form fields when closing the modal
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('mobile').value = '';
  document.getElementById('address').value = '';
}



function submitReservationForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const mobile = document.getElementById('mobile').value;
  const address = document.getElementById('address').value;
  const productId = document.getElementById('productId').value;

  // from her we get the selected product based on productId
  const selectedProduct = allProducts.find(product => product.id === parseInt(productId));

  if (selectedProduct) {
    // Here i created a new popup elementdata
    const popup = document.createElement('div');
    popup.classList.add('popup');

    // Setted the contents of the popups
    const popupContent = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mobile Number:</strong> ${mobile}</p>
      <p><strong>Address:</strong> ${address}</p>
      <hr>
      <p><strong>Selected Product:</strong> ${selectedProduct.name}</p>
      <p><strong>Description:</strong> ${selectedProduct.descr}</p>
      <p><strong>Price:</strong> ${selectedProduct.price}</p>
    `;

    popup.innerHTML = popupContent;

    // Appended the popups to the document body
    document.body.appendChild(popup);

    // Closed the reservation modal form after submission
    closeReservationModal();
  } else {
    console.error('Selected product not found');
  }

  // Here I prevented the form from submitting and the page from refreshing
  return false;
}

// // Initialized filteredProducts with all products
var filteredProducts = [...allProducts]; 

function populateData() {
  filteredProducts.forEach(createProduct);
}

function filterProducts() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  filteredProducts = allProducts.filter(product => 
    product.name.toLowerCase().includes(searchInput) ||
    product.descr.toLowerCase().includes(searchInput)
  );

  // here we clear existing products
  document.querySelector('.content').innerHTML = '';

  // here i populate the content with filtered products
  filteredProducts.forEach(createProduct);
}



