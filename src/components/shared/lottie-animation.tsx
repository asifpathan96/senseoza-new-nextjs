"use client";

import Lottie from "lottie-react";

const animationData = {
  v: "5.7.4",
  fr: 60,
  ip: 0,
  op: 120,
  w: 400,
  h: 400,
  nm: "Marketing Animation",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Circle",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 1, k: [{ t: 0, s: [0], e: [360] }, { t: 120, s: [360] }] },
        p: { a: 0, k: [200, 200, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ao: 0,
      shapes: [
        {
          ty: "el",
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [150, 150] },
        },
        {
          ty: "st",
          c: { a: 0, k: [0.145, 0.388, 0.922, 1] },
          o: { a: 0, k: 100 },
          w: { a: 0, k: 4 },
        },
        {
          ty: "fl",
          c: { a: 0, k: [0.145, 0.388, 0.922, 0.1] },
          o: { a: 0, k: 100 },
        },
      ],
      ip: 0,
      op: 120,
      st: 0,
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Inner Circle",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 1, k: [{ t: 0, s: [0], e: [-360] }, { t: 120, s: [-360] }] },
        p: { a: 0, k: [200, 200, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [80, 80], e: [100, 100] },
            { t: 60, s: [100, 100], e: [80, 80] },
            { t: 120, s: [80, 80] },
          ],
        },
      },
      ao: 0,
      shapes: [
        {
          ty: "el",
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [80, 80] },
        },
        {
          ty: "fl",
          c: { a: 0, k: [0.486, 0.227, 0.929, 0.3] },
          o: { a: 0, k: 100 },
        },
      ],
      ip: 0,
      op: 120,
      st: 0,
    },
  ],
};

export default function LottieAnimation() {
  return (
    <div className="flex h-80 w-full items-center justify-center">
      <Lottie
        animationData={animationData}
        loop
        className="h-full w-full max-w-sm"
      />
    </div>
  );
}
