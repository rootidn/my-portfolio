import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";

import "./blog.css";

const blogList = [
  {
    title: "How To Deploy YOLO Detection and Segmentation Model on Streamlit Cloud",
    date: "10 September, 2023",
    link: "https://medium.com/@ikhsanadi300/how-to-deploy-yolo-detection-and-segmentation-model-on-streamlit-cloud-545167733188",
    img: "https://i.imgur.com/eA35XEh.jpg",
    author: "Ikhsan",
  },
];

const Blog = () => {
  return (
    <Fade triggerOnce={true}>
      <section className="container blog section min-h-[100vh]" id="blog">
        <h2 className="section_title">Latest Posts</h2>

        <div className="blog_container grid">
          {blogList.map(({ title, category, date, link, img, author }) => (
            <Zoom triggerOnce={true}>
              <div className="blog_card">
                <a href={link}>
                  <div className="blog_thumb bg-white">
                    {/* <span className="blog_category">{category}</span> */}
                    <img src={img} alt={title} className="blog_img mx-auto h-[200px]" />
                  </div>
                  <div className="blog_details">
                    <h3 className="blog_title line-clamp-2">{title}</h3>
                    <div className="blog_meta">
                      <span className="line-clamp-1">{date}</span>
                      <span className="blog_dot">.</span>
                      <span className="line-clamp-1">{author}</span>
                    </div>
                  </div>
                </a>
              </div>
            </Zoom>
          ))}
        </div>
        {
          blogList.length > 3 ? (
            <div className="flex text-sm text-slate-400 items-center justify-center py-4">
            <a href="https://medium.com/@ikhsanadi300" className="more_blog-link">
              Show more
            </a>
          </div>
          ) 
          : null
        }
      </section>
    </Fade>
  );
};

export default Blog;
