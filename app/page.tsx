export default function Home() {
  return (
    <>
      <section
        aria-labelledby="page-title"
        className="frame-rule relative grid gap-6 border-b border-line px-5 py-10 sm:px-8 sm:py-12 lg:grid-cols-[3fr_2fr] lg:items-center lg:gap-16"
      >
        <h1
          id="page-title"
          className="text-4xl font-display sm:text-5xl lg:text-6xl"
        >
          Exploration Title
        </h1>
        <p
          id="page-description"
          className="max-w-lg text-base leading-relaxed text-muted sm:text-lg"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur magni
          atque in sunt asperiores nulla placeat.
        </p>
      </section>
      <section
        id="exploration-container"
        aria-label="Explorations"
        // TODO: rewrite sm:min-h-[32rem] to either sm:min-h-128 or use a custom class
        className=" flex min-h-96 flex-1 p-3 sm:min-h-[32rem] sm:p-5"
      >
        <div className="drafting-grid min-w-0 flex-1 rounded-xl border border-line bg-gray-a3" />
      </section>
    </>
  )
}
