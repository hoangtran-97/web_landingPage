const sections = document.querySelectorAll(".section");
const navigationBar = document.getElementById("navigation");
const navigationFragment = document.createDocumentFragment();

sections.forEach((section) => {
    const anchor = document.createElement("a");
    const anchorText = document.createTextNode(section.id);
    anchor.appendChild(anchorText);
    anchor.href = `#${section.id}`;
    anchor.id = `navigation-${section.id}`
    navigationFragment.appendChild(anchor);
})
navigationBar.appendChild(navigationFragment);
const navigationBanner = document.getElementById("navigation-banner")
const navigationInfo = document.getElementById("navigation-info")
const navigationDestinations = document.getElementById("navigation-destinations")
const navigationReview = document.getElementById("navigation-review")
const navigationContact = document.getElementById("navigation-contact")

const banner = document.getElementById("banner");
const info = document.getElementById("info");
const destinations = document.getElementById("destinations");
const review = document.getElementById("review");
const contact = document.getElementById("contact");
const dectectFocus = () => {
    //Banner
    const bannerPosition = banner.getBoundingClientRect();
    const bannerTop = bannerPosition.top;
    const bannerBottom = bannerPosition.bottom;
    const bannerVisible = (bannerTop >= 0) && (bannerBottom <= window.innerHeight);
    bannerVisible ?
        (
            navigationBanner.classList.add("navigation-visible"))
        : (
            navigationBanner.classList.remove("navigation-visible"))
    //Info
    const infoPosition = info.getBoundingClientRect();
    const infoTop = infoPosition.top;
    const infoBottom = infoPosition.bottom;
    const infoVisible = (infoTop >= 0) && (infoBottom <= window.innerHeight);
    infoVisible ?
        (
            navigationInfo.classList.add("navigation-visible"))
        : (
            navigationInfo.classList.remove("navigation-visible"))
    //Destinations
    const destinationsPosition = destinations.getBoundingClientRect();
    const destinationsTop = destinationsPosition.top;
    const destinationsBottom = destinationsPosition.bottom;
    const destinationsVisible = (destinationsTop >= 0) && (destinationsBottom <= window.innerHeight);
    destinationsVisible ?
        (
            navigationDestinations.classList.add("navigation-visible"))
        : (
            navigationDestinations.classList.remove("navigation-visible"))
    //Review
    const reviewPosition = review.getBoundingClientRect();
    const reviewTop = reviewPosition.top;
    const reviewBottom = reviewPosition.bottom;
    //Partial visible = true, content too large.
    // const reviewVisible = (reviewTop >= 0) && (reviewBottom <= window.innerHeight);
    const reviewVisible = (reviewTop < window.innerHeight) && (reviewBottom >= 0);
    reviewVisible && !destinationsVisible ?
        (
            navigationReview.classList.add("navigation-visible"))
        : (
            navigationReview.classList.remove("navigation-visible"))
    //Contact
    const contactPosition = contact.getBoundingClientRect();
    const contactTop = contactPosition.top;
    const contactBottom = contactPosition.bottom;
    const contactVisible = (contactTop >= 0) && (contactBottom <= window.innerHeight);
    contactVisible ?
        (
            navigationContact.classList.add("navigation-visible"),
            navigationReview.classList.remove("navigation-visible"))
        : (
            navigationContact.classList.remove("navigation-visible"))
}
document.addEventListener("scroll", dectectFocus)

