import { markdownify } from "@lib/utils/textConverter";
import shortcodes from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote";


const About = ({ data }) => {
  const { frontmatter, mdxContent } = data;
  const { title, education } = frontmatter;

  return (
    <section className="row mt-30 text-center justify-center">
    {markdownify(title, "h1", "h1 text-left lg:text-[50px] mt-12")}

          <MDXRemote {...mdxContent} components={shortcodes} />
              {markdownify(education.title, "h2", "section-title mb-13")}
              <div className="row">
                {education.degrees.map((degree, index) => (
                  <div className="mb-5 md:w-1/2" key={"degree-" + index}>
                    <h4 className="text-base lg:text-[20px]">
                      {degree.integrante}
                    </h4>
                    <p className="mt-1">{degree.content}</p>
                  </div>
                ))}
              </div>
      
       
    </section>
  );

};

export default About;
