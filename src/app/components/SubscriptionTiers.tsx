import React, { useState } from 'react';
import { motion } from 'motion/react';

const SubscriptionTiers = () => {
  const [hoveredTier, setHoveredTier] = useState<string | null>(null);

  const tiers = [
    {
      name: 'Free Finder',
      price: '$0',
      description: 'For the curious cats who like to peek',
      features: [
        'Up to 100 AI searches per month',
        'Basic cloud integration (1 storage provider)',
        'Limited content analysis',
        'Community support'
      ],
      buttonText: 'Start Exploring',
      color: 'from-zinc-800 to-zinc-900'
    },
    {
      name: 'Pro Discoverer',
      price: '$19.99',
      description: 'For knowledge hunters and content ninjas',
      features: [
        'Unlimited AI searches',
        'Multi-cloud integration (3 providers)',
        'Advanced content analysis',
        'Visual recognition',
        'Priority email support',
        'Monthly insights report'
      ],
      buttonText: 'Unleash Your Potential',
      featured: true,
      color: 'from-[#ff5c35]/20 to-[#ff5c35]/40'
    },
    {
      name: 'Enterprise Navigator',
      price: 'Custom',
      description: 'For organizations ready to transform their data universe',
      features: [
        'Unlimited enterprise-wide searches',
        'Unlimited cloud integrations',
        'Custom AI workflow development',
        'Dedicated account manager',
        'Advanced security & compliance',
        'Custom reporting & analytics',
        '24/7 premium support'
      ],
      buttonText: 'Contact Sales',
      color: 'from-purple-900/20 to-indigo-900/40'
    }
  ];

  return (
    <section className="px-8 md:px-16 lg:px-24 py-24 bg-black relative overflow-hidden">
      {/* Animated Background Gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-[#ff5c35]/10 to-transparent -z-10 opacity-50"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
          transition: {
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse'
          }
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-wider opacity-70 mb-4"
          >
            [ POWER UP YOUR KNOWLEDGE ]
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl font-light mb-6"
          >
            Subscription <span className="text-[#ff5c35]">Tiers</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="opacity-80 max-w-2xl mx-auto"
          >
            From casual browser to enterprise knowledge master - we've got a plan that turns your data into your superpower.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2 
              }}
              onHoverStart={() => setHoveredTier(tier.name)}
              onHoverEnd={() => setHoveredTier(null)}
              className={`
                relative overflow-hidden rounded-3xl 
                ${hoveredTier === tier.name ? 'scale-105 z-20' : 'scale-100 z-10'}
                transition-all duration-300 ease-in-out
              `}
            >
              {/* Animated Gradient Background */}
              <div 
                className={`
                  absolute inset-0 bg-gradient-to-br ${tier.color} 
                  opacity-20 group-hover:opacity-40 transition-opacity duration-300
                `}
              />

              {/* Animated Border Glow */}
              <motion.div
                animate={{
                  boxShadow: 
                    hoveredTier === tier.name 
                    ? ['0 0 10px rgba(255,92,53,0.3)', '0 0 20px rgba(255,92,53,0.5)', '0 0 10px rgba(255,92,53,0.3)']
                    : '0 0 0px rgba(255,92,53,0)'
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  repeatType: 'reverse' 
                }}
                className={`
                  absolute inset-0 border-2 
                  ${hoveredTier === tier.name 
                    ? 'border-[#ff5c35]/50' 
                    : 'border-transparent'
                  } 
                  rounded-3xl pointer-events-none z-30
                `}
              />

              <div 
                className={`
                  relative bg-zinc-900/80 backdrop-blur-lg 
                  rounded-3xl p-8 h-full flex flex-col 
                  ${tier.featured ? 'border-2 border-[#ff5c35]/30' : ''}
                `}
              >
                {tier.featured && (
                  <div className="absolute top-0 right-0 bg-[#ff5c35] text-white px-4 py-2 text-xs transform translate-x-1/4 -translate-y-1/4 rotate-45">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-light mb-2">{tier.name}</h3>
                  <p className="text-xs opacity-70 mb-4 h-12">{tier.description}</p>
                  <div className="text-4xl font-light mb-6">
                    {tier.price}
                    {tier.price !== 'Custom' && <span className="text-sm opacity-70">/month</span>}
                  </div>
                </div>
                <ul className="mb-8 space-y-3 flex-grow">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#ff5c35]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm opacity-80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    background: 'linear-gradient(to right, #ff5c35, #ff7f35)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    w-full py-4 rounded-full text-white transition-all duration-300
                    ${tier.featured 
                      ? 'bg-[#ff5c35] hover:bg-[#ff5c35]/90' 
                      : 'bg-zinc-800 hover:bg-zinc-700'}
                    relative overflow-hidden
                  `}
                >
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-30"></div>
                  {tier.buttonText}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subtle Decorative Elements */}
        <motion.div
          animate={{
            x: [-20, 20, -20],
            y: [10, -10, 10],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
          className="absolute -top-20 -right-20 w-64 h-64 bg-[#ff5c35]/10 rounded-full blur-3xl opacity-50 -z-20"
        />
        <motion.div
          animate={{
            x: [20, -20, 20],
            y: [-10, 10, -10],
            rotate: [5, -5, 5]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
          className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl opacity-50 -z-20"
        />
      </div>
    </section>
  );
};

export default SubscriptionTiers;