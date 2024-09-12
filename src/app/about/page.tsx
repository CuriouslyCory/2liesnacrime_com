export default async function AboutPage() {
  return (
    <>
      <div className="flex w-full justify-center bg-slate-800">
        <div className="flex w-full max-w-6xl justify-start px-5 py-10 md:px-0">
          <h1 className="font-serif text-4xl text-white">About</h1>
        </div>
      </div>
      <div className="flex w-full justify-center bg-amber-300">
        <div className="hero mx-5 mb-10 mt-20 flex w-full max-w-6xl flex-col justify-around gap-x-5 gap-y-5 rounded-lg bg-amber-200 p-10 sm:flex-col md:flex-row">
          <span className="font-sans text-xl">
            Do you know your true crime? Can you call us out on our lies? Our
            podcast is true crime with a twist. Sometimes it&apos;s not true. So
            grab your wine and call us out on 2 Lies in a Crime.
          </span>
        </div>
      </div>
    </>
  );
}
