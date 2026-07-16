import "@/components/futurama-api-component";
import Futurama from "@/components/futurama-api-component";

export default async function futurama(){
    const jsonData = await Futurama();
    //console.log(jsonData);
    //måste parsa till objekt, för att sedan skriva ut använd stringify
    return(
        <div>
            <main>
                {jsonData}
            </main>
        {/* jsonData */}
        </div>
    )
}