export type ClubData = { 
  name: string; 
  image: string;
  uni?: string 
}

const unimelb = "University of Melbourne";
const uwa = "University of Western Australia";

export const clubs = [
  { name: "Data Science Student Society", image: "/clubs/dscubed.png", uni: unimelb },
  { name: "Data Science Club", image: "/clubs/dsc-uwa.png", uni: uwa },
  { name: "Responsible Artificial Intelligence Development", image: "/clubs/raid.png", uni: unimelb },
]