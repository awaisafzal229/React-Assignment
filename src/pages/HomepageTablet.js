import { useCallback } from "react";
import "./HomepageTablet.css";
const HomepageTablet = () => {
  const onNavLogo1Click = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);

  const onButtonContainer4Click = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);

  const onDiscordLogoIconClick = useCallback(() => {
    window.open("https://discord.com/invite/eQxkYTNxSp");
  }, []);

  const onYoutubeLogoIconClick = useCallback(() => {
    window.open("https://www.youtube.com/channel/UCXqr0Ca-b73rU9zcpSBJ5cw");
  }, []);

  const onTwitterLogoIconClick = useCallback(() => {
    window.open("https://twitter.com/animaapp?lang=en");
  }, []);

  const onInstagramLogoIconClick = useCallback(() => {
    window.open("https://www.instagram.com/animaapp/?hl=en");
  }, []);

  const onButtonContainer5Click = useCallback(() => {
    window.open(
      "https://www.animaapp.com/?utm_source=figma-samples&utm_campaign=figma-nftmarket&utm_medium=figma-samples"
    );
  }, []);

  return (
    <div className="homepage-tablet">
      <div className="navigation">
        <div className="nav-logo2" onClick={onNavLogo1Click}>
          <div className="nav-logo3">
            <img className="logo-icon2" alt="" src="/logo2.svg" />
          </div>
        </div>
        <div className="nav-nav-menu1">
          <img className="burger-menu1" alt="" src="/burger-menu.svg" />
        </div>
      </div>
      <div className="hero-section">
        <div className="hero-section-frame1">
          <div className="hero-text-buttons1">
            <div className="headline-subhead2">
              <div className="discover-digital-art1">{`Discover digital art & Collect NFTs`}</div>
              <div className="nft-marketplace-ui2">
                NFT marketplace UI created with Anima for Figma. Collect, buy
                and sell art from more than 20k NFT artists.
              </div>
            </div>
            <div className="button19">
              <img
                className="rocketlaunch-icon5"
                alt=""
                src="/rocketlaunch4.svg"
              />
              <div className="button20">Get Started</div>
            </div>
            <div className="additional-info14">
              <div className="total-sale2">
                <b className="k3">{`240k+ `}</b>
                <div className="total-sale3">Total Sale</div>
              </div>
              <div className="total-sale2">
                <b className="k3">100k+</b>
                <div className="total-sale3">Auctions</div>
              </div>
              <div className="total-sale2">
                <b className="k3">240k+</b>
                <div className="total-sale3">Artists</div>
              </div>
            </div>
          </div>
          <div className="highlighted-nft1">
            <div className="artist-cardhorizontal-big2">
              <div className="avatar19">
                <div className="asset-12-220">
                  <img
                    className="avatar-placeholder-icon20"
                    alt=""
                    src="/avatar-placeholder14@2x.png"
                  />
                </div>
              </div>
              <div className="additional-info15">
                <div className="dish-studio13">Dish Studio</div>
                <div className="total-sales-container">
                  <div className="total-sales9">Total Sales:</div>
                  <div className="eth14">34.53 ETH</div>
                </div>
              </div>
            </div>
            <img
              className="image-placeholder-icon14"
              alt=""
              src="/image-placeholder13@2x.png"
            />
            <div className="space-walking-container">
              <div className="dish-studio13">Space Walking</div>
              <div className="artist-card12">
                <div className="avatar19">
                  <div className="burger-menu1">
                    <img
                      className="avatar-placeholder-icon21"
                      alt=""
                      src="/avatar-placeholder12@2x.png"
                    />
                  </div>
                </div>
                <div className="total-sales9">Animakid</div>
              </div>
            </div>
            <div className="frame-parent3">
              <div className="frame-parent4">
                <div className="price-frame">
                  <div className="price8">Price:</div>
                </div>
                <div className="eth-frame">
                  <div className="eth15">1.63 ETH</div>
                </div>
              </div>
              <div className="frame-parent5">
                <div className="release-date-frame">
                  <div className="release-date2">Release Date:</div>
                </div>
                <div className="sep-2022-frame">
                  <div className="sep-20222">2 Sep 2022</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="trending-collection1">
        <div className="section-headline5">
          <div className="heading2">
            <div className="trending-collection2">Trending Collection</div>
          </div>
          <div className="subhead2">
            <div className="total-sales9">
              Checkout our weekly updated trending collection.
            </div>
          </div>
        </div>
        <div className="collection-slider1">
          <div className="collection-card2">
            <div className="photos-number-of-additional3">
              <img
                className="primary-photo-placeholder3"
                alt=""
                src="/primary-photo-placeholder1@2x.png"
              />
              <div className="secondary-photo-placeholder-parent1">
                <img
                  className="secondary-photo-placeholder6"
                  alt=""
                  src="/secondary-photo-placeholder2@2x.png"
                />
                <img
                  className="secondary-photo-placeholder6"
                  alt=""
                  src="/secondary-photo-placeholder3@2x.png"
                />
                <div className="number-of-additional-nfts3">
                  <b className="b8">1025+</b>
                </div>
              </div>
            </div>
            <div className="collection-info3">
              <div className="dish-studio13">DSGN Animals</div>
              <div className="artist-card12">
                <div className="avatar19">
                  <div className="burger-menu1">
                    <img
                      className="avatar-placeholder-icon20"
                      alt=""
                      src="/avatar-placeholder10@2x.png"
                    />
                  </div>
                </div>
                <div className="total-sales9">MrFox</div>
              </div>
            </div>
          </div>
          <div className="collection-card2">
            <div className="photos-number-of-additional3">
              <img
                className="primary-photo-placeholder3"
                alt=""
                src="/primary-photo-placeholder2@2x.png"
              />
              <div className="secondary-photo-placeholder-parent1">
                <img
                  className="secondary-photo-placeholder6"
                  alt=""
                  src="/secondary-photo-placeholder4@2x.png"
                />
                <img
                  className="secondary-photo-placeholder6"
                  alt=""
                  src="/secondary-photo-placeholder5@2x.png"
                />
                <div className="number-of-additional-nfts3">
                  <b className="b8">6+</b>
                </div>
              </div>
            </div>
            <div className="collection-info3">
              <div className="dish-studio13">Magic Mushrooms</div>
              <div className="artist-card12">
                <div className="avatar19">
                  <div className="burger-menu1">
                    <img
                      className="avatar-placeholder-icon21"
                      alt=""
                      src="/avatar-placeholder@2x.png"
                    />
                  </div>
                </div>
                <div className="total-sales9">Shroomie</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="top-rated-artists">
        <div className="section-headline-button2">
          <div className="section-headline6">
            <div className="heading2">
              <div className="trending-collection2">Top creators</div>
            </div>
            <div className="subhead2">
              <div className="total-sales9">
                Checkout Top Rated Creators on the NFT Marketplace
              </div>
            </div>
          </div>
          <div className="button21">
            <img
              className="rocketlaunch-icon5"
              alt=""
              src="/rocketlaunch5.svg"
            />
            <div className="button20">View Rankings</div>
          </div>
        </div>
        <div className="artist-cards-grid1">
          <div className="artist-cards-row3">
            <div className="artist-card15">
              <div className="artist-avatar7">
                <div className="avatar23">
                  <div className="asset-12-220">
                    <img
                      className="avatar-placeholder-icon20"
                      alt=""
                      src="/avatar-placeholder4@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="artist-info7">
                <div className="dish-studio13">Keepitreal</div>
                <div className="additional-info16">
                  <div className="total-sales9">Total Sales:</div>
                  <div className="eth14">34.53 ETH</div>
                </div>
              </div>
              <div className="ranking-number7">
                <div className="div7">1</div>
              </div>
            </div>
            <div className="artist-card15">
              <div className="artist-avatar7">
                <div className="avatar23">
                  <div className="asset-12-220">
                    <img
                      className="avatar-placeholder-icon20"
                      alt=""
                      src="/avatar-placeholder5@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="artist-info7">
                <div className="dish-studio13">DigiLab</div>
                <div className="additional-info16">
                  <div className="total-sales9">Total Sales:</div>
                  <div className="eth14">32.13 ETH</div>
                </div>
              </div>
              <div className="ranking-number7">
                <div className="div7">2</div>
              </div>
            </div>
          </div>
          <div className="artist-cards-row3">
            <div className="artist-card15">
              <div className="artist-avatar7">
                <div className="avatar23">
                  <div className="asset-12-220">
                    <img
                      className="avatar-placeholder-icon20"
                      alt=""
                      src="/avatar-placeholder6@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="artist-info7">
                <div className="dish-studio13">GravityOne</div>
                <div className="additional-info16">
                  <div className="total-sales9">Total Sales:</div>
                  <div className="eth14">28.93 ETH</div>
                </div>
              </div>
              <div className="ranking-number7">
                <div className="div7">3</div>
              </div>
            </div>
            <div className="artist-card15">
              <div className="artist-avatar7">
                <div className="avatar23">
                  <div className="asset-12-220">
                    <img
                      className="avatar-placeholder-icon20"
                      alt=""
                      src="/avatar-placeholder7@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="artist-info7">
                <div className="dish-studio13">Juanie</div>
                <div className="additional-info16">
                  <div className="total-sales9">Total Sales:</div>
                  <div className="eth14">25.30 ETH</div>
                </div>
              </div>
              <div className="ranking-number7">
                <div className="div7">4</div>
              </div>
            </div>
          </div>
          <div className="artist-cards-row3">
            <div className="artist-card15">
              <div className="artist-avatar7">
                <div className="avatar23">
                  <div className="asset-12-220">
                    <img
                      className="avatar-placeholder-icon20"
                      alt=""
                      src="/avatar-placeholder8@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="artist-info7">
                <div className="dish-studio13">BlueWhale</div>
                <div className="additional-info16">
                  <div className="total-sales9">Total Sales:</div>
                  <div className="eth14">22.22 ETH</div>
                </div>
              </div>
              <div className="ranking-number7">
                <div className="div7">5</div>
              </div>
            </div>
            <div className="artist-card15">
              <div className="artist-avatar7">
                <div className="avatar23">
                  <div className="asset-12-220">
                    <img
                      className="avatar-placeholder-icon20"
                      alt=""
                      src="/avatar-placeholder9@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="artist-info7">
                <div className="dish-studio13">Mr Fox</div>
                <div className="additional-info16">
                  <div className="total-sales9">Total Sales:</div>
                  <div className="eth14">19.28 ETH</div>
                </div>
              </div>
              <div className="ranking-number7">
                <div className="div7">6</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="browse-categories1">
        <div className="section-headline7">
          <div className="dish-studio13">Browse Categories</div>
        </div>
        <div className="category-cards-grid1">
          <div className="category-cards-row2">
            <div className="category-card8">
              <div className="photo-icon10">
                <div className="image-placeholder9">
                  <img
                    className="image-placeholder-icon15"
                    alt=""
                    src="/image-placeholder4@2x.png"
                  />
                </div>
                <div className="category-icon9">
                  <img
                    className="paintbrush-icon3"
                    alt=""
                    src="/paintbrush2.svg"
                  />
                </div>
              </div>
              <div className="category-name18">
                <div className="category-name19">Art</div>
              </div>
            </div>
            <div className="category-card8">
              <div className="photo-icon10">
                <div className="image-placeholder9">
                  <img
                    className="image-placeholder-icon15"
                    alt=""
                    src="/image-placeholder5@2x.png"
                  />
                </div>
                <div className="category-icon9">
                  <img
                    className="paintbrush-icon3"
                    alt=""
                    src="/swatches2.svg"
                  />
                </div>
              </div>
              <div className="category-name18">
                <div className="category-name19">Collectibles</div>
              </div>
            </div>
            <div className="category-card8">
              <div className="photo-icon10">
                <div className="image-placeholder9">
                  <img
                    className="image-placeholder-icon15"
                    alt=""
                    src="/image-placeholder6@2x.png"
                  />
                </div>
                <div className="category-icon9">
                  <img
                    className="paintbrush-icon3"
                    alt=""
                    src="/musicnotes1.svg"
                  />
                </div>
              </div>
              <div className="category-name18">
                <div className="category-name19">Music</div>
              </div>
            </div>
            <div className="category-card8">
              <div className="photo-icon10">
                <div className="image-placeholder9">
                  <img
                    className="image-placeholder-icon15"
                    alt=""
                    src="/image-placeholder7@2x.png"
                  />
                </div>
                <div className="category-icon9">
                  <img className="paintbrush-icon3" alt="" src="/camera1.svg" />
                </div>
              </div>
              <div className="category-name18">
                <div className="category-name19">Photography</div>
              </div>
            </div>
          </div>
          <div className="category-cards-row3">
            <div className="category-card12">
              <div className="photo-icon10">
                <div className="image-placeholder9">
                  <img
                    className="image-placeholder-icon15"
                    alt=""
                    src="/image-placeholder8@2x.png"
                  />
                </div>
                <div className="category-icon9">
                  <img
                    className="paintbrush-icon3"
                    alt=""
                    src="/videocamera1.svg"
                  />
                </div>
              </div>
              <div className="category-name18">
                <div className="category-name19">Video</div>
              </div>
            </div>
            <div className="category-card12">
              <div className="photo-icon10">
                <div className="image-placeholder9">
                  <img
                    className="image-placeholder-icon15"
                    alt=""
                    src="/image-placeholder9@2x.png"
                  />
                </div>
                <div className="category-icon9">
                  <img
                    className="paintbrush-icon3"
                    alt=""
                    src="/magicwand2.svg"
                  />
                </div>
              </div>
              <div className="category-name18">
                <div className="category-name19">Utility</div>
              </div>
            </div>
            <div className="category-card12">
              <div className="photo-icon10">
                <div className="image-placeholder9">
                  <img
                    className="image-placeholder-icon15"
                    alt=""
                    src="/image-placeholder10@2x.png"
                  />
                </div>
                <div className="category-icon9">
                  <img
                    className="paintbrush-icon3"
                    alt=""
                    src="/basketball2.svg"
                  />
                </div>
              </div>
              <div className="category-name18">
                <div className="category-name19">Sport</div>
              </div>
            </div>
            <div className="category-card8">
              <div className="photo-icon10">
                <div className="image-placeholder9">
                  <img
                    className="image-placeholder-icon15"
                    alt=""
                    src="/image-placeholder11@2x.png"
                  />
                </div>
                <div className="category-icon9">
                  <img className="paintbrush-icon3" alt="" src="/planet2.svg" />
                </div>
              </div>
              <div className="category-name18">
                <div className="category-name19">Virtual Worlds</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="discover-more-nfts1">
        <div className="section-headline-button2">
          <div className="section-headline6">
            <div className="dish-studio13">Discover More NFTs</div>
            <div className="nft-marketplace-ui2">Explore new trending NFTs</div>
          </div>
          <div className="button21">
            <img className="rocketlaunch-icon5" alt="" src="/eye.svg" />
            <div className="button20">See All</div>
          </div>
        </div>
        <div className="nft-cards-row1">
          <div className="nft-card2">
            <div className="image3">
              <img
                className="image-placeholder-icon23"
                alt=""
                src="/image-placeholder1@2x.png"
              />
            </div>
            <div className="nft-info4">
              <div className="artst-info3">
                <div className="dish-studio13">Distant Galaxy</div>
                <div className="artist-avatar-name3">
                  <div className="avatar19">
                    <div className="burger-menu1">
                      <img
                        className="avatar-placeholder-icon21"
                        alt=""
                        src="/avatar-placeholder2@2x.png"
                      />
                    </div>
                  </div>
                  <div className="total-sales9">MoonDancer</div>
                </div>
              </div>
              <div className="additional-info22">
                <div className="price9">
                  <div className="price10">Price</div>
                  <div className="eth22">1.63 ETH</div>
                </div>
                <div className="highest-bid6">
                  <div className="price10">Highest Bid</div>
                  <div className="eth22">0.33 wETH</div>
                </div>
              </div>
            </div>
          </div>
          <div className="nft-card2">
            <div className="image3">
              <img
                className="image-placeholder-icon23"
                alt=""
                src="/image-placeholder2@2x.png"
              />
            </div>
            <div className="nft-info4">
              <div className="artst-info3">
                <div className="dish-studio13">Life on Edena</div>
                <div className="artist-avatar-name3">
                  <div className="avatar19">
                    <div className="burger-menu1">
                      <img
                        className="avatar-placeholder-icon21"
                        alt=""
                        src="/avatar-placeholder3@2x.png"
                      />
                    </div>
                  </div>
                  <div className="total-sales9">NebulaKid</div>
                </div>
              </div>
              <div className="additional-info22">
                <div className="price9">
                  <div className="price10">Price</div>
                  <div className="eth22">1.63 ETH</div>
                </div>
                <div className="highest-bid6">
                  <div className="price10">Highest Bid</div>
                  <div className="eth22">0.33 wETH</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="nft-highlight">
        <div className="nft-info6">
          <div className="nft-artst-name-button-group">
            <div className="nft-artst-name-button1">
              <div className="artist-card21">
                <div className="avatar19">
                  <div className="burger-menu1">
                    <img
                      className="avatar-placeholder-icon21"
                      alt=""
                      src="/avatar-placeholder@2x.png"
                    />
                  </div>
                </div>
                <div className="dish-studio21">Shroomie</div>
              </div>
              <div className="magic-mashrooms1">Magic Mashrooms</div>
              <div className="button25">
                <img className="rocketlaunch-icon5" alt="" src="/eye.svg" />
                <div className="button20">See NFT</div>
              </div>
            </div>
            <div className="auction-timer1">
              <div className="price10">Auction ends in:</div>
              <div className="timer1">
                <div className="additional-info15">
                  <b className="b10">59</b>
                  <div className="hours3">Hours</div>
                </div>
                <b className="b11">:</b>
                <div className="additional-info15">
                  <b className="b10">59</b>
                  <div className="hours3">Minutes</div>
                </div>
                <b className="b11">:</b>
                <div className="additional-info15">
                  <b className="b10">59</b>
                  <div className="hours3">Seconds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="top-rated-artists">
        <div className="section-headline5">
          <div className="dish-studio13">How it works</div>
          <div className="nft-marketplace-ui2">Find out how to get started</div>
        </div>
        <div className="card-row1">
          <div className="info-card3">
            <img className="icon4" alt="" src="/icon4.svg" />
            <div className="card-details4">
              <div className="category-name19">Setup Your wallet</div>
              <div className="set-up-your4">
                Set up your wallet of choice. Connect it to the NFT market by
                clicking the wallet icon in the top right corner.
              </div>
            </div>
          </div>
          <div className="info-card3">
            <img className="icon4" alt="" src="/icon5.svg" />
            <div className="card-details4">
              <div className="category-name19">Create Collection</div>
              <div className="set-up-your4">
                Upload your work and setup your collection. Add a description,
                social links and floor price.
              </div>
            </div>
          </div>
          <div className="info-card3">
            <img className="icon6" alt="" src="/icon6.svg" />
            <div className="card-details4">
              <div className="category-name19">Start Earning</div>
              <div className="set-up-your4">
                Choose between auctions and fixed-price listings. Start earning
                by selling your NFTs or trading others.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="subscribe-widget1">
        <div className="subscribe-widget2">
          <img className="photo-icon18" alt="" src="/photo@2x.png" />
          <div className="headline-subhead-group">
            <div className="headline-subhead3">
              <div className="dish-studio13">Join our weekly digest</div>
              <div className="nft-marketplace-ui2">{`Get exclusive promotions & updates straight to your inbox.`}</div>
            </div>
            <div className="subscribe-widgetmobile2">
              <div className="type-form2">
                <img className="user-icon2" alt="" src="/user1.svg" />
                <div className="total-sales9">Enter Your Email Address</div>
                <img className="user-icon2" alt="" src="/eyeslash1.svg" />
              </div>
              <div className="button27" onClick={onButtonContainer4Click}>
                <img
                  className="rocketlaunch-icon5"
                  alt=""
                  src="/envelopesimple2.svg"
                />
                <div className="button20">Subscribe</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-info1">
          <div className="nft-marketplace-info1">
            <img className="logo-icon3" alt="" src="/logo3.svg" />
            <div className="headline-subhead2">
              <div className="nft-marketplace-ui3">
                NFT marketplace UI created with Anima for Figma.
              </div>
              <div className="photos-number-of-additional3">
                <div className="nft-marketplace-ui3">Join our community</div>
                <div className="icons1">
                  <img
                    className="discordlogo-icon1"
                    alt=""
                    src="/discordlogo1.svg"
                    onClick={onDiscordLogoIconClick}
                  />
                  <img
                    className="discordlogo-icon1"
                    alt=""
                    src="/youtubelogo1.svg"
                    onClick={onYoutubeLogoIconClick}
                  />
                  <img
                    className="discordlogo-icon1"
                    alt=""
                    src="/twitterlogo1.svg"
                    onClick={onTwitterLogoIconClick}
                  />
                  <img
                    className="discordlogo-icon1"
                    alt=""
                    src="/instagramlogo.svg"
                    onClick={onInstagramLogoIconClick}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="headline-subhead2">
            <b className="k3">Explore</b>
            <div className="nft-marketplace-info1">
              <div className="dish-studio21">Marketplace</div>
              <div className="dish-studio21">Rankings</div>
              <div className="dish-studio21">Connect a wallet</div>
            </div>
          </div>
          <div className="headline-subhead2">
            <b className="k3">Join our weekly digest</b>
            <div className="nft-marketplace-info1">
              <div className="nft-marketplace-ui3">{`Get exclusive promotions & updates straight to your inbox.`}</div>
              <div className="subscribe-form1">
                <div className="total-sales9">Enter your email here</div>
                <div className="button29" onClick={onButtonContainer5Click}>
                  <img
                    className="user-icon2"
                    alt=""
                    src="/envelopesimple.svg"
                  />
                  <div className="button20">Subscribe</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divider-group">
          <div className="divider1" />
          <div className="price10">Ⓒ NFT Market. Use this template freely.</div>
        </div>
      </div>
    </div>
  );
};

export default HomepageTablet;
