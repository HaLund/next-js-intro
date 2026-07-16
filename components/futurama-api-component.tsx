export default async function Futurama(){
    const fetchedData = fetch("https://futuramaapi.com/api/characters?orderBy=id&orderByDirection=asc&page=1&size=50");
    const json = (await fetchedData).json;
    console.log({json});
    return (
        <div>
            json
        </div>
    );
}