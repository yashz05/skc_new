/* This example requires Tailwind CSS v2.0+ */

'use client'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import React from "react";
import "animate.css"
import {Dialog} from "@headlessui/react";
import {AnimationOnScroll} from 'react-animation-on-scroll';


export default function Example() {
    let brands = [
        "1200px-BHEL_logo.svg.webp",
        "ADANI.png",
        "Aditya_Birla_Group_Logo.svg.png",
        "amalgam_steel.png",
        "Atomic-Minerals-Directorate-for-Exploration-Research-AMD.jpg",
        "BHUSAN POWE AND STEEL.jpg",
        "DAE.png",
        "DVC.jpg",
        "FSNL.png",
        "GRSE.png",
        "HEC.png",
        "HINDALCO.jpg",
        "Hindustan_Copper_logo.svg.png",
        "IIT_Guwahati_Logo.svg.png",
        "INDIAN RAILWAY.jpg",
        "Indian_Oil_Logo.svg.png",
        "JCAPCPL.jpg",
        "JINDAL.jpg",
        "JSL WB.png",
        "JSW WB.png",
        "jusco.png",
        "LINDE.jpg",
        "Metalsa.png",
        "nmdcs 01.png",
        "NSPCL.png",
        "NTPC.jpg",
        "NUVOCO.jpg",
        "opgc.png",
        "pgcil.jpg",
        "runaya.png",
        "RUNGTA.jpg",
        "SAIL.png",
        "ta precision tube.png",
        "tata auto comp.jpg",
        "TATA Autocomp.png",
        "TATA BEARING.png",
        "TATA BLUESCOPE.png",
        "TATA GROUP.png",
        "TATA NOAMUNDI.png",
        "tata power WB.png",
        "tata steel.jpg",
        "tata steel growth shop.jpg",
        "tata wiron.png",
        "THRIVENI.jpg",
        "TINPLATE.jpg",
        "TRF.png",
        "TSPL.png",
        "UBL_Logo.jpg",
        "UCIL WB.png",

    ];
    return (
        <>
            <Header/>

            <div className="bg-white mt-20">
                <div className="relative isolate px-6 pt-14 lg:px-8">
                    <div
                        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                    <div className="mx-auto max-w-2xl py-10 sm:py-48 lg:py-10">

                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                Clients
                            </h1>
                        </div>
                    </div>
                    <div
                        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>
                </div>

                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                    <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
                        Trusted by over {brands.length}+ businesses
                    </p>
                    <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-4 lg:mt-8">

                        {
                            (brands.map((a, i) => {
                                return (
                                    <AnimationOnScroll animateIn="animate__fadeInUp">
                                        <div key={i}
                                             className="col-span-1 flex animate__animated animate__fadeIn justify-center  bg-transparent p-4 animate__animated animate__fadeInUp">
                                            <Image width="400" height="400"
                                                   className="h-[100px] w-[130px] mix-blend-multiply mx-5 object-fill"
                                                   src={"/img/client/" + a} alt={a}/>
                                        </div>
                                    </AnimationOnScroll>
                                )
                            }))
                        }

                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
