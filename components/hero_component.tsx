import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative">
      <header className="relative z-10">
        <h1 className="font-bold text-zinc-200">
          Welcome to Planet Express Academy!
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor
        </p>
      </header>
      <Image
        className="w-full h-auto object-cover z-0"
        src="/space.png"
        fill
        alt="Space"
      />
    </section>
  );
}
