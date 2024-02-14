const Docs = ({ setShowDocs }) => {
  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-base font-semibold leading-7 text-emerald-600">
          Retrieval Augmented Generation
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Free, local dynamic RAG chat.
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          This chat runs Mistral locally on your machine with Ollama. You need
          to be on a{" "}
          <span className="text-emerald-600 font-semibold">
            Mac or Linux with at least 8GB of RAM
          </span>{" "}
          to run this program. Follow the steps below to get started.
        </p>
        <div className="mt-12">
          <dl>
            <dt className="text-left font-semibold leading-7 text-gray-900">
              Step One:
            </dt>
            <dd className="mt-2 text-left leading-7 text-gray-600">
              Download and install Ollama on your machine at{" "}
              <a
                href="https://ollama.com/download"
                className="text-emerald-600 font-semibold cursor-pointer"
              >
                ollama.com/download
              </a>
              .
            </dd>
          </dl>
        </div>
        <dt className="mt-6 text-left font-semibold leading-7 text-gray-900">
          Step Two:
        </dt>
        <dd className="mt-2 text-left leading-7 text-gray-600">
          Copy and paste this command into your terminal.
        </dd>
        <pre className="mt-6 text-left text-sm font-mono text-gray-900 bg-gray-100 rounded-md p-4">
          ollama pull mistral
        </pre>
        <div className="mt-10 flex items-center justify-end">
          <button
            type="button"
            className="inline-flex items-center gap-x-2 rounded-md bg-emerald-600 px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            onClick={() => setShowDocs(false)}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default Docs;
