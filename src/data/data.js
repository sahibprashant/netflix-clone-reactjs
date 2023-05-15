import enjoyOnTv from '../../src/assets/img/enjoyOnTv.png';
import watchEverywhere from '../../src/assets/img/watchEverywhere.png';
import netflixKids from '../../src/assets/img/netflixKids.png';
import download from '../../src/assets/img/download.png';

const data = {
    home_title: 'Unlimited movies, TV shows, and more.',
    home_descText: 'Watch anywhere. Cancel anytime.',
    email_regText: 'Ready to watch? Enter your email to create or restart your membership.',
    captchaText : "This page is protected by Google reCAPTCHA to ensure you're not a bot.",
    girdData: [
        {
            id: 0,
            image: enjoyOnTv,
            title: 'Enjoy on your TV.',
            desc: 'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
        },
        {
            id: 1,
            image: watchEverywhere,
            title: 'Watch Everywhere.',
            desc: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.',
        },
        {
            id: 2,
            image: netflixKids,
            title: 'Create Profiles for Kids.',
            desc: 'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.',
        },
        {
            id: 3,
            image: download,
            title: 'Download your Shows to Watch Offline.',
            desc: 'Only available on ad-free plans.',
        },
    ],
    faqData: [
        {
            id: 0,
            ques: 'What is Netflix?',
            ans: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.<br/><br/>You can watch as much as you want, whenever you want – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
        },
        {
            id: 1,
            ques: 'How much does Netflix cost?',
            ans: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from BRL18.90 to BRL55.90 a month. No extra costs, no contracts.',
        },
        {
            id: 2,
            ques: 'Where can I watch?',
            ans: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.<br/><br/>You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
        },
        {
            id: 3,
            ques: 'How do I cancel?',
            ans: 'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.',
        },
        {
            id: 4,
            ques: 'Is Netflix good for kids?',
            ans: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.<br/><br/>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see.",
        }
    ]
}

export default data;