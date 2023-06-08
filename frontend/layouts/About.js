import { markdownify } from "@lib/utils/textConverter";
import shortcodes from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";

const About = ({ data }) => {
  const { frontmatter, mdxContent } = data;
  const { title, education } = frontmatter;

  return (
    <section className="section mt-16">
      <div className="container text-center">
        
        {markdownify(title, "h1", "h1 text-left lg:text-[55px] mt-12")}

        <div className="content text-left">
          <MDXRemote {...mdxContent} components={shortcodes} />
        </div>

        <div className="row mt-30text-left lg:flex-nowrap">
          <div className="lg:col-6 ">
            <div className="rounded border border-border p-6 dark:border-darkmode-border ">
              {markdownify(education.title, "h2", "section-title mb-13")}
              <div className="row">
                {education.degrees.map((degree, index) => (
                  <div className="mb-5 md:col-6" key={"degree-" + index}>
                    <h4 className="text-base lg:text-[20px]">
                      {degree.integrante}
                    </h4>
                    <p className="mt-1">{degree.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
