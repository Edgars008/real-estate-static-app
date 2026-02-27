import living1 from "../assets/gallery/living-room/1.jpg";
import living2 from "../assets/gallery/living-room/2.jpg";
import living3 from "../assets/gallery/living-room/3.jpg";

import bedroom1 from "../assets/gallery/bedroom/1.jpg";
import bedroom2 from "../assets/gallery/bedroom/2.jpg";

import bathroom1 from "../assets/gallery/bathroom/1.jpg";
import bathroom2 from "../assets/gallery/bathroom/2.jpg";

export type RoomType = "living" | "bedroom" | "bathroom";

export const interiorGallery: Record<RoomType, string[]> = {
  living: [living1, living2, living3],
  bedroom: [bedroom1, bedroom2],
  bathroom: [bathroom1, bathroom2],
};