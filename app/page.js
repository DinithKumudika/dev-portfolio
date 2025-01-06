import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import Parser from "rss-parser";
import * as cheerio from 'cheerio';
import { personalData } from "@/utils/data/personal-data";
import dynamic from 'next/dynamic';

async function getData() {
  const parser = new Parser();
  const feed = await parser.parseURL(`https://medium.com/feed/${personalData.mediumUsername}`);

  const blogs = [];
  
  feed.items.forEach((item) => {
    const $ = cheerio.load(item['content:encoded'] || item.content);
    const coverImage =  $('img').first().attr('src') || $('img').first().attr('data-src');

    const pubDate = new Date(item.pubDate);
    const year = pubDate.getUTCFullYear();
    const month = pubDate.toLocaleString('default', { month: 'short' });
    const day = String(pubDate.getUTCDate()).padStart(2, '0');

    const text = `${$('p').first().text()} ${$('p').eq(1).text()}`;
    const smallDescription = text.substring(0, 100).trim() + '...';

    console.log(item);

    const blog = {
      title: item.title,
      cover: coverImage,
      url: item.link,
      tags: item.categories,
      description: smallDescription,
      published: `${day} ${month} ${year}`,
    };
    blogs.push(blog);
  });

  return blogs;
};

export default async function Home() {
  const blogs = await getData();

  return (
    <div suppressHydrationWarning >
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog blogs={blogs} />
      <ContactSection />
    </div>
  )
};