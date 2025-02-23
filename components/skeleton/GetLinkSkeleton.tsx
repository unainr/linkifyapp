import React from 'react'
import { Skeleton } from '../ui/skeleton'

const GetLinkSkeleton = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-background via-background/90 to-background/50">
    {/* Refined background with theme-aware dots */}
    <div className="fixed inset-0 -z-10 h-full w-full">
      <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#333333_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="absolute inset-0 bg-gradient-to-tr from-red-500/2 via-transparent to-blue-500/2 dark:from-red-500/5 dark:to-blue-500/5" />
    </div>
  
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Profile Section Skeleton */}
      <section className="text-center space-y-8">
        <div className="relative inline-block">
          <div className="absolute inset-0  dark:to-blue-500/30 rounded-full blur-xl" />
          <Skeleton className="relative w-28 h-28 rounded-full bg-neutral-200 dark:bg-neutral-800" />
        </div>
  
        <div className="space-y-3">
          <Skeleton className="h-8 w-48 mx-auto rounded-lg bg-neutral-200 dark:bg-neutral-800" />
          <Skeleton className="h-16 w-72 mx-auto rounded-md bg-neutral-200 dark:bg-neutral-800" />
        </div>
      </section>
  
      {/* Links Section Skeleton */}
      <section className="mt-12 space-y-3">
        {[...Array(4)].map((_, index) => (
          <Skeleton
            key={index}
            className="w-full h-12 rounded-lg bg-neutral-200 dark:bg-neutral-800"
          />
        ))}
      </section>
  
      {/* Footer Skeleton */}
      <footer className="mt-16 text-center">
        <div className="border-t border-neutral-200 dark:border-neutral-800 pt-6 pb-4">
          <Skeleton className="h-4 w-40 mx-auto rounded-md bg-neutral-200 dark:bg-neutral-800" />
        </div>
        <Skeleton className="h-10 w-24 mx-auto rounded-lg bg-neutral-200 dark:bg-neutral-800" />
      </footer>
    </main>
  </div>
  
  
  
  
  
  )
}

export default GetLinkSkeleton