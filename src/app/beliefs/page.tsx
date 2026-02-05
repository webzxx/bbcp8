import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function OurBeliefs() {
  return (
    <section id="hero" className="fluid-container">
      <div className="flex flex-col-reverse lg:flex-row gap-6 justify-between">
        <div className="w-full lg:w-2/5 relative z-10">
          <h1 className="text-current font-headline-sans font-bold text-6xl lg:text-8xl xl:text-9xl leading-none tracking-tighter mb-3">
            What
          </h1>

          <div className="lg:px-8 xl:px-16">
            <h2 className="text-current font-headline text-5xl lg:text-6xl xl:text-8xl tracking-tighter mb-3 leading-none">
              We Believe
            </h2>

            <p className="text-gray-800 leading-snug text-lg tracking-tighter mt-0 mb-8 last:mb-0 prose max-w-full lg:max-w-sm">
              {" "}
              We live in shifting times but are rooted in eternal truths, the
              teachings of Holy Scripture. Here at Bible Baptist Church we are
              guided by certain foundational beliefs and shaping values.
            </p>
          </div>
        </div>

        <div className="w-full h-80 md:h-144 lg:w-3/5 lg:min-h-lgplus relative overflow-hidden rounded-xl flex items-center justify-center">
          <div className="relative w-full h-full overflow-hidden rounded-lg flex items-center justify-center">
            <div className="absolute inset-0 h-full w-full">
              <Image
                src="/beliefs-hero.jpg"
                alt="Beliefs Hero"
                fill
                className="absolute inset-0 w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <main className="pt-20 sm:pt-24 xl:pt-32 pb-20 sm:pb-24 xl:pb-32 relative w-full grid gap-y-20 -mb-px">
        <section className="relative">
          <div className="mx-auto max-w-4xl">
            <div className="prose max-w-none">
              <h3 className="text-current font-headline-sans font-bold text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl tracking-tighter leading-none mb-8">
                1. Knowable Truth
              </h3>
              <p className="text-black leading-snug text-lg tracking-tighter mb-16">
                We believe in the accuracy, truth, authority and power of the
                Holy Scriptures as the Word of God.
              </p>

              <h3 className="text-current font-headline-sans font-bold text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl tracking-tighter leading-none mb-8">
                2. One God
              </h3>
              <p className="text-black leading-snug text-lg tracking-tighter mb-16">
                We believe in a personal God who has revealed Himself as One.
                God exists in three persons–Father, Son and Holy Spirit–each
                distinct, yet all of One essence.
              </p>

              <h3 className="text-current font-headline-sans font-bold text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl tracking-tighter leading-none mb-8">
                3. Uniqueness of Christ
              </h3>
              <p className="text-black leading-snug text-lg tracking-tighter mb-16">
                We believe Jesus Christ to be the virgin born Son of God who
                lived in flesh, died for the sins of the world, was buried, rose
                again, and ascended to the Father according to the Scriptures.
              </p>

              <h3 className="text-current font-headline-sans font-bold text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl tracking-tighter leading-none mb-8">
                4. Grace Life
              </h3>
              <p className="text-black leading-snug text-lg tracking-tighter mb-16">
                We believe that the death of Jesus Christ was the final and
                complete sacrifice for the sins of humanity. Salvation is
                obtained by grace through faith in Jesus Christ. All who repent
                of their sins and receive Jesus Christ as Savior and Lord are
                born again into eternal life as children of God.
              </p>

              <h3 className="text-current font-headline-sans font-bold text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl tracking-tighter leading-none mb-8">
                5. Indwelling Power
              </h3>
              <p className="text-black leading-snug text-lg tracking-tighter mb-16">
                We believe that life on earth is to be lived in the power of the
                Holy Spirit, who indwells believers, enabling them to live
                distinctive lives in the life and power of Christ, making famous
                the Father in heaven.
              </p>

              <h3 className="text-current font-headline-sans font-bold text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl tracking-tighter leading-none mb-8">
                6. God’s People
              </h3>
              <p className="text-black leading-snug text-lg tracking-tighter mb-16">
                We believe that those who have placed their faith in Christ are
                knit together in one Body, the Church, a distinctive community
                of faith expressed in local clusters, engaging culture on every
                front with God’s hope and love … a Church for which Christ will
                personally return.
              </p>

              <h3 className="text-current font-headline-sans font-bold text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl tracking-tighter leading-none mb-8">
                7. The Knowledge of the Holy
              </h3>
              <p className="text-black leading-snug text-lg tracking-tighter mb-16">
                Created by and for God, we seek to passionately pursue an
                intimate relationship with God in response to His great love for
                us. To know God is the ultimate treasure of the soul.
              </p>

              <h3 className="text-current font-headline-sans font-bold text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl tracking-tighter leading-none mb-8">
                8. Whole Life Worship
              </h3>
              <p className="text-black leading-snug text-lg tracking-tighter mb-16">
                More than outward forms, theologically informed worship must
                encompass our entire existence, whereby in all circumstances our
                words and actions bring glory to God.
              </p>

              <h3 className="text-current font-headline-sans font-bold text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl tracking-tighter leading-none mb-8">
                9. His Renown
              </h3>
              <p className="text-black leading-snug text-lg tracking-tighter mb-16">
                We echo and affirm the Westminster confession: “the chief end of
                man is to glorify God and enjoy Him forever.” All things exist
                for the glory of God.
              </p>

              <h3 className="text-current font-headline-sans font-bold text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl tracking-tighter leading-none mb-8">
                10. Community of Faith
              </h3>
              <p className="text-black leading-snug text-lg tracking-tighter mb-16">
                The worldwide Body of Christ functions best in localized
                communities of believers. Thus we seek to plant churches that
                amplify His fame, strengthen the lives of people and repair
                communities so that all people can know the healing power and
                grace of the Savior.
              </p>

              <p></p>

              <p className="text-right">
                <Button
                  variant="default"
                  className="inline-flex bg-sky-400 text-black hover:bg-[#e2e3da] py-7 px-12 hover:text-sky-400 font-sans leading-none tracking-tighter text-lg rounded-4xl gap-4 items-center justify-center transition whitespace-nowrap group select-none cursor-pointer"
                >
                  Read Full Statement of Beliefs Here
                </Button>
              </p>
            </div>
          </div>
        </section>

        <section className="">
          <div className="relative overflow-hidden rounded-2xl flex items-end lg:items-center w-full h-80 md:h-auto p-24">
            <div className="absolute inset-0 h-full w-full">
              <Image
                src="/beliefs-bot.jpg"
                alt="Beliefs Bottom Img"
                fill
                className="absolute inset-0 w-full h-full object-cover"
                priority
              />
            </div>

            <div className="absolute inset-0 w-full h-ful media-overlay"></div>

            <div className="hidden md:block relative">
              <p className="text-white font-headline text-lg lg:text-xl tracking-tighter leading-none mb-8 opacity-75">
                Jesus is Our Lead Story
              </p>

              <h2 className="text-white font-headline-sans font-bold text-3xl lg:text-4xl xl:text-6xl tracking-tighter mb-3 leading-none">
                About Bible Baptist Church
              </h2>

              <p className="text-white leading-snug font-semibold text-lg tracking-tighter hidden md:block mb-10 max-w-md">
                {" "}
                We are a Jesus Church. A small tribe of His followers connected
                by our common faith and a deep desire to see our city [and the
                world] come to know His power and beauty. Get to know more about
                us and our leadership below.
              </p>

              <div>
                <div className="relative inline-flex hover:opacity-75">
                  <Button
                    variant="default"
                    className="inline-flex bg-sky-400 text-black hover:bg-[#e2e3da] py-7 px-12 hover:text-black hover:opacity-75 font-sans leading-none tracking-tighter text-lg rounded-4xl gap-4 items-center justify-center transition whitespace-nowrap group select-none cursor-pointer"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}
