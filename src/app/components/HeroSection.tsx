'use client';
import React, { useEffect, useState, useRef } from 'react';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { AuroraBackground } from '@/components/ui/aurora-background';

const HeroSection = () => {
    const [chatStep, setChatStep] = useState(0);
    const [showImages, setShowImages] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const containerRef = useRef(null);

    // Watch for container visibility
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.3 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    // Trigger chat animation only when in view
    useEffect(() => {
        if (!isInView) return;
        
        const timer1 = setTimeout(() => setChatStep(1), 400);
        const timer2 = setTimeout(() => setChatStep(2), 1200);
        const timer3 = setTimeout(() => setShowImages(true), 1800);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, [isInView]);

    // Beach sunset image URLs - 5 images
    const beachImages = [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBzdW5zZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1566241832378-917a0f30db2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2glMjBzdW5zZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1548108981-b414f9acde18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmVhY2glMjBzdW5zZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2glMjBzdW5zZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlYWNoJTIwc3Vuc2V0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    ];

    // First row of images (3)
    const firstRowImages = beachImages.slice(0, 3);
    // Second row of images (2)
    const secondRowImages = beachImages.slice(3, 5);

    return (
        <AuroraBackground className="w-full h-full">
            <div className="flex flex-col overflow-hidden">
                <ContainerScroll
                    titleComponent={
                        <>
                            <div className="w-full max-w-4xl mx-auto text-center mb-16 relative">
                                <h1 className="text-5xl md:text-6xl font-light leading-tight text-white mt-14">
                                    <span className="text-[#ff5c35]">Fynd AI</span> <br />
                                    Stop searching. Start <span className="text-[#ff5c35]">Finding</span>
                                </h1>
                                <p className="text-xl mb-10 text-white">
                                AI-powered search for your Drive & files. No names, no hassle—just results.
                                </p>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-[#ff5c35] hover:text-white transition">
                                        Request a Demo
                                    </button>
                                    <button className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
                                        Access AI
                                    </button>
                                </div>
                            </div>
                        </>
                    }
                >
                    {/* Chat UI section with 5 images (3+2) */}
                    <div className="w-full max-w-4xl mx-auto" ref={containerRef}>
                        <div className="rounded-2xl overflow-hidden shadow-2xl bg-[#1e1e1e] p-4"
                            style={{
                                transform: 'rotateX(3deg)',
                                transformOrigin: 'center top',
                            }}>
                            <div className="bg-[#2a2a2a] rounded-xl p-6">
                                {/* Chat message 1 */}
                                <div className={`flex gap-4 mb-4 transition-opacity duration-300 ease-in-out ${chatStep >= 1 ? 'opacity-100' : 'opacity-0'}`}>
                                    <div className="w-8 h-8 rounded-full bg-[#ff5c35] flex-shrink-0 flex items-center justify-center text-white">F</div>
                                    <div className="bg-[#3a3a3a] rounded-lg p-3 max-w-[80%]">
                                        <p className="text-white">Find me the beach sunset photos I uploaded last summer</p>
                                    </div>
                                </div>

                                {/* Chat message 2 */}
                                <div className={`flex gap-4 justify-end mb-4 transition-opacity duration-300 ease-in-out ${chatStep >= 2 ? 'opacity-100' : 'opacity-0'}`}
                                    style={{ transitionDelay: '0.2s' }}>
                                    <div className="bg-[#ff5c35] rounded-lg p-3 max-w-[80%]">
                                        <p className="text-white">I found 5 sunset beach photos from June-August 2024. Here they are:</p>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-[#3a3a3a] flex-shrink-0 flex items-center justify-center text-white">AI</div>
                                </div>

                                {/* Images grid - first row with 3 images */}
                                <div className={`transition-opacity duration-500 ease-in-out ${showImages ? 'opacity-100' : 'opacity-0'}`}
                                    style={{ transitionDelay: '0.3s' }}>
                                    <div className="grid grid-cols-3 gap-2 mb-2">
                                        {firstRowImages.map((imgUrl, index) => (
                                            <div key={index} className="rounded-md h-24 overflow-hidden"
                                                style={{
                                                    transitionDelay: `${0.1 + (index * 0.1)}s`,
                                                    backgroundColor: '#484848'
                                                }}>
                                                <img
                                                    src={imgUrl}
                                                    alt={`Beach sunset ${index + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    
                                    {/* Second row with 2 images */}
                                    <div className="grid grid-cols-2 gap-2">
                                        {secondRowImages.map((imgUrl, index) => (
                                            <div key={index + 3} className="rounded-md h-24 overflow-hidden"
                                                style={{
                                                    transitionDelay: `${0.1 + ((index + 3) * 0.1)}s`,
                                                    backgroundColor: '#484848'
                                                }}>
                                                <img
                                                    src={imgUrl}
                                                    alt={`Beach sunset ${index + 4}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Typing indicator */}
                                <div className={`flex gap-4 justify-end mt-4 transition-all duration-300 ease-in-out ${chatStep === 1 ? 'opacity-100' : 'opacity-0 h-0'}`}>
                                    <div className="bg-[#3a3a3a] rounded-full px-4 py-2 flex items-center">
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-1 animate-bounce" style={{ animationDelay: '0s' }}></span>
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-1 animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-[#3a3a3a] flex-shrink-0 flex items-center justify-center text-white">AI</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ContainerScroll>
            </div>
        </AuroraBackground>
    );
};

export default HeroSection;