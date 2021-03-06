import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LayoutMain from '../../components/core/LayoutMain';
import RegisterForm from '../../components/auth/RegisterForm';
import ProductCard from '../../components/core/ProductCard';

import { getProducts, getCategories } from '../../api/admin';
import DealsCard from '../../components/core/DealsCard';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState('');

  const loadProducts = () => {
    getProducts().then(data => {
      console.log(data.data);
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data.data);
      }
    });
  };

  const loadCategories = () => {
    getCategories().then(data => {
      console.log(data);
      if (data.error) {
        setError(data.error);
      } else {
        setCategories(data.data);
      }
    });
  };

  useEffect(() => {
    loadProducts();
    loadCategories();
  }, []);

  return (
    <LayoutMain>
      <section className='section'>
        <div
          className='swiper-container shop-home-slider'
          data-sw-effect='fade'
        >
          <div className='swiper-wrapper'>
            <div className='swiper-slide'>
              <div
                className='container-fluid pt-6 pb-9 py-md-0'
                style={{ backgroundColor: 'rgb(0, 157, 206)' }}
              >
                <div className='row gap-y align-items-center'>
                  <div className='col-md-6 col-lg-6 px-0 order-md-2'>
                    <img
                      className='img-responsive ml-auto'
                      style={{ maxHeight: '620px' }}
                      src='assets/img/shop/home/blue-headphones.jpg'
                      alt='...'
                    />
                  </div>
                  <div className='col-md-6 col-lg-4 ml-lg-auto'>
                    <div className='text-center text-lg-left text-lg-nowrap'>
                      <h4 className='text-light font-weight-light mb-0 pb-1'>
                        Fast and Scalable
                      </h4>
                      <h1 className='text-contrast bold display-4'>
                        Ecom-One Boilerplate
                      </h1>
                      <p className='lead text-light pb-3'>
                        Build with MERN Stack
                      </p>
                      <Link className='btn btn-primary' to='/shop'>
                        Shop Now
                        <i className='fas fa-chevron-right ml-2 mr-n1'></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='swiper-slide'>
              <div
                className='container-fluid pt-6 pb-9 py-md-0'
                style={{ backgroundColor: 'rgb(226, 162, 113)' }}
              >
                <div className='row gap-y align-items-center'>
                  <div className='col-md-6 col-lg-6 px-0 order-md-2'>
                    <img
                      className='img-responsive ml-auto'
                      style={{ maxHeight: '620px' }}
                      src='assets/img/shop/home/enjoy.jpg'
                      alt='...'
                    />
                  </div>
                  <div className='col-md-6 col-lg-4 ml-lg-auto'>
                    <div className='text-center text-lg-left text-lg-nowrap'>
                      <h4 className='text-light font-weight-light mb-0 pb-1'>
                        Get it for free
                      </h4>
                      <h1 className='text-contrast bold display-4'>
                        It's Open-Source
                      </h1>
                      <p className='lead text-light pb-3'>
                        Ecom-One is available on GitHub
                      </p>
                      <Link className='btn btn-primary' to='/shop'>
                        Shop Now
                        <i className='fas fa-chevron-right ml-2 mr-n1'></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='swiper-pagination highlight-active text-md-right pr-md-6 pb-5 mb-5 mb-md-0'></div>
        </div>
      </section>

      <section className='section bg-light mt-n6'>
        <div className='container bring-to-front pt-0'>
          <div className='row gap-y'>
            <div className='col-xl-8 col-lg-9'>
              <div className='shadow-box shadow-hover bg-contrast p-3 rounded h-100'>
                <p className='text-darker bold mt-0 d-flex'>
                  Weekend Deals
                  <Link to='/shop' className='small text-muted ml-auto'>
                    View more
                  </Link>
                </p>
                <div className='row no-gutters text-center'>
                  {products.slice(0, 4).map((product, i) => (
                    <DealsCard key={i} product={product} />
                  ))}
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-lg-3'>
              <div className='shadow-box shadow-hover bg-contrast p-3 rounded h-100'>
                <p className='bold text-darker mt-0'>
                  Register to get the best deals
                </p>
                <p className='text-muted mb-5'>
                  By registering you accept the
                  <a href='#'>Terms and Conditions</a> policy
                </p>
                <RegisterForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class='section bg-light border-bottom'>
        <div class='container pt-0'>
          <div class='row gap-y'>
            <div class='col-md-6'>
              <div
                class='rounded bg-info shadow image-background off-left-background lift-hover p-4 pl-6 pl-md-9'
                style={{
                  backgroundImage: 'url(assets/img/shop/products/vrglasses.png)'
                }}
              >
                <div class='pl-lg-3'>
                  <h3 class='bold text-contrast mt-0'>VR Glasses</h3>
                  <p class='text-light mt-0'>
                    Discover what&#39;s new on Virtual Reality
                  </p>
                  <Link
                    to='/category/5df55d90e2704120ea9f44e5'
                    class='btn btn-contrast'
                  >
                    Shop VR Glasses
                  </Link>
                </div>
              </div>
            </div>
            <div class='col-md-6'>
              <div
                class='rounded bg-primary shadow image-background off-left-background lift-hover p-4 pl-6 pl-md-9'
                style={{
                  backgroundImage: 'url(assets/img/shop/products/monitor.png)'
                }}
              >
                <div class='pl-lg-3'>
                  <h3 class='bold text-contrast mt-0'>Monitors</h3>
                  <p class='text-light mt-0'>$30 Off on selected monitors</p>
                  <Link
                    to='/category/5df55d9be2704120ea9f44e6'
                    class='btn btn-contrast'
                  >
                    Shop Monitors
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class='trending-now'>
        <div class='container'>
          <div class='section-heading'>
            <span class='text-primary bold'>Discover</span>
            <h3>What's Trending Now</h3>
          </div>
          <div class='row gap-y'>
            {products.slice(0, 8).map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </div>
          <div class='text-center pt-3 mt-5'>
            <Link class='btn btn-outline-primary' to='/shop'>
              More products <i class='fas fa-chevron-right ml-1'></i>
            </Link>
          </div>
        </div>
      </section>
      <section class='bg-light edge bottom-right'>
        <div class='container'>
          <div class='row align-items-center'>
            <div class='col-md-6 text-center'>
              <h2 class='mb-3'>35% Off on Tech Gadgets</h2>
              <Link to='/shop' class='btn btn-lg btn-primary my-3'>
                Shop Now
              </Link>
            </div>
            <div class='col-md-6'>
              <p class='mt-0 text-muted'>
                All popular technology gadgets are up to 35% off. Shop now for
                your favorites tablets, smartphones, watches and more"
              </p>
              <nav class='nav'>
                <Link
                  to='/category/5df55e5ce2704120ea9f44ec'
                  class='nav-link nav-item dotted px-0 mx-2 ml-0'
                >
                  Tablets
                </Link>
                <Link
                  to='/category/5df55db4e2704120ea9f44e9'
                  class='nav-link nav-item dotted px-0 mx-2'
                >
                  Smartphones
                </Link>
                <Link
                  to='/category/5df55da7e2704120ea9f44e7'
                  class='nav-link nav-item dotted px-0 mx-2'
                >
                  Watches
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section class='section'>
        <div class='container bring-to-front'>
          <div class='row gap-y'>
            <div class='col-lg-3 promo-column'>
              <div class='rounded promo-block zoom-background'>
                <div
                  class='absolute top right bottom left image-background cover overlay overlay-dark alpha-1 w-100 h-100'
                  style={{
                    backgroundImage:
                      'url(assets/img/shop/products/wearable.jpg)'
                  }}
                ></div>
                <div class='content position-relative p-4'>
                  <h4 class='text-contrast mt-0'>Wearable</h4>
                  <p class='text-light mt-0'>
                    Smart electronic devices for your day to day life.
                  </p>
                  <Link
                    to='/category/5df55da7e2704120ea9f44e7'
                    class='btn btn-contrast'
                  >
                    Shop Wearable
                  </Link>
                </div>
              </div>
              <div class='rounded promo-block zoom-background mt-4'>
                <div
                  class='absolute top right bottom left image-background cover overlay overlay-dark alpha-1 w-100 h-100'
                  style={{
                    backgroundImage:
                      'url(assets/img/shop/products/innovative.jpg)'
                  }}
                ></div>
                <div class='content position-relative p-4'>
                  <h4 class='text-contrast mt-0'>Innovative</h4>
                  <p class='text-light mt-0'>
                    Make your life easeier with these smart solutions.
                  </p>
                  <Link
                    to='/category/5df55daee2704120ea9f44e8'
                    class='btn btn-contrast'
                  >
                    Shop Innovative
                  </Link>
                </div>
              </div>
            </div>
            <div class='col-lg-6 promo-column'>
              <div class='rounded promo-block zoom-background'>
                <div
                  class='absolute top right bottom left image-background cover overlay overlay-light alpha-3 w-100 h-100'
                  style={{
                    backgroundImage:
                      'url(assets/img/shop/products/smartphone.jpg)'
                  }}
                ></div>
                <div class='content position-relative p-4'>
                  <h4 class='text-darker mt-0'>Smartphones</h4>
                  <p class='text-dark mt-0'>
                    Your personal smartphone are just one click away.
                  </p>
                  <Link
                    to='/category/5df55db4e2704120ea9f44e9'
                    class='btn btn-contrast'
                  >
                    Shop Smartphones
                  </Link>
                </div>
              </div>
            </div>
            <div class='col-lg-3 promo-column'>
              <div class='rounded promo-block zoom-background'>
                <div
                  class='absolute top right bottom left image-background cover overlay overlay-light alpha-3 w-100 h-100'
                  style={{
                    backgroundImage: 'url(assets/img/shop/products/wifi.jpg)'
                  }}
                ></div>
                <div class='content position-relative p-4'>
                  <h4 class='text-darker mt-0'>Wifi</h4>
                  <p class='text-dark mt-0'>
                    Exclusive high quality wifi technology to extend your
                    network.
                  </p>
                  <Link
                    to='/category/5df55dbce2704120ea9f44ea'
                    class='btn btn-contrast'
                  >
                    Shop Wifi
                  </Link>
                </div>
              </div>
              <div class='rounded promo-block zoom-background mt-4'>
                <div
                  class='absolute top right bottom left image-background cover overlay overlay-dark alpha-1 w-100 h-100'
                  style={{
                    backgroundImage:
                      'url(assets/img/shop/products/headphones-yellow-bg.jpg)'
                  }}
                ></div>
                <div class='content position-relative p-4'>
                  <h4 class='text-contrast mt-0'>Headphones</h4>
                  <p class='text-light mt-0'>
                    Enjoy your favorite playlist with an amazing sound quality.
                  </p>
                  <Link
                    to='/category/5df55dc3e2704120ea9f44eb'
                    class='btn btn-contrast'
                  >
                    Shop Headphones
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class='brands'>
        <div class='container'>
          <div class='section-heading'>
            <span class='text-primary bold'>Categories</span>
            <h3>Our Categories</h3>
          </div>
          <div class='row gap-y'>
            {categories.map((c, i) => (
              <div class='col-6 col-sm-4 col-md-3'>
                <div class='card border-0 shadow-sm shadow-hover lift-hover'>
                  <div class='card-body py-4 text-center'>
                    <Link to={`/category/${c._id}`}>{c.name}</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        class='section gradient overlay alpha-8 gradient-purple-blue image-background cover text-contrast block bg-contrast'
        style={{
          backgroundImage:
            'url(https://picsum.photos/350/200/?random&gravity=south)'
        }}
      >
        <div class='container py-5 py-4'>
          <div class='row align-items-center'>
            <div class='col-md-6'>
              <h2 class='text-contrast'>
                Looking for an ideal Ecommerce
                <span class='bold'> template?</span>
              </h2>
              <p class='op-8'>
                With <span class='bold'>Ecom-One</span> you will have the ideal
                Solution for a fast-working Online Shop.
              </p>
            </div>
            <div class='col-md-4 ml-md-auto'>
              <p class='handwritten highlight font-md mb-4'>It's free</p>
              <a
                href='https://github.com/cl0udsurfer/ecom-one'
                class='btn btn-contrast btn-rounded ml-3'
              >
                Try it out
              </a>
            </div>
          </div>
        </div>
      </section>
    </LayoutMain>
  );
};

export default Home;
