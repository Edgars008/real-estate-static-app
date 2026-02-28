import floor1 from "../assets/gallery/floorPlans/1.png";
import floor2 from "../assets/gallery/floorPlans/2.png";
import floor3 from "../assets/gallery/floorPlans/3.png";
import type { Floor } from "../components/FloorGallery";

export const floorGalleryData: Floor[] = [
  {
    floorNumber: 1,
    image: floor1,
    apartments: [
      {
        number: 1,
        stairwell: 1,
        features: [
          "Combined living room with kitchen area",
          "Closed bedroom",
          "Combined bathroom with WC",
          "Entrance hall",
          "Terrace",
        ],
        totalArea: "74.7 m²",
        livingArea: "61 m²",
        terraceArea: "13.7 m²",
      },
      {
        number: 2,
        stairwell: 1,
        isReserved: true,
      },
      {
        number: 7,
        stairwell: 2,
        features: [
          "Combined living room with kitchen area",
          "2 closed bedrooms",
          "Combined bathroom with WC",
          "Entrance hall",
          "Terrace",
        ],
        totalArea: "87.8 m²",
        livingArea: "74.1 m²",
        terraceArea: "13.7 m²",
      },
      {
        number: 8,
        stairwell: 2,
        isReserved: true,
      },
    ],
  },
  {
    floorNumber: 2,
    image: floor2,
    apartments: [
      {
        number: 3,
        stairwell: 1,
        features: [
          "Combined living room with kitchen area",
          "Closed bedroom",
          "Combined bathroom with WC",
          "Entrance hall",
        ],
        totalArea: "68.5 m²",
        livingArea: "55 m²",
      },
      {
        number: 4,
        stairwell: 1,
        features: [
          "Combined living room with kitchen area",
          "Closed bedroom",
          "Combined bathroom with WC",
          "Entrance hall",
          "Terrace",
        ],
        totalArea: "80.0 m²",
        livingArea: "66 m²",
        terraceArea: "14 m²",
      },
      {
        number: 9,
        stairwell: 2,
        features: [
          "Combined living room with kitchen area",
          "2 closed bedrooms",
          "Combined bathroom with WC",
          "Entrance hall",
        ],
        totalArea: "85.0 m²",
        livingArea: "70 m²",
      },
      {
        number: 10,
        stairwell: 2,
        features: [
          "Combined living room with kitchen area",
          "Closed bedroom",
          "Combined bathroom with WC",
          "Entrance hall",
          "Terrace",
        ],
        totalArea: "78.5 m²",
        livingArea: "65 m²",
        terraceArea: "13.5 m²",
      },
    ],
  },
  {
    floorNumber: 3,
    image: floor3,
    apartments: [
      {
        number: 11,
        stairwell: 1,
        features: [
          "Combined living room with kitchen area",
          "Closed bedroom",
          "Combined bathroom with WC",
          "Entrance hall",
          "Terrace",
        ],
        totalArea: "90.2 m²",
        livingArea: "75 m²",
        terraceArea: "15.2 m²",
      },
      {
        number: 12,
        stairwell: 1,
        features: [
          "Combined living room with kitchen area",
          "Closed bedroom",
          "Combined bathroom with WC",
          "Entrance hall",
        ],
        totalArea: "70.0 m²",
        livingArea: "56 m²",
      },
      {
        number: 13,
        stairwell: 2,
        isReserved: true,
      },
      {
        number: 14,
        stairwell: 2,
        features: [
          "Combined living room with kitchen area",
          "2 closed bedrooms",
          "Combined bathroom with WC",
          "Entrance hall",
          "Terrace",
        ],
        totalArea: "88.4 m²",
        livingArea: "73 m²",
        terraceArea: "15.4 m²",
      },
    ],
  },
];