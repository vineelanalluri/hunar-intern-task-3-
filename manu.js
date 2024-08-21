document.getElementById('searchIcon').addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput.style.display === 'none' || searchInput.style.display === '') {
        searchInput.style.display = 'block';
    } else {
        searchInput.style.display = 'none';
    }
});
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});
const movieGrid = document.getElementById('movieGrid');
const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');
leftBtn.addEventListener('click', () => {
    movieGrid.scrollBy({
        left: -200,
        behavior: 'smooth'
    });
});
rightBtn.addEventListener('click', () => {
    movieGrid.scrollBy({
        left: 200,
        behavior: 'smooth'
    });
});
const trailerModal = document.getElementById('trailerModal');
const trailerContainer = document.getElementById('trailerContainer');
const description = document.getElementById('description');
const span = document.getElementsByClassName('close')[0];
span.onclick = function() {
    trailerModal.style.display = 'none';
    trailerContainer.innerHTML = '';
    description.innerHTML = '';
}
window.onclick = function(event) {
    if (event.target == trailerModal) {
        trailerModal.style.display = 'none';
        trailerContainer.innerHTML = '';
        description.innerHTML = '';
    }
}
const mediaData = [
    {
        type: 'movie',
        title: 'Kalki 2898AD',
        img: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202307/f1zcm0paqaamjnp-three_four.jpg?VersionId=Seoj.amE4_xHpItwOnBGbnCeqYS20_fA',
        trailer: 'https://youtu.be/BfCIPsEGAS8',
        description: 'Kalki 2898 AD is a 2024 Indian Telugu-language epic science fiction film directed by Nag Ashwin and produced by Vyjayanthi Movies.'
    },
    {
        type: 'movie',
        title: 'jersey',
        img: 'https://moviegalleri.net/wp-content/gallery/jersey-movie-posters-hd/jersey-movie-posters-hd-nani-shraddha-srinath-50f38ef.jpg',
        trailer: 'https://youtu.be/Rl6T0bM94Qs?si=Ccc8wXnv3egCYL49',
        description:'Jersey is a 2019 Indian Telugu-language sports drama film written and directed by Gowtam Tinnanuri and produced by Suryadevara Naga Vamsi under Sithara Entertainments. It stars Nani and Shraddha Srinath with Ronit Kamra, Sathyaraj, Harish Kalyan, Sanusha, Sampath Raj and Viswant Duddumpudi in pivotal roles.'
    },
    {
        type: 'movie',
        title: 'nenu local',
        img: 'data:image/jpeg;base64,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',
        trailer: 'https://youtu.be/lylc7eY6yRU?si=YDS4izyWGTfmgfC4',
        description: 'Nenu Local  is a 2017 Indian Telugu-language romantic comedy film[2] directed by Trinadha Rao Nakkina from a story written by Prasanna Kumar Bezawada. Produced by Dil Raju under banner Sri Venkateswara Creations, the film stars Nani, Keerthy Suresh and Naveen Chandra. The soundtrack and background score was composed by Devi Sri Prasad'
    },
    {
        type: 'movie',
        title: 'ROBO',
        img: 'https://www.cinejosh.com/gallereys/movies/normal/robo_movie_wallpapers/robo_movie_wallpapers_006.jpg',
        trailer: 'https://youtu.be/1jgNECZtv5Q?si=GjzNRXETtzrlxJ3N',
        description: ' Robot is a 2010 Indian Tamil-language science fiction action film co-written and directed by S. Shankar.[13] It is the first installment in the Enthiran film series. The film stars Rajinikanth, who plays a dual role as a scientist and the robot alongside Aishwarya Rai Bachchan in the lead roles with Danny Denzongpa, Santhanam and Karunas in supporting roles.'
    },
    {
        type: 'movie',
        title: 'K.G.F',
        img: 'https://m.media-amazon.com/images/I/71pfv4zVnCL.jpg',
        trailer: 'https://youtu.be/fnGW4iQzVLw?si=FIzC-GBPd8V9tpuI',
        description: 'KGF: Chapter 1 is a 2018 Indian Kannada-language period action film[5] written and directed by Prashanth Neel, and produced by Vijay Kiragandur under the banner of Hombale Films.'
    },
    {
        type: 'movie',
        title: 'Baahubali',
        img: 'https://c8.alamy.com/comp/2JE359T/prabhas-poster-baahubali-the-beginning-2015-2JE359T.jpg',
        trailer: 'https://www.youtube.com/embed/trailer6',
        description: 'Baahubali: The Beginning is a 2015 Indian Telugu-language epic action film co-written and directed by S. S. Rajamouli, and produced by Shobu Yarlagadda and Prasad Devineni under Arka Media Works. The film was produced in Tollywood and was filmed in both Telugu and Tamil languages simultaneously. It features Prabhas in a dual role alongside Rana Daggubati, Anushka Shetty, Tamannaah Bhatia, Ramya Krishna, Sathyaraj, and Nassar.'
    },
    {
        type: 'movie',
        title: 'BHARATHIYUDU',
        img: 'https://vintagestore.in/cdn/shop/products/IMG_E3014_2048x.jpg?v=1678054236',
        trailer: 'https://youtu.be/O3eBtbrjvgM?si=TBG11j-hoa3hQv9R',
        description: 'Indian is a 1996 Indian Tamil-language vigilante action film directed and co-written by S. Shankar. The film stars Kamal Haasan in a dual role, Manisha Koirala, Urmila Matondkar and Sukanya, with Nedumudi Venu, Manorama, Goundamani, Senthil, Kasthuri, Nizhalgal Ravi and Ajay Rathnam in supporting roles.'
    },
    {
        type: 'movie',
        title: 'vikramarkudu',
        img: 'https://image.tmdb.org/t/p/original/uE13nNFFiRKtGKnk9bE86Y3A7Xg.jpg',
        trailer: 'https://youtu.be/zkKGloHo-kI?si=658kER2HODBNinef',
        description: 'Vikramarkudu is a 2006 Indian Telugu-language action film co-written & directed by S. S. Rajamouli from a story written by V. Vijayendra Prasad & dialogues written by M. Rathnam'
    },
    {
        type: 'movie',
        title: 'venky',
        img: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/venky-et00381238-1703577039.jpg',
        trailer: 'https://youtu.be/pcpuYeqwloY?si=cMcbifnM04Gs845O',
        description: ''
    },
    {
        type: 'movie',
        title: 'krushnarjuna yudham',
        img: 'https://upload.wikimedia.org/wikipedia/en/e/ea/Krishnarjuna_Yudham_poster.jpg',
        trailer: 'https://youtu.be/JwB_qfwFXZY?si=UQY4dJpsAfDyhNVi',
        description: 'Krishnarjuna Yudham (transl. War of Krishna and Arjuna) is a 2018 Indian Telugu-language action comedy film written and directed by Merlapaka Gandhi and produced by Sahu Garapati & Harish Peddi under Shine Screens banner. The film stars Nani, Anupama Parameswaran, Rukshar Dhillon in lead roles'
    },
    {
        type: 'series',
        title: 'MCA',
        img: 'https://www.attapur.in/wp-content/uploads/2017/12/MCA.jpg',
        trailer: 'https://youtu.be/9V0hw6QjzSw?si=f6EXvpFwb44FACOC',
        description: 'Middle Class Abbayi (transl. Middle class boy), also known as MCA, is a 2017 Indian Telugu-language action comedy film directed by Venu Sriram and produced by Dil Raju.'
    },
    {
        type: 'series',
        title: 'pj',
        img: 'https://m.media-amazon.com/images/M/MV5BN2NlYmRlZTgtNTYyYi00MTBhLWEwYWQtNTU0ZDI1YTZjNDM5XkEyXkFqcGdeQXVyNTE0NDY5Njc@._V1_.jpg',
        trailer: 'https://youtu.be/u4fetE5LDqg?si=yXlXCkxH0iNSX6EJ',
        description: 'Pilla Zamindar (transl. Little Zamindar) is a 2011 Indian Telugu-language coming-of-age comedy drama film written and directed by G. Ashok. The film stars Nani, Haripriya, and Bindu Madhavi while Srinivas Avasarala, Dhanraj, Thagubothu Ramesh, Rao Ramesh and Nagineedu play supporting roles.'
    },
    {
        type: 'series',
        title: 'Stranger Things',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDJH-n02M3TtjnuBWjoFovi-uMJ_2gWRgSEA&s',
        trailer: 'https://www.youtube.com/embed/trailer13',
        description: 'Stranger Things is an American science fiction horror drama television series created by the Duffer Brothers for Netflix. Produced by Monkey Massacre Productions and 21 Laps Entertainment, the first season was released on Netflix on July 15, 2016.'
    },
    {
        type: 'series',
        title: 'Money Heist',
        img: 'https://resizing.flixster.com/ITt1FPrFePNR6FSqZrZK7BocG2U=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjEwMTMyOTMud2VicA==',
        trailer: 'https://www.youtube.com/embed/trailer14',
        description: 'Money Heist (Spanish: La casa de papel, [la ˈkasa ðe paˈpel], lit. The House of Paper) is a Spanish heist crime drama television series created by Álex Pina.'
    },
    {
        type: 'series',
        title: 'avatar',
        img: 'https://i.pinimg.com/736x/f3/f0/4a/f3f04a485eaad60915d70bb3df8e6440.jpg',
        trailer: 'https://youtu.be/d9MyW72ELq0?si=BrxPkGkE9QxZXkCM',
        description: 'Avatar is a 2009 epic science fiction film directed, written, co-produced, and co-edited by James Cameron. The cast includes Sam Worthington, Zoe Saldana, Stephen Lang, Michelle Rodriguez and Sigourney Weaver.'
    },
    {
        type: 'series',
        title: 'avengers',
        img: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/a/8/d/small-spos8851-poster-avengers-infinity-war-imax-sl-9359-wall-original-imaghs5nrdas7gbd.jpeg?q=20&crop=false',
        trailer: 'https://youtu.be/6ZfuNTqbHE8?si=V4I9yjFaReO6cYDa',
        description: 'Marvels  The Avengers[5] (titled Marvel Avengers Assemble in the United Kingdom and Ireland[1][6] and commonly referred to as simply The Avengers) is a 2012 American superhero film based on the Marvel Comics superhero team of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures,[a] it is the sixth film in the Marvel Cinematic Universe (MCU)'
    },
   
];
mediaData.forEach(media => {
    const mediaElement = document.createElement('div');
    mediaElement.classList.add('movie');
    mediaElement.innerHTML = <img src="${media.img}" alt="${media.title}">;
    mediaElement.addEventListener('click', () => {
        trailerModal.style.display = 'block';
        trailerContainer.innerHTML = <iframe width="100%" height="400" src="${media.trailer}" frameborder="0" allowfullscreen></iframe>;
        description.innerText = media.description;
    });
    movieGrid.appendChild(mediaElement);
});
document.getElementById('homeBtn').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});