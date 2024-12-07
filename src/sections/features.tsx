'use client';

import Avatar from '@/components/ui/avatat';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

interface Review {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default function Features() {
  const [review, setReview] = useState<Review[]>([]);

  useEffect(() => {
    axios
      .get<Review[]>('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setReview(res.data);
      });
  }, []);

  const features = [
    { sender: 'Rafi Cahyadi' },
    { sender: 'Silfi Nur Aini' },
    { sender: 'Anazri Eriyani' },
    { sender: 'Ayu Afsari' },
    { sender: 'Reyga Marza' },
    { sender: 'Nabil Asykaroe' },
  ].map((feature, index) => ({
    ...feature,
    text: review[index]?.body || 'Loading...',
  }));

  return (
    <div id="features">
      <section className="border-t-border dark:border-t-darkBorder dark:bg-darkBg border-t-2 bg-bg py-20 font-base lg:py-[100px]">
        <h2 className="mb-14 px-5 text-center text-2xl font-heading md:text-3xl lg:mb-20 lg:text-4xl">
          Kata Mereka Lulusan dan Murid <br /> SMKN 11 Bandung
        </h2>

        <div className="mx-auto grid w-container max-w-full grid-cols-1 gap-5 px-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              className="border-border dark:border-darkBorder dark:bg-secondaryBlack shadow-light dark:shadow-dark flex flex-col gap-3 rounded-base border-2 bg-white p-5"
              key={i}
            >
              <div className="flex gap-3 items-center">
                <Avatar imageUrl="https://neobrutalism-bento.netlify.app/pfp.png" />
                <h4 className="text-xl font-heading">{feature.sender}</h4>
              </div>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </section>
      <div>
        <Marquee
          className="border-y-border dark:border-y-darkBorder dark:border-darkBorder dark:bg-secondaryBlack border-y-2 bg-white py-3 font-base sm:py-5"
          direction="left"
        >
          {Array(10)
            .fill('xd')
            .map((x, id) => (
              <div className="flex items-center" key={id}>
                <span className="mx-8 text-xl font-heading sm:text-2xl lg:text-4xl">
                  SMKN 11 BANDUNG
                </span>
              </div>
            ))}
        </Marquee>
      </div>
    </div>
  );
}
