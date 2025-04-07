const PrivacyPolicyPage = () => {
  return (
    <div className="my-4 flex flex-col rounded-lg border p-8 space-y-8">
      <h1 className="mb-4 text-2xl font-bold">Privacy Policy</h1>

      {/* Group 1 */}
      <section className="text-sm space-y-2">
        <h2 className="text-xl font-semibold">1. Data Handling</h2>
        <p>We do not collect or store any personal data from our users.</p>
        <p>Your privacy is our top priority and we ensure full anonymity during usage.</p>
        <p>No cookies or trackers are used by default in our application.</p>

        <a
          href="https://t.me/spideyofficial777"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 w-fit rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-5 py-2.5 text-white font-semibold shadow-lg hover:shadow-xl transition duration-300 hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M9.999 15.134L9.991 15.14l-.007-.006-2.4-2.4 9.896-6.002-1.204 10.054-2.875-1.54-1.916 2.011a.5.5 0 0 1-.861-.388l.375-2.727Z" />
            <path
              fillRule="evenodd"
              d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-3.588-5.926a.75.75 0 0 1 .06 1.349l-12 7.276a.75.75 0 0 1-1.095-.714l.375-2.727a.75.75 0 0 1 .26-.478l7.216-5.325a.75.75 0 0 1 1.088.248l1.026 1.85 2.422-1.479a.75.75 0 0 1 .648-.001Z"
              clipRule="evenodd"
            />
          </svg>
          Join on Telegram
        </a>
      </section>

      {/* Group 2 */}
      <section className="text-sm space-y-2">
        <h2 className="text-xl font-semibold">2. Advertisements</h2>
        <p>We use Google AdSense for serving non-personalized ads.</p>
        <p>These ads may track anonymous usage for better relevance.</p>
        <p>You can control ad preferences via your Google account.</p>

        <a
          href="https://www.youtube.com/@spideyofficial777"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 w-fit rounded-lg bg-gradient-to-r from-red-600 to-red-400 px-5 py-2.5 text-white font-semibold shadow-md hover:shadow-lg transition duration-300 hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path d="M10 15.5l6-3.5-6-3.5v7z" />
            <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.9-3-.2-7.5-.2-7.5-.2h-.1s-4.5 0-7.5.2c-.5 0-1.4 0-2.1.9-.6.6-.8 2-.8 2S1 9.6 1 11.2v1.6C1 14.4 1.2 16 1.2 16s.2 1.4.8 2c.8.8 1.8.8 2.2.9 1.6.1 6.8.2 6.8.2s4.5 0 7.5-.2c.5 0 1.4 0 2.1-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2V11c0-1.6-.2-3.2-.2-3.2z" />
          </svg>
          Subscribe on YouTube
        </a>
      </section>

      {/* Group 3 */}
      <section className="text-sm space-y-2">
        <h2 className="text-xl font-semibold">3. Consent & Policy Updates</h2>
        <p>By using our site, you agree to our privacy terms.</p>
        <p>We reserve the right to update our policy at any time.</p>
        <p>Updated policies will be available on this same page.</p>

        <a
          href="https://t.me/spideyofficial777"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 w-fit rounded-lg bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-500 px-5 py-2.5 text-white font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path d="M9.999 15.134L9.991 15.14l-.007-.006-2.4-2.4 9.896-6.002-1.204 10.054-2.875-1.54-1.916 2.011a.5.5 0 0 1-.861-.388l.375-2.727Z" />
            <path
              fillRule="evenodd"
              d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-3.588-5.926a.75.75 0 0 1 .06 1.349l-12 7.276a.75.75 0 0 1-1.095-.714l.375-2.727a.75.75 0 0 1 .26-.478l7.216-5.325a.75.75 0 0 1 1.088.248l1.026 1.85 2.422-1.479a.75.75 0 0 1 .648-.001Z"
              clipRule="evenodd"
            />
          </svg>
          Contact on Telegram
        </a>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
