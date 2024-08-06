export default function Hero() {
  return (
    <section className="w-full relative">
      <div className="top-0 left-0 h-[30vh] w-full absolute">
        <figure className="absolute-cover bg-gradient-to-r from-primary via-secondary to-secondary" />
        <figure className="absolute-cover bg-gradient-to-b from-transparent to-background" />
      </div>
    </section>
  );
}
