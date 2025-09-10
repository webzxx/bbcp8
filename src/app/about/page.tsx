import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="fluid-container">
      <div className="flex flex-col-reverse lg:flex-row gap-6 justify-between">
        <div className="w-full lg:w-2/5 relative z-10">
          <h1 className="text-current font-bold text-6xl lg:text-8xl xl:text-[9rem] leading-none tracking-tighter mb-3">
            US
          </h1>

          <div className="lg:px-8 xl:px-22">
            <h2 className="text-current font-headline text-5xl lg:text-6xl xl:text-7xl tracking-tight mb-3 leading-none">
              Glory of God. Radical Grace. Extravagant Worship.
            </h2>

            <p className="text-gray-800 leading-snug text-lg tracking-tighter mt-0 mb-8 last:mb-0 max-w-full lg:max-w-sm">
              We are a Jesus Church. A small tribe of His followers connected by
              our common faith and a deep desire to see our city [and the world]
              come to know His power and beauty. We are not perfect. But Jesus
              is. Thankfully, we are a Jesus Church.
            </p>
          </div>
        </div>

        <div className="w-full h-80 md:h-144 lg:w-3/5 lg:min-h-lgplus relative overflow-hidden rounded-xl flex items-center justify-center">
          <div className="relative w-full h-full overflow-hidden rounded-lg flex items-center justify-center">
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/about-img.jpg"
                alt="About Banner"
                fill
                className="absolute inset-0 w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <main className="pt-20 sm:pt-24 xl:pt-32 pb-20 sm:pb-24 xl:pb-32 relative w-full grid gap-y-20 -mb-px">
        <section className="">
          <div className="flex flex-col gap-8 lg:gap-16 lg:flex-row items-start lg:items-center">
            <div className="relative w-full overflow-hidden rounded-xl lg:w-9/20 aspect-square">
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src="/about-2nd.jpg"
                  alt="About"
                  fill
                  className="absolute inset-0 w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            <div className="relative space-y-6 lg:w-11/20">
              <p className="text-current text-lg lg:text-xl tracking-tighter leading-none mb-4">
                Our Theological Truths
              </p>

              <p className="text-current font-bold text-5xl lg:text-6xl xl:text-[5rem] tracking-tight xl:tracking-tighter mb-5 leading-none">
                What We Believe
              </p>

              <p className="text-charcoal leading-normal text-base tracking-wide max-w-lg"></p>

              <p className="text-charcoal text-base tracking-tighter">
                We live in shifting times but are rooted in eternal truths, the
                teachings of Holy Scripture. Here at Passion City Church we are
                guided by certain foundational beliefs and shaping values.
              </p>
            </div>
          </div>
        </section>

        <section className="">
          <div className="flex flex-col gap-8 lg:gap-16 items-start md:items-center md:flex-row-reverse">
            <div className="w-full md:w-1/2 aspect-square">
              <p className="text-current font-bold text-5xl lg:text-6xl xl:text-[5rem] tracking-tight xl:tracking-tighter mb-5 leading-normal">
                Our History
              </p>

              <div className="relative overflow-hidden rounded-xl w-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] mt-2 md:mt-12">
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src="/history-img.jpg"
                    alt="About History"
                    fill
                    className="absolute inset-0 w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 space-y-8 md:space-y-16">
              <div className="max-w-2xl text-base tracking-tighter text-charcoal space-y-4">
                <h4 className="text-current font-semibold text-2xl lg:text-3xl xl:text-4xl tracking-tighter leading-snug md:pt-36">
                  We are: For God. For people. For the city. For the world.
                </h4>
                <p>
                  Passion City Church began with a stirring in the hearts of
                  Louie and Shelley Giglio for the local church. Born out of the
                  Passion Movement (a decades-old movement among the collegiate
                  generation), they sought to plant a local community of faith
                  impacted and informed by the DNA of Passion.
                </p>
                <p>
                  With a small team of people, that vision took flight in 2008,
                  as small gatherings began in homes throughout Atlanta. The
                  desire was to foster a family of believers connected by a
                  common faith, on mission in the city and the world to amplify
                  the name of Jesus.
                </p>
                <p>
                  And that’s exactly what happened. Our first gathering was held
                  on February 15, 2009, in Atlanta at The Tabernacle. From
                  there, God faithfully provided, as our little tribe met at
                  various locations all over the city of Atlanta until we landed
                  in our first permanent gathering site at 515 Garson Drive.
                  Since then we’ve added locations in the Cumberland and Trilith
                  areas of Atlanta and a location in Washington D.C. whose
                  weekly gatherings started in April of 2018.
                </p>
                <p>
                  Passion City Church remains a place where the gospel is
                  central and Jesus is always the lead story. We are a Jesus
                  church and want to gather in worship and scatter to shine His
                  light and love throughout the city and beyond.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}
