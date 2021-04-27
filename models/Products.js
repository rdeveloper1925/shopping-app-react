export class Product {
  constructor(id, ownerId, title, imageUrl, description, price) {
    this.id = id;
    this.ownerId = ownerId;
    this.imageUrl = imageUrl;
    this.title = title;
    this.description = description;
    this.price = price;
  }
}

const PRODUCTS = [
  new Product(
    'p1',
    'u1',
    'Red Shirt',
    require('../assets/img/red-t-shirt.jpg'),
    'A red t-shirt, perfect for days with non-red weather.',
    29.99
  ),
  new Product(
    'p2',
    'u1',
    'Blue Carpet',
    require('../assets/img/blue-pattern-texture-macro.jpg'),
    'Fits your red shirt perfectly. To stand on. Not to wear it.',
    99.99
  ),
  new Product(
    'p3',
    'u2',
    'Coffee Mug',
    require('../assets/img/bean-beans-black-coffee-160834.jpg'),
    'Can also be used for tea!',
    8.99
  ),
  new Product(
    'p4',
    'u3',
    'The Book - Limited Edition',
    require('../assets/img/blur-blurred-book-pages-46274.jpg'),
    "What the content is? Why would that matter? It's a limited edition!",
    15.99
  ),
  new Product(
    'p5',
    'u3',
    'PowerBook',
    require('../assets/img/mac-book.jpg'),
    'Awesome hardware, crappy keyboard and a hefty price. Buy now before a new one is released!',
    2299.99
  ),
  new Product(
    'p6',
    'u1',
    'Pen & Paper',
    require('../assets/img/pen.jpg'),
    "Can be used for role-playing (not the kind of role-playing you're thinking about...).",
    5.49
  )
];

export default PRODUCTS;


