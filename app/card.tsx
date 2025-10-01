import Image from "next/image";
import { ClubData } from "./data";

export function Card({ data }: { data: ClubData }) {
  return (
    <div className="relative flex items-center justify-center w-full h-64 p-4 bg-secondary rounded-3xl">
      {/* Club Name */}
      <div className="absolute left-0 bottom-0 w-full p-4 text-center text-sm text-foreground/40">
        <span className="line-clamp-1">{data.name}</span>
      </div>

      {/* Club Logo */}
      <Image src={data.image} alt={data.name} className="max-h-28 w-auto object-contain rounded-md" width={240} height={240} />

      {/* University */}
      {/* {data.uni && (
        <div className="absolute left-0 bottom-0 w-full p-4 text-center text-sm text-foreground/40">
          <span className="line-clamp-1">{data.uni}</div>
        </div>
      )} */}
    </div>
  );
}