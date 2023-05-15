import enjoyOnTv from '../../src/assets/img/enjoyOnTv.png';
import watchEverywhere from '../../src/assets/img/watchEverywhere.png';
import netflixKids from '../../src/assets/img/netflixKids.png';
import download from '../../src/assets/img/download.png';

const data = {
    home_title: 'Unlimited movies, TV shows, and more.',
    home_descText: 'Watch anywhere. Cancel anytime.',
    email_regText: 'Ready to watch? Enter your email to create or restart your membership.',
    girdData : [
        {
            id : 0,
            image : enjoyOnTv,
            title : 'Enjoy on your TV.',
            desc : 'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
        },
        {
            id : 1,
            image : watchEverywhere,
            title : 'Watch Everywhere.',
            desc : 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.',
        },
        {
            id : 2,
            image : netflixKids,
            title : 'Create Profiles for Kids.',
            desc : 'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.',
        },
        {
            id : 3,
            image : download,
            title : 'Download your Shows to Watch Offline.',
            desc : 'Only available on ad-free plans.',
        },
    ]
}

export default data;