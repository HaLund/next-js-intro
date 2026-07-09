import { people } from '@/utils/images/data/page.js';
import { getImageUrl } from '@/utils/images/page.js';

export default function List() {
  const chemists = people.filter(m => m.profession === 'chemist');
  const nonChemists = people.filter(m => m.profession != 'chemist');
  const listItems = chemists.map(person => 
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );

  const listItems2 = nonChemists.map(person => 
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return (
    <article>
      <h1>Scientists:</h1>
      <ul>{listItems}</ul>
        <h1>Non-Chemists</h1>
        <ul>{listItems2}</ul>
    </article>
  );
}