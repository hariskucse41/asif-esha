"use client";

import { MapPin } from "lucide-react";
import { houses, venue } from "@/data/site";
import { Section, SectionHeading } from "@/components/DecorativeElements";
import { Reveal } from "@/components/Reveal";

function directionsUrl(query: string) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;
}

function Place({
  label,
  address,
  mapsQuery,
}: {
  label: string;
  address: string;
  mapsQuery: string;
}) {
  return (
    <div className="mt-10">
      <MapPin className="mx-auto h-6 w-6 text-gold-deep" aria-hidden="true" />
      <p className="eyebrow mt-3">{label}</p>
      <p className="mt-2 font-serif text-2xl text-ink sm:text-3xl">{address}</p>
      <div className="mt-6 flex justify-center">
        <a
          className="btn btn-solid"
          href={directionsUrl(mapsQuery)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Get directions to ${address} in Google Maps`}
        >
          Get Directions
        </a>
      </div>
    </div>
  );
}

export function Venue() {
  return (
    <Section id="venue" labelledBy="venue-heading">
      <Reveal>
        <SectionHeading eyebrow="Where we will gather" title="Boalia & Khordo" id="venue-heading" />
        <div className="mx-auto max-w-lg text-center">
          <p className="mx-auto max-w-md text-base leading-relaxed text-brown sm:text-lg">
            The Wedding Program will be held in {venue.name}. The Holud Program and the Reception Program will be held
            at each family&apos;s own house.
          </p>
          <Place label="Wedding Program" address={venue.address} mapsQuery={venue.mapsQuery} />
          <Place
            label="Holud & Reception · Groom's house"
            address={houses.groom.address}
            mapsQuery={houses.groom.mapsQuery}
          />
          <Place
            label="Holud & Reception · Bride's house"
            address={houses.bride.address}
            mapsQuery={houses.bride.mapsQuery}
          />
        </div>
      </Reveal>
    </Section>
  );
}
