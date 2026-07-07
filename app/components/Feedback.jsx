import React from 'react';
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Feedback = () => {
  const feedbacks = [
    {
      name: "Backend Mentorship Student",
      role: "Tech Mastery",
      feedback:
        "Mostafa explains backend concepts clearly and turns complex Node.js, Express, and MongoDB topics into practical production examples.",
    },
    {
      name: "Platform Client",
      role: "Ria.bio",
      feedback:
        "He delivered reliable APIs, improved database performance, and handled payment integrations with strong attention to stability.",
    },
    {
      name: "Education Platform Team",
      role: "1x-Math",
      feedback:
        "The backend work helped automate payments, code delivery, analytics, and student access in a way that reduced manual effort.",
    },
  ];

  return (
    <section id="feedback" className="w-full px-4 py-12 overflow-x-hidden">
      <div className="mx-auto max-w-6xl">
        <div className='m-6 w-fit mx-auto justify-center hover:bg-primary transition text-center'>
          <h4 className='text-white text-4xl hover:text-primary2 sm:text-5xl md:text-6xl font-bold'>
            Feedback
          </h4>
          <div className='w-full border-t-primary mt-5 border-t-2'></div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {feedbacks.map((item) => (
            <article
              key={item.role}
              className="relative rounded-2xl border border-white/15 bg-white/10 p-6 shadow-2xl shadow-primary/10 backdrop-blur-sm transition hover:border-primary/50 hover:shadow-primary/20"
            >
              <FaQuoteLeft className="mb-5 text-3xl text-primary" />
              <div className="mb-4 flex gap-1 text-primary">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} />
                ))}
              </div>
              <p className="min-h-32 text-base leading-relaxed text-white/80">
                {item.feedback}
              </p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <h5 className="text-lg font-bold text-white">{item.name}</h5>
                <p className="text-sm font-semibold text-primary">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
