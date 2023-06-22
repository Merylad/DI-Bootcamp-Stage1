// Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

const divOne = document.body.firstElementChild;
divOne.setAttribute('id', 'socialNetworkNavigation');

// First, create a new <li> tag (use the createElement method).
const newLi = document.createElement('li');
// Create a new text node with “Logout” as its specified text.
const text = document.createTextNode('Logout');
// Append the text node to the newly created list node (<li>).
newLi.appendChild(text);
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
const ulOne = document.getElementsByTagName('ul')[0];
ulOne.append(newLi);

// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).

const first = ulOne.firstElementChild;
const last = ulOne.lastElementChild;
const firstText = first.textContent;
const lastText = last.textContent;
console.log('first text:', firstText);
console.log('last text:', lastText);
