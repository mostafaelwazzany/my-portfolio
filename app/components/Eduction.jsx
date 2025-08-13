// components/EducationCard.tsx
"use client";

import Image from "next/image";

export default function EducationCard() {
    return (
        <section className="w-full  py-12">
            <div className="mx-auto max-w-6xl px-4">
                {/* Heading */}
                <div className='m-6 w-fit mx-auto justify-center  hover:bg-primary transition  text-center'>
                    <h4 className='text-white text-4xl   hover:text-primary2 sm:text-5xl md:text-6xl font-bold'>
                        Education
                    </h4>
                    <div className='w-full border-t-primary mt-5 border-t-2'></div>
                </div>

                {/* Content */}
                <div className="grid gap-8 md:grid-cols-[420px,1fr] items-center">
                    {/* Left logo card */}
                    <div className="bg-amber-400 rounded-br-[70px] rounded-tl-[70px] p-6 shadow-2xl">
                        <div className="aspect-square rounded-[28px] bg-amber-400 flex items-center justify-center">
                            <div className="relative h-80 w-80">
                                <Image
                                    src="/logo.png" // place your image here: public/mnu-logo.png
                                    alt="Minia National University Logo"
                                    fill
                                    className="object-contain drop-shadow-md"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right text bubble */}
                    <div className="rounded-[36px] bg-slate-100/95 p-8 shadow-2xl ring-1 ring-black/5">
                        <p className="text-2xl leading-snug font-semibold text-slate-800">
                            I study at Minya National University in New Minya, Faculty of
                            Computers and Artificial Intelligence, specializing in Artificial
                            Intelligence.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
