function Drink({ name }: { name: string }) {
    let part: string = 'leaf';
    let caffeine: string = '15-70 mg/cup';
    let age: string = 'leaf';

    if(name==='tea'){
      part='leaf';
      caffeine='15-70 mg/cup';
      age='4,000+ years';
      }
  else if(name==='coffee'){
    part='bean';
      caffeine='80–185 mg/cup';
      age='1,000+ years';
  }
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{part}</dd>
        <dt>Caffeine content</dt>
        <dd>{caffeine}</dd>
        <dt>Age</dt>
        <dd>{age}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}
