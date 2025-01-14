// @flow strict
import BlogCard from "../components/homepage/blog/blog-card";
import Parser from "rss-parser";
import * as cheerio from 'cheerio';
import { personalData } from "@/utils/data/personal-data";

async function getBlogs() {

     const parser = new Parser();
     const feed = await parser.parseURL(`https://medium.com/feed/${personalData.mediumUsername}`);

     const blogs = [];

     feed.items.forEach((item) => {
          const $ = cheerio.load(item['content:encoded'] || item.content);
          const coverImage = $('img').first().attr('src') || $('img').first().attr('data-src');

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

async function page() {
     const blogs = await getBlogs();

     return (
          <div className="py-8">
               <div className="flex justify-center my-5 lg:py-8">
                    <div className="flex  items-center">
                         <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                         <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
                              All Blog
                         </span>
                         <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                    </div>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
                    {
                         blogs.map((blog, i) => (
                              blog?.cover &&
                              <BlogCard blog={blog} key={i} />
                         ))
                    }
               </div>
          </div>
     );
};

export default page;