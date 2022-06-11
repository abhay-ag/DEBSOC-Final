export default function FAQ() {
  const Queries = [
    {
      q: "I want to try my hand at DEBSOC. Do you offer a trial period?",
      a: "Before the payment of membership fees, we offer ample time (usually 14 days) for you to try out whether the club’s for you! Going by the record, we rarely have people dropping out & hope you don’t have to!"
    },
    {
      q: "I want to try my hand at DEBSOC. Do you offer a trial period?",
      a: "Before the payment of membership fees, we offer ample time (usually 14 days) for you to try out whether the club’s for you! Going by the record, we rarely have people dropping out & hope you don’t have to!"
    }
  ];

  const handleFAQExpansion = (index) => {
    const targetId = `faq-dd-container-${index}`;
    const target = document.getElementById(targetId);
    if (target !== undefined) {
      if (target.classList.contains("hidden")) {
        target.classList.remove("hidden");
        document.querySelector(`#faq-dd-disclosure-button-${index} i`).classList.add("rotate-180");
      } else {
        target.classList.add("hidden");
        document.querySelector(`#faq-dd-disclosure-button-${index} i`).classList.remove("rotate-180");
      }
    }
  };

  return (
    <div className="flex-1 flex flex-col max-w-7xl w-full mx-auto scrollbar">
      <div className="max-w-7xl w-full sm:w-5/6 lg:w-full mx-auto py-16 px-10 lg:py-20">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div><h1 className="text-3xl font-extrabold text-white">Frequently asked questions</h1><p
            className="mt-4 text-lg text-gray-400">Can’t find the answer you’re looking for? Reach out to us at <a
            href="mailto:support@devsnest.in" target="_blank" rel="noreferrer"
            className="font-medium text-indigo-500 hover:text-indigo-400">support@debsoc.in</a></p></div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <dl>
              {Queries.map((query, i) => (
                <div key={`faq-query-${i}`} id={`faq-query-${i}`} className="pb-4 mb-4 border-b border-gray-700">
                  <dt className="text-lg">
                    <button onClick={() => handleFAQExpansion(i)} className="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none" id={`faq-dd-disclosure-button-${i}`} type="button" aria-expanded="false">
                      <span className="font-medium text-gray-100">{query.q}</span>
                      <span className="ml-6 h-7 flex items-center"><i className="transition-transform fal fa-angle-down text-3xl"></i></span>
                    </button>
                  </dt>
                  <dd className="mt-4 pr-12 text-base text-gray-400 hidden transition-all" id={`faq-dd-container-${i}`}>{query.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}