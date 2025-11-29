import Image from "next/image";

const dwellingTypes = [
  {
    title: "Tukul (Thatched Roundhouse)",
    region: "Blue Nile, Gedaref, and Equatoria",
    description:
      "Circular huts made from earth walls and steep grass thatching, ideal for channeling heavy seasonal rains away from the living space.",
    highlights: [
      "Thick mud plastered walls that stay cool during the day and release warmth at night.",
      "Elevated earthen thresholds keep out surface water during the rainy season.",
      "Detachable thatch crowns allow quick repairs after storms.",
    ],
    image: "/illustrations/tukul.svg",
  },
  {
    title: "Nubian Courtyard House",
    region: "Northern Nile Valley",
    description:
      "Elongated homes arranged around painted courtyards, with vaulted roofs that eliminate timber needs along the treeless Nile banks.",
    highlights: [
      "Colorful geometric plasterwork reflects Nubian symbolism and social identity.",
      "Barrel vault roofs create natural ventilation shafts and storage lofts.",
      "Courtyard gardens provide shade, goats, and cooking areas separated from sleeping rooms.",
    ],
    image: "/illustrations/nubian.svg",
  },
  {
    title: "Red Brick Townhouse",
    region: "Greater Khartoum",
    description:
      "Two-storey brick dwellings influenced by Anglo-Egyptian colonial plans, mixing shaded verandas with modern steel windows.",
    highlights: [
      "Exterior mashrabiya screens temper dust-laden desert winds.",
      "Concrete ring beams and brick vaults resist Nile floods and foundation movement.",
      "Rooftop terraces host evening gatherings once temperatures drop.",
    ],
    image: "/illustrations/brick-townhouse.svg",
  },
  {
    title: "Palm-Frame Riverside Home",
    region: "Gezira and White Nile floodplain",
    description:
      "Lightweight palm timber frames wrapped in woven reed mats, quickly rebuilt after annual floods retreat.",
    highlights: [
      "Modular bay construction lets families extend rooms with each harvest.",
      "Raised sleeping platforms stay above damp ground and insects.",
      "Overhanging eaves form outdoor workspaces for net mending and grain sorting.",
    ],
    image: "/illustrations/palm-frame.svg",
  },
];

const climateResponses = [
  {
    title: "Heat Management",
    items: [
      "Thick earthen walls store cool nighttime air, delaying heat transfer until after sunset.",
      "High parapets and parapet voids direct hot air upwards, creating stack ventilation.",
      "Small, recessed window openings reduce solar gain while funneling breezes down into rooms.",
    ],
  },
  {
    title: "Seasonal Rain & Flooding",
    items: [
      "Stone or fired brick plinths lift walls clear of standing water.",
      "Sacrificial mud plaster layers are renewed after the rainy season to keep the core bricks intact.",
      "Courtyard drains lined with broken pottery guide runoff into kitchen gardens.",
    ],
  },
  {
    title: "Dust & Sandstorms",
    items: [
      "Timber lattice screens filter haboob dust before it enters the main living bay.",
      "Exterior roofs flare out, shielding entrances from wind-driven sand.",
      "Trees planted in protective rings serve as natural sandbreaks around compounds.",
    ],
  },
];

const regionalSpotlights = [
  {
    name: "Kerma & Dongola Bend",
    focus:
      "Fossil riverbeds provide clay for hand-shaped adobes, while sculpted façade niches reference centuries-old Kerma Deffufa temples.",
    detail:
      "Homes face narrow lanes that open suddenly into communal courtyards filled with palm trunks and water jars, signaling guest-friendly culture.",
  },
  {
    name: "Eastern Sudan & Beja Highlands",
    focus:
      "Beja families build portable arched shelters from acacia poles lashed with goat leather, enabling quick relocation with herds.",
    detail:
      "Brightly woven palm-leaf panels can be rolled up like blinds to invite breezes when the Red Sea winds cool the plateau.",
  },
  {
    name: "Jebel Marra Plateau",
    focus:
      "Volcanic stone is stacked into thick defensive walls, topped with conical roofs covered in highland grasses.",
    detail:
      "Granaries sit on mushroom-shaped stone pedestals to deter pests, a defining silhouette of Fur agricultural villages.",
  },
];

const materialPalette = [
  {
    name: "Mud Brick (Adobe)",
    description:
      "Sun-dried clay blocks mixed with straw remain the default wall material thanks to local availability and insulative performance.",
  },
  {
    name: "Dom Palm Timber",
    description:
      "Palm trunks and midribs frame roofs and door lintels where hardwoods are scarce, notably along the Nile valley.",
  },
  {
    name: "Reed Mats & Doum Leaves",
    description:
      "Woven mats form partitions, ceilings, and seasonal shading screens, perfuming interiors with palm resin.",
  },
  {
    name: "Limestone & Granite Rubble",
    description:
      "Northern settlements reuse ancient temple stone for foundations, creating thermally stable bases under mud superstructures.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50 pb-20 text-zinc-900">
      <header className="relative overflow-hidden bg-gradient-to-br from-amber-100 via-amber-50 to-rose-100">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 lg:flex-row lg:items-center lg:px-12 lg:py-20">
          <div className="flex-1 space-y-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-amber-200/70 px-4 py-1 text-sm font-medium tracking-wide text-amber-900">
              Built for climate and kinship
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-zinc-900 sm:text-5xl">
              How houses in Sudan express landscape, climate, and community
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-zinc-700">
              From Nubian vaults to pastoral tukul huts, Sudanese homes adapt to
              searing heat, seasonal floods, and the social rhythm of extended
              families. The built fabric records migrations along the Nile, the
              ingenuity of desert dwellers, and modern aspirations in Khartoum.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-600">
              <div className="rounded-full bg-white/80 px-4 py-2 shadow-sm shadow-amber-200">
                47°C summer highs
              </div>
              <div className="rounded-full bg-white/80 px-4 py-2 shadow-sm shadow-amber-200">
                500+ ethnic groups
              </div>
              <div className="rounded-full bg-white/80 px-4 py-2 shadow-sm shadow-amber-200">
                Nile-centered livelihoods
              </div>
            </div>
          </div>
          <div className="relative flex-1">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-xl rounded-3xl border border-amber-200 bg-white/80 p-8 shadow-xl shadow-amber-200/60 backdrop-blur">
              <div className="absolute inset-6 rounded-2xl border border-dashed border-amber-300/70"></div>
              <div className="relative h-full w-full">
                <Image
                  src="/illustrations/hero-courtyard.svg"
                  alt="Illustration of a Sudanese courtyard house with vaulted rooms and painted walls"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto mt-16 flex w-full max-w-6xl flex-col gap-20 px-6 lg:px-12">
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-zinc-900">
            Everyday homes across Sudan
          </h2>
          <p className="max-w-3xl text-base leading-relaxed text-zinc-700">
            Housing typologies follow the country&apos;s ecological stripes: the
            Sahara in the north, savannah belts in the center, and lush equatorial
            zones in the south. Each region balances climate protection with
            communal living, storage for harvests, and space for livestock—the
            lifeline of many households.
          </p>
          <div className="grid gap-10 md:grid-cols-2">
            {dwellingTypes.map((dwelling) => (
              <article
                key={dwelling.title}
                className="group flex h-full flex-col rounded-3xl border border-amber-200 bg-white/90 p-6 shadow-sm shadow-amber-200/70 transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-200/80"
              >
                <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-amber-100 bg-amber-50">
                  <Image
                    src={dwelling.image}
                    alt={`${dwelling.title} illustration`}
                    fill
                    className="object-contain object-center transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-zinc-900">
                    {dwelling.title}
                  </h3>
                  <p className="text-sm uppercase tracking-wide text-amber-700">
                    {dwelling.region}
                  </p>
                  <p className="text-base leading-relaxed text-zinc-700">
                    {dwelling.description}
                  </p>
                  <ul className="space-y-2 text-sm text-zinc-700">
                    {dwelling.highlights.map((detail) => (
                      <li key={detail} className="flex gap-2">
                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-500"></span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-10 rounded-3xl border border-amber-200 bg-gradient-to-br from-white via-amber-50 to-rose-50 p-10 shadow-inner">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-zinc-900">
              Design moves for a harsh climate
            </h2>
            <p className="max-w-3xl text-base leading-relaxed text-zinc-700">
              Sudan straddles the desert belt, where temperatures swing from
              scorching days to surprisingly cool nights. Builders use shade,
              thermal mass, and breathable surfaces to keep households comfortable
              without mechanical cooling.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {climateResponses.map((response) => (
              <div
                key={response.title}
                className="flex h-full flex-col rounded-2xl border border-white/60 bg-white/70 p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-amber-900">
                  {response.title}
                </h3>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-700">
                  {response.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 inline-flex h-3 w-3 shrink-0 place-items-center rounded-full border border-amber-500/70 bg-amber-200/60"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-zinc-900">
              Regional signatures
            </h2>
            <p className="max-w-3xl text-base leading-relaxed text-zinc-700">
              Across 1.8 million square kilometers, house forms transform with
              every ecological shift. These snapshots reveal how culture and
              environment shape entrances, courtyards, and rooflines.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {regionalSpotlights.map((spot) => (
              <article
                key={spot.name}
                className="flex h-full flex-col gap-3 rounded-2xl border border-amber-200 bg-white/90 p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-amber-900">
                  {spot.name}
                </h3>
                <p className="text-sm font-medium uppercase tracking-wide text-amber-700">
                  {spot.focus}
                </p>
                <p className="text-sm leading-relaxed text-zinc-700">
                  {spot.detail}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-amber-200 bg-white/80 p-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-zinc-900">
                Material palette
              </h2>
              <p className="text-base leading-relaxed text-zinc-700">
                Craft knowledge passes through generations of women and master
                masons called <em>fundi</em>. Their resourcefulness turns humble
                materials into layered walls, deeply shaded thresholds, and painted
                stories.
              </p>
              <ul className="space-y-4">
                {materialPalette.map((material) => (
                  <li
                    key={material.name}
                    className="rounded-2xl border border-dashed border-amber-300 bg-amber-50/80 p-5"
                  >
                    <h3 className="text-lg font-semibold text-amber-900">
                      {material.name}
                    </h3>
                    <p className="text-sm leading-relaxed text-zinc-700">
                      {material.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-amber-100 bg-gradient-to-br from-amber-100 via-white to-rose-100 p-6 shadow-inner">
                <div className="absolute inset-6 rounded-xl border border-amber-200/70"></div>
                <div className="relative h-full w-full">
                  <Image
                    src="/illustrations/materials.svg"
                    alt="Stylized stack of Sudanese building materials"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="rounded-2xl border border-amber-200 bg-amber-100/70 p-6 text-sm leading-relaxed text-amber-900">
                Family compounds often grow organically; when a child marries,
                new rooms extend along the courtyard edge, and fresh layers of
                plaster refresh the painted motifs that welcome guests.
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-100 via-white to-amber-50 p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-zinc-900">
                A day inside a Sudanese courtyard home
              </h2>
              <p className="text-base leading-relaxed text-zinc-700">
                The courtyard orchestrates climate comfort and social rituals. It
                can sleep a dozen relatives during hot nights, dry sorghum after
                harvest, and host tea ceremonies in the afternoon shade.
              </p>
              <ol className="space-y-3 text-sm leading-relaxed text-zinc-700">
                <li>
                  <span className="font-semibold text-amber-900">Dawn:</span>{" "}
                  Morning prayers face the rising sun, while women sweep dust and
                  splash cool water on the earth to settle it.
                </li>
                <li>
                  <span className="font-semibold text-amber-900">Midday:</span>{" "}
                  Work moves under verandas or domed grain stores to avoid the
                  midday sun. Children rest in interior rooms with thick walls.
                </li>
                <li>
                  <span className="font-semibold text-amber-900">Evening:</span>{" "}
                  Families gather on flat roofs where the desert breeze returns,
                  sharing <em>kisra</em> bread and recounting news from the souk.
                </li>
              </ol>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-amber-200 bg-white/80 shadow-lg">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,247,237,0.9),transparent_65%)]"></div>
              <div className="relative grid gap-4 p-8 text-sm leading-relaxed text-zinc-700">
                <div className="rounded-2xl border border-amber-100 bg-amber-50/70 p-4">
                  <h3 className="font-semibold text-amber-900">Spatial layers</h3>
                  <p>
                    Public seating rooms face the street; private family quarters
                    wrap the courtyard; service spaces align with prevailing winds
                    for smoke extraction.
                  </p>
                </div>
                <div className="rounded-2xl border border-amber-100 bg-amber-50/70 p-4">
                  <h3 className="font-semibold text-amber-900">Craft details</h3>
                  <p>
                    Limewash mixed with indigo, henna, or charcoal produces the
                    blue and black murals famous in Nubian villages.
                  </p>
                </div>
                <div className="rounded-2xl border border-amber-100 bg-amber-50/70 p-4">
                  <h3 className="font-semibold text-amber-900">Future shifts</h3>
                  <p>
                    Urbanization introduces concrete frames, yet many households
                    still add earthen annexes for thermal comfort and affordability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
