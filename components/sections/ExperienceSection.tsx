'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { experienceSteps, experienceConfig } from '@/content/experience'
import Image from 'next/image'

function StepItem({
  step,
  index,
  progress,
}: {
  step: (typeof experienceSteps)[number]
  index: number
  progress: ReturnType<typeof useTransform<number, number>>
}) {
  // Each step activates at a different scroll threshold
  const threshold = index / experienceSteps.length
  const opacity = useTransform(progress, [threshold, threshold + 0.15], [0.2, 1])
  const y = useTransform(progress, [threshold, threshold + 0.15], [16, 0])
  const numberBg = useTransform(progress, [threshold, threshold + 0.1], [0, 1])

  return (
    <div className="flex gap-3 md:gap-4 relative">
      {/* Step number + line */}
      <div className="flex flex-col items-center flex-shrink-0">
        <motion.div
          style={{
            backgroundColor: useTransform(
              numberBg,
              [0, 1],
              ['rgba(0,27,46,0.06)', 'rgba(121,0,0,0.08)']
            ),
            color: useTransform(
              numberBg,
              [0, 1],
              ['rgba(0,27,46,0.25)', 'rgba(121,0,0,1)']
            ),
          }}
          className="w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs md:text-sm font-bold"
        >
          {index + 1}
        </motion.div>

        {/* Connecting line (not on last step) */}
        {index < experienceSteps.length - 1 && (
          <div className="w-px flex-1 min-h-[24px] bg-primary/[0.06] relative mt-1.5 mb-1.5">
            <motion.div
              className="absolute inset-0 bg-primary/15 origin-top"
              style={{
                scaleY: useTransform(
                  progress,
                  [threshold + 0.1, (index + 1) / experienceSteps.length],
                  [0, 1]
                ),
              }}
            />
          </div>
        )}
      </div>

      {/* Content */}
      <motion.div className="flex-1 pb-6 md:pb-8" style={{ opacity, y }}>
        <h3 className="text-[15px] md:text-[17px] font-bold text-text mb-1">
          {step.title}
        </h3>
        <p className="text-[13px] md:text-sm text-text/55 leading-relaxed">
          {step.description}
        </p>

        {step.tags && (
          <motion.div
            className="flex flex-wrap gap-1.5 mt-2.5"
            style={{ opacity }}
          >
            {step.tags.map((tag) => (
              <span
                key={tag}
                className={
                  tag === '& More'
                    ? 'text-[11px] italic text-text/40 px-1 py-1'
                    : 'text-[11px] font-medium text-primary bg-primary/[0.05] border border-primary/10 px-2.5 py-1 rounded-full'
                }
              >
                {tag}
              </span>
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.8', 'end 0.6'],
  })

  return (
    <section id="experience" className="py-12 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-text mb-3">
            {experienceConfig.title}
          </h2>
          <p className="text-sm md:text-base text-text/55 max-w-md mx-auto leading-relaxed">
            {experienceConfig.subtitle}
          </p>
        </motion.div>

        {/* Grid: Photo + Steps */}
        <div
          ref={sectionRef}
          className="grid md:grid-cols-2 gap-8 md:gap-14 items-start"
        >
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="rounded-xl md:rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src={experienceConfig.image}
              alt={experienceConfig.imageAlt}
              width={600}
              height={500}
              className="w-full h-auto object-cover"
            />
          </motion.div>

          {/* Steps with progress line */}
          <div className="flex flex-col">
            {experienceSteps.map((step, index) => (
              <StepItem
                key={step.id}
                step={step}
                index={index}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
