// app/page.tsx
"use client";

import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/NavBar';
import HeroSection from './components/HeroSection';
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { LampContainer } from '@/components/ui/lamp';
import { motion } from 'motion/react';
import SubscriptionTiers from './components/SubscriptionTiers';
// import ResultsSection from './components/ResultsSection';

export default function Home() {
  const footerRef = useRef(null);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Set up intersection observer to detect when the footer is in view
  useEffect(() => {
    if (!footerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When footer comes into view
        if (entry.isIntersecting && !hasAnimated) {
          setIsFooterVisible(true);
          setHasAnimated(true);
        }
      },
      {
        root: null, // viewport
        threshold: 0.1, // trigger when 10% of the element is visible
      }
    );

    observer.observe(footerRef.current);

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, [hasAnimated]);

  // Reset animation when user scrolls back to top
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100 && hasAnimated) {
        setHasAnimated(false);
        setIsFooterVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />

      {/* Bento Grid Features Section */}
      <section className="px-8 lg:px-24 bg-black relative z-10 pb-80">
        {/* Bento Grid - Improved symmetry and hierarchy */}
        <div className="text-center mb-16 mt-24">
          <div className="text-xs uppercase tracking-wider opacity-70 mb-4">[ POWERFUL FEATURES ]</div>
          <h2 className="text-5xl font-light mb-4">
            <span className="text-[#ff5c35]">Intelligent Search</span> for Your Content
          </h2>
          <p className="opacity-80 max-w-2xl mx-auto">
            Connect your cloud storage, upload files, and find exactly what you need with natural language - all in seconds.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* Large Feature - AI Search (Most Important) */}
          <div className="col-span-1 md:col-span-12 lg:col-span-12 row-span-1 bg-zinc-900/60 rounded-3xl p-8 hover:bg-zinc-800/70 transition-all group overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff5c35]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex items-start gap-6">
              <div className="h-16 w-16 rounded-2xl bg-[#ff5c35]/10 flex items-center justify-center shrink-0 relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#ff5c35]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div className="flex-1 relative z-10">
                <h3 className="text-2xl font-light mb-3">Natural Language Search</h3>
                <p className="opacity-70 mb-6 max-w-3xl">Ask questions in plain English to find your documents and images. "Show me all spreadsheets from last quarter with budget data" or "Find the presentation with the blue graph about user growth" - FYND AI understands context, content, and even what's inside your images.</p>
                <a href="#" className="text-[#ff5c35] flex items-center w-fit group-hover:underline">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Medium Feature - Content Analysis & Generation (Important) */}
          <div className="col-span-1 md:col-span-8 lg:col-span-8 row-span-1 bg-zinc-900/60 rounded-3xl p-6 hover:bg-zinc-800/70 transition-all group overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff5c35]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex items-start gap-4">
              <div className="h-14 w-14 rounded-xl bg-[#ff5c35]/10 flex items-center justify-center shrink-0 relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#ff5c35]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div className="flex-1 relative z-10">
                <h3 className="text-xl font-light mb-2">Content Analysis & Generation</h3>
                <p className="opacity-70 text-sm">Generate new content based on your existing files. Create presentations from reports, draft emails based on documents, or automatically generate meeting minutes from transcripts.</p>
              </div>
            </div>
          </div>

          {/* Medium Feature - Visual Recognition (Important) */}
          <div className="col-span-1 md:col-span-4 lg:col-span-4 row-span-1 bg-zinc-900/60 rounded-3xl p-6 hover:bg-zinc-800/70 transition-all group overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff5c35]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="h-14 w-14 rounded-xl bg-[#ff5c35]/10 flex items-center justify-center mb-4 relative z-10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#ff5c35]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-light mb-2 relative z-10">Visual Recognition</h3>
            <p className="opacity-70 text-sm relative z-10">Find images based on their content - "dogs playing in the park" or "presentation slides with graphs".</p>
          </div>

          {/* Small Feature - Cloud Integration */}
          <div className="col-span-1 md:col-span-4 lg:col-span-4 row-span-1 bg-zinc-900/60 rounded-3xl p-6 hover:bg-zinc-800/70 transition-all group overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff5c35]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="h-14 w-14 rounded-xl bg-[#ff5c35]/10 flex items-center justify-center mb-4 relative z-10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#ff5c35]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h3 className="text-xl font-light mb-2 relative z-10">Cloud Integration</h3>
            <p className="opacity-70 text-sm relative z-10">Connect Google Drive, Dropbox, OneDrive and more for seamless access.</p>
          </div>

          {/* Small Feature - Content Summarization */}
          <div className="col-span-1 md:col-span-4 lg:col-span-4 row-span-1 bg-zinc-900/60 rounded-3xl p-6 hover:bg-zinc-800/70 transition-all group overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff5c35]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="h-14 w-14 rounded-xl bg-[#ff5c35]/10 flex items-center justify-center mb-4 relative z-10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#ff5c35]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-light mb-2 relative z-10">Content Summarization</h3>
            <p className="opacity-70 text-sm relative z-10">Get instant summaries of any document, from lengthy reports to presentations.</p>
          </div>
          {/* Small Feature - Data Extraction */}
          <div className="col-span-1 md:col-span-4 lg:col-span-4 row-span-1 bg-zinc-900/60 rounded-3xl p-6 hover:bg-zinc-800/70 transition-all group overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff5c35]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="h-14 w-14 rounded-xl bg-[#ff5c35]/10 flex items-center justify-center mb-4 relative z-10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#ff5c35]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-light mb-2 relative z-10">Data Extraction</h3>
            <p className="opacity-70 text-sm relative z-10">Pull specific data from documents - "Extract all email addresses from this folder of PDFs".</p>
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      {/* How It Works Section with Modified LampContainer */}
      {/* Enhanced How It Works Section */}
      <section className="bg-black relative z-20">
        <LampContainer>
          <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-24">
            <div className="text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-xs uppercase tracking-wider opacity-70 mb-4"
              >
                [ HOW IT WORKS ]
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl font-light mb-6"
              >
                From <span className="text-[#ff5c35]">Upload</span> to <span className="text-[#ff5c35]">Insight</span> in Seconds
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="opacity-80 max-w-2xl mx-auto"
              >
                FYND AI's seamless process transforms your unstructured content into an intelligent, searchable knowledge base powered by advanced machine learning.
              </motion.p>
            </div>

            {/* Process steps */}
            <div className="relative">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-28 relative"
              >
                <div className="w-20 h-20 rounded-full bg-[#ff5c35]/10 flex items-center justify-center z-10 shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="w-14 h-14 rounded-full bg-[#ff5c35]/20 flex items-center justify-center text-[#ff5c35] text-2xl font-light"
                  >
                    1
                  </motion.div>
                </div>
                <div className="max-w-lg text-center md:text-left">
                  <h3 className="text-2xl font-light mb-4">Effortless Integration</h3>
                  <p className="opacity-70 mb-6">Connect your digital ecosystem in seconds. FYND AI seamlessly integrates with Google Drive, Dropbox, OneDrive, and local storage, instantly creating secure bridges to your data without migration or duplicating files.</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <motion.div
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 92, 53, 0.1)" }}
                      className="px-4 py-2 rounded-full bg-zinc-800 text-sm transition-colors"
                    >
                      Google Drive
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 92, 53, 0.1)" }}
                      className="px-4 py-2 rounded-full bg-zinc-800 text-sm transition-colors"
                    >
                      Dropbox
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 92, 53, 0.1)" }}
                      className="px-4 py-2 rounded-full bg-zinc-800 text-sm transition-colors"
                    >
                      OneDrive
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 92, 53, 0.1)" }}
                      className="px-4 py-2 rounded-full bg-zinc-800 text-sm transition-colors"
                    >
                      Local Files
                    </motion.div>
                  </div>
                </div>
                <motion.div
                  whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(255, 92, 53, 0.15)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="md:w-80 lg:w-96 h-60 rounded-2xl bg-zinc-900 overflow-hidden shadow-xl shadow-black/30 shrink-0 hidden lg:block"
                >
                  <div className="h-10 bg-zinc-800 flex items-center px-4">
                    <div className="w-3 h-3 rounded-full bg-zinc-600 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-zinc-600 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-zinc-600"></div>
                  </div>
                  <div className="p-4">
                    <div className="mb-4 h-10 w-full rounded-lg bg-zinc-800 flex items-center justify-center text-sm text-zinc-400">Connect your storage</div>
                    <div className="grid grid-cols-2 gap-3">
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="h-24 rounded-lg bg-zinc-800 flex items-center justify-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                        </svg>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="h-24 rounded-lg bg-zinc-800 flex items-center justify-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-zinc-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8 mb-28 relative"
              >
                <div className="w-20 h-20 rounded-full bg-[#ff5c35]/10 flex items-center justify-center z-10 shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="w-14 h-14 rounded-full bg-[#ff5c35]/20 flex items-center justify-center text-[#ff5c35] text-2xl font-light"
                  >
                    2
                  </motion.div>
                </div>
                <div className="max-w-lg text-center md:text-left">
                  <h3 className="text-2xl font-light mb-4">Intelligent Analysis</h3>
                  <p className="opacity-70 mb-6">Our neural network doesn't just scan text—it understands context, recognizes images, identifies key concepts, and builds a comprehensive knowledge graph. FYND AI's deep learning system analyzes everything from spreadsheet data to image content, making even visual information searchable.</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <motion.div
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 92, 53, 0.1)" }}
                      className="px-4 py-2 rounded-full bg-zinc-800 text-sm transition-colors"
                    >
                      Multimodal Processing
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 92, 53, 0.1)" }}
                      className="px-4 py-2 rounded-full bg-zinc-800 text-sm transition-colors"
                    >
                      Image Recognition
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 92, 53, 0.1)" }}
                      className="px-4 py-2 rounded-full bg-zinc-800 text-sm transition-colors"
                    >
                      Knowledge Graph
                    </motion.div>
                  </div>
                </div>
                <motion.div
                  whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(255, 92, 53, 0.15)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="md:w-80 lg:w-96 h-60 rounded-2xl bg-zinc-900 overflow-hidden shadow-xl shadow-black/30 shrink-0 hidden lg:block"
                >
                  <div className="h-10 bg-zinc-800 flex items-center px-4">
                    <div className="w-3 h-3 rounded-full bg-zinc-600 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-zinc-600 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-zinc-600"></div>
                  </div>
                  <div className="p-4 h-full">
                    <div className="w-full h-full rounded-lg bg-zinc-800 relative overflow-hidden">
                      <div className="absolute inset-0 flex flex-wrap gap-2 p-4 content-start">
                        <motion.div
                          animate={{
                            opacity: [0.3, 0.8, 0.3],
                            width: ["60%", "70%", "60%"]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                          className="h-2 bg-[#ff5c35]/40 rounded-full"
                        ></motion.div>
                        <motion.div
                          animate={{
                            opacity: [0.2, 0.6, 0.2],
                            width: ["40%", "50%", "40%"]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: 0.5
                          }}
                          className="h-2 bg-[#ff5c35]/30 rounded-full"
                        ></motion.div>
                        <motion.div
                          animate={{
                            opacity: [0.5, 0.9, 0.5],
                            width: ["50%", "60%", "50%"]
                          }}
                          transition={{
                            duration: 3.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: 0.2
                          }}
                          className="h-2 bg-[#ff5c35]/50 rounded-full"
                        ></motion.div>
                        <motion.div
                          animate={{
                            opacity: [0.3, 0.7, 0.3],
                            width: ["70%", "80%", "70%"]
                          }}
                          transition={{
                            duration: 4.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                            delay: 0.7
                          }}
                          className="h-2 bg-[#ff5c35]/30 rounded-full"
                        ></motion.div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-zinc-800 to-transparent"></div>
                      <motion.div
                        animate={{
                          scale: [1, 1.05, 1],
                          opacity: [0.7, 0.9, 0.7]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="w-20 h-20 rounded-full bg-[#ff5c35]/20 flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full bg-[#ff5c35]/40"></div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-28 relative"
              >
                <div className="w-20 h-20 rounded-full bg-[#ff5c35]/10 flex items-center justify-center z-10 shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="w-14 h-14 rounded-full bg-[#ff5c35]/20 flex items-center justify-center text-[#ff5c35] text-2xl font-light"
                  >
                    3
                  </motion.div>
                </div>
                <div className="max-w-lg text-center md:text-left">
                  <h3 className="text-2xl font-light mb-4">Conversational Discovery</h3>
                  <p className="opacity-70 mb-6">Ask for what you need in everyday language. FYND AI's natural language understanding goes beyond keywords to grasp intent, context, and nuance—finding files based on content descriptions, partial memories, or even concepts. It's like having a conversation with someone who's read all your files.</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <motion.div
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 92, 53, 0.1)" }}
                      className="px-4 py-2 rounded-full bg-zinc-800 text-sm transition-colors"
                    >
                      Natural Language
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 92, 53, 0.1)" }}
                      className="px-4 py-2 rounded-full bg-zinc-800 text-sm transition-colors"
                    >
                      Semantic Understanding
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 92, 53, 0.1)" }}
                      className="px-4 py-2 rounded-full bg-zinc-800 text-sm transition-colors"
                    >
                      Context-Aware
                    </motion.div>
                  </div>
                </div>
                <motion.div
                  whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(255, 92, 53, 0.15)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="md:w-80 lg:w-96 h-60 rounded-2xl bg-zinc-900 overflow-hidden shadow-xl shadow-black/30 shrink-0 hidden lg:block"
                >
                  <div className="h-10 bg-zinc-800 flex items-center px-4">
                    <div className="w-3 h-3 rounded-full bg-zinc-600 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-zinc-600 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-zinc-600"></div>
                  </div>
                  <div className="p-4">
                    <motion.div
                      initial={{ width: "80%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="relative mb-4"
                    >
                      <input type="text" className="h-10 w-full rounded-lg bg-zinc-800 px-4 text-sm text-zinc-300" value="Find quarterly marketing performance data" readOnly />
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 2 }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#ff5c35]"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </motion.div>
                    </motion.div>
                    <div className="flex flex-col gap-3">
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 2.2 }}
                        className="h-8 flex items-center gap-2"
                      >
                        <div className="w-8 h-8 bg-zinc-800 rounded flex items-center justify-center shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#ff5c35]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="text-sm">Q3_Marketing_Performance.pdf</div>
                        <div className="text-[#ff5c35] ml-auto text-xs">98% match</div>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 2.6 }}
                        className="h-8 flex items-center gap-2"
                      >
                        <div className="w-8 h-8 bg-zinc-800 rounded flex items-center justify-center shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                          </svg>
                        </div>
                        <div className="text-sm">Marketing_Quarterly_Analysis.xlsx</div>
                        <div className="text-[#ff5c35] ml-auto text-xs">92% match</div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Step 4 */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8 relative"
              >
                <div className="w-20 h-20 rounded-full bg-[#ff5c35]/10 flex items-center justify-center z-10 shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="w-14 h-14 rounded-full bg-[#ff5c35]/20 flex items-center justify-center text-[#ff5c35] text-2xl font-light"
                  >
                    4
                  </motion.div>
                </div>
                <div className="max-w-lg text-center md:text-left">
                  <h3 className="text-2xl font-light mb-4">Intelligent Automation</h3>
                  <p className="opacity-70 mb-6">From finding to doing—FYND AI doesn't just retrieve, it acts. Transform documents, extract insights, generate visualizations, or create custom AI workflows that process information at scale. Our agentic AI turns passive search into proactive intelligence that works for you.</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <motion.div
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 92, 53, 0.1)" }}
                      className="px-4 py-2 rounded-full bg-zinc-800 text-sm transition-colors"
                    >
                      Custom AI Agents
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 92, 53, 0.1)" }}
                      className="px-4 py-2 rounded-full bg-zinc-800 text-sm transition-colors"
                    >
                      Workflow Automation
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 92, 53, 0.1)" }}
                      className="px-4 py-2 rounded-full bg-zinc-800 text-sm transition-colors"
                    >
                      Insight Generation
                    </motion.div>
                  </div>
                </div>
                <motion.div
                  whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(255, 92, 53, 0.15)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="md:w-80 lg:w-96 h-60 rounded-2xl bg-zinc-900 overflow-hidden shadow-xl shadow-black/30 shrink-0 hidden lg:block"
                >
                  <div className="h-6 bg-zinc-800 flex items-center px-4">
                    <div className="w-3 h-3 rounded-full bg-zinc-600 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-zinc-600 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-zinc-600"></div>
                  </div>
                  <div className="p-4">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="flex items-start gap-3 mb-4"
                    >
                      <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#ff5c35]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-zinc-400 mb-1">Quarterly Performance Analysis</div>
                        <motion.div
                          initial={{ height: "0px", opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          transition={{ duration: 1.2, delay: 0.5 }}
                          className="p-3 bg-zinc-800 rounded-lg text-xs overflow-hidden"
                        >
                          Q3 saw a 24% increase in conversions with mobile-optimized campaigns leading performance. Customer acquisition cost decreased by 18%, while retention improved across all segments. Key growth opportunities identified in emerging markets.
                        </motion.div>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.8 }}
                      className="flex gap-2"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 92, 53, 0.2)" }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="flex-1 h-9 rounded-lg bg-[#ff5c35]/10 text-[#ff5c35] text-xs"
                      >
                        Create Report
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 92, 53, 0.2)" }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="flex-1 h-9 rounded-lg bg-[#ff5c35]/10 text-[#ff5c35] text-xs"
                      >
                        Visualize Data
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 92, 53, 0.2)" }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="flex-1 h-9 rounded-lg bg-[#ff5c35]/10 text-[#ff5c35] text-xs"
                      >
                        Share
                      </motion.button>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

          </div>
        </LampContainer>
      </section>

      <SubscriptionTiers/>

      {/* Call to Action */}
      <section className="px-8 md:px-16 lg:px-24 py-24 relative">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#ff5c35]/30 to-transparent -z-10"></div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs uppercase tracking-wider opacity-70 mb-4">[ INTERESTED? ]</div>
          <h2 className="text-5xl font-light mb-6">
            Are you ready to<span className="text-[#ff5c35]">Fynd</span>?
          </h2>
          <p className="opacity-80 mb-12">
          Grab the early joiners discounts
          </p>

          <button className="bg-[#ff5c35] text-white px-8 py-4 rounded-full flex items-center mx-auto hover:bg-[#ff5c35]/90 transition">
            <span className="mr-2">Start Fynding</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </section>

      {/* Footer with Text Hover Effect Background */}
      <div className="relative" ref={footerRef}>
        {/* Orange gradient background that matches the HeroSection orange */}
        <div className="h-96 relative overflow-hidden bg-black">
          <div className="absolute inset-x-0 bottom-0 w-full h-64 bg-gradient-to-t from-[#ff5d35a0] to-transparent"></div>
          <div className={`absolute inset-0 w-full h-full scale-140 transform translate-y-1/4 transition-opacity duration-1000 ${isFooterVisible ? 'opacity-100' : 'opacity-0'}`}>
            <TextHoverEffect text="FYND AI" />
          </div>
        </div>

        {/* Footer content - exact match to reference image */}
        <footer className="absolute inset-0 px-8 md:px-16 lg:px-36 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
            <div>
              <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-medium mb-8">TRY FYND AI ON</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-white hover:text-[#ff5c35] transition">Web</a></li>
                <li><a href="#" className="text-white hover:text-[#ff5c35] transition">iOS</a></li>
                <li><a href="#" className="text-white hover:text-[#ff5c35] transition">Android</a></li>
                <li><a href="#" className="text-white hover:text-[#ff5c35] transition">FYND AI on X</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-medium mb-8">PRODUCTS</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-white hover:text-[#ff5c35] transition">FYND AI</a></li>
                <li><a href="#" className="text-white hover:text-[#ff5c35] transition">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-medium mb-8">COMPANY</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-white hover:text-[#ff5c35] transition">Company</a></li>
                <li><a href="#" className="text-white hover:text-[#ff5c35] transition">Careers</a></li>
                <li><a href="#" className="text-white hover:text-[#ff5c35] transition">Contact</a></li>
                <li><a href="#" className="text-white hover:text-[#ff5c35] transition">News</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-medium mb-8">RESOURCES</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-white hover:text-[#ff5c35] transition">Status</a></li>
                <li><a href="#" className="text-white hover:text-[#ff5c35] transition">Privacy policy</a></li>
                <li><a href="#" className="text-white hover:text-[#ff5c35] transition">Security</a></li>
                <li><a href="#" className="text-white hover:text-[#ff5c35] transition">Legal</a></li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}