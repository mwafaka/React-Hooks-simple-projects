# `05` Mapping array to `<li>`

Using the knowledge you have from the previous example, now lets fix the map function again but starting from an array of objects.

```js
const animals = [ { label: 'Horse' }, { label: 'Turtle' }, { label: 'Elephan' }, { label: 'Monkey' } ];
```

# :speech_balloon: Instructions

Update the code's [.map function](https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d) to create a new array of `<li>`'s that each of them corresponds one animal from the original array, the resulting array should be something like this:

```jsx
const animalsInHTML = [
  <li>Horse</li>,
  <li>Turtle</li>,
  <li>Elephant</li>,
  <li>Monkey</li>
];
```

And include them all together inside the website.

#### :bulb: Hint

- You can use the second parameter of the map function as a `key` to uniquely identify each html item.

Your website should look like this: ![LIs](./src/image/reference-image.png)

