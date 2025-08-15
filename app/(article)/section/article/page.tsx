export default function ArticlePage() {
  return (
    <article className="space-y-4">
      <h1 className="text-2xl font-semibold">A Tiny Fish: The Guppy</h1>

      <p>
        The guppy (<em>Poecilia reticulata</em>) is a small, colorful freshwater
        fish loved by beginner aquarists. Adult males rarely exceed 3–4 cm in
        length, which makes them perfect for compact home aquariums.
      </p>

      <h2 className="text-lg font-medium">Habitat</h2>
      <p>
        Guppies originate from warm streams and ponds in northern South America
        and the Caribbean. In captivity, they thrive in clean, slightly hard
        water at 22–26°C with gentle filtration and regular water changes.
      </p>

      <h2 className="text-lg font-medium">Why People Like Them</h2>
      <ul className="list-disc space-y-1 pl-5">
        <li>Bright, varied colors and tail shapes</li>
        <li>Small size and peaceful behavior</li>
        <li>Hardy and beginner‑friendly</li>
      </ul>

      <blockquote className="border-l-4 pl-4 italic opacity-80">
        Fun fact: guppies are livebearers — they give birth to fully formed fry
        rather than laying eggs.
      </blockquote>

      <p className="text-xs opacity-70">
        This is a demo article used to test the independent{" "}
        <code>(article)</code> route group layout.
      </p>
    </article>
  );
}
