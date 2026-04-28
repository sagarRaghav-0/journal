"use client";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#eef3ef] px-4 sm:px-6 ">

      <div className="w-full max-w-2xl text-center">

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-green-900 leading-tight">
          My Healing Journal 🌿
        </h1>

        {/* Description */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 px-2 sm:px-0">
          A beautifully designed 30-day journal to help you slow down, reflect,
          and reconnect with yourself — just 10 minutes a day.
        </p>

        {/* Features */}
        <div className="mt-6 text-left text-sm sm:text-base text-gray-700 space-y-2 px-2 sm:px-6 md:px-10">
          <p>✔ 30 Guided Reflection Pages</p>
          <p>✔ Mind Relaxing Layout</p>
          <p>✔ Daily Prompts & Mood Tracking</p>
          <p>✔ Perfect for Self-Healing & Growth</p>
        </div>

        {/* Button (fixed) */}
        <a
          href="/pdf/journal1.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block w-full sm:w-auto px-6 sm:px-8 py-3 bg-green-800 text-white rounded-xl hover:bg-green-900 transition text-sm sm:text-base md:text-lg"
        >
          Download Now
        </a>

      </div>
    </main>
  );
}