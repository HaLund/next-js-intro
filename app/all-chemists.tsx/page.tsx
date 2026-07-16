import { people } from '@/utils/images/data/page.js';
import { getImageUrl } from '@/utils/images/page.js';


//hur ser anropet till denna funktion ut?
export default async function AllChemistsPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const chemists = people.filter(m => m.profession === 'chemist');
    const person = chemists.find(m => m.id);
    //const person = chemists[0];
    const {slug} = await params;
    //const person = await getper
    return (
        <article>
            <h1>Chemists</h1>
            {person ? (
                <div>
                    <b>{person.name}:</b>
                    {' ' + person.profession + ' '}
                    known for {person.accomplishment}
                </div>
            ) : (
                <p>No chemists found.</p>
            )}
        </article>
    );
}
    //const {id} = await params;
    //const chemist = 

    // const listItems = chemists.map(person => 
    //   <li key={person.id}>
    //     <img
    //       src={getImageUrl(person)}
    //       alt={person.name}
    //     />
    //     <p>
    //       <b>{person.name}:</b>
    //       {' ' + person.profession + ' '}
    //       known for {person.accomplishment}
    //     </p>
    //   </li>
    // );
    // return (
    //   <article>
    //     <h1>Chemists</h1>
    //     <ul>{listItems}</ul>
    //   </article>
    // );
//}
