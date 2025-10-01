"use client";

import Link from "next/link";
import { clubs } from "./data";
import { Card } from "./card";

const signupUrl = "mailto:president@dscubed.org.au?subject=Student Club Join Request | Connect3&body=Hi there!%0D%0A%0D%0A Our club: {club name} is interested in joining Connect3.%0D%0A%0D%0A Here is our club email address: {club email address}.";

export default function Home() {
  return (
    <main className="font-sans min-h-screen w-full [&>*]:mx-auto space-y-16 px-4">
      <div className="max-w-screen-sm mt-24 sm:mt-32 mb-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl text-center leading-normal">
          Give students smarter ways
          <br></br> 
          to connect with your club, discover your
          <br></br>
          events, and grow your community.
        </h1>
      </div>

      <Link href={signupUrl} className="sticky top-4 z-10 block w-max mx-auto bg-foreground text-background text-lg font-medium rounded-full px-6 py-3 hover:scale-105 transition-transform">
        Invite your club {clubs.length > 0 ? `(${clubs.length})` : ''}
      </Link>
      
      <div className="max-w-screen-sm my-24 sm:my-32">
        <hr className="border-border"></hr>
      </div>

      <div className="max-w-screen-sm">
        <h1 className="text-xl sm:text-2xl md:text-3xl text-center leading-normal">
          Connect3 is a intelligent<br></br> knowledge base and discovery tool
          <br></br>
          for university experience.
        </h1>
      </div>

      <div className="max-w-screen-sm">
        <h1 className="text-xl sm:text-2xl md:text-3xl text-center leading-normal">
          It&apos;s the last app students<br></br> will ever need for campus life.
        </h1>
      </div>

      <div className="max-w-screen-sm">
        <h1 className="text-xl sm:text-2xl md:text-3xl text-center leading-normal">
          A single place to network,<br></br> discover events, connect with clubs,<br></br> and grow.
        </h1>
      </div>

      {clubs.length > 0 && (
        <>
          <div className="max-w-screen-sm">
            <h1 className="text-xl sm:text-2xl md:text-3xl text-center leading-normal">
              Partnering with {clubs.length} clubs.
            </h1>
          </div>

          <div className="max-w-screen-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {clubs.map((club, index) => (
              <Card key={index} data={club} />
            ))}
          </div>
        </>
      )}

      <footer className="max-w-screen-sm my-32 space-y-8">
        <Link href={signupUrl} className="flex w-full min-h-28 md:min-h-36 items-center justify-center bg-foreground text-background text-3xl md:text-5xl rounded-full px-6 py-3 hover:scale-105 transition-transform">
          Invite your club
        </Link>
        <p className="text-md sm:text-lg text-center">© {new Date().getFullYear()} Connect3. All rights reserved.</p>
      </footer>

      <div className="text-center text-xl sm:text-2xl md:text-3xl leading-normal w-full my-16 space-y-8 md:space-y-16">
        <p>Things you can do with Connect3</p>
        <hr className="border-border my-16"></hr>
        <p>Find Free food on campus</p>
        <p>Finding suitable clubs according to interests</p>
        <p>Listing discounted cafes on campus</p>
        <p>Get personalised events</p>
        <p>Find relevant networking opportunities</p>
        <p>Identify skill-building events</p>
        <p>Explore clubs by cause/interest</p>
        <p>Find club recruitment opportunities</p>
        <p>Connect students with communities that fit them</p>
        <p>Find teammates for hackathons</p>
        <p>Meet students working on innovative projects</p>
        <p>Find test users for personal projects</p>
        <p>Recruit for a startup or research project</p>
        <p>Seek internship advice from senior students</p>
        <p>Meet like-minded peers and make new friends</p>
        <p>Join peer groups and collaborative projects</p>
        <p>Explore social meetups on campus</p>
        <p>Connect with talent for coding competitions</p>
        <p>Find competitions and challenges</p>
        <p>Form teams for competitions</p>
        <p>Find co-founders with specific skills</p>
      </div>
    </main>
  );
}
