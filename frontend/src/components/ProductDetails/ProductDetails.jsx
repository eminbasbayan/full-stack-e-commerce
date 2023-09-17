import Breadcrumb from "./Breadcrumb/breadcrumb";
import "./ProductDetails.css";

const ProductDetails = () => {
  return (
    <section className="single-product">
      <div className="container">
        <div className="single-product-wrapper">
          <Breadcrumb />
          <div className="single-content">
            <main className="site-main">
              <div className="product-gallery">
                <div className="single-image-wrapper">
                  <img
                    src="img/products/product2/1.png"
                    id="single-image"
                    alt=""
                  />
                </div>
                <div className="product-thumb">
                  <div className="glide__track" data-glide-el="track">
                    <ol className="gallery-thumbs glide__slides"></ol>
                  </div>
                  <div className="glide__arrows" data-glide-el="controls">
                    <button
                      className="glide__arrow glide__arrow--left"
                      data-glide-dir="<"
                    >
                      <i className="bi bi-chevron-left"></i>
                    </button>
                    <button
                      className="glide__arrow glide__arrow--right"
                      data-glide-dir=">"
                    >
                      <i className="bi bi-chevron-right"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="product-info">
                <h1 className="product-title">Ridley High Waist</h1>
                <div className="product-review">
                  <ul className="product-star">
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-half"></i>
                    </li>
                  </ul>
                  <span>2 reviews</span>
                </div>
                <div className="product-price">
                  <s className="old-price">$165</s>
                  <strong className="new-price">$100</strong>
                </div>
                <p className="product-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <form className="variations-form">
                  <div className="variations">
                    <div className="colors">
                      <div className="colors-label">
                        <span>Color</span>
                      </div>
                      <div className="colors-wrapper">
                        <div className="color-wrapper">
                          <label className="blue-color">
                            <input type="radio" name="product-color" />
                          </label>
                        </div>
                        <div className="color-wrapper">
                          <label className="red-color">
                            <input type="radio" name="product-color" />
                          </label>
                        </div>
                        <div className="color-wrapper active">
                          <label className="green-color">
                            <input type="radio" name="product-color" />
                          </label>
                        </div>
                        <div className="color-wrapper">
                          <label className="purple-color">
                            <input type="radio" name="product-color" />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="values">
                      <div className="values-label">
                        <span>Size</span>
                      </div>
                      <div className="values-list">
                        <span className="active">XS</span>
                        <span>S</span>
                        <span>M</span>
                        <span>L</span>
                        <span>XL</span>
                      </div>
                    </div>
                    <div className="cart-button">
                      <input type="number" value="1" min="1" id="quantity" />
                      <button
                        className="btn btn-lg btn-primary"
                        id="add-to-cart"
                        type="button"
                      >
                        Add to cart
                      </button>
                    </div>
                    <div className="product-extra-buttons">
                      <a href="#">
                        <i className="bi bi-globe"></i>
                        <span>Size Guide</span>
                      </a>
                      <a href="#">
                        <i className="bi bi-heart"></i>
                        <span>Add to Wislist</span>
                      </a>
                      <a href="#">
                        <i className="bi bi-share"></i>
                        <span>Share this Product</span>
                      </a>
                    </div>
                  </div>
                </form>
                <div className="divider"></div>
                <div className="product-meta">
                  <div className="product-sku">
                    <span>SKU:</span>
                    <strong>BE45VGRT</strong>
                  </div>
                  <div className="product-categories">
                    <span>Categories:</span>
                    <strong>Pants , Women</strong>
                  </div>
                  <div className="product-tags">
                    <span>Tags:</span>
                    <a href="#">black</a>,<a href="#">white</a>
                  </div>
                </div>
              </div>
            </main>
          </div>

          <div className="single-tabs">
            <ul className="tab-list">
              <li>
                <a href="#" className="tab-button active" data-id="desc">
                  Description
                </a>
              </li>
              <li>
                <a href="#" className="tab-button" data-id="info">
                  Additional information
                </a>
              </li>
              <li>
                <a href="#" className="tab-button" data-id="reviews">
                  Reviews
                </a>
              </li>
            </ul>
            <div className="tab-panel">
              <div className="tab-panel-descriptions content active" id="desc">
                <p>
                  Quisque varius diam vel metus mattis, id aliquam diam rhoncus.
                  Proin vitae magna in dui finibus malesuada et at nulla. Morbi
                  elit ex, viverra vitae ante vel, blandit feugiat ligula. Fusce
                  fermentum iaculis nibh, at sodales leo maximus a. Nullam
                  ultricies sodales nunc, in pellentesque lorem mattis quis.
                  Cras imperdiet est in nunc tristique lacinia. Nullam aliquam
                  mauris eu accumsan tincidunt. Suspendisse velit ex, aliquet
                  vel ornare vel, dignissim a tortor.
                </p>
                <br />
                <p>
                  Quisque varius diam vel metus mattis, id aliquam diam rhoncus.
                  Proin vitae magna in dui finibus malesuada et at nulla. Morbi
                  elit ex, viverra vitae ante vel, blandit feugiat ligula. Fusce
                  fermentum iaculis nibh, at sodales leo maximus a. Nullam
                  ultricies sodales nunc, in pellentesque lorem mattis quis.
                  Cras imperdiet est in nunc tristique lacinia. Nullam aliquam
                  mauris eu accumsan tincidunt. Suspendisse velit ex, aliquet
                  vel ornare vel, dignissim a tortor.
                </p>
              </div>
              <div className="tab-panel-information content" id="info">
                <h3>Additional information</h3>
                <table>
                  <tbody>
                    <tr>
                      <th>Color</th>
                      <td>
                        <p>
                          Apple Red, Bio Blue, Sweet Orange, Blue, Green, Pink,
                          Black, White
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <th>Size</th>
                      <td>
                        <p>XXS, XS, S, M, L, XL, XXL</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="tab-panel-reviews content" id="reviews">
                <h3>
                  2 reviews for Basic Colored Sweatpants With Elastic Hems
                </h3>
                <div className="comments">
                  <ol className="comment-list">
                    <li className="comment-item">
                      <div className="comment-avatar">
                        <img src="img/avatars/avatar1.jpg" alt="" />
                      </div>
                      <div className="comment-text">
                        <ul className="comment-star">
                          <li>
                            <i className="bi bi-star-fill"></i>
                          </li>
                          <li>
                            <i className="bi bi-star-fill"></i>
                          </li>
                          <li>
                            <i className="bi bi-star-fill"></i>
                          </li>
                          <li>
                            <i className="bi bi-star-fill"></i>
                          </li>
                          <li>
                            <i className="bi bi-star-fill"></i>
                          </li>
                        </ul>
                        <div className="comment-meta">
                          <strong>admin</strong>
                          <span>-</span>
                          <time>April 23, 2022</time>
                        </div>
                        <div className="comment-description">
                          <p>
                            Sed perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="comment-item">
                      <div className="comment-avatar">
                        <img src="img/avatars/avatar1.jpg" alt="" />
                      </div>
                      <div className="comment-text">
                        <ul className="comment-star">
                          <li>
                            <i className="bi bi-star-fill"></i>
                          </li>
                          <li>
                            <i className="bi bi-star-fill"></i>
                          </li>
                          <li>
                            <i className="bi bi-star-fill"></i>
                          </li>
                          <li>
                            <i className="bi bi-star-fill"></i>
                          </li>
                          <li>
                            <i className="bi bi-star-fill"></i>
                          </li>
                        </ul>
                        <div className="comment-meta">
                          <strong>admin</strong>
                          <span>-</span>
                          <time>April 23, 2022</time>
                        </div>
                        <div className="comment-description">
                          <p>
                            Sed perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>
                <div className="review-form-wrapper">
                  <h2>Add a review</h2>
                  <form className="comment-form">
                    <p className="comment-notes">
                      Your email address will not be published. Required fields
                      are marked
                      <span className="required">*</span>
                    </p>
                    <div className="comment-form-rating">
                      <label>
                        Your rating
                        <span className="required">*</span>
                      </label>
                      <div className="stars">
                        <a href="#" className="star">
                          <i className="bi bi-star-fill"></i>
                        </a>
                        <a href="#" className="star">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </a>
                        <a href="#" className="star">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </a>
                        <a href="#" className="star">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </a>
                        <a href="#" className="star">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </a>
                      </div>
                    </div>
                    <div className="comment-form-comment form-comment">
                      <label htmlFor="comment">
                        Your review
                        <span className="required">*</span>
                      </label>
                      <textarea
                        id="comment-text"
                        cols="50"
                        rows="10"
                        required
                      ></textarea>
                    </div>
                    <div className="comment-form-author form-comment">
                      <label htmlFor="name">
                        Name
                        <span className="required">*</span>
                      </label>
                      <input id="comment-name" type="text" required />
                    </div>
                    <div className="comment-form-email form-comment">
                      <label htmlFor="email">
                        Email
                        <span className="required">*</span>
                      </label>
                      <input id="email" type="email" />
                    </div>
                    <div className="comment-form-cookies">
                      <input id="cookies" name="cookies" type="checkbox" />
                      <label htmlFor="cookies">
                        Save my name, email, and website in this browser for the
                        next time I comment.
                        <span className="required">*</span>
                      </label>
                    </div>
                    <div className="form-submit">
                      <input type="submit" className="btn submit" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
