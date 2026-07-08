import Image from 'next/image';

type Person = {
  name: string;
  profession?: string;
  noOfAwards?: number;
  awards?: string;
  discovered?: string;
};

type ImageProps = {
  url: string;
  alt?: string;
};

function getImageUrl(url: string) {
        return url;
    }

export default function Profile({person, image}: {person: Person; image: ImageProps}){
  return(
    <section className="profile">
      <h2>{person.name}</h2>
      <Image
        className="avatar"
        src={getImageUrl(image.url)}
        alt={image.alt ?? ''}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession:</b>
          {person.profession}
        </li>
        <li>
          <b>Awards: {person.noOfAwards}</b>
          ({person.awards})
        </li>
        <li>
          <b>Discovered:</b>
          {person.discovered}
        </li>
      </ul>
    </section>
  );
}