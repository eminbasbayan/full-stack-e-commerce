import Reviews from "../Reviews/Reviews";
import "./BlogDetails.css";

const BlogDetails = () => {
  return (
    <section className="single-blog">
      <div className="container">
        <article>
          <figure>
            <a href="#">
              <img src="/img/blogs/blog1.jpg" alt="" />
            </a>
          </figure>
          <div className="blog-wrapper">
            <div className="blog-meta">
              <div className="blog-category">
                <a href="#">COLLECTION</a>
              </div>
              <div className="blog-date">
                <a href="#">April 25, 2022</a>
              </div>
              <div className="blog-tags">
                <a href="#">products</a>,<a href="#">coats</a>
              </div>
            </div>
            <h1 className="blog-title">The Best Products That Shape Fashion</h1>
            <div className="blog-content">
              <p>
                Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque,
                sem sed convallis ultricies, ante eros laoreet libero, vitae
                suscipit lorem turpis sit amet lectus. Quisque egestas lorem ut
                mauris ultrices, vitae sollicitudin quam facilisis. Vivamus
                rutrum urna non ligula tempor aliquet. Fusce tincidunt est
                magna, id malesuada massa imperdiet ut. Nunc non nisi urna. Nam
                consequat est nec turpis eleifend ornare. Vestibulum eu justo
                lobortis mauris commodo efficitur. Nunc pulvinar pulvinar
                cursus.
              </p>
              <p>
                Nulla id nibh ligula. Etiam finibus elit nec nisl faucibus, vel
                auctor tortor iaculis. Vivamus aliquet ipsum purus, vel auctor
                felis interdum at. Praesent quis fringilla justo. Ut non dui at
                mi laoreet gravida vitae eu elit. Aliquam in elit eget purus
                scelerisque efficitur vel ac sem. Etiam ante magna, vehicula et
                vulputate in, aliquam sit amet metus. Donec mauris eros, aliquet
                in nibh quis, semper suscipit nunc. Phasellus ornare nibh vitae
                dapibus tempor.
              </p>

              <blockquote>
                <p>
                  Aliquam purus enim, fringilla vel nunc imperdiet, consequat
                  ultricies massa. Praesent sed turpis sollicitudin, dignissim
                  justo vel, fringilla mi.
                </p>
              </blockquote>

              <p>
                Vivamus libero leo, tincidunt eget lectus rhoncus, finibus
                interdum neque. Curabitur aliquet dolor purus, id molestie purus
                elementum vitae. Sed quis aliquet eros. Morbi condimentum ornare
                nibh, et tincidunt ante interdum facilisis. Praesent sagittis
                tortor et felis finibus vestibulum. Interdum et malesuada fames
                ac ante ipsum primis in faucibus. Vivamus dapibus turpis sit
                amet turpis tincidunt, sit amet mollis turpis suscipit. Proin
                arcu diam, pretium nec tempus eu, feugiat non ex.
              </p>
              <p>
                Nulla id nibh ligula. Etiam finibus elit nec nisl faucibus, vel
                auctor tortor iaculis. Vivamus aliquet ipsum purus, vel auctor
                felis interdum at. Praesent quis fringilla justo. Ut non dui at
                mi laoreet gravida vitae eu elit. Aliquam in elit eget purus
                scelerisque efficitur vel ac sem. Etiam ante magna, vehicula et
                vulputate in, aliquam sit amet metus. Donec mauris eros, aliquet
                in nibh quis, semper suscipit nunc. Phasellus ornare nibh vitae
                dapibus tempor.
              </p>
              <p>
                Donec feugiat tincidunt eros, ac aliquam purus egestas
                condimentum. Curabitur imperdiet at leo pellentesque mattis.
                Fusce a dignissim est. In enim nisi, hendrerit placerat nunc
                quis, porttitor lobortis neque. Donec nec nulla arcu. Proin
                felis augue, volutpat ac nunc a, semper egestas dolor. Sed
                varius magna non lacus viverra, at dapibus sem interdum. Proin
                urna nibh, maximus nec interdum ut, hendrerit et arcu. Nunc
                venenatis eget nulla at tempor. Duis sed tellus placerat,
                bibendum felis quis, efficitur nisi. Morbi porta placerat urna
                et pharetra. Proin condimentum, libero ac feugiat efficitur, est
                orci consectetur sapien, a pretium leo leo in elit. Quisque
                fringilla finibus arcu, pretium posuere urna posuere sit amet.
                Nullam quis sapien a augue aliquet accumsan eget eu risus. Ut at
                mi sed velit condimentum porta. Proin vestibulum congue
                ullamcorper.
              </p>
              <p>
                Nunc blandit ligula mi, quis commodo dolor fermentum sit amet.
                Nam vehicula pharetra lacus a vulputate. Duis pulvinar
                vestibulum dolor, vel commodo arcu laoreet ac. Vestibulum sed
                consequat purus, vitae auctor metus. Duis ut aliquet odio, at
                tincidunt nunc. Vestibulum dignissim aliquet orci, rutrum
                malesuada ipsum facilisis vel. Morbi tempor dignissim nisi.
                Maecenas scelerisque maximus justo eget sodales. Sed finibus
                consectetur vulputate. Pellentesque id pellentesque nulla. Sed
                ut viverra eros. Vestibulum ut ligula quam.
              </p>
            </div>
          </div>
        </article>
        <Reviews />
      </div>
    </section>
  );
};

export default BlogDetails;
