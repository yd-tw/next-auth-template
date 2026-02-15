"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-background relative overflow-hidden pt-20 pb-32 md:pt-32">
      <div className="bg-primary/10 absolute top-0 left-1/2 -z-10 h-150 w-150 -translate-x-1/2 rounded-full blur-[120px]" />
      <div className="bg-secondary/10 absolute top-40 right-0 -z-10 h-100 w-100 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="border-border bg-background/50 text-muted-foreground mb-6 inline-flex items-center rounded-full border px-3 py-1 text-sm backdrop-blur-sm"
          >
            <span className="bg-primary mr-2 inline-block h-2 w-2 animate-pulse rounded-full" />
            公告
            <ChevronRight className="ml-1 h-4 w-4" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8 text-5xl font-extrabold tracking-tight md:text-7xl"
          >
            <span className="from-foreground to-foreground/70 bg-linear-to-b bg-clip-text text-transparent">
              項目名稱
            </span>
            <br />
            <span className="from-primary bg-linear-to-r via-purple-600 to-purple-800 bg-clip-text text-transparent">
              標語標語標語
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground mb-12 text-xl md:text-2xl"
          >
            簡單介紹
            <br className="hidden md:block" />
            簡單介紹
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/sign-up"
              className="group bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-primary/25 inline-flex cursor-pointer items-center justify-center rounded-full px-8 py-4 transition-all hover:shadow-lg"
            >
              <Image
                src="/codecat.svg"
                alt="CodeCat"
                width={20}
                height={20}
                className="mr-2 h-8 w-8"
              />
              <span className="font-semibold">立即註冊</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <button className="border-border bg-background text-foreground hover:bg-muted/50 cursor-pointer rounded-full border px-8 py-4 font-semibold transition-colors">
              了解更多
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border-border bg-card/50 relative mx-auto mt-20 max-w-5xl rounded-2xl border p-4 shadow-2xl backdrop-blur-xl md:p-8"
        >
          <div className="border-border bg-background overflow-hidden rounded-xl border shadow-inner">
            <Image
              src="/hero-abstract.png"
              alt="Platform Interface"
              width={1200}
              height={675}
              className="w-full object-cover"
              style={{ aspectRatio: "16/9" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
