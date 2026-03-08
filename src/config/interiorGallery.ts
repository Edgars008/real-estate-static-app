import living1 from "../assets/gallery/living-room/1.jpg";
import living2 from "../assets/gallery/living-room/2.jpg";
import living3 from "../assets/gallery/living-room/3.jpg";

import bedroom1 from "../assets/gallery/bedroom/1.jpg";
import bedroom2 from "../assets/gallery/bedroom/2.jpg";

import bathroom1 from "../assets/gallery/bathroom/1.jpg";
import bathroom2 from "../assets/gallery/bathroom/2.jpg";

import floorPlans1 from "../assets/gallery/floorPlans/1.png";
import floorPlans2 from "../assets/gallery/floorPlans/2.png";
import floorPlans3 from "../assets/gallery/floorPlans/1.png";

import apartment1_2 from "../assets/gallery/apartment-1/2_interior-2.jpg";
import apartment1_3 from "../assets/gallery/apartment-1/2_interior-3.jpg";
import apartment1_4 from "../assets/gallery/apartment-1/2_interior-4.jpg";
import apartment1_5 from "../assets/gallery/apartment-1/2_interior-5.jpg";
import apartment1_6 from "../assets/gallery/apartment-1/2_interior-6.jpg";
import apartment1_360 from "../assets/gallery/apartment-1/2_interior-360.jpg";

import apartment2_1 from "../assets/gallery/apartment-2/Interior-3-1.jpg";
import apartment2_2 from "../assets/gallery/apartment-2/Interior-3-2.jpg";
import apartment2_3 from "../assets/gallery/apartment-2/Interior-3-3.jpg";
import apartment2_4 from "../assets/gallery/apartment-2/Interior-3-4.jpg";
import apartment2_360_1 from "../assets/gallery/apartment-2/3601.jpg";
import apartment2_360_2 from "../assets/gallery/apartment-2/3602.jpg";

import apartment3_1 from "../assets/gallery/apartment-3/1_rigas-10 interior -360.jpg";
import apartment3_2 from "../assets/gallery/apartment-3/1_rigas-10 interior.jpg";
import apartment3_3 from "../assets/gallery/apartment-3/3_rigas-10 interior.jpg";
import apartment3_4 from "../assets/gallery/apartment-3/4_rigas-10 interior.jpg";
import apartment3_5 from "../assets/gallery/apartment-3/5_rigas-10 interior.jpg";
import apartment3_6 from "../assets/gallery/apartment-3/8_rigas-10 interior - 360.jpg";
import apartment3_7 from "../assets/gallery/apartment-3/8_rigas-10 interior.jpg";
import apartment3_8 from "../assets/gallery/apartment-3/Bathroom-1 - 360.jpg";
import apartment3_9 from "../assets/gallery/apartment-3/Bathroom-1.jpg";
import apartment3_10 from "../assets/gallery/apartment-3/Bathroom-2.jpg";

export type RoomType = "living" | "bedroom" | "bathroom" | "floorPlans" 
| "apartment1" | "apartment2" | "apartment3";

export const interiorGallery: Record<RoomType, string[]> = {
  living: [living1, living2, living3],
  bedroom: [bedroom1, bedroom2],
  bathroom: [bathroom1, bathroom2],
  floorPlans: [floorPlans1, floorPlans2, floorPlans3],

  apartment1: [
    apartment1_2, apartment1_3, apartment1_4, 
    apartment1_5, apartment1_6, apartment1_360
  ],
  apartment2: [
    apartment2_1, apartment2_2, apartment2_3, apartment2_4, 
    apartment2_360_1, apartment2_360_2
  ],
  apartment3: [
    apartment3_1, apartment3_2, apartment3_3, 
    apartment3_4, apartment3_5, apartment3_6, apartment3_7, 
    apartment3_8, apartment3_9, apartment3_10
  ],

};