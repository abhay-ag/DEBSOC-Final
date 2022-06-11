import Ishaan from '../media/images/rock-n-roll-monkey-LEPhZkQbUrk-unsplash.jpg';
import Prabhneet from '../media/images/alison-wang-mou0S7ViElQ-unsplash.jpg';
import Ashwin from '../media/images/barrett-ward-1qQx3LHaYGg-unsplash.jpg';
import Harsh from '../media/images/jose-betancourt-NHIP7M3EB9w-unsplash.jpg';
// import React from "@types/react";
import React from "react";

const Achievements = [
  {
    image_link: Ishaan,
    name: "Ishaan Sharma",
    achievement: ["Vice Chairperson UNGA: Chimera MUN 22’"]
  },
  {
    image_link: Prabhneet,
    name: "Prabhneet Kaur",
    achievement: ["Special mention: UNHRC @UIET MUN 6.0"]
  },
  {
    image_link: Ashwin,
    name: "Ashwin Kumar",
    achievement: ["Finalist: Vaad Vivaad, Government College of Engineering (GCE), Nagpur"]
  },
  {
    image_link: Harsh,
    name: "Harsh Vardhan Sikka",
    achievement: ["Finalist: INBLOOM 21’ Christ University"]
  }
];

const Curriculum = [
  {
    title: 'Public Speaking',
    info: 'Begin your journey with simple 3v3 mock debates, beginner friendly topics and flexible speech timings.',
    svg: <i className="fad fa-podium-star text-indigo-400 text-4xl"></i>
  },
  {
    title: 'Conventional Debates',
    info: 'Participate in byte sized teams with new DEBSOC members every time, explore your compatibility & work as teams.',
    svg: <i className="fad fa-users text-indigo-400 text-4xl"></i>
  },
  {
    title: 'Individual Debates',
    info: 'Learn the art of POIs with group discussion events. Be ready for questions thrown at you!',
    svg: <i className="fad fa-user text-indigo-400 text-4xl"></i>
  },
  {
    title: 'Parliamentary Debating',
    info: 'Get ready for Universally accepted and followed Asian & British Parliamentary Debating formats. By now you’re not short of words & a master of whipping the opposition with counter arguments.',
    svg: <i className="fad fa-users-crown text-indigo-400 text-4xl"></i>
  }
];

const Uniqueness = [
  {
    title: "Structured Curriculum",
    info: "Your progress is our mission and that’s fueled with a well laid out roadmap extremely suitable for beginners and expert debaters alike. ",
    svg: <i className="fal fa-sitemap text-indigo-400 text-3xl"></i>
  },
  {
    title: "Competitions",
    info: "If you are someone who’s even remotely competitive, we assure you’re up for a treat! Inter-club, inter-university, MUNs, novice, national and international events, we have it all :3",
    svg: <i className="fad fa-swords text-indigo-400 text-3xl"></i>
  },
  {
    title: "Social",
    info: "We know how much you’d love to meet new people as much as we do, so we pair you up with fresh faces in every event!",
    svg: <i className="fad fa-users text-indigo-400 text-3xl"></i>
  },
  {
    title: "Themes",
    info: "If you’re an enthusiast for general knowledge & can’t start your day without knowing what’s happening around, then you’ll relish our smokin’ hot basket of topics curated straight out of matters that are relevant, fresh and thought provoking.",
    svg: <i className="fal fa-books text-indigo-400 text-3xl"></i>
  },
  {
    title: "Exclusive",
    info: "DEBSOC is well known for its intense, comprehensive and lengthy interview process. Cutting no corners to establish an elite group of brilliant minds.",
    svg: <i className="fal fa-crown text-indigo-400 text-3xl"></i>
  },
  {
    title: "Life Long Skills",
    info: "Debating not just makes you a great speaker, but enriches your mind with the spirit of question, a belief in oneself and everlasting confidence. Being at The Debating Society is more than just a tag of excellence, shaping you for life.",
    svg: <i className="fad fa-tools text-indigo-400 text-3xl"></i>
  }
];

const Founders = [
  {
    name: "Harsh Vardhan Sikka",
    role: "Founder",
    wisdom: "Started with a vision back in 2021. Harsh Vardhan has been the cornerstone for everything grand and granular that’s happened at DEBSOC ever since. He describes himself as a jack of all trades. Be it the quirky promo-videos, an eye for design or the unique ideas laid down with the consistent impatience for getting stuff done on time with precision.",
    linkedIn: "https://www.linkedin.com/in/harsh-vardhan-sikka/",
    instagram: "https://www.instagram.com/sikkaaa.is.here/",
    image: Harsh
  },
  {
    name: "Prabhneet Kaur",
    role: "Co-founder",
    wisdom: "I'm sure she has a lot to say right now we don't have her kind wisdom words with her but we'll get soon.",
    linkedIn: "https://www.linkedin.com/in/prabhneet-sohanpal-6ba11a215/",
    instagram: "https://www.instagram.com/meet.__.28/",
    image: Prabhneet
  }
];

export {Achievements, Curriculum, Uniqueness, Founders};