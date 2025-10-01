export type ClubData = { 
  name: string; 
  image: string;
  uni?: string 
}

const unimelb = "University of Melbourne";
const uwa = "University of Western Australia";

export const clubs = [
  { name: "DSCubed", image: "/clubs/dscubed.png", uni: unimelb },
  { name: "DSC", image: "/clubs/dsc-uwa.png", uni: uwa },
  { name: "RAID", image: "/clubs/raid.png", uni: unimelb },
]