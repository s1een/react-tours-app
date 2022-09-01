### About

- This application was created while learning React.js.
- Simple tabs with tours.
- The application can be tested from the [link](https://s1een.github.io/react-tours-app/ "link").

# React Menu App

![](https://miro.medium.com/max/1000/0*aHvK7Rbt_Dv74mWq.png)

## Technologies used in the development:

- [![React][React.js]][React-url]
- [![npm][npm.com]][npm-url]

## React

The app was built in React v.18.2.0.

`$ npx create-react-app react-tours-app`

## App Component
States:
```javascript
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
```

Fetch:
```javascript
 const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
```
## Tours Component
Render:
```javascript 
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} removeTour={removeTour} />
        ))}
      </div>
    </section>
  );
};
```
## Tour Component
State: 
```javascript
const [readMore, setReadMore] = useState(false);
```
Render:
```javascript 
const Tour = ({ id, image, info, price, name, removeTour }) => {
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore((prev) => !prev)}>
            {readMore ? "Show Less" : "Show More"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          Not interested
        </button>
      </footer>
    </article>
  );
};
```
## Acknowledgments
Resources that helped me in development.

* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [freeCodeCamp](https://www.freecodecamp.org/)
* [React Icons](https://react-icons.github.io/react-icons/search)

## My Links

* [![linkedin][linkedin.com]][linkedin-url]
* [![telegram][telegram.com]][telegram-url]
* [![portfolio][portfolio.com]][portfolio-url]
<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: images/main.png
[React.js]: https://img.shields.io/badge/React_18.2.0-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[npm.com]: https://img.shields.io/badge/NPM-20232A?style=for-the-badge&logo=npm&logoColor=764abc
[npm-url]: https://www.npmjs.com/
[linkedin.com]: https://img.shields.io/badge/LinkedIn-20232A?style=for-the-badge&logo=linkedin&logoColor=wgute
[linkedin-url]: https://www.linkedin.com/in/dmitry-morozov-082288228/
[telegram.com]: https://img.shields.io/badge/Telegram-20232A?style=for-the-badge&logo=telegram&logoColor=white
[telegram-url]: https://t.me/r3ason_why
[portfolio.com]: https://img.shields.io/badge/Portfolio-20232A?style=for-the-badge&logo=github&logoColor=white
[portfolio-url]: https://s1een.github.io/my_cv_site/
