import React from 'react';
import LayoutMain from '../../components/core/LayoutMain';

const Home = () => {
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
                        What you were waiting for?
                      </h4>
                      <h1 className='text-contrast bold display-4'>
                        The Headphones Collection
                      </h1>
                      <p className='lead text-light pb-3'>
                        Discover our selection of the best Headphones
                      </p>
                      <a className='btn btn-primary' href='javascript:;'>
                        Shop Now{' '}
                        <i className='fas fa-chevron-right ml-2 mr-n1'></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
              <div
                className='container-fluid pt-6 pb-9 py-md-0'
                style={{ backgroundColor: 'rgb(92, 216, 217)' }}
              >
                <div className='row gap-y align-items-center'>
                  <div className='col-md-6 col-lg-6 px-0 order-md-2'>
                    <img
                      className='img-responsive ml-auto'
                      style={{ maxHeight: '620px' }}
                      src='assets/img/shop/home/app-deals.jpg'
                      alt='...'
                    />
                  </div>
                  <div className='col-md-6 col-lg-4 ml-lg-auto'>
                    <div className='text-center text-lg-left text-lg-nowrap'>
                      <h4 className='text-light font-weight-light mb-0 pb-1'>
                        Download the App
                      </h4>
                      <h1 className='text-contrast bold display-4'>
                        Shop on the Go
                      </h1>
                      <p className='lead text-light pb-3'>
                        Get the best of our store at your fingertips
                      </p>
                      <a className='btn btn-primary' href='javascript:;'>
                        Shop Now{' '}
                        <i className='fas fa-chevron-right ml-2 mr-n1'></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='swiper-slide'>
              <div
                className='container-fluid pt-6 pb-9 py-md-0'
                style={{ backgroundColor: 'rgb(240, 197, 87)' }}
              >
                <div className='row gap-y align-items-center'>
                  <div className='col-md-6 col-lg-6 px-0 order-md-2'>
                    <img
                      className='img-responsive ml-auto'
                      style={{ maxHeight: '620px' }}
                      src='assets/img/shop/home/happy-girl.jpg'
                      alt='...'
                    />
                  </div>
                  <div className='col-md-6 col-lg-4 ml-lg-auto'>
                    <div className='text-center text-lg-left text-lg-nowrap'>
                      <h4 className='text-light font-weight-light mb-0 pb-1'>
                        Enjoy your world
                      </h4>
                      <h1 className='text-contrast bold display-4'>
                        What&#39;s makes you happy
                      </h1>
                      <p className='lead text-light pb-3'>
                        We have all the products to make your life easier
                      </p>
                      <a className='btn btn-primary' href='javascript:;'>
                        Shop Now{' '}
                        <i className='fas fa-chevron-right ml-2 mr-n1'></i>
                      </a>
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
                        Get them all
                      </h4>
                      <h1 className='text-contrast bold display-4'>
                        Best performing products
                      </h1>
                      <p className='lead text-light pb-3'>
                        We have what you&#39;re looking for in all tech industry
                      </p>
                      <a className='btn btn-primary' href='javascript:;'>
                        Shop Now{' '}
                        <i className='fas fa-chevron-right ml-2 mr-n1'></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='swiper-pagination highlight-active text-md-right pr-md-6 pb-5 mb-5 mb-md-0'></div>
          <div className='swiper-button-prev rounded-circle bg-contrast shadow'>
            <i data-feather='arrow-left'></i>
          </div>
          <div className='swiper-button-next rounded-circle bg-contrast shadow'>
            <i data-feather='arrow-right'></i>
          </div>
        </div>
      </section>

      <section className='section bg-light mt-n6'>
        <div className='container bring-to-front pt-0'>
          <div className='row gap-y'>
            <div className='col-xl-8 col-lg-9'>
              <div className='shadow-box shadow-hover bg-contrast p-3 rounded h-100'>
                <p className='text-darker bold mt-0 d-flex'>
                  Weekend Deals{' '}
                  <a href='javascript:;' className='small text-muted ml-auto'>
                    View more
                  </a>
                </p>
                <div className='row no-gutters text-center'>
                  <div className='col-6 col-sm-3 d-flex flex-column pl-0 pr-2'>
                    <a href='javascript:;' className='shadow-box p-2'>
                      <img
                        src='assets/img/shop/products/earphones.jpg'
                        className='img-responsive rounded'
                        alt=''
                      />
                      <p className='mb-0 d-flex flex-wrap align-items-center'>
                        $
                        <span className='price text-darker bold ml-1 mr-auto'>
                          12.15
                        </span>{' '}
                        <span className='badge badge-danger'>25% Off</span>
                      </p>
                    </a>
                  </div>
                  <div className='col-6 col-sm-3 d-flex flex-column px-2'>
                    <a href='javascript:;' className='shadow-box p-2'>
                      <img
                        src='assets/img/shop/products/speaker.jpg'
                        className='img-responsive rounded'
                        alt=''
                      />
                      <p className='mb-0 d-flex flex-wrap align-items-center'>
                        $
                        <span className='price text-darker bold ml-1 mr-auto'>
                          1.45
                        </span>{' '}
                        <span className='badge badge-danger'>15% Off</span>
                      </p>
                    </a>
                  </div>
                  <div className='col-6 col-sm-3 d-flex flex-column px-2'>
                    <a href='javascript:;' className='shadow-box p-2'>
                      <img
                        src='assets/img/shop/products/headphone.jpg'
                        className='img-responsive rounded'
                        alt=''
                      />
                      <p className='mb-0 d-flex flex-wrap align-items-center'>
                        $
                        <span className='price text-darker bold ml-1 mr-auto'>
                          19.99
                        </span>{' '}
                        <span className='badge badge-danger'>45% Off</span>
                      </p>
                    </a>
                  </div>
                  <div className='col-6 col-sm-3 d-flex flex-column px-2'>
                    <a href='javascript:;' className='shadow-box p-2'>
                      <img
                        src='assets/img/shop/products/vrglasses.jpg'
                        className='img-responsive rounded'
                        alt=''
                      />
                      <p className='mb-0 d-flex flex-wrap align-items-center'>
                        $
                        <span className='price text-darker bold ml-1 mr-auto'>
                          29.99
                        </span>{' '}
                        <span className='badge badge-danger'>18% Off</span>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-lg-3'>
              <div className='shadow-box shadow-hover bg-contrast p-3 rounded h-100'>
                <p className='bold text-darker mt-0'>
                  Register to get the best deals
                </p>
                <p className='text-muted mb-5'>
                  By registering you accept the{' '}
                  <a href='#!'>Terms and Conditions</a> policy
                </p>
                <form className='form'>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Full Name'
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      type='email'
                      className='form-control'
                      placeholder='Email'
                    />
                  </div>
                  <div className='form-group'>
                    <button type='submit' className='btn btn-primary'>
                      Register
                    </button>
                  </div>
                </form>
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
                  <a href='#!' class='btn btn-contrast'>
                    Shop VR Glasses
                  </a>
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
                  <a href='#!' class='btn btn-contrast'>
                    Shop Monitors
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="trending-now">
            <div class="container">
                <div class="section-heading"><span class="text-primary bold">Discover</span>
                    <h3>What's Trending Now</h3>
                </div>
                <div class="row gap-y">
                    <div class="col-sm-6 col-md-4 col-lg-3 shadow-hover">
                        <div class="card product-card border-0"><a class="card-img-top d-block overflow-hidden" href="javascript:;"><img src="assets/img/shop/products/computerconnection.png" class="img-responsive mx-auto" alt="" /></a>
                            <div class="card-body"><a class="product-category text-muted font-xs" href="javascript:;">Wireless &amp; Bluetooth</a>
                                <h3 class="product-title font-sm"><a href="javascript:;" class="text-darker">Bluetooh Mouse</a></h3>
                                <div class="center-flex justify-content-between flex-wrap">
                                    <div class="product-price d-flex align-items-end">
                                        <div class="text-primary light lead"><span>$25.</span> <sup>00</sup></div><del class="text-muted light strike-through ml-2"><span>$45.</span> <sup>00</sup></del>
                                    </div>
                                    <div class="product-rating small text-alternate"><i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i></div>
                                </div>
                            </div>
                            <div class="card-body card-body-hidden"><button class="btn btn-primary btn-block mb-2" type="button"><i data-feather="shopping-cart" class="mr-1" width="16"></i>Add to Cart</button>
                                <div class="text-center"><a class="font-ms small text-muted" href="#quick-view" data-toggle="fmodal"><i data-feather="eye" class="mr-1" width="14"></i>View Product</a></div>
                            </div>
                        </div>
                        <hr class="d-sm-none" />
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3 shadow-hover">
                        <div class="card product-card border-0"><a class="card-img-top d-block overflow-hidden" href="javascript:;"><img src="assets/img/shop/products/externalharddrive.png" class="img-responsive mx-auto" alt="" /></a>
                            <div class="card-body"><a class="product-category text-muted font-xs" href="javascript:;">Computer &amp; Electronics</a>
                                <h3 class="product-title font-sm"><a href="javascript:;" class="text-darker">External Hard Drive</a></h3>
                                <div class="center-flex justify-content-between flex-wrap">
                                    <div class="product-price d-flex align-items-end">
                                        <div class="text-primary light lead"><span>$78.</span> <sup>00</sup></div>
                                    </div>
                                    <div class="product-rating small text-alternate"><i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="far fa-star"></i></div>
                                </div>
                            </div>
                            <div class="card-body card-body-hidden"><button class="btn btn-primary btn-block mb-2" type="button"><i data-feather="shopping-cart" class="mr-1" width="16"></i>Add to Cart</button>
                                <div class="text-center"><a class="font-ms small text-muted" href="#quick-view" data-toggle="modal"><i data-feather="eye" class="mr-1" width="14"></i>View Product</a></div>
                            </div>
                        </div>
                        <hr class="d-sm-none" />
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3 shadow-hover">
                        <div class="card product-card border-0"><a class="card-img-top d-block overflow-hidden" href="javascript:;"><img src="assets/img/shop/products/modernspeakers.jpg" class="img-responsive mx-auto" alt="" /></a>
                            <div class="card-body"><a class="product-category text-muted font-xs" href="javascript:;">Speakers</a>
                                <h3 class="product-title font-sm"><a href="javascript:;" class="text-darker">Modern Speakers</a></h3>
                                <div class="center-flex justify-content-between flex-wrap">
                                    <div class="product-price d-flex align-items-end">
                                        <div class="text-primary light lead"><span>$124.</span> <sup>00</sup></div><del class="text-muted light strike-through ml-2"><span>$154.</span> <sup>00</sup></del>
                                    </div>
                                    <div class="product-rating small text-alternate"><i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="far fa-star"></i> <i class="far fa-star"></i></div>
                                </div>
                            </div>
                            <div class="card-body card-body-hidden"><button class="btn btn-primary btn-block mb-2" type="button"><i data-feather="shopping-cart" class="mr-1" width="16"></i>Add to Cart</button>
                                <div class="text-center"><a class="font-ms small text-muted" href="#quick-view" data-toggle="modal"><i data-feather="eye" class="mr-1" width="14"></i>View Product</a></div>
                            </div>
                        </div>
                        <hr class="d-sm-none" />
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3 shadow-hover">
                        <div class="card product-card border-0"><a class="card-img-top d-block overflow-hidden" href="javascript:;"><img src="assets/img/shop/products/vrglassesdual.png" class="img-responsive mx-auto" alt="" /></a>
                            <div class="card-body"><a class="product-category text-muted font-xs" href="javascript:;">Virtual Reality</a>
                                <h3 class="product-title font-sm"><a href="javascript:;" class="text-darker">Virtual Reality Glasses</a></h3>
                                <div class="center-flex justify-content-between flex-wrap">
                                    <div class="product-price d-flex align-items-end">
                                        <div class="text-primary light lead"><span>$145.</span> <sup>00</sup></div>
                                    </div>
                                    <div class="product-rating small text-alternate"><i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i></div>
                                </div>
                            </div>
                            <div class="card-body card-body-hidden"><button class="btn btn-primary btn-block mb-2" type="button"><i data-feather="shopping-cart" class="mr-1" width="16"></i>Add to Cart</button>
                                <div class="text-center"><a class="font-ms small text-muted" href="#quick-view" data-toggle="modal"><i data-feather="eye" class="mr-1" width="14"></i>View Product</a></div>
                            </div>
                        </div>
                        <hr class="d-sm-none" />
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3 shadow-hover">
                        <div class="card product-card border-0"><a class="card-img-top d-block overflow-hidden" href="javascript:;"><img src="assets/img/shop/products/dualshock.png" class="img-responsive mx-auto" alt="" /></a>
                            <div class="card-body"><a class="product-category text-muted font-xs" href="javascript:;">Gaming &amp; Consoles</a>
                                <h3 class="product-title font-sm"><a href="javascript:;" class="text-darker">Dual Shock Controller</a></h3>
                                <div class="center-flex justify-content-between flex-wrap">
                                    <div class="product-price d-flex align-items-end">
                                        <div class="text-primary light lead"><span>$87.</span> <sup>00</sup></div><del class="text-muted light strike-through ml-2"><span>$54.</span> <sup>00</sup></del>
                                    </div>
                                    <div class="product-rating small text-alternate"><i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i></div>
                                </div>
                            </div>
                            <div class="card-body card-body-hidden"><button class="btn btn-primary btn-block mb-2" type="button"><i data-feather="shopping-cart" class="mr-1" width="16"></i>Add to Cart</button>
                                <div class="text-center"><a class="font-ms small text-muted" href="#quick-view" data-toggle="modal"><i data-feather="eye" class="mr-1" width="14"></i>View Product</a></div>
                            </div>
                        </div>
                        <hr class="d-sm-none" />
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3 shadow-hover">
                        <div class="card product-card border-0"><a class="card-img-top d-block overflow-hidden" href="javascript:;"><img src="assets/img/shop/products/wiredmouse.png" class="img-responsive mx-auto" alt="" /></a>
                            <div class="card-body"><a class="product-category text-muted font-xs" href="javascript:;">Computer &amp; Electronics</a>
                                <h3 class="product-title font-sm"><a href="javascript:;" class="text-darker">Wired Classic Mouse</a></h3>
                                <div class="center-flex justify-content-between flex-wrap">
                                    <div class="product-price d-flex align-items-end">
                                        <div class="text-primary light lead"><span>$12.</span> <sup>00</sup></div>
                                    </div>
                                    <div class="product-rating small text-alternate"><i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="far fa-star"></i></div>
                                </div>
                            </div>
                            <div class="card-body card-body-hidden"><button class="btn btn-primary btn-block mb-2" type="button"><i data-feather="shopping-cart" class="mr-1" width="16"></i>Add to Cart</button>
                                <div class="text-center"><a class="font-ms small text-muted" href="#quick-view" data-toggle="modal"><i data-feather="eye" class="mr-1" width="14"></i>View Product</a></div>
                            </div>
                        </div>
                        <hr class="d-sm-none" />
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3 shadow-hover">
                        <div class="card product-card border-0"><a class="card-img-top d-block overflow-hidden" href="javascript:;"><img src="assets/img/shop/products/audioclassicmic.png" class="img-responsive mx-auto" alt="" /></a>
                            <div class="card-body"><a class="product-category text-muted font-xs" href="javascript:;">Professional Audio</a>
                                <h3 class="product-title font-sm"><a href="javascript:;" class="text-darker">Classic Microphone</a></h3>
                                <div class="center-flex justify-content-between flex-wrap">
                                    <div class="product-price d-flex align-items-end">
                                        <div class="text-primary light lead"><span>$25.</span> <sup>00</sup></div><del class="text-muted light strike-through ml-2"><span>$54.</span> <sup>00</sup></del>
                                    </div>
                                    <div class="product-rating small text-alternate"><i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="far fa-star"></i></div>
                                </div>
                            </div>
                            <div class="card-body card-body-hidden"><button class="btn btn-primary btn-block mb-2" type="button"><i data-feather="shopping-cart" class="mr-1" width="16"></i>Add to Cart</button>
                                <div class="text-center"><a class="font-ms small text-muted" href="#quick-view" data-toggle="modal"><i data-feather="eye" class="mr-1" width="14"></i>View Product</a></div>
                            </div>
                        </div>
                        <hr class="d-sm-none" />
                    </div>
                    <div class="col-sm-6 col-md-4 col-lg-3 shadow-hover">
                        <div class="card product-card border-0"><a class="card-img-top d-block overflow-hidden" href="javascript:;"><img src="assets/img/shop/products/wireless-headphones.png" class="img-responsive mx-auto" alt="" /></a>
                            <div class="card-body"><a class="product-category text-muted font-xs" href="javascript:;">Wireless &amp; Bluetooth</a>
                                <h3 class="product-title font-sm"><a href="javascript:;" class="text-darker">Wireless Headphones</a></h3>
                                <div class="center-flex justify-content-between flex-wrap">
                                    <div class="product-price d-flex align-items-end">
                                        <div class="text-primary light lead"><span>$45.</span> <sup>00</sup></div>
                                    </div>
                                    <div class="product-rating small text-alternate"><i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i></div>
                                </div>
                            </div>
                            <div class="card-body card-body-hidden"><button class="btn btn-primary btn-block mb-2" type="button"><i data-feather="shopping-cart" class="mr-1" width="16"></i>Add to Cart</button>
                                <div class="text-center"><a class="font-ms small text-muted" href="#quick-view" data-toggle="modal"><i data-feather="eye" class="mr-1" width="14"></i>View Product</a></div>
                            </div>
                        </div>
                        <hr class="d-sm-none" />
                    </div>
                </div>
                <div class="text-center pt-3 mt-5"><a class="btn btn-outline-primary" href="javascript:;">More products <i class="fas fa-chevron-right ml-1"></i></a></div>
            </div>
        </section>
        <section class="bg-light edge bottom-right">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6 text-center">
                        <h2 class="mb-3">35% Off on Tech Gadgets</h2><a href="javascript:;" class="btn btn-lg btn-primary">Shop Now</a>
                    </div>
                    <div class="col-md-6">
                        <p class="mt-0 text-muted">All popular technology gadgets are up to 35% off. Shop now for your favorites tablets, smartphones, watches and more"</p>
                        <nav class="nav"><a href="javascript:;" class="nav-link nav-item dotted px-0 mx-2 ml-0">Tablets</a> <a href="javascript:;" class="nav-link nav-item dotted px-0 mx-2">Smartphones</a> <a href="javascript:;" class="nav-link nav-item dotted px-0 mx-2">Watches</a></nav>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container bring-to-front">
                <div class="row gap-y">
                    <div class="col-lg-3 promo-column">
                        <div class="rounded promo-block zoom-background">
                            <div class="absolute top right bottom left image-background cover overlay overlay-dark alpha-1 w-100 h-100" style={{backgroundImage: "url(assets/img/shop/products/wearable.jpg)"}}></div>
                            <div class="content position-relative p-4">
                                <h4 class="text-contrast mt-0">Wearable</h4>
                                <p class="text-light mt-0">Smart electronic devices for your day to day life.</p><a href="javascript:;" class="btn btn-contrast">Shop Wearable</a>
                            </div>
                        </div>
                        <div class="rounded promo-block zoom-background mt-4">
                            <div class="absolute top right bottom left image-background cover overlay overlay-dark alpha-1 w-100 h-100" style={{backgroundImage: "url(assets/img/shop/products/innovative.jpg)"}}></div>
                            <div class="content position-relative p-4">
                                <h4 class="text-contrast mt-0">Innovative</h4>
                                <p class="text-light mt-0">Make your life easeier with these smart solutions.</p><a href="javascript:;" class="btn btn-contrast">Shop Innovative</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 promo-column">
                        <div class="rounded promo-block zoom-background">
                            <div class="absolute top right bottom left image-background cover overlay overlay-light alpha-3 w-100 h-100" style={{backgroundImage: "url(assets/img/shop/products/smartphone.jpg)"}}></div>
                            <div class="content position-relative p-4">
                                <h4 class="text-darker mt-0">Smartphones</h4>
                                <p class="text-dark mt-0">Your personal smartphone are just one click away.</p><a href="javascript:;" class="btn btn-contrast">Shop Smartphones</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 promo-column">
                        <div class="rounded promo-block zoom-background">
                            <div class="absolute top right bottom left image-background cover overlay overlay-light alpha-3 w-100 h-100" style={{backgroundImage: "url(assets/img/shop/products/wifi.jpg)"}}></div>
                            <div class="content position-relative p-4">
                                <h4 class="text-darker mt-0">Wifi</h4>
                                <p class="text-dark mt-0">Exclusive high quality wifi technology to extend your network.</p><a href="javascript:;" class="btn btn-contrast">Shop Wifi</a>
                            </div>
                        </div>
                        <div class="rounded promo-block zoom-background mt-4">
                            <div class="absolute top right bottom left image-background cover overlay overlay-dark alpha-1 w-100 h-100" style={{backgroundImage: "url(assets/img/shop/products/headphones-yellow-bg.jpg)"}}></div>
                            <div class="content position-relative p-4">
                                <h4 class="text-contrast mt-0">Headphones</h4>
                                <p class="text-light mt-0">Enjoy your favorite playlist with an amazing sound quality.</p><a href="javascript:;" class="btn btn-contrast">Shop Headphones</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="brands">
            <div class="container">
                <div class="section-heading"><span class="text-primary bold">Brands</span>
                    <h3>Our Brands</h3>
                </div>
                <div class="row gap-y">
                    <div class="col-6 col-sm-4 col-md-3">
                        <div class="card border-0 shadow-sm shadow-hover lift-hover">
                            <div class="card-body py-4"><a href="#"><img class="d-block mx-auto" style={{maxHeight: "64px"}} src="assets/img/shop/brands/1.svg" alt="" /></a></div>
                        </div>
                    </div>
                    <div class="col-6 col-sm-4 col-md-3">
                        <div class="card border-0 shadow-sm shadow-hover lift-hover">
                            <div class="card-body py-4"><a href="#"><img class="d-block mx-auto" style={{maxHeight: "64px"}} src="assets/img/shop/brands/2.svg" alt="" /></a></div>
                        </div>
                    </div>
                    <div class="col-6 col-sm-4 col-md-3">
                        <div class="card border-0 shadow-sm shadow-hover lift-hover">
                            <div class="card-body py-4"><a href="#"><img class="d-block mx-auto" style={{maxHeight: "64px"}} src="assets/img/shop/brands/3.svg" alt="" /></a></div>
                        </div>
                    </div>
                    <div class="col-6 col-sm-4 col-md-3">
                        <div class="card border-0 shadow-sm shadow-hover lift-hover">
                            <div class="card-body py-4"><a href="#"><img class="d-block mx-auto" style={{maxHeight: "64px"}} src="assets/img/shop/brands/4.svg" alt="" /></a></div>
                        </div>
                    </div>
                    <div class="col-6 col-sm-4 col-md-3">
                        <div class="card border-0 shadow-sm shadow-hover lift-hover">
                            <div class="card-body py-4"><a href="#"><img class="d-block mx-auto" style={{maxHeight: "64px"}} src="assets/img/shop/brands/5.svg" alt="" /></a></div>
                        </div>
                    </div>
                    <div class="col-6 col-sm-4 col-md-3">
                        <div class="card border-0 shadow-sm shadow-hover lift-hover">
                            <div class="card-body py-4"><a href="#"><img class="d-block mx-auto" style={{maxHeight: "64px"}} src="assets/img/shop/brands/6.svg" alt="" /></a></div>
                        </div>
                    </div>
                    <div class="col-6 col-sm-4 col-md-3">
                        <div class="card border-0 shadow-sm shadow-hover lift-hover">
                            <div class="card-body py-4"><a href="#"><img class="d-block mx-auto" style={{maxHeight: "64px"}} src="assets/img/shop/brands/7.svg" alt="" /></a></div>
                        </div>
                    </div>
                    <div class="col-6 col-sm-4 col-md-3">
                        <div class="card border-0 shadow-sm shadow-hover lift-hover">
                            <div class="card-body py-4"><a href="#"><img class="d-block mx-auto" style={{maxHeight: "64px"}} src="assets/img/shop/brands/8.svg" alt="" /></a></div>
                        </div>
                    </div>
                    <div class="col-6 col-sm-4 col-md-3">
                        <div class="card border-0 shadow-sm shadow-hover lift-hover">
                            <div class="card-body py-4"><a href="#"><img class="d-block mx-auto" style={{maxHeight: "64px"}} src="assets/img/shop/brands/9.svg" alt="" /></a></div>
                        </div>
                    </div>
                    <div class="col-6 col-sm-4 col-md-3">
                        <div class="card border-0 shadow-sm shadow-hover lift-hover">
                            <div class="card-body py-4"><a href="#"><img class="d-block mx-auto" style={{maxHeight: "64px"}} src="assets/img/shop/brands/10.svg" alt="" /></a></div>
                        </div>
                    </div>
                    <div class="col-6 col-sm-4 col-md-3">
                        <div class="card border-0 shadow-sm shadow-hover lift-hover">
                            <div class="card-body py-4"><a href="#"><img class="d-block mx-auto" style={{maxHeight: "64px"}} src="assets/img/shop/brands/11.svg" alt="" /></a></div>
                        </div>
                    </div>
                    <div class="col-6 col-sm-4 col-md-3">
                        <div class="card border-0 shadow-sm shadow-hover lift-hover">
                            <div class="card-body py-4"><a href="#"><img class="d-block mx-auto" style={{maxHeight: "64px"}} src="assets/img/shop/brands/12.svg" alt="" /></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </LayoutMain>
  );
};

export default Home;
