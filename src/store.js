export default {
  website: {
    phone: "866 883 0573",
    banners: [ //considerar que la fecha debe comenzar en el mes 0.
      {
        image: '/layout/banners/2021/04/pinata-banner-a.jpg',
        fromDate: new Date(2021, 3, 26, 0, 0, 0),
        toDate: new Date(2021, 4, 2, 23, 59, 59)
      },
      {
        image: '/layout/banners/2021/05/pinata-banner-b.jpg',
        fromDate: new Date(2021, 4, 3, 0, 0, 0),
        toDate: new Date(2021, 4, 8, 23, 59, 59)
      },
      {
        image: '/layout/banners/2021/06/am-4-of-july-2021-pre-campaign.jpg',
        fromDate: new Date(2021, 5, 14, 0, 0, 0),
        toDate: new Date(2021, 5, 20, 23, 59, 59)
      },
      {
        image: '/layout/banners/2021/06/am-4-of-july-2021-campaign.jpg',
        fromDate: new Date(2021, 5, 21, 0, 0, 0),
        toDate: new Date(2021, 6, 4, 23, 59, 59)
      },
      {
        image: '/layout/banners/2021/07/am-4-of-july-2021-final.jpg',
        fromDate: new Date(2021, 6, 5, 0, 0, 0),
        toDate: new Date(2021, 6, 5, 23, 59, 59)
      }
    ]
  },
  home: {
    carousel: [
      {
        url: "/home/family.jpg",
        text: "Family",
      },
      {
        url: "/home/discovery.jpg",
        text: "Discovery",
      },
      {
        url: "/home/enjoy.jpg",
        text: "Enjoy",
      },
      {
        url: "/home/fun.jpg",
        text: "Fun",
      },
      {
        url: "/home/love.jpg",
        text: "Love",
      },
      {
        url: "/home/relax.jpg",
        text: "Relax",
      },
      {
        url: "/home/flavors.jpg",
        text: "Flavors",
      },
      {
        url: "/home/adventure.jpg",
        text: "Adventure",
      },
    ],
  },
  destinations: [
    {
      id: 1,
      name: "Puerto Vallarta",
      slug: "puerto-vallarta",
      image: "/home/destination-puerto-vallarta.jpg",
      video: "https://www.youtube.com/embed/z4Rr5FWzMJA?controls=0",
      carousel: [
        {
          url: "/puerto-vallarta/destination/malecon-de-puerto-vallarta.jpg",
          text: "Puerto Vallarta",
        },
        {
          url: "/puerto-vallarta/destination/puerto-vallarta-sirena.jpg",
          text: "Puerto Vallarta",
        },
        {
          url: "/puerto-vallarta/destination/marietas-puerto-vallarta.jpg",
          text: "Puerto Vallarta",
        },
        {
          url: "/puerto-vallarta/destination/puerto-vallarta-muelle.jpg",
          text: "Puerto Vallarta",
        },
        {
          url: "/puerto-vallarta/destination/puerto-vallarta-marigalante.jpg",
          text: "Puerto Vallarta",
        },
      ],
      description:
        "<p>Puerto Vallarta is a must destination on the Pacific Coast with a truly magical vibe with its cobblestone streets and colonial buildings. It's known for being a safe tropical location with great beaches and fun nightlife. Choose Puerto Vallarta if you want to experience a top vacation with a little town vibe.</p><p>Puerto Vallarta is a Mexican vacation experience unlike any other. The combined cultures of Spanish Mores, Catholicism and pre-Columbian mystical traditions creates an atmosphere of wonder and adventure. The beautiful architecture and cobblestone streets will make you feel like you’re experiencing authentic history, while also being surrounded by all of the other elements that make for an exotic Mexican vacation.</p><p>Majestic  Puerto Vallarta is surrounded on one side by the Sierra Madre Mountains, and beautiful Banderas Bay on the other.  Puerto Vallarta and the Bay area boast everything from breathtaking sunsets, warm sandy beaches, and incredible natural beauty to exciting mountain and ocean adventure.  Walk along the famous oceanfront Malecon (boardwalk), where restaurants, nightclubs, sightseeing and shopping offer something for every taste. Take a water taxi or whale watching tour to marine parks and villages that can only be reached by boat.  Swing through the jungle canopy, parasail over Los Muertos Beach, or stroll through Old Town and discover why Vallarta has been a vacation destination for more than 50 years.</p>",
      activities: {
        description:
          "<p>One of the most diverse destinations referring to activities. Overwater, underwater, by the shoreline, into the jungle, into the city, wherever you choose to roll, you’ll find something exciting to do.</p><p>If a calm adventure is your thing, explore the hidden beach in Islas Marietas, or take a kayak tour to Los Arcos at Mismaloya beach.But if you’re looking for something more challenging, you can take an ATV tour around the shoreline and try the wind- parachute or the banana boat.</p><p>For those looking for a little peach and quiet, Puerto Vallarta is full of spots just for you.Pick a table in one of the many papalas and relax.You can also enjoy the delicious Mexican Pacific gastronomy, such as grilled shrimps, fried fish, and much more</p>",
        gallery: [
          {
            url: "/puerto-vallarta/activities/activities-1.jpg",
            text: "Zipline",
          },
          {
            url: "/puerto-vallarta/activities/activities-2.jpg",
            text: "Marietas Island",
          },
          {
            url: "/puerto-vallarta/activities/activities-3.jpg",
            text: "Kayaking",
          },
          {
            url: "/puerto-vallarta/activities/activities-4.jpg",
            text: "Los Muertos Pier",
          },
          {
            url: "/puerto-vallarta/activities/activities-5.jpg",
            text: "Boardwalk",
          },
          {
            url: "/puerto-vallarta/activities/activities-6.jpg",
            text: "ATVs",
          },
        ],
      },
      flights: [
        {
          city: "Los Ángeles",
          flightsPerDay: 14,
          time: "2 hrs 55 min",
        },
        {
          city: "Denver",
          flightsPerDay: 9,
          time: "3 hrs 15 min",
        },
        {
          city: "Chicago",
          flightsPerDay: 5,
          time: "4 hrs 36 min",
        },
        {
          city: "Phoenix",
          flightsPerDay: 5,
          time: "2 hrs 25 min",
        },
        {
          city: "Dallas",
          flightsPerDay: 3,
          time: "2 hrs 45 min",
        },
      ],
      weather: {
        description:
          "<p>As a tropical destination, the climate is hot all year around, but there’s a dry period from December to April, when the tempeture lows abit and makes it the perfect weather.</p>",
        seasons: [
          {
            name: "Winter",
            image: "/svg/winter.svg",
            temperature: "72ºF",
          },
          {
            name: "Spring",
            image: "/svg/spring.svg",
            temperature: "72ºF",
          },
          {
            name: "Summer",
            image: "/svg/summer.svg",
            temperature: "81ºF",
          },
          {
            name: "Fall",
            image: "/svg/fall.svg",
            temperature: "82ºF",
          },
        ],
      },
      packages: [
        {
          id: 1,
          name: "Palmas All Inclusive",
          slug: "palmas-all-inclusive",
          image: "/puerto-vallarta/packages/palmas/palmas-pool-4.jpg",
          includeInHome: false,
          soldOut: false,
          nights: 5,
          adults: 2,
          children: 2,
          plan: "All Inclusive",
          retailPriceUSD: 1280,
          priceUSD: 499,
          savings: "79%",
          headers: [
            {
              url: "/puerto-vallarta/packages/palmas/palmas-resort-3.jpg",
              text: "",
            },
            {
              url: "/puerto-vallarta/packages/palmas/palmas-resort.jpg",
              text: "",
            },
            {
              url: "/puerto-vallarta/packages/palmas/palmas-resort-2.jpg",
              text: "",
            },
          ],
          offer: {
            rating: 4.5,
            includes: [
              "This amazing package includes 6 days and 5 nights for 2 adults and up to 2 children 12 and under.",
              "All Inclusive plan.",
              "Stay in a beautiful beach hotel, in a Standard Room.",
            ],
            description:
              "<p><em>*Additional nights are available starting at $229USD.</em></p><p>Las Palmas by The Sea features comfortable accommodations and modern facilities.The friendly atmosphere, fine accommodations and affordable prices, make this hotel, the ideal place for your next family vacation or romantic honeymoon.</p>",
            allInclusive: [
              "Luxury Accommodations",
              "Daily Breakfast, Lunch, and Dinner at Aire del Mar Restaurant",
              "Enjoy a variety of snacks at our By the Sea restaurant & snack bar",
              "Activities 10am - 5pm(volleyball, shuffle board, pool activities, etc)",
              "Non - motorized water sports",
              "Fully equipped fitness center",
              "European Style Spa",
              "Convenient concierge desk",
              "Currency exchange from US or Canadian dollars to pesos",
              "Kids' Club with supervised activities. (Ages 5-11 years old)",
            ],
          },
          resort: {
            description:
              "<p>Las Palmas by the Sea is an All Inclusive beach hotel that offers two swimming pools, an oceanfront hot tub and a variety of family friendly activities. This resort is conveniently located in the hotel zone of Puerto Vallarta and is also close to the downtown area and boardwalk.</p><p>The city of Puerto Vallarta is famous for its lovely surroundings, stunning views of the ocean and friendly people.Explore all the beautiful spots the city has to offer, such as, the historic center, the handicrafts market and the lovely colonial cathedral.Enjoy wonderful and conveniently located facilities, including a panoramic Jacuzzi, two swimming pools, sports bar and massage center.You will enjoy a pleasant and fun vacation in this lovely city, famous for its year round good weather.Las Palmas by The Sea is the perfect place to spend a memorable vacation.</p>",
            features: [
              {
                feature: "NIGHTLY SHOWS",
                description:
                  "<p>Las Palmas by the Sea presents incredible shows for all ages every night in a relaxed and fun environment, such as: International Show, Mexican Night, Mimees, Clowns, Lumiere Show, Elvis Presley Show, Tropical Show and Live Music</p>",
              },
              {
                feature: "ACTIVITIES",
                description:
                  "<p>At Las Palmas by the Sea enjoy your vacation at the seashore where an enthusiastic team offers a variety of activities.</p><ul><li>Scuba diving classes for beginners.</li><li>Aquatic Volleyball.</li><li>Activities program for kids</li><li>Water aerobics.</li><li>Ping pong table.</li><li>Bingo.</li><li>Tequila volleyball, etc.</li><li>Beach soccer.</li></ul>",
              },
              {
                feature: "SPA THERAPY",
                description:
                  "<p>Immerse yourself in an atmosphere of tranquility and sensations that allow your body and mind to enter a state of peace and harmony. Las Palmas by the Sea offers you our massage clinic where you will find services such as relaxing massages, anti-stress massages, reflexology, aromatherapy, pedicure, manicure, and more. </p>",
              },
              {
                feature: "KIDS CLUB",
                description:
                  "<ul><li>Crafts</li><li>Football</li><li>Story Reading</li><li>Mini movie theater</li><li>Ball pool</li><li>Wading pool</li><li>Sand box</li><li>Private bathrooms</li><li>Hanging bridge</li>",
              },
            ],
            gallery: [
              {
                url: "/puerto-vallarta/packages/palmas/palmas-hotel.jpg",
                text: "",
              },
              {
                url: "/puerto-vallarta/packages/palmas/palmas-hotel-2.jpg",
                text: "",
              },
              {
                url: "/puerto-vallarta/packages/palmas/palmas-pool.jpg",
                text: "",
              },
              {
                url: "/puerto-vallarta/packages/palmas/palmas-pool-2.jpg",
                text: "",
              },
              {
                url: "/puerto-vallarta/packages/palmas/palmas-pool-3.jpg",
                text: "",
              },
              {
                url: "/puerto-vallarta/packages/palmas/palmas-pool-4.jpg",
                text: "",
              },
              {
                url: "/puerto-vallarta/packages/palmas/palmas-restaurant.jpg",
                text: "",
              },
              {
                url: "/puerto-vallarta/packages/palmas/palmas-restaurant-2.jpg",
                text: "",
              },
            ],
          },
          rooms: [
            {
              name: "Standard Room",
              priceUSD: 499,
              description:
                "<p>These are Garden or Mountain View Room. We know when you are on vacation having a cool and comfortable room is very important so we offer: King size bed or two full beds. Color T.V with cable and remote control. Telephone Air Conditioning Hair dryer Bath & Shower Safe-deposit box.</p>",
              galleryDescription: "Be our guest and see it for yourself.",
              gallery: [
                {
                  url: "/puerto-vallarta/packages/palmas/palmas-room.jpg",
                  text: "",
                },

                {
                  url: "/puerto-vallarta/packages/palmas/palmas-room-3.jpg",
                  text: "",
                },
                {
                  url: "/puerto-vallarta/packages/palmas/palmas-room-4.jpg",
                  text: "",
                },
                {
                  url: "/puerto-vallarta/packages/palmas/palmas-room-5.jpg",
                  text: "",
                },
              ],
            },
          ],
          amenities: [
            "Concierge",
            "All-Inclusive",
            "Guest Activity Desk",
            "Beach Service",
            "Kiddie Pool",
            "Children’s Play Area",
            "Fishing(nearby)",
            "Non - Smoking rooms",
            "Children’s Program",
            "Pool Area Bar",
            "Currency Exchange",
            "Fitness Center",
            "Kids Club",
            "Multilingual Staff",
            "On-Site Entertainment",
            "Spa Services",
            "Room Service",
            "Ice Machine",
            "Lounge/Bar",
            "Multiple Swimming Pools",
            "Water Sports",
            "Security Guard",
            "Beach Front",
            "Jacuzzi / Hot Tub",
            "Massage Therapist",
            "Non-Motorized Water Sports",
            "Outdoor Pool",
            "Wake-Up Service",
            "Children’s Play Area",
            "Conference facilities",
            "Children’s Program",
            "Free Breakfast",
            "Parking",
            "Restaurant",
            "Ice Machine",
            "Lounge / Bar",
            "Beach Front",
            "Wheelchair Accessible",
            "Sun Deck",
          ],
          location: {
            map:
              '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7467.642281464752!2d-105.233278!3d20.636146!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x56cf8c8d9edda9b3!2sLas%20Palmas%20by%20The%20Sea!5e0!3m2!1sen!2smx!4v1617565657612!5m2!1sen!2smx" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
          },
          reviews: [
            {
              author: "Mike L",
              city: "Nebraska",
              comments:
                "We were at Las Palmas by the sea,12/9/2020 through 12/15/2020 . We have stayed here many times before. It's an older Resort but it is very clean, and the staff has always been amazing. When we arrived Martin greeted us with 'welcome back home'. Then they sanitized our luggage, & had us walk through a mat sanitizer, & get our temperature taken by the hand sanitizer dispenser. We would have to repeat this process whenever we went to the buffet or restaurant .  The buffet was covered with plexiglass & the servers all wore gloves and masks. We just pointed at whatever we wanted & they would get it for us. They also had plexiglass around The Omelette station, and the other stations. They had the floor marked for self distancing.",
              date: "Jan 2021",
              rating: 5,
            },
          ],
        },
        {
          id: 2,
          name: "Grand All Inclusive",
          slug: "grand-all-inclusive",
          image: "/puerto-vallarta/packages/grand/grand-pool-3.jpg",
          includeInHome: true,
          soldOut: false,
          nights: 4,
          adults: 2,
          children: 2,
          plan: "All Inclusive",
          retailPriceUSD: 1280,
          priceUSD: 499,
          savings: "62%",
          headers: [
            {
              url: "/puerto-vallarta/packages/grand/grand-resort-2.jpg",
              text: "",
            },
            {
              url: "/puerto-vallarta/packages/grand/grand-resort-3.jpg",
              text: "",
            },
            {
              url: "/puerto-vallarta/packages/grand/grand-resort-4.jpg",
              text: "",
            },
            {
              url: "/puerto-vallarta/packages/grand/grand-resort.jpg",
              text: "",
            },
          ],
          offer: {
            rating: 5,
            includes: [
              "This amazing package includes 5 days and 4 nights for 2 adults and up to 2 children 12 and under.",
              "All Inclusive plan.",
            ],
            description:
              "<p><em>*Additional nights are available starting at $229USD.</em></p><p>Treat yourself to an unequalled all-inclusive resort experience at the best location in Puerto Vallarta.</p><p>Beach, sunshine, tropical setting, vibrant spaces with color and joy, we provide everything you’re looking for. A breath-taking place to relax and enjoy a fun-filled getaway.</p><p>We invite you to enjoy its all-inclusive program with its excellent cuisine, as well as numerous activities suitable for the entire family. Our 234 rooms and suites include all of the comforts and amenities you’ll require for an unforgettable stay, regardless of the purpose of your trip.</p>",
            allInclusive: [
              "All Meals Daily, including Breakfast, Lunch, and Dinner",
              "Snacks Served All Day",
              "Weekly Theme Dinners",
              "Unlimited Beer, Wine, and Spirits",
              "Mini-Bar with Soft Drinks, Bottled Water (refilled on a daily basis)",
              "Deluxe Accommodations with 1 King Size or 2 Double Beds, individually controlled Air Conditioning, Satellite TV, Safety Deposit Boxes, Hair Dryers and More",
              "Supervised Activities for Children Ages 4-12",
              "Scheduled Daily Activities: aqua aerobics, beach volleyball, ping pong, beach soccer, bingo, kayak tours, water polo, dance classes, cooking classes",
              "Free yoga lessons are offered daily at 9am on the beach.",
            ],
          },
          resort: {
            description:
              "<p>Enjoy the unique charm of a real Mexican Hacienda surrounded by beautiful gardens, traditional decor and perfect facilities for an unforgetable vacation. Hacienda Buenaventura Hotel & Mexican Charm represents a poignant aspect of Mexican culture and tradition and is strategically located at the center of the Puerto Vallarta Hotel Zone. We are located just 10 min. from the International Airport, the Bus Station, Convention Center and Downtown area. We are the perfect choice whether you want to relax and enjoy our facilities and beach club or enjoy everything Puerto Vallarta has to offer.</p>We have captured the authentic Mexican flavors and varied international cuisine to provide you with a delicious gastronomic experience in four restaurants and three bars.</p><p>Being an all inclusive hotel, your accommodation includes food and beverages in all of our buffet and a-la-carte restaurants and bars, 24-hour room service (service fee per order applies), in-room mini-bar (refilled daily) and regular theme nights</p>",
            features: [
              {
                feature: "Frutas y Flores Restaurant (Main Buffet Restaurant)",
                description:
                  "<p>Enjoy the perfect harmony of colors and aromas in this cozy restaurant, where you can experience what is undoubtedly the best breakfast in Puerto Vallarta. Also, join us for lunch or dinner to taste our wide variety of menu items and renowned buffet, featuring different specialties every night.</p>",
              },
              {
                feature: "Beach Club Restaurant & Bar",
                description:
                  "<p>With our delicious snack menu as your host and the beautiful, relaxing sea as your companion, you’ll have no option but to allow us to pamper you with a refreshing Margarita and our exemplary service at the Beach Club.</p>",
              },
              {
                feature: "Sunset Restaurant",
                description:
                  "<p>At night, our Beach Club puts on its dress clothes and becomes the Sunset Restaurant, where the Puerto Vallarta sunset is a faithful witness to the delicacies prepared in this Mediterranean specialty restaurant. With ingredients chosen under the most stringent requirements, the chef’s wisdom and experience in combining flavors and the singular hospitality of its hosts, all three elements are sure to please even the most demanding palate. (Previous reservations with the concierge are required.) </p>",
              },
              {
                feature: "Corazón Contento",
                description:
                  "<p>Delight your palate at our Mexican restaurant, offering a menu of International Mexican cuisine and a special selection of international wines. A lovely culinary experience awaits you! (Previous reservations with the concierge are required.</p>",
              },
              {
                feature: "Cabaña Bar",
                description:
                  "<p>For light snacks and refreshing drinks, this is one of our main bars located in the pool and beach areas.</p>",
              },
              {
                feature: "Beach Club Bar",
                description:
                  "<p>This is another one of our wonderful bars, serving great cocktails around the beach and pool areas.</p>",
              },
              {
                feature: "Lobby Bar ",
                description:
                  "<p>If you want to escape the Vallarta sun for a moment, the Lobby Bar awaits with cool shade and tropical drinks.</p>",
              },
            ],
            gallery: [
              {
                url: "/puerto-vallarta/packages/grand/grand-beach-2.jpg",
                text: "",
              },
              {
                url: "/puerto-vallarta/packages/grand/grand-pool-2.jpg",
                text: "",
              },
              {
                url: "/puerto-vallarta/packages/grand/grand-pool.jpg",
                text: "",
              },
              {
                url: "/puerto-vallarta/packages/grand/grand-restaurant-5.jpg",
                text: "",
              },
              {
                url: "/puerto-vallarta/packages/grand/grand-restaurant-3.jpg",
                text: "",
              },
              {
                url: "/puerto-vallarta/packages/grand/grand-beach.jpg",
                text: "",
              },
              {
                url: "/puerto-vallarta/packages/grand/grand-spa.jpg",
                text: "",
              },
              {
                url: "/puerto-vallarta/packages/grand/grand-pool-3.jpg",
                text: "",
              },
              {
                url: "/puerto-vallarta/packages/grand/grand-pool-4.jpg",
                text: "",
              },
              {
                url: "/puerto-vallarta/packages/grand/grand-restaurant-2.jpg",
                text: "",
              },
              {
                url: "/puerto-vallarta/packages/grand/grand-restaurant-4.jpg",
                text: "",
              },
              {
                url: "/puerto-vallarta/packages/grand/grand-restaurant.jpg",
                text: "",
              },
            ],
          },
          rooms: [
            {
              name: "Standard Room",
              priceUSD: 499,
              description:
                "<p>Comfortable and spacious rooms with a fresh, mexican contemparoary style, and one king size or 2 double beds.</p>",
              galleryDescription: "Be our guest and see it for yourself.",
              gallery: [
                {
                  url: "/puerto-vallarta/packages/grand/grand-room.jpg",
                  text: "",
                },
                {
                  url: "/puerto-vallarta/packages/grand/grand-room-2.jpg",
                  text: "",
                },
                {
                  url: "/puerto-vallarta/packages/grand/grand-room-3.jpg",
                  text: "",
                },
                {
                  url: "/puerto-vallarta/packages/grand/grand-room-4.jpg",
                  text: "",
                },
              ],
            },
          ],
          amenities: [
            "Pool and Beach Areas: We offer two heated, salt-purified pools with an adults-only area, water loungers, lounge chairs, umbrellas and beach palapas.",
            "4 Restaurants & 3 Bars",
            "Fully Equiped Gym",
            "Kids' Club - CANDU",
            "Shakti Spa ($)",
            "Boutique ($): Here you will find a wide array of beach products and accessories, as well as gifts and essential items Hours: 08:00 – 23:00",
            "Hospitality Lounge with computer and internet, TVs, and magazines",
            "Meeting Rooms",
            "Concierge Service: If you need any information or have any special requests, please visit our Guest Service Desk. We gladly will provide any assistance you need. Hours 08:00 – 23:00",
            "Pool and Beach Towel Service",
            "Wake-up Call",
          ],
          location: {
            map:
              '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.2086365085133!2d-105.23365968434297!3d20.62035098622108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842145525cfa1f77%3A0xadcbe28de4cf2e!2sBuenaventura%20Grand%20Hotel%20%26%20Great%20Moments!5e0!3m2!1ses-419!2smx!4v1617662259090!5m2!1ses-419!2smx"  style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
          },
          reviews: [
            {
              author: "Ralphie David",
              city: "Denver, Colorado",
              comments:
                '<p>So many things to say about this place. The staff was amazing, service was amazing, room was amazing.... I paid a bit extra for the honeymoon suite which includes a king size bed with a balcony and jaccuzi that faces the ocean and pool area. Well worth it!! Jorge Rebolledo aka "Curly", aka "Oui, Oui" the entertainment manager is great. He keeps the activities going to keep you entertained if you are so obliged to join in (volleyball, aqua aerobics and pool games, karaoke etc). All of the wait staff was the best, but in particular Jorge (the waiter) was awesome. He made sure we were taken care every step of the way. Polite, courteous, funny, friendly, attentive and always had a smile. Be sure to visit Pipi\'s restaurant if you get a chance. Its not included at the hotel, but its a fun place, great food.',
              date: "",
              rating: 5,
            },
            {
              author: "Mark H",
              city: "Canada",
              comments:
                "I was very pleasantly surprised with the hotel. We booked on the recommendation of a friend, whose parents stay there when they go to Puerto Vallarta. This was our first trip to PV. We have stayed and many all inclusive hotels in other places. The food here was the best \"vacation food\" I have ever had. The hotel only has two restaurants a buffet and an order of the menu restaurant by the beach. The buffet was absolutely great, there was maybe one item that I didn't care for in the whole week. The omelet for breakfast were great. The Pasta was very good. All made to order as you waited. The beach restaurant food was good. I cant really give a good review for most of the food because on day one I tried a Smoked Marlin Burrito it it was so good I had that for lunch every day. I was absolutely delicious. The staff was very polite and very helpful. I needed my balcony cleaned because of some feathered friends that visited. It was cleaned before I came back to the room. German, Jorge and Juan made the meals and drinks entertaining. Location was perfect, A few blocks to the south was the Malecon. Fifty peso or three dollar cab ride to downtown/oldtown. About the same to go to the Marina. We actually took the blue bus which was peso's...",
              date: "",
              rating: 5,
            },
            {
              author: "Yvette S, Ofallon",
              city: "United States",
              comments:
                "Absolutely loved the place.. I feel the staff were excellent, the food and drinks were great! We couldn't have been more pleased! Loved the choice of the private 4 course meals at dinner time.. Will definitely return!",
              date: "",
              rating: 5,
            },
          ],
        },
        {
          id: 3,
          name: "Barcelo All Inclusive",
          slug: "bercelo-all-inclusive",
          image: "/puerto-vallarta/packages/barcelo/barcelo-pool-3.jpg",
          includeInHome: false,
          soldOut: false,
          nights: 4,
          adults: 2,
          children: 2,
          plan: "All Inclusive",
          retailPriceUSD: 1264,
          priceUSD: 599,
          savings: "47%",
          headers: [
            {
              url: "/puerto-vallarta/packages/barcelo/barcelo-resort-3.jpg",
              text: "",
            },
            {
              url: "/puerto-vallarta/packages/barcelo/barcelo-resort.jpg",
              text: "",
            },
            {
              url: "/puerto-vallarta/packages/barcelo/barcelo-resort-2.jpg",
              text: "",
            },
          ],
          offer: {
            rating: 5,
            includes: [
              "This amazing package includes 5 days and 4 nights for 2 adults and up to 2 children 12 and under.",
              "All Inclusive plan.",
              "Stay in a luxurious Deluxe Suite with either one king-sized bed or two double-sized beds.",
            ],
            description:
              "<p><em>*Additional nights are available starting at $279USD.</em></p>",
            allInclusive: [
              "Equipment for children and families",
              "The Barcy Club, for youngsters aged 5 to 12, is a great fun activities program, with qualified care staff.",
              "Parents can enjoy the security and peace of mind of having their children looked after in an environment where they will have the time of their lives.",
              "Hours: 9:00 am to 5:00 pm (9 am – 5 pm)",
              "The Barcy Club has facilities perfect for a variety of activities",
              "In the game room, our most active guests can enjoy an air hockey table, ping pong, foosball, pool table and 2 poker tables. Opening hours: 7 am to 1 am. (7 am–1 am)",
              "Evening entertainment and leisure",
              "You can enjoy fun and varied activities day and night in the comfortable facilities at the Barceló Puerto Vallarta",
              "Daytime activities",
              "To continue entertaining both children and adults, the hotel offers live spectacular shows every night in the theater starting at 9 pm. Enjoy a different one every night.",
              "Or enjoy the atmosphere and live music at the La Cantina Bar certain nights starting at 9:30 pm. (9.30 pm).",
            ],
          },
          resort: {
            description:
              "<p>This amazing Mexican-style hotel is located on the shores of the Mismaloya beach, just south of Puerto Vallarta, and is surrounded by breathtaking mountains facing the Pacific Ocean. It distinguishes itself from the rest with five-star service and 4 prestigious AAA Diamonds.</p> <p>There are 316 spacious and luxurious Suites and all of them exceed guests' expectations in beauty and comfort. All of them have either a terrace or a balcony, from which visitors can admire the vegetation, clear pools and the impressive Banderas Bay, some of the best views in any resort in Mexico.</p><p>Every guest can be satisfied with exclusive benefits by choosing Premium Level: Unlimited access to the specialty restaurant, access to the Premium Lounge, room service, Internet and may other services.</p><p>As if all this wasn't enough, the hotel offers a wide variety of culinary options to let customers taste traditional Spanish, Mexican and Italian dishes, delighting their senses with exquisite international dishes. Every guest can take the time to refresh himself with one of the many exotic drinks waiters offers in one of our 4 pools, or in our semi-private beach. This is all in the Barcelo All Inclusive package.</p>",
            features: [
              {
                feature: "La Fuente Restaurant ",
                description:
                  "<p>Buffet restaurant with sea views offering an exquisite variety of cuisine. Guests can also enjoy themed nights.</p>",
              },
              {
                feature: "Los Arcos Restaurant ",
                description:
                  "<p>Grill restaurant facing the sea. Enjoy delicious sandwiches or our casual buffet without leaving the fun atmosphere. The perfect choice for à la carte cuts and seafood dinner.</p>",
              },
              {
                feature: "Don Quijote Restaurant ",
                description:
                  "<p>This à la carte restaurant offers varied and exquisite dishes with Spanish recipes that will delight both adults and children alike.</p>",
              },
              {
                feature: "Capri Restaurant ",
                description:
                  "<p>Italian pizzas and pastas are the main attractions at this à la carte restaurant. The design and atmosphere will transport guests to an Italian ambiance.</p>",
              },
              {
                feature: "Pool Bar ",
                description:
                  "<p>A fantastic outdoor mirror where guests can enjoy a delicious cocktail or fruit juice while cooling down in the pool.</p>",
              },
              {
                feature: "Los Arcos Snack ",
                description:
                  "<p>Located facing the sea, enjoy delicious sandwiches or an informal buffet without stopping the fun.</p>",
              },
              {
                feature: "La Cantina Bar ",
                description:
                  "<p>This fantastic bar reflects the essence of Mexico. Guests can enjoy drinks and cocktails. At night you can enjoy snacks and live music.</p>",
              },
            ],
            gallery: [
              {
                url: "/puerto-vallarta/packages/barcelo/barcelo-hotel.jpg",
                text: "",
              },
              {
                url: "/puerto-vallarta/packages/barcelo/barcelo-restaurant.jpg",
                text: "",
              },
              {
                url: "/puerto-vallarta/packages/barcelo/barcelo-pool.jpg",
                text: "",
              },
              {
                url: "/puerto-vallarta/packages/barcelo/barcelo-pool-2.jpg",
                text: "",
              },
              {
                url: "/puerto-vallarta/packages/barcelo/barcelo-pool-3.jpg",
                text: "",
              },
              {
                url: "/puerto-vallarta/packages/barcelo/barcelo-pool-4.jpg",
                text: "",
              },
              {
                url: "/puerto-vallarta/packages/barcelo/barcelo-pool-5.jpg",
                text: "",
              },
              {
                url: "/puerto-vallarta/packages/barcelo/barcelo-pool-6.jpg",
                text: "",
              },

              {
                url: "/puerto-vallarta/packages/barcelo/barcelo-beach.jpg",
                text: "",
              },
              {
                url: "/puerto-vallarta/packages/barcelo/barcelo-activities.jpg",
                text: "",
              },
              {
                url: "/puerto-vallarta/packages/barcelo/barcelo-kids.jpg",
                text: "",
              },
            ],
          },
          rooms: [
            {
              name: "Deluxe Suite:",
              priceUSD: 699,
              description:
                "<p>The Deluxe Suite rooms are perfect to spend a luxury vacation. Its 732 ft² will make your stay a perfect place to enjoy to the utmost comfort. </p>",
              galleryDescription: "Be our guest and see it for yourself.",
              gallery: [
                {
                  url: "/puerto-vallarta/packages/barcelo/barcelo-room-5.jpg",
                  text: "",
                },
                {
                  url: "/puerto-vallarta/packages/barcelo/barcelo-room-2.jpg",
                  text: "",
                },
                {
                  url: "/puerto-vallarta/packages/barcelo/barcelo-room-3.jpg",
                  text: "",
                },
                {
                  url: "/puerto-vallarta/packages/barcelo/barcelo-room-4.jpg",
                  text: "",
                },
              ],
            },
          ],
          amenities: [
            "Banquet Facility",
            "Business Services",
            "Children's Play Area",
            "Children's Program",
            "Complimentary Continental Breakfast",
            "Conference facilities",
            "Dry Cleaning Service",
            "Fitness Center",
            "Laundry Facilities",
            "Lounge/Bar",
            "Multilingual Staff",
            "Non-Smoking Rooms",
            "Outdoor Pool",
            "Parking",
            "Restaurant",
            "Spa Services",
            "Wheelchair Accessible",
            "Wireless Internet Access",
          ],
          location: {
            map:
              '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119494.68745236656!2d-105.30151068215993!3d20.62033686206658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842145454a68ce77%3A0xee620ce3b7437166!2sBarcel%C3%B3%20Puerto%20Vallarta!5e0!3m2!1ses-419!2smx!4v1617666116129!5m2!1ses-419!2smx" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
          },
          reviews: [
            {
              author: "Msohara",
              city: "Marion, Iowa",
              comments:
                "Stayed at this resort in February 2021. Not many people there but we had a nice stay. Food was okay but because there were not many staying there the restaurants and selection was limited. Cleanliness was top notch and we really enjoyed the location of resort too. Steps outside the resort was a local bar/restaurant area and there was a trail to walk out to a point also. The beach was nice and always local action to watch from our balcony. We had a corner master suite and it was great. Wrap around balcony, 2 bathrooms, 2 mini bars and huge master bath area. The pool area was gorgeous and water was warm. The resort could use some updating but for this level of stay it was nice and we would return.",
              date: "February 2021",
              rating: 4,
            },
          ],
        },
        {
          id: 4,
          name: "Melia All Inclusive",
          slug: "melia-all-inclusive",
          image: "/puerto-vallarta/packages/melia/melia-pool.jpg",
          includeInHome: false,
          soldOut: false,
          nights: 4,
          adults: 2,
          children: 2,
          plan: "All Inclusive",
          retailPriceUSD: 1284,
          priceUSD: 599,
          savings: "46%",
          headers: [
            {
              url: "/puerto-vallarta/packages/melia/melia-resort-3.jpg",
              text: "",
            },
            {
              url: "/puerto-vallarta/packages/melia/melia-resort.jpg",
              text: "",
            },
            {
              url: "/puerto-vallarta/packages/melia/melia-resort-2.jpg",
              text: "",
            },
          ],
          offer: {
            rating: 5,
            includes: [
              "This amazing package includes 5 days and 4 nights for 2 adults and up to 2 children 12 and under.",
              "All Inclusive plan.",
            ],
            description:
              "<p><em>*Additional nights are available starting at $229USD.</em></p>",
            allInclusive: [
              "Unlimited Meals",
              "Unlimited Alcoholic and Non-Alcoholic Beverages, Premium Drinks Are Available with Extra Charge",
              "Beachfront Resort with Swimmable Sandy Beach in Marina Vallarta",
              "Swimming Pool Plus a Separate Kids Pool",
              "Four Restaurants (Buffet and A-La-Carte), One Snack Bar and Lobby Bar with Live or DJ Music to Dance, Karaoke Night or Casino Games",
              "Kids and Co Family Themed Areas: Baby Club for Toddlers up to 4 Years. Kids Club for Kids 5-11 and Cool Club for Tweens. All Clubs Offer Organized Activities Supervised by Professional Staff",
              ".Non-Motorized Water Sports Exercise Room and Recreation Facilities for All, Including Beach Volleyball, Water Aerobics, Tennis, Basketball, Jogging Path, Kayaks, Climbing Wall, Batting Cage, Video Games, Rifle Shooting, Archery, Disk Golf, Pool Tables, Card Tables and More",
              "Nightly Entertainment Performed by Professional Dancers in an Outdoor Theater",
            ],
          },
          resort: {
            description:
              "<p>Discover Meliá Puerto Vallarta, a tropical sanctuary on the sands of beautiful Banderas Bay. With romantic views of the ocean, you’ll be spellbound by its luxuriance.</p><p>Overlooking Marina Vallarta, in one of the most exclusive and serene neighborhoods in Puerto Vallarta, four stars of luxury after a 5 minute ride from the airport or 10 minutes to the town center.</p><p>Guests can enjoy four distinct dining destinations from large breakfast buffets beginning at 7:00 a.m.</p><p>Quiet, oceanfront dinners and cuisine choices go from traditional Mexican to European and Asian favorites served until 10:30 p.m. Time and effort is put into creating an array of delicious, sustainable menus and providing excellent service.</p><p>Variety is the spice of life and we do what we can to help spice up your dining experience. Snacks at the Azulejos Restaurants from 23:00hrs to 04:00hrs.</p><p>Please remember that reservations are strongly recommended and some restaurants have dress codes.</p><p>NOTE: Opening hours of restaurants and bars, together with room service, are subject to changes without previous notice</p>",
            features: [
              {
                feature: "La Palapa",
                description:
                  "<p>Outdoor restaurant with a spectacular view of the bay. Open daily with buffet-type lunch and at night a la carte restaurant with grilled specialties; opening hours from 7 p.m. to 10 p.m. (prior reservation)</p>",
              },
              {
                feature: "Quetzal",
                description:
                  "<p>Restaurant with air conditioning and outdoor terrace. Open daily with thematic buffet-type breakfasts and dinners. Opening hours: 7 a.m. to 11:30 a.m.</p>",
              },
              {
                feature: "Vitrales",
                description:
                  "<p>A la carte restaurant with gourmet-type Italian specialties. Previous reservation required. For families with children under 8 opening hours from 6 to 6:30 p.m. Formal attire.</p>",
              },
              {
                feature: "Los Azuejos",
                description:
                  "<p>This restaurant offers a la carte Mexican specialties. Outdoor restaurant. Previous reservation required. Nocturnal snack from 11:00 p.m. to 4:00 a.m.</p>",
              },
              {
                feature: "La Palapita",
                description:
                  "<p>A snack bar at poolside open from 12 noon to 6 p.m. Monday to Saturday and 1 p.m. to 6 p.m. on Sunday.</p>",
              },
              {
                feature: "Cafe Orion",
                description:
                  "<p>An international selection of spirits and beers is available at the lobby bar as it overlooks the hotel's open grounds, pools, gardens, and ocean. During special events like the Superbowl, Olympics, World Cup, viewing parties are hosted in the lobby bar. Hours: 5:00 p.m. to 1:00 a.m.</p>",
              },
              {
                feature: "La Cantina Bar ",
                description:
                  "<p>When guests are lounging in the hotel's heated pools it only takes a few strokes to swim up to the bar and order the next drink. Hours: 11:00 a.m. to 6:00 p.m.</p>",
              },
              {
                feature: "Palapa Bar",
                description:
                  "<p>Bar sitting adjacent to the pool and mere steps from the sand is the picture perfect tropics bar for daytime drinking. Hours: Noon to 5:00 p.m.</p>",
              },
            ],
            gallery: [
              {
                url: "/puerto-vallarta/packages/melia/melia-hotel.jpg",
                text: "",
              },
              {
                url: "/puerto-vallarta/packages/melia/melia-hotel-2.jpg",
                text: "",
              },
              {
                url: "/puerto-vallarta/packages/melia/melia-beach.jpg",
                text: "",
              },
              {
                url: "/puerto-vallarta/packages/melia/melia-beach-2.jpg",
                text: "",
              },
              {
                url: "/puerto-vallarta/packages/melia/melia-pool.jpg",
                text: "",
              },
              {
                url: "/puerto-vallarta/packages/melia/melia-pool-2.jpg",
                text: "",
              },
              {
                url: "/puerto-vallarta/packages/melia/melia-kids.jpg",
                text: "",
              },
              {
                url: "/puerto-vallarta/packages/melia/melia-restaurant.jpg",
                text: "",
              },
            ],
          },
          rooms: [
            {
              name: "Deluxe Suite:",
              priceUSD: 599,
              description:
                "<p>Enjoy views of lush, tropical flora and fauna as your private balcony gives way to a stunning garden view. Rooms are brightly decorated and furnished for relaxing stays.</p>",
              galleryDescription: "Be our guest and see it for yourself.",
              gallery: [
                {
                  url: "/puerto-vallarta/packages/melia/melia-room.jpg",
                  text: "",
                },
                {
                  url: "/puerto-vallarta/packages/melia/melia-room-2.jpg",
                  text: "",
                },
                {
                  url: "/puerto-vallarta/packages/melia/melia-room-3.jpg",
                  text: "",
                },
                {
                  url: "/puerto-vallarta/packages/melia/melia-room-4.jpg",
                  text: "",
                },
              ],
            },
          ],
          amenities: [
            "Banquet Facility",
            "Beach Front",
            "Business Services",
            "Children's Play Area",
            "Children's Program",
            "Complimentary Continental Breakfast",
            "Conference facilities",
            "Dry Cleaning Servicer",
            "Fitness Center",
            "Lounge/Bar",
            "Multilingual Staff",
            "Non-Smoking Rooms",
            "Outdoor Pool",
            "Parking",
            "Restaurant",
            "Room Service",
            "Spa Services",
            "Wheelchair Accessible",
            "Wireless Internet Access",
          ],
          location: {
            map:
              '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.2178353968825!2d-105.25521394882713!3d20.660714805547265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842145ba3f88d58d%3A0xb80c7197bf4dfb73!2sMeli%C3%A1%20Puerto%20Vallarta!5e0!3m2!1ses-419!2smx!4v1617677532217!5m2!1ses-419!2smx" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
          },
          reviews: [
            {
              author: "Trudy Bmichigan",
              city: "",
              comments:
                "We were so happy to return as this was our 4th stay at melia. Actually myself and a friend are returning March 10th!! It was such a pleasure to see many of our favorite staff still hard at work and so willing to make sure our vacation was perfect. I big shout out to Theresa, pablo, Christian, Francesco and the many others. Everything from check in to getting our covid test to return to US went off without a hitch. Can't wait to see you all very soon. 😘 oh yes, btw attached is a BIRTHDAY plate served to me poolside. Can't get much better",
              date: "March 2021",
              rating: 5,
            },
            {
              author: "Luis E ",
              city: "",
              comments:
                "Most of the time traveling with my son who has special needs, and his service dog, is challenging -to say the least ...last week was refreshing, the staff from the hotel worked not only to accommodate our needs, but really willing to help us enjoy our time without any hassle. It is great to see this happening and from our perspective see Melia taking the lead in the industry in Mexico (among service providers) in accommodating our needs. thank you thank you !",
              date: "January 2021",
              rating: 5,
            },
            {
              author: "Sunnyn Lovinit",
              city: "Nine Mile Falls, Washington",
              comments:
                "Thank you once again to our Melia family, even though things looked different this year, one thing that always stays consistent is the amazing customer service from staff. We love these amazing team members and are always greeted with smiles and a happy Hola! From breakfast service from Christian, to pool service from Jose, Paulo and Victor, to the amazing activity director Freddy and evening cocktails from Alex, we were always very well taken care of. We hate to leave and always look forward to returning to our PV family. Muchas gracias, an excellent stay.",
              date: "November 2020",
              rating: 5,
            },
          ],
        },
        {
          id: 4,
          name: "Occidental All Inclusive",
          slug: "occidental-all-inclusive",
          image: "/puerto-vallarta/packages/occidental/occidental-hotel.jpg",
          includeInHome: false,
          soldOut: false,
          nights: 4,
          adults: 2,
          children: 2,
          plan: "All Inclusive",
          retailPriceUSD: 1264,
          priceUSD: 599,
          savings: "53%",
          headers: [
            {
              url: "/puerto-vallarta/packages/occidental/occidental-resort.jpg",
              text: "",
            },
            {
              url: "/puerto-vallarta/packages/occidental/occidental-resort-2.jpg",
              text: "",
            },
            {
              url: "/puerto-vallarta/packages/occidental/occidental-resort-3.jpg",
              text: "",
            },
          ],
          offer: {
            rating: 5,
            includes: [
              "This amazing package includes 5 days and 4 nights for 2 adults and up to 2 children 12 and under.",
              "All Inclusive plan.",
            ],
            description:
              "<p><em>*Additional nights are available starting at $229USD.</em></p>",
            allInclusive: [
              "Unlimited Meals",
              "Welcome cocktail",
              "Breakfast and dinner in a total of 5 restaurants",
              "Currency exchange in the reception area",

            ],
          },
          resort: {
            description:
              "<p>The Occidental Nuevo Vallarta***** (5-star) hotel is an all inclusive resort located in a privileged enclave amidst the stunning scenery of the Riviera Nayarit, where in the same morning it is possible to enjoy an idyllic beach and the best shopping and dining area. Located just 25 minutes from Puerto Vallarta International Airport, it is an easily accessible resort.</p><p>The rooms, distributed over 7 floors, have been designed and equipped in a sophisticated manner, to offer guests an unbeatable stay and include services such as room service, 24-hour reception and free parking at the hotel.</p><p>t has a variety of activities and excursions for all ages and tastes, including water sports such as diving and canoeing.</p><p>Gastronomy, within the All Inclusive program, has equally great prominence in the daily schedule, thanks to the hotel’s 3 restaurants, and its proximity to the famous local fine dining in nearby Puerto Vallarta.</p><p>The Occidental Nuevo Vallarta has a particularly attentive staff, to ensure a pleasant stay while enjoying the privilege of an idyllic setting where the beach has the leading role.</p>",
            features: [
              {
                feature: "Los Olivos",
                description:
                  "<p>Magnificent à la carte restaurant with à la carte menu Italian food.Requires booking. A dress code applies. Restricted opening times for children under 12 years of age</p>",
              },
              {
                feature: "El Mariachi",
                description:
                  "<p>À la carte restaurant overlooking the sea. A laid-back place to enjoy delicious sandwiches without stopping your fun.The perfect option for an à la carte Mexican specialty dinner.</p>",
              },
              {
                feature: "Tokyo",
                description:
                  "<p>Japanese restaurant à la carte with teppanyaki table and sushi bar.Requires booking. A dress code applies. Restricted opening times for children under 12 years of age</p>",
              },
              {
                feature: "Royal Level Restaurant",
                description:
                  "<p>A gourmet restaurant perfect for the most discerning palates. À la carte menu offered. Exclusive to Royal Level guests.</p><p>Requires booking. A dress code applies. Restricted opening times for children under 12 years of age.</p>",
              },
              {
                feature: "Pool Bar",
                description:
                  "<p>A relaxed bar and a perfect place to enjoy a nice drink or refreshing cocktail.</p>",
              },
              {
                feature: "Snack Bar",
                description:
                  "<p>The snack Bar offers snacks and fast food and is easily designed. No restrictions</p>",
              },
              {
                feature: "Loung Bar",
                description:
                  "<p>Is located next to the lobby</p>",
              },

            ],
            gallery: [
              {
                url: "/puerto-vallarta/packages/occidental/occidental-hotel.jpg",
                text: "",
              },
              {
                url: "/puerto-vallarta/packages/occidental/occidental-hotel-1.jpg",
                text: "",
              },
              {
                url: "/puerto-vallarta/packages/occidental/occidental-hotel-2.jpg",
                text: "",
              },
              {
                url: "/puerto-vallarta/packages/occidental/occidental-hotel-3.jpg",
                text: "",
              },
              {
                url: "/puerto-vallarta/packages/occidental/occidental-hotel-4.jpg",
                text: "",
              },
              {
                url: "/puerto-vallarta/packages/occidental/occidental-hotel-5.jpg",
                text: "",
              },
              {
                url: "/puerto-vallarta/packages/occidental/occidental-kids.jpg",
                text: "",
              },
              {
                url: "/puerto-vallarta/packages/occidental/occidental-beach.jpg",
                text: "",
              },
            ],
          },
          rooms: [
            {
              name: "Deluxe Suite:",
              priceUSD: 599,
              description:
                "<p>Enjoy Fully equipped rooms, with double or 2 m beds. Garden or pool views</p>",
              galleryDescription: "Be our guest and see it for yourself.",
              gallery: [
                {
                  url: "/puerto-vallarta/packages/occidental/occidental-room.jpg",
                  text: "",
                },
                {
                  url: "/puerto-vallarta/packages/occidental/occidental-room2.jpg",
                  text: "",
                },
                {
                  url: "/puerto-vallarta/packages/occidental/occidental-room3.jpg",
                  text: "",
                },
                {
                  url: "/puerto-vallarta/packages/occidental/occidental-room4.jpg",
                  text: "",
                },
              ],
            },
          ],
          amenities: [
            "Free parking",
            "Adult pool",
            "Heated pool",
            "Special diet menus",
            "Tennis court",
            "Fishing",
            "Facial treatments",
            "Children Activities (Kid / Family Friendly)",
            "Full body massage",
            "Currency exchange",
            "Sun loungers / beach chairs",
            "Butler service",
            "24-hour front desk",
            "Laundry service",
            "Fitness Center with Gym / Workout Room",
            "Babysitting",
            "Hot tub",
            "Outdoor pool",
            "Evening entertainment",
            "Karaoke",
            "Kids club",
            "Indoor play area for children",
            "Concierge",
            "Sun umbrellas",
          ],
          location: {
            map:
              '<<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.374747633944!2d-105.2986725489438!3d20.69500170439503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842146a46e46544f%3A0x5d68ca51f9ff56e9!2sOccidental%20Nuevo%20Vallarta!5e0!3m2!1ses-419!2smx!4v1618461829583!5m2!1ses-419!2smx"  style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
          },
          reviews: [
            {
              author: "Kai M",
              city: "",
              comments:
                "<p>This place has so many fun things and great service! Erick, a worker there is very kind and is someone you want to be around. The food there is good and there are local vendors for things like snacks and fun stuff like jewelry. Everything about this hotel is amazing and is perfect for a first trip to Mexico.</p>",
              date: "April 2021",
              rating: 5,
            },
            {
              author: "Jaime D ",
              city: "",
              comments:
                "The Occidental has everything you need for a quiet and relaxing vacation. The service here was amazing! All employees were very helpful and attended to us very well. It was a relaxing trip. Thank you, Luis, for being so attentive!",
              date: "March 2021",
              rating: 5,
            },
            {
              author: "Beata S",
              city: "Chicago",
              comments:
                "My mother and I love this resort - it is family friendly while still maintaining activities and experiences for adults only as well. She has been coming here for 20 years and will not go anywhere else! The cleanliness is exceptional and the staff accomodates above and beyond. Special thanks to Jessica and Vicente for their energy as the Entertainment/Activity staff, as well as Luis Fernando, David, Erick, and all of the other Restaurant staff that assisted us during our stay. Gracias! ~ Beata and Fran from Chicago",
              date: "March 2021",
              rating: 5,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Los Cabos",
      slug: "los-cabos",
      image: "/home/destination-cabo-san-lucas.jpg",
      video: "https://www.youtube.com/embed/tQILXCyLpHg?controls=0",
      carousel: [
        {
          url: "/cabo-san-lucas/destination/los-cabos-arco.jpg",
          text: "Los Cabos",
        },
        {
          url: "/cabo-san-lucas/destination/los-cabos-cabo-pulmo.jpg",
          text: "Los Cabos",
        },
        {
          url: "/cabo-san-lucas/destination/los-cabos-camellos.jpg",
          text: "Los Cabos",
        },
        {
          url: "/cabo-san-lucas/destination/los-cabos-kayak.jpg",
          text: "Los Cabos",
        },
        {
          url: "/cabo-san-lucas/destination/los-cabos_ballenas.jpg",
          text: "Los Cabos",
        },
      ],
      description:
        "<p>Los Cabos is a mixture of desertic vibe and beautiful beaches surrounded by amazing rock outcroppings, perfect adventurers looking for real day and night action, or anyone looking for a chill place to lay down by the beach.</p><p>Located in Baja California Sur, a 20-mile corridor line connects San Jose del Cabos and Cabo San Lucas. You’ll love the horizon view with blue waters of Mar de Cortes matching with the rocky mounts of Los Arcos, a zone full of rich underwater life. Here you’ll find a perfect spot to get the perfect picture of the sunrise or dawn, sailing on a boat, or getting some drinks by The Marina</p><p>Besides its world-class resort properties and championship golf courses, Cabo San Lucas is also noted for its nightlife, always cheered up by live music and the Mexican fiesta spirit.</P>",
      activities: {
        description:
          "<p>Worldwide known for being one of Mexico’s most popular beach destinations, you probably only know the tip of the iceberg about this destination many have ended up calling their second home.</p><p>Los Cabos is considered the world's aquarium since it hosts one of the riches underwater fauna diversity, which makes it an excellent place for Scooba Diving. Do you like fishing? </p><p>Well, in Los Cabos many professional fishing tournaments take place, so bring our rod and hooks, for this is your chance to practice.</p><p>Since Los Cabos is the perfect combination of desert and beach, you can also take a camel, horse, or ATV ride around the dunes of Los Cabos. You can also hop on a boat to take a tour around the most important landmark of this side of Mexico, Los Arcos, also called “The End of the world” is a rocky natural formation just at the tip of the Baja California Peninsula, where, in the right seasons, you’ll have the chance to see whales, dolphins, and sting-rays throwing a beautiful jumping show.</p>",
        gallery: [
          {
            url: "/cabo-san-lucas/activities/activities-1.jpg",
            text: "Dolphins",
          },
          {
            url: "/cabo-san-lucas/activities/activities-2.jpg",
            text: ">Private Boat",
          },
          {
            url: "/cabo-san-lucas/activities/activities-3.jpg",
            text: "Sun Set Cruises",
          },
          {
            url: "/cabo-san-lucas/activities/activities-4.jpg",
            text: "ATVs",
          },
          {
            url: "/cabo-san-lucas/activities/activities-5.jpg",
            text: "Camel Riding",
          },
          {
            url: "/cabo-san-lucas/activities/activities-6.jpg",
            text: "Kayaking",
          },
        ],
      },
      flights: [
        {
          city: "Los Ángeles",
          flightsPerDay: 38,
          time: "2 hrs 23 min",
        },
        {
          city: "Chicago",
          flightsPerDay: 14,
          time: "4 hrs 35 min",
        },
        {
          city: "Dallas",
          flightsPerDay: 8,
          time: "3 hrs 00 min",
        },
        {
          city: "San Francisco",
          flightsPerDay: 4,
          time: "3 hrs 05 min",
        },
        {
          city: "San Diego",
          flightsPerDay: 2,
          time: "2 hrs 05 min",
        },
      ],
      weather: {
        description:
          "<p>In Cabo San Lucas summer is quite hot with some cloudy days, but durring winter, we have comfortable  dry climate that is perfect for the end-of-the-year celebrations.</p>",
        seasons: [
          {
            name: "Winter",
            image: "/svg/winter.svg",
            temperature: "79ºF",
          },
          {
            name: "Spring",
            image: "/svg/spring.svg",
            temperature: "81ºF",
          },
          {
            name: "Summer",
            image: "/svg/summer.svg",
            temperature: "91ºF",
          },
          {
            name: "Fall",
            image: "/svg/fall.svg",
            temperature: "89ºF",
          },
        ],
      },
      packages: [
        {
          id: 5,
          name: "San Jose All Inclusive",
          slug: "San-jose-all-inclusive",
          image: "/cabo-san-lucas/packages/san-jose/san-jose-beach-2.jpg",
          includeInHome: false,
          soldOut: false,
          nights: 4,
          adults: 2,
          children: 2,
          plan: "All Inclusive",
          retailPriceUSD: 1605,
          priceUSD: 599,
          savings: "63%",
          headers: [
            {
              url: "/cabo-san-lucas/packages/san-jose/san-jose-resort-2.jpg",
              text: "",
            },
            {
              url: "/cabo-san-lucas/packages/san-jose/san-jose-resort.jpg",
              text: "",
            },
            {
              url: "/cabo-san-lucas/packages/san-jose/san-jose-resort-3.jpg",
              text: "",
            },
          ],
          offer: {
            rating: 5,
            includes: [
              "This amazing package includes 5 days and 4 nights for 2 adults and up to 2 children 12 and under.",
              "All Inclusive plan.",
              "Stay in a Standard Room",
              "A Unique Dining Experience With Gourmet All Inclusive Making Your Stay the Most Pleasurable.",
              "Beds With Dazzling White, Feather Pillows, Ultra Plush Duvet, White Luxury Bed Linens, and Latest Technology.",
              "Located On A Spectacular Sandy Beach Just Minutes from Downtown.",
            ],
            description:
              "<p><em>*Additional nights are available starting at $229USD.</em></p>",
            allInclusive: [
              "Limitless access to gourmet a la carte dining options without reservations required",
              "Unlimited international and domestic top-shelf spirits",
              "24-hour room and concierge services",
              "Pool and beach wait service",
              "Daily refreshed mini-bar with soft drinks, juice, bottled water and beer",
              "Daily maid service",
              "Endless daytime activities and live nightly entertainment",
              "Theme parties, oceanfront bars and entertainment venues",
              "No wristbands required",
            ],
          },
          resort: {
            description:
              "<p>Only 10 minutes from downtown San Jose del Cabo, this brand-new resort is located along the Sea of Cortez. 454 rooms offer sea views with swim out options available. Take your pick from four swimming pools, a day at the spa, or lounging on the beach. A great pick for families too, with a kids and teens club and a children's pool.</p><p>With haute cuisine, fine beverages, a warm service, and a private area on the beach complemented with Balinese beds for your comfort, the Krystal Grand Los Cabos Hotel is the best accommodation choice for your dream beach holiday in Mexico. Take respite from everyday life in the rooms of this new resort in Los Cabos, with stunning views to the beach, access to the Sky Lounge and even a private swimming pool.</p><p>Enjoy an exclusive haute cuisine and the widest variety of local and international recipes at the restaurants and bars of the Reflect Krystal Grand Los Cabos.</p>",
            features: [],
            gallery: [
              {
                url: "/cabo-san-lucas/packages/san-jose/san-jose-pool.jpg",
                text: "",
              },
              {
                url: "/cabo-san-lucas/packages/san-jose/san-jose-hotel-3.jpg",
                text: "",
              },
              {
                url: "/cabo-san-lucas/packages/san-jose/san-jose-beach.jpg",
                text: "",
              },
              {
                url: "/cabo-san-lucas/packages/san-jose/san-jose-hotel-4.jpg",
                text: "",
              },
              {
                url: "/cabo-san-lucas/packages/san-jose/san-jose-hotel-6.jpg",
                text: "",
              },
              {
                url:
                  "/cabo-san-lucas/packages/san-jose/san-jose-restaurant.jpg",
                text: "",
              },
              {
                url: "/cabo-san-lucas/packages/san-jose/san-jose-hotel-7.jpg",
                text: "",
              },
              {
                url: "/cabo-san-lucas/packages/san-jose/san-jose-beach-2.jpg",
                text: "",
              },
              {
                url:
                  "/cabo-san-lucas/packages/san-jose/san-jose-restaurant-2.jpg",
                text: "",
              },
              {
                url: "/cabo-san-lucas/packages/san-jose/san-jose-hotel-2.jpg",
                text: "",
              },
              {
                url: "/cabo-san-lucas/packages/san-jose/san-jose-hotel-5.jpg",
                text: "",
              },
              {
                url: "/cabo-san-lucas/packages/san-jose/san-jose-hotel.jpg",
                text: "",
              },
            ],
          },
          rooms: [
            {
              name: "Standard Room",
              priceUSD: 599,
              description:
                "1 king or 2 double beds, full bathroom with tub, private terrace, desert or garden view, safety deposit box, cable TV and DVD player, fully equipped kitchenette. Guest rooms and suites are decorated in a striking, contemporary European design, with dark woods, plush white bedding and curtains and red accents for a touch of traditional Mexico. Living spaces feature contemporary earth tones.</p>",
              galleryDescription: "Be our guest and see it for yourself.",
              gallery: [
                {
                  url: "/cabo-san-lucas/packages/san-jose/san-jose-room-4.jpg",
                  text: "",
                },

                {
                  url: "/cabo-san-lucas/packages/san-jose/san-jose-room-4.jpg",
                  text: "",
                },
                {
                  url: "/cabo-san-lucas/packages/san-jose/san-jose-room-2.jpg",
                  text: "",
                },
                {
                  url: "/cabo-san-lucas/packages/san-jose/san-jose-room.jpg",
                  text: "",
                },
              ],
            },
          ],
          amenities: [
            "24-Hour Front Desk",
            "All-Inclusive",
            "ATM Machine",
            "Beach Front",
            "Car Rental Desk",
            "Children's Play Area",
            "Children's Program",
            "Coffee Shop",
            "Concierge",
            "Currency Exchange",
            "Elevator / Lift",
            "Fine Dining",
            "Fishing (nearby)",
            "Fitness Center",
            "FREE Parking",
            "Gift Shop",
            "Golf",
            "Guest Activity Desk",
            "Ice Machine",
            "Jacuzzi/Hot Tub",
            "Kids Club",
            "Lounge/Bar",
            "Massage Therapist",
            "Medical Services",
            "Multilingual Staff",
            "Non-Motorized Water Sports",
            "On-Site Entertainment",
            "On-Site Travel Agency",
            "Outdoor Pool",
            "Parking",
            "Pool Area Bar",
            "Room Service",
            "Security Guard",
            "Sun Deck",
            "Valet Parking",
            "Valet Parking",
            "Wake-Up Service",
            "Water Sports",
            "Wireless Internet Access",
          ],
          location: {
            map:
              '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7134.8142014719215!2d-109.71303807409267!3d23.02597210797184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86af509cf2acef51%3A0x50eb583669188a8!2sKrystal%20Grand%20Los%20Cabos!5e0!3m2!1ses-419!2smx!4v1617683955506!5m2!1ses-419!2smx" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
          },
          reviews: [
            {
              author: "Diane R",
              city: "Baltimore, Maryland",
              comments:
                "What a lovely place to stay! If you are looking for peace and relaxation in a bustling world, this is where you need to be. We had done a time share exchange and had the meal plan and ate every single meal at the resort. Waiters and staff were gracious and helpful. Jesus, our waiter for lunch and dinner, went out of his way to help with local information and any special food requests. Abraham, who took care of us at dinner was the same, although his English was not quite as good as Jesus......no matter......and we have -0- Spanish. Christian at the sushi bar was also great for evening cocktails. Our room was ocean front and we could hear the sound of the surf all night. Our two day trips into Cabo San Lucas convinced us that we had stayed in the right place. Nice to visit but wouldn't want to stay in town! Be sure to visit San Jose del Cabo and walk the Estuary Trail. Next time we will rent a car and travel up the coast to all the small fishing villages.............can't wait to go back!",
              date: "",
              rating: 5,
            },
            {
              author: "Steve Knowlton",
              city: "Otsego, Michigan",
              comments:
                "The Krystal Grand Resort was top notch in every aspect of our stay! Always cheerful and professional. Excellent food and service with a smile! Our room was always clean and housekeeping was in and out without us seeing them work.",
              date: "",
              rating: 5,
            },
            {
              author: "Graciela",
              city: "Sacramento, California",
              comments:
                "Amazing! The staff is extremely friendly and helpful. Christian the activities coordinator was AWESOME we have not been able to stop talking about him, this young man is a jack of all trades! Tania the bar tender at the swim-bar was easy going, funny and kept the drinks flowing. Jesus the lead server was great and helpful, explained everything we had questions on and also got the food out quickly. I was extremely amazed, this resort was everything I was looking for this trip. I can't wait to go back, I've been recommending it to everyone I know.",
              date: "",
              rating: 5,
            },
          ],
        },
        {
          id: 6,
          name: "Faro All Inclusive",
          slug: "faro-all-inclusive",
          image: "/cabo-san-lucas/packages/faro/faro-hotel.jpg",
          includeInHome: true,
          soldOut: false,
          nights: 4,
          adults: 2,
          children: 2,
          plan: "All Inclusive",
          retailPriceUSD: 1991,
          priceUSD: 599,
          savings: "70%",
          headers: [
            {
              url: "/cabo-san-lucas/packages/faro/faro-resort-3.jpg",
              text: "",
            },
            {
              url: "/cabo-san-lucas/packages/faro/faro-resort-2.jpg",
              text: "",
            },
            {
              url: "/cabo-san-lucas/packages/faro/faro-resort.jpg",
              text: "",
            },
          ],
          offer: {
            rating: 5,
            includes: [
              "This amazing package includes 5 days and 4 nights for 2 adults and up to 2 children 12 and under.",
              "All Inclusive plan.",
              "Stay in a luxury Superior Room.",
            ],
            description:
              "<p><em>*Additional nights are available starting at $229USD.</em></p>",
            allInclusive: [
              "5 restaurants including ",
              "2 a la carte experiences",
              "3 bars",
              "Mini Club (children 4-11 yeards old)",
              "Gym",
              "Squash court",
              "Tennis courts",
              "Paddle",
              "Minibar in the room is stocked with beer, water and sodas.",
            ],
          },
          resort: {
            description:
              "<p>This all inclusive resort is located in front of the stunning Sea of Cortes. It is a resort for enjoying the tranquility of Los Cabos, the chosen destination of many famous Hollywood stars. Within just 2 miles away, you can find San Jose del Cabo, a colonial town well known for its cultural ambiance and varied gastronomical offering.</p><p>This luxurious resort is just 5 minutes from downtown San José del Cabo. It offers comfortable rooms and suites where you can pamper yourself and enjoy a well earned rest while you take in the stunning views of the ocean.</p><p>The resort boasts 350 luxurious rooms and suites distributed over 3 buildings: Luna, Estrella and Sol. All rooms and suites have a private balcony, most of them with views of the Sea of Cortes. These are fully equipped with first class comforts to make your stay a pleasurable and memorable experience.</p>",
            features: [],
            gallery: [
              {
                url: "/cabo-san-lucas/packages/faro/faro-beach.jpg",
                text: "",
              },
              {
                url: "/cabo-san-lucas/packages/faro/faro-hotel.jpg",
                text: "",
              },
              {
                url: "/cabo-san-lucas/packages/faro/faro-rest-2.jpg",
                text: "",
              },
              {
                url: "/cabo-san-lucas/packages/faro/faro-beach-2.jpg",
                text: "",
              },
              {
                url: "/cabo-san-lucas/packages/faro/faro-hotel-2.jpg",
                text: "",
              },
              {
                url: "/cabo-san-lucas/packages/faro/faro-rest.jpg",
                text: "",
              },
              {
                url: "/cabo-san-lucas/packages/faro/faro-spa.jpg",
                text: "",
              },
              {
                url: "/cabo-san-lucas/packages/faro/faro-gym.jpg",
                text: "",
              },
            ],
          },
          rooms: [
            {
              name: "SSuperior Room",
              priceUSD: 599,
              description:
                "<p>The spacious, bright Superior rooms measure 495 ft² and feature a cheerful interior design and a welcoming terrace with views over the stunning gardens. They are a perfect space for couples or families who want to enjoy a comfortable stay at the beach. </p><p>These rooms feature a wide range of quality conveniences and facilities to fill your stay with pleasant sensations.</p><p>These rooms feature a wide range of quality conveniences and facilities to fill your stay with pleasant sensations.</p><p>Maximum room capacity:4 people (combinations of 3 adults and one child, or 2 adults and 2 children)</p>",
              galleryDescription: "Be our guest and see it for yourself.",
              gallery: [
                {
                  url: "/cabo-san-lucas/packages/faro/faro-room.jpg",
                  text: "",
                },

                {
                  url: "/cabo-san-lucas/packages/faro/faro-room-2.jpg",
                  text: "",
                },
                {
                  url: "/cabo-san-lucas/packages/faro/faro-room-3.jpg",
                  text: "",
                },
                {
                  url: "/cabo-san-lucas/packages/faro/faro-room-4.jpg",
                  text: "",
                },
              ],
            },
          ],
          amenities: [
            "Family environment",
            "6 restaurants including 3 a la carte experiences",
            "3 bars and theatre for nightly shows",
            "4 pools and 2 jacuzzis",
            "Spa & wellness center",
            "Mini Club (children 4-11 years old) and Juniors Club",
            "Wedding & Honeymoon Packages available",
            "Premium Level accommodations available",
            "Tours & Excursions",
            "Only 20 minutes away from the airport",
            "Large Convention Center with 10 breackout rooms",
            "**Some services may cause an additional cost.",
          ],
          location: {
            map:
              '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.413479319706!2d-109.69945598431293!3d23.045297984941666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86af509233e53db1%3A0x5000f4dac8284a72!2sBarcel%C3%B3%20Gran%20Faro%20Los%20Cabos!5e0!3m2!1ses-419!2smx!4v1617685523906!5m2!1ses-419!2smx"  style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
          },
          reviews: [
            {
              author: "Jan and Ched,",
              city: "Cochrane, Canada",
              comments:
                'This is a great spot....although it is not "new" it is very well maintained with beautiful pools and grounds. Our room ....overlooking pools and ocean was great, maid service good as well. The food is very good at both the "buffet" style and at the specialty dinners.We especially enjoyed the food and service in the premium lounge. In fact, we found service everywhere on the property to be wonderful...staff friendly,efficient and eager to please.',
              date: "",
              rating: 5,
            },
            {
              author: "Kerry R",
              city: "USA",
              comments:
                "This place was absolutely amazing!!! From the check in to the check out, everything about this resort was top notch! The food at the buffet was wonderful, the Al A Carte's were exquisite, the staff was so accommodating...!! This is my third time to Mexico and it was heads and tails above all other!!! Good work folks!",
              date: "",
              rating: 5,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Riviera Maya",
      slug: "riviera-maya",
      image: "/home/destination-mayan-riviera.jpg",
      video: "https://www.youtube.com/embed/ItwBfJl3GJQ?controls=0",
      carousel: [
        {
          url: "/mayan-riviera/destination/riviera-tulum.jpg",
          text: "Riviera Maya",
        },
        {
          url: "/mayan-riviera/destination/riviera-cenote.jpg",
          text: "Riviera Maya",
        },
        {
          url: "/mayan-riviera/destination/riviera-museum.jpg",
          text: "Riviera Maya",
        },
        {
          url: "/mayan-riviera/destination/riviera-coba.jpg",
          text: "Riviera Maya",
        },
        {
          url: "/mayan-riviera/destination/riviera-fish.jpg",
          text: "Riviera Maya",
        },
      ],
      description:
        "<p>The Riviera Maya is famous for its tourist corridor of white-sand beaches, scenic ruins and filled with cenotes. Also, luxurious resorts and eco touristic life is part of Riviera Maya. </p><p>Target areas for urbanization include the towns and villages of Puerto Aventuras, Akumal, Chemuyil, and Tulum.</p><p>Your vacations won't be the same once you visit all the amazing places that this beautiful destination will give you.</P>",
      activities: {
        description:
          "<p>Get in touch with nature and good vibes in this magical zone of the Yucatan Peninsula. Like in Cancun, Riviera Maya shares its blue waters, white sands paradise look, just adding the long shoreline full of beautiful towns you need to see.</p><p>One of these towns is Playa del Carmen, where you can enjoy either a spa day or party Mexico-style. Another important town you can visit is Tulum, with its iconic by-the-shore ruins and many beach spots, you’ll get in touch with outer and inner peace. </p><p>Finally, don’t forget to taste any of the delicious traditional dishes from the zone, Cochinita Pibil, lime soup, or any of its diverse variety of tacos, all of them delicacies you can’t miss.</p>",
        gallery: [
          {
            url: "/mayan-riviera/activities/activities-1.jpg",
            text: "Beach",
          },
          {
            url: "/mayan-riviera/activities/activities-2.jpg",
            text: ">Playa del Carmen",
          },
          {
            url: "/mayan-riviera/activities/activities-3.jpg",
            text: "Cozumel",
          },
          {
            url: "/mayan-riviera/activities/activities-4.jpg",
            text: "Isla Mujeres",
          },
          {
            url: "/mayan-riviera/activities/activities-5.jpg",
            text: "Theme parks",
          },
          {
            url: "/mayan-riviera/activities/activities-6.jpg",
            text: "Cenotes",
          },
        ],
      },
      flights: [
        {
          city: "Houston",
          flightsPerDay: 4,
          time: "2 hrs 15 min",
        },
        {
          city: "Chicago",
          flightsPerDay: 14,
          time: "4 hrs 35 min",
        },
        {
          city: "Dallas",
          flightsPerDay: 8,
          time: "3 hrs 00 min",
        },
        {
          city: "San Francisco",
          flightsPerDay: 4,
          time: "3 hrs 05 min",
        },
        {
          city: "San Diego",
          flightsPerDay: 2,
          time: "2 hrs 05 min",
        },
      ],
      weather: {
        description:
          "<p>Perfect beach weather most of the year, hot and sunny, except for the winters, that generally bring light rains. </p>",
        seasons: [
          {
            name: "Winter",
            image: "/svg/winter.svg",
            temperature: "73ºF",
          },
          {
            name: "Spring",
            image: "/svg/spring.svg",
            temperature: "77ºF",
          },
          {
            name: "Summer",
            image: "/svg/summer.svg",
            temperature: "82ºF",
          },
          {
            name: "Fall",
            image: "/svg/fall.svg",
            temperature: "81ºF",
          },
        ],
      },
      packages: [
        {
          id: 7,
          name: "Ocean Riviera Paradise",
          slug: "ocean-riviera-paradise-all-inclusive",
          image: "/mayan-riviera/packages/ocean-paradise/ocean-hotel-6.jpg",
          includeInHome: true,
          soldOut: false,
          nights: 4,
          adults: 2,
          children: 2,
          plan: "All Inclusive",
          retailPriceUSD: 2000,
          priceUSD: 599,
          savings: "71%",
          headers: [
            {
              url: "/mayan-riviera/packages/ocean-paradise/ocean-resort-2.jpg",
              text: "",
            },
            {
              url: "/mayan-riviera/packages/ocean-paradise/ocean-resort-3.jpg",
              text: "",
            },
            {
              url: "/mayan-riviera/packages/ocean-paradise/ocean-resort.jpg",
              text: "",
            },
          ],
          offer: {
            rating: 5,
            includes: [
              "This amazing package includes 5 days and 4 nights for 2 adults and up to 2 children 12 and under.",
              "All Inclusive plan.",
              "Stay in a Standard Room",
              "A Unique Dining Experience With Gourmet All Inclusive Making Your Stay the Most Pleasurable.",
              "Beds With Dazzling White, Feather Pillows, Ultra Plush Duvet, White Luxury Bed Linens, and Latest Technology.",
              "Located On A Spectacular Sandy Beach Just Minutes from Downtown.",
            ],
            description:
              "<em>Additional nights are available starting at $229USD.</em>",
            allInclusive: [
              "At Ocean Riviera Paradise, guests can relax without having to worry about a thing – 24 hours a day.",
              "Meals, national and international alchool, cocktails and snacks.",
              "Buffet and à la carte restaurants without having to book in advance.",
            ],
          },
          resort: {
            description:
              "<p>The Ocean Riviera Paradise is a newly-built five-star resort located on the Riviera Maya seafront, very close to Playa del Carmen. It is noteworthy for its huge size, in addition to its modern architecture and striking Mediterranean-inspired interior design.</p><p>The resort benefits from multiple swimming pools, one of which is on the beach itself, just a few meters from the sea, as well as lush native vegetation, 10 restaurants, 12 bars and a sports area. It also features Privilege, Exclusive Rooms and Services, a Despacio Spa Centre, Dive It! diving centre and a wide range of entertainment options for the whole family. </p><p>The Ocean Riviera Paradise offers a great variety of culinary attractions with 10 themed restaurants and 11 bars within the resort.",
            features: [
              {
                feature: "Amaranto Restaurant",
                description:
                  "<p>Buffet restaurant featuring international cuisine with show cooking, gastronomic corners with specialities from various countries and themed nights. Open every day for breakfast, lunch and dinner.</p>",
              },
              {
                feature: "Villa Marina Restaurant",
                description:
                  "<p>Buffet restaurant featuring international cuisine with show cooking, gastronomic corners and themed nights</p>",
              },
              {
                feature: "La Locanda Restaurant",
                description:
                  "<p>A la carte Italian restaurant. This restaurant offers a delicious variety of traditional pastas and sauces, as well as a large selection of Italian wines, specially chosen to create the perfect pairing with the dishes on the menu. </p>",
              },
              {
                feature: "Margarita Restaurant",
                description:
                  "<p>A la carte restaurant featuring a varied selection of Mexican dishes.</p>",
              },
              {
                feature: "Bluemoon Restaurant",
                description:
                  "<p>Romantic a la carte restaurant with signature cuisine. For guests 18 and over. The breakfast service at the Bluemoon Restaurant is exclusively for guests of El Beso and the à la carte dinner service is available for all the resort’s adult guests.</p>",
              },

              {
                feature: "Sakura Restaurant",
                description:
                  "<p>Restaurant with Oriental cuisine and Teppanyaki grills.</p>",
              },
              {
                feature: "Pez Vela Restauran:",
                description:
                  "<p>A la carte restaurant located on the beach, with a tropical ambience and Caribbean flavors.</p>",
              },
              {
                feature: "Route 66 Restaurant",
                description:
                  "<p>Typical American à la carte restaurant with a 1950s/60s vibe and a fantastic food truck. Specializing in burgers, BBQ, etc. Late snacks available from 10:30 pm.</p>",
              },
              {
                feature: "Mike's Coffee",
                description:
                  "<p>Specializing in tea, coffee and pastries, as well as a wide selection of smoothies and milkshakes, ideal for cooling down when the weather gets hot.</p>",
              },
              {
                feature: "Ice cream parlour:",
                description:
                  "<p>A colorful ice cream shop with a range of flavors and toppings.</p>",
              },
            ],

            gallery: [
              {
                url: "/mayan-riviera/packages/ocean-paradise/ocean-hotel.jpg",
                text: "",
              },
              {
                url: "/mayan-riviera/packages/ocean-paradise/ocean-hotel-2.jpg",
                text: "",
              },
              {
                url: "/mayan-riviera/packages/ocean-paradise/ocean-hotel-3.jpg",
                text: "",
              },
              {
                url: "/mayan-riviera/packages/ocean-paradise/ocean-hotel-4.jpg",
                text: "",
              },
              {
                url: "/mayan-riviera/packages/ocean-paradise/ocean-hotel-5.jpg",
                text: "",
              },
              {
                url: "/mayan-riviera/packages/ocean-paradise/ocean-hotel-6.jpg",
                text: "",
              },
              {
                url: "/mayan-riviera/packages/ocean-paradise/ocean-hotel-7.jpg",
                text: "",
              },
              {
                url: "/mayan-riviera/packages/ocean-paradise/ocean-hotel-8.jpg",
                text: "",
              },
              {
                url: "/mayan-riviera/packages/ocean-paradise/ocean-kids.jpg",
                text: "",
              },
              {
                url: "/mayan-riviera/packages/ocean-paradise/ocean-kids-2.jpg",
                text: "",
              },
              {
                url:
                  "/mayan-riviera/packages/ocean-paradise/ocean-restaurant.jpg",
                text: "",
              },
            ],
          },
          rooms: [
            {
              name: "Daisy Junior Suite",
              priceUSD: 599,
              description:
                "<p>Daisy Junior Suite is located in front of the water park for children and right next to the main buffet restaurant. The max capacity for this unit is 4 adults and 1 children. It can be garden or pool view based on availability.</p>",
              galleryDescription: "Be our guest and see it for yourself.",
              gallery: [
                {
                  url: "/mayan-riviera/packages/ocean-paradise/ocean-room.jpg",
                  text: "",
                },

                {
                  url:
                    "/mayan-riviera/packages/ocean-paradise/ocean-room-2.jpg",
                  text: "",
                },
                {
                  url:
                    "/mayan-riviera/packages/ocean-paradise/ocean-room-3.jpg",
                  text: "",
                },
                {
                  url:
                    "/mayan-riviera/packages/ocean-paradise/ocean-room-4.jpg",
                  text: "",
                },
              ],
            },
          ],
          amenities: [
            "Banquet Facility",
            "Business Services",
            "Children's Play Area",
            "Children's Program",
            "Complimentary Continental Breakfast",
            "Concierge",
            "Conference facilities",
            "Dry Cleaning Service",
            "Fitness Center",
            "Game room",
            "Jacuzzi/Hot Tub",
            "Kids Club",
            "Laundry Facilities",
            "Lounge/Bar",
            "Massage Therapist",
            "Multilingual Staff",
            "Multiple Swimming Pools",
            "Non-Smoking Rooms",
            "On-Site Entertainment",
            "Outdoor Pool",
            "Parking",
            "Pool Area Bar",
            "Pool Area Bar",
            "Restaurant",
            "Room Service",
            "Sun Deck",
            "Tennis Courts",
            "Wake-Up Service",
            "Wheelchair Accessible",
            "Wireless Internet Access",
          ],
          location: {
            map:
              '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.0941719184343!2d-87.03221418434241!3d20.665747386196106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e5d3ab070a661%3A0xd1119c2028197725!2sOcean%20Paradise!5e0!3m2!1ses-419!2smx!4v1617730795438!5m2!1ses-419!2smx"  style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
          },
          reviews: [
            {
              author: "Diane R",
              city: "Baltimore, Maryland",
              comments:
                "What a lovely place to stay! If you are looking for peace and relaxation in a bustling world, this is where you need to be. We had done a time share exchange and had the meal plan and ate every single meal at the resort. Waiters and staff were gracious and helpful. Jesus, our waiter for lunch and dinner, went out of his way to help with local information and any special food requests. Abraham, who took care of us at dinner was the same, although his English was not quite as good as Jesus......no matter......and we have -0- Spanish. Christian at the sushi bar was also great for evening cocktails. Our room was ocean front and we could hear the sound of the surf all night. Our two day trips into Cabo San Lucas convinced us that we had stayed in the right place. Nice to visit but wouldn't want to stay in town! Be sure to visit San Jose del Cabo and walk the Estuary Trail. Next time we will rent a car and travel up the coast to all the small fishing villages.............can't wait to go back!",
              date: "",
              rating: 5,
            },
            {
              author: "Steve Knowlton",
              city: "Otsego, Michigan",
              comments:
                "The Krystal Grand Resort was top notch in every aspect of our stay! Always cheerful and professional. Excellent food and service with a smile! Our room was always clean and housekeeping was in and out without us seeing them work.",
              date: "",
              rating: 5,
            },
            {
              author: "Graciela",
              city: "Sacramento, California",
              comments:
                "Amazing! The staff is extremely friendly and helpful. Christian the activities coordinator was AWESOME we have not been able to stop talking about him, this young man is a jack of all trades! Tania the bar tender at the swim-bar was easy going, funny and kept the drinks flowing. Jesus the lead server was great and helpful, explained everything we had questions on and also got the food out quickly. I was extremely amazed, this resort was everything I was looking for this trip. I can't wait to go back, I've been recommending it to everyone I know.",
              date: "",
              rating: 5,
            },
          ],
        },
        {
          id: 8,
          name: "Esmeralda Inclusive",
          slug: "esmeralda-all-inclusive",
          image: "/mayan-riviera/packages/esmeralda/esmeralda-hotel-5.jpg",
          includeInHome: false,
          soldOut: false,
          nights: 4,
          adults: 2,
          children: 2,
          plan: "All Inclusive",
          retailPriceUSD: 1899,
          priceUSD: 599,
          savings: "69%",
          headers: [
            {
              url: "/mayan-riviera/packages/esmeralda/esmeralda-hotel.jpg",
              text: "",
            },
            {
              url: "/mayan-riviera/packages/esmeralda/esmeralda-hotel-2.jpg",
              text: "",
            },
            {
              url: "/mayan-riviera/packages/esmeralda/esmeralda-hotel-3.jpg",
              text: "",
            },
          ],
          offer: {
            rating: 5,
            includes: [
              "This amazing package includes 5 days and 4 nights for 2 adults and up to 2 children 12 and under.",
              "Stay in a comfortable Deluxe Room in All Inclusive plan..",
            ],
            description:
              "<p><em>*Additional nights are available starting at $229USD.</em></p>",
            allInclusive: [
              "24-Hours Deluxe All-Inclusive Resort",
              "Dedicated Concierge in each room block",
              "Unlimited Domestic and International Beverages, beer, soft drinks, wine, cocktails and bottled water",
              "Unlimited dining at 6 specialty a-la-carte restaurants, all with Air-Conditioning",
              "In-Room Mini-bar",
              "Free Wi-Fi in Lobby and room area provided for 01 device, from 02 devices or more extra charges may apply",
              "One of the Largest Spas in Riviera Maya ($)",
              "All Meals Included Every Day (Buffet Breakfast, Buffet Lunch, Buffet or a la Carte Dinner)",
              "Snacks",
              "24-Hour Room Service (fees apply)",
              "Waiter Service at the Pool",
              "Water sports: Windsurfing, Sailing and Kayaking (depending on ocean conditions)",
              "Waiter Service on the Beach",
              "Kids Club (nursery, mini-cafeteria, video game room, playground, sports activities)",
              "Juniors Club",
            ],
          },
          resort: {
            description:
              '<p>The hotel BlueBay Grand Esmeralda is located in a privileged enclave just south of Cancun in the natural area of Riviera Maya, among beaches with turquoise clear water, fine sand and archaeological sites. Surrounded by jungle and mangrove swamps and a private beachfront of more than 500 meters, this exquisite resort combines elegant Mayan touches with contemporary design and a wide range of services to please the most demanding traveler.</p><p>This luxurious 5-star hotel consists of 979 elegant guest rooms finely decorated, overlooking the sea or the beautiful landscaped grounds, and spread over 8 buildings in an area of 180 hectares of beachfront. The resort offers all the facilities to enjoy and relax in a modern Spa of 2,500 m and a fully equipped gym. And to satisfy your taste buds, during your stay BlueBay Grand Esmeralda offers a wide variety of restaurants for you to enjoy more creative dishes made with the best products. Do not forget to book dinner at "Don Isi" Gourmet Mexican restaurants, where you will find the most significant specialties of each region of Mexico. A real treat for the palate of the most demanding traveler.</p><p>To satisfy your taste buds, BlueBay Grand Esmeralda offers a wide variety of restaurants for you to enjoy more creative dishes made with the best products.</p>',
            features: [
              {
                feature: "Festival Restaurant",
                description: "<p>Offers nightly themed buffet dinners.</p>",
              },
              {
                feature: "L'Atelier",
                description:
                  "<p>Features French and Mediterranean cuisine with live cooking demonstrations in an open kitchen.</p>",
              },
              {
                feature: "Don Isi",
                description: "<p>Traditional Mexican cuisine.</p>",
              },
              {
                feature: "Di Rossi",
                description: "<p>Features creative Italian specialties.</p>",
              },
              {
                feature: "Jaal-Ha",
                description:
                  "<p>Offers an extensive buffet with a sampling of international culinary options.</p>",
              },
            ],
            gallery: [
              {
                url: "/mayan-riviera/packages/esmeralda/esmeralda-beach.jpg",
                text: "",
              },
              {
                url: "/mayan-riviera/packages/esmeralda/esmeralda-pool.jpg",
                text: "",
              },
              {
                url: "/mayan-riviera/packages/esmeralda/esmeralda-pool-2.jpg",
                text: "",
              },
              {
                url: "/mayan-riviera/packages/esmeralda/esmeralda-pool-3.jpg",
                text: "",
              },
              {
                url: "/mayan-riviera/packages/esmeralda/esmeralda-resort.jpg",
                text: "",
              },

              {
                url: "/mayan-riviera/packages/esmeralda/esmeralda-hotel-4.jpg",
                text: "",
              },
              {
                url: "/mayan-riviera/packages/esmeralda/esmeralda-gym.jpg",
                text: "",
              },
              {
                url: "/mayan-riviera/packages/esmeralda/esmeralda-spa.jpg",
                text: "",
              },
            ],
          },
          rooms: [
            {
              name: "Deluxe Room",
              priceUSD: 599,
              description:
                "<p>Spacious room with 2 double beds or 1 king size bed, elegant and finely furnished. From the balcony or terrace you can enjoy marvelous views of the beautiful garden surroundings.</p><ul> <li>Maximum occupancy: 4 people</li><li>Balcony/Terrace of 7m2</li><li>Folding extra beds allowed: 1/li><li>Room size: 35m2</li><li>Bed type: 2 double beds or 1 king size bed</li></ul>",

              gallery: [
                {
                  url: "/mayan-riviera/packages/esmeralda/esmeralda-room.jpg",
                  text: "",
                },

                {
                  url: "/mayan-riviera/packages/esmeralda/esmeralda-room-2.jpg",
                  text: "",
                },
                {
                  url: "/mayan-riviera/packages/esmeralda/esmeralda-room-3.jpg",
                  text: "",
                },
                {
                  url: "/mayan-riviera/packages/esmeralda/esmeralda-room-4.jpg",
                  text: "",
                },
              ],
            },
          ],
          amenities: [
            "24-Hour Front Desk",
            "All-Inclusive",
            "Babysitting",
            "Banquet Facility",
            "Beach Front",
            "Beauty Shop/Salon",
            "Business Services",
            "Car Rental Desk",
            "Children's Play Area",
            "Children's Program",
            "Coffee Shop",
            "Complimentary Use of Bathrobe and Slippers",
            "Concierge",
            "Currency Exchange",
            "Dry Cleaning Service",
            "Elevator / Lift",
            "Exterior Corridors",
            "Fine Dining",
            "Fishing (nearby)",
            "Fitness Center",
            "FREE Area Shuttle",
            "FREE Parking",
            "Gift Shop",
            "Golf",
            "Guest Activity Desk",
            "Honeymoon Amenities",
            "Ice Machine",
            "Jacuzzi/Hot Tub",
            "Kiddie Pool",
            "Kids Club",
            "Lounge/Bar",
            "Massage Therapist",
            "Medical Services",
            "Multilingual Staff",
            "Multiple Swimming Pools",
            "Non-Motorized Water Sports",
            "On-Site Convenience Store",
            "On-Site Entertainment",
            "On-Site Travel Agency",
            "Outdoor Pool",
            "Parking",
            "Pool Area Bar",
            "Restaurant",
            "Room Service",
            "Security Guard",
            "Spa Services",
            "Sun Deck",
            "Valet Parking",
            "Wake-Up Service",
            "Water Sports",
            "Wireless Internet Access",
          ],
          location: {
            map:
              '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25107.962311760784!2d-87.01938541997363!3d20.697188608343904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5ba3b400a8b933%3A0xff9b4c2963a47f3e!2sBlueBay%20Grand%20Esmeralda!5e0!3m2!1ses-419!2smx!4v1617735633396!5m2!1ses-419!2smx" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
          },
          reviews: [
            {
              author: "Steve V",
              city: "Dayton, Ohio",
              comments:
                "We have stayed here several times and we look forward to our stay every time for the gorgeous views and our friends Ruperta and Candido in the buffet restaurant near the beach. They always always always have a smile on their faces and are non stop working and checking with us to make sure we are happy. Thank you for a great staff!",
              date: "",
              rating: 5,
            },
            {
              author: "Oknitro",
              city: "Vernon, British Columbia, Canada",
              comments:
                "Took my wife and teenage sons here for xmas. the staff are all amazing, the rooms were clean with great AC, the food were unbeatable. Would come in an instant. Spent a couple days on the Beach, which was day, but a day trip into Playa gave us the greatest beach experience! rest of the time was spent poolside with drinks a flowin. Loved this resort, it came recommended from friends and Ill be recommmending myself. Would definitely go back!",
              date: "",
              rating: 5,
            },
          ],
        },
        {
          id: 9,
          name: "Xpu Ha Resort All Inclusive",
          slug: "xpu-ha-resort-all-inclusive",
          image: "/mayan-riviera/packages/xpu-ha/xpu-ha-pool-2.jpg",
          includeInHome: false,
          soldOut: true,
          nights: 4,
          adults: 2,
          children: 2,
          plan: "All Inclusive",
          retailPriceUSD: 1899,
          priceUSD: 499,
          savings: "74%",
          headers: [
            {
              url: "/mayan-riviera/packages/xpu-ha/xpu-ha-resort.jpg",
              text: "",
            },
            {
              url: "/mayan-riviera/packages/xpu-ha/xpu-ha-resort-2.jpg",
              text: "",
            },
          ],
          offer: {
            rating: 5,
            includes: [
              "This is a great value package that includes 5 days and 4 nights for 2 adults and 2 children 5 and under.",
              "Stay in a comfortable Deluxe Jacuzzi Room in All Inclusive plan.",
              "Enjoy Flavorful Mexican Dishes, Fresh Sushi And Other Cuisine At The 3 Restaurants",
              "Ecological Resort With On Site Zoo With Various Exotic Animals The Children Will Enjoy",
            ],
            description:
              "<p><em>*Additional nights are available starting at $229USD.</em></p>",
            allInclusive: [
              "Deluxe Room Bungalow Style with Double Jacuzzi Accommodations with private large terrace with jungle or cenotes views!",
              "All Meals A la Carte Included Daily (Breakfast, Lunch and Dinner at any of the resort`s restaurants. All meals are gourmet style)",
              "Unlimited Domestic and International Beverages",
              "Minibar with beer, sodas and water",
              "Daily Activities Program including snorkeling in a cenote river where a manaties family lives",
              "Ecological Resort with animals on premises, jaguar, monkeys, deers, crocodiles and more! Including one aviary plus turtles and fish in the cenotes.",
              "FREE Use of Bicycles",
              "Kids Club and Kids Water Park",
              "3 Restaurantsa la cartes",
              "3 Bars",
              "Complimentary Wi-Fi",
              "Fitness Center",
            ],
          },
          resort: {
            description:
              '<p>For those guests looking for a different kind of vacation, the Xpu Ha Resort and Spa Riviera Maya is the ultimate adventure for ecological and nature lovers. Immersed in the lush vegetation of the Riviera Maya, this 37-acre property offers an oasis of peaceful seclusion. Designed in harmony with its backdrop, the eco-friendly resort invites Guests to linger in its bungalow-style accommodations. When the place is the right one, our body blends with nature and invites you to co-exist with the flora and fauna in the most spectacular way. The hotel is located one hour from Cancun International Airport, a couple of minutes from the archeological site of Tulum, Xcaret, Xel-Ha and Playa del Carmen where you can enjoy exclusive restaurants and the best nightclubs in the area.</p><p>We have 144 rooms distinguished by its unique amenities "Hallmarks" which include: beds with dazzling white, Feather pillows, ultraplush duvet, shining white luxury bed linens, jacuzzis, leading-edge technology matters, DVD player in each room, In-Room iPod connectivity, Non-conventional design and more.</p><p>Discover the Delights Experience "The great little details to make your stay a memorable one" from a cocktail to Petite Fours in your room every morning and enjoy a rich and light breakfast in the "Early Bird Breakfast", delight with the best selection of Teas in our "Tea Time", and to end the day appreciate the sunset with a glass of sparkling wine in our exclusive "Sunset Corner" the exact minute in the right place.</p>',
            features: [],
            gallery: [
              {
                url: "/mayan-riviera/packages/xpu-ha/xpu-ha-beach.jpg",
                text: "",
              },
              {
                url: "/mayan-riviera/packages/xpu-ha/xpu-ha-hotel-2.jpg",
                text: "",
              },

              {
                url: "/mayan-riviera/packages/xpu-ha/xpu-ha-pool.jpg",
                text: "",
              },
              {
                url: "/mayan-riviera/packages/xpu-ha/xpu-ha-pool-2.jpg",
                text: "",
              },
            ],
          },
          rooms: [
            {
              name: "Deluxe Jacuzzi Room ",
              priceUSD: 499,
              description:
                "<p>This luxurious Deluxe Jacuzzi Room offers one king bed or two double beds with a jacuzzi with a scenic balcony or terrace. </p>",

              gallery: [
                {
                  url: "/mayan-riviera/packages/xpu-ha/xpu-ha-room.jpg",
                  text: "",
                },

                {
                  url: "/mayan-riviera/packages/xpu-ha/xpu-ha-room-2.jpg",
                  text: "",
                },
                {
                  url: "/mayan-riviera/packages/xpu-ha/xpu-ha-room-3.jpg",
                  text: "",
                },
                {
                  url: "/mayan-riviera/packages/xpu-ha/xpu-ha-room-4.jpg",
                  text: "",
                },
              ],
            },
          ],
          amenities: [
            "Concierge",
            "All-Inclusive",
            "Guest Activity Desk",
            "Beach Service",
            "Kiddie Pool",
            "Children's Play Area",
            "Fishing (nearby)",
            "Medical Services",
            "Fitness Center",
            "On-Site Convenience Store",
            "Kids Club",
            "Multilingual Staff",
            "On-Site Entertainment",
            "Restaurant",
            "Wireless Internet Access",
            "Spa Services",
            "Room Service",
            "24-Hour Front Desk",
            "Banquet Facility",
            "Coffee Shop",
            "Gift Shop",
            "Ice Machine",
            "Lounge/Bar",
            "Multiple Swimming Pools",
            "Sun Deck",
            "Water Sports",
            "Security Guard",
            "Car Rental Desk",
            "Complimentary Use of Bathrobe and Slippers",
            "Elevator / Lift",
            "Fine Dining",
            "Golf",
            "Jacuzzi/Hot Tub",
            "Massage Therapist",
            "Non-Motorized Water Sports",
            "Outdoor Pool",
            "Wake-Up Service",
          ],
          location: {
            map:
              '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.5425630539257!2d-87.25550228446352!3d20.483972986295992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e379a4f09605f%3A0x141dfad6063fc7b9!2sBel%20Air%20Riviera%20Maya!5e0!3m2!1ses-419!2smx!4v1617737048540!5m2!1ses-419!2smx"  style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
          },
          reviews: [
            {
              author: "Roxan",
              city: "Fonthill, Canada",
              comments:
                "This resort is an animal rescue and they definetly care about the rescues! We were unable to get into a couple of the areas because the vet and animal phsycologist were working with the animals. The animals were spread out over the resort so it was a really great experience to see the difference this reserve made to the rescues. Definitely worth seeing if you love animals.",
              date: "",
              rating: 5,
            },
            {
              author: "Agulu",
              city: "Lakeport, California",
              comments:
                "Great pool area for the kids! And fun for them to check out all the animals . I believe there's a animal show everyday!",
              date: "",
              rating: 5,
            },
            {
              author: "Vicki T",
              city: "Oakland, Maryland",
              comments:
                "Great opportunity to see and sometimes touch a wide variety of animals. I met an adorable spider monkey who loved to have his back scratched and was very excited each time I went to see him.",
              date: "",
              rating: 5,
            },
          ],
        },
      ],
    },
    {
      id: 4,
      name: "Cancun",
      slug: "cancun",
      image: "/home/destination-cancun.jpg",
      video: "https://www.youtube.com/embed/IVR8PXtqUI4?controls=0",
      carousel: [
        {
          url: "/cancun/destination/cancun-mar.jpg",
          text: "Cancun",
        },
        {
          url: "/cancun/destination/cancun-muelle.jpg",
          text: "Cancun",
        },
        {
          url: "/cancun/destination/cancun-familia.jpg",
          text: "Cancun",
        },
        {
          url: "/cancun/destination/cancun-letras.jpg",
          text: "Cancun",
        },
        {
          url: "/cancun/destination/cancun-tortuga.jpg",
          text: "Cancun",
        },
      ],
      description:
        "Cancun is a beautiful paradise located at the tip of the Yucatan peninsula. Be prepared to unveil the secrets of the Mexican ancient culture that is still visible all around this destination; well known for its spectacular turquoise beaches, its natural environment blended with the Mayan ruins and culture is a must for those who want to live an exotic and luxurious vacation.</p><p>Also, known for its wild landscapes, Cancun offers a wide variety of extreme adventures like zip lines, Scooba diving in coral reefs, swimming in cenotes, or parachute.</P><p>For the lovers' international cuisine, spectacular golf courses, sophisticated spa facilities, exclusive shopping centers, typical handicraft markets, and nightclubs, Cancun will give you unforgettable vacations.</P>",
      activities: {
        description:
          "<p>If you’re traveling here you must visit one of the many Archeological zones where you won’t only get closer to the roots of this amazing country, but also will have great views and spots to take amazing pictures.</p><p>One big characteristic of this destination is its turquoise, clear water beaches along with its white sands. Delight yourself with its beautiful sights and the islands around, such as Cozumel and Isla Mujeres.</p><p>Another must in Cancun are the Cenotes, natural crystal clear water deposits that are perfect for Scooba diving or just taking a relaxing swim in fresh and clean water.</p>",
        gallery: [
          {
            url: "/cancun/activities/activities-1.jpg",
            text: "Snorkeling",
          },
          {
            url: "/cancun/activities/activities-2.jpg",
            text: "Jungle Tour",
          },
          {
            url: "/cancun/activities/activities-3.jpg",
            text: "Jolly Roger",
          },
          {
            url: "/cancun/activities/activities-4.jpg",
            text: "Holbox",
          },
          {
            url: "/cancun/activities/activities-5.jpg",
            text: "Coba",
          },
          {
            url: "/cancun/activities/activities-6.jpg",
            text: "Bob Adventure",
          },
        ],
      },
      flights: [
        {
          city: "Los Angeles",
          flightsPerDay: 22,
          time: "4 hrs 20 min",
        },
        {
          city: "Nueva York",
          flightsPerDay: 20,
          time: "4 hrs 00 min",
        },
        {
          city: "Houston",
          flightsPerDay: 19,
          time: "2 hrs 15 min",
        },
        {
          city: "Dallas",
          flightsPerDay: 12,
          time: "2 hrs 40 min",
        },
        {
          city: "Chicago",
          flightsPerDay: 8,
          time: "3 hrs 40 min",
        },
      ],
      weather: {
        description:
          "<p>Cancuns wet season, from May to Octover, is ideal to runaway from the increasing fall cold and the dry season, from November to April, is good for those looking for a balanced weather. </p>",
        seasons: [
          {
            name: "Winter",
            image: "/svg/winter.svg",
            temperature: "73ºF",
          },
          {
            name: "Spring",
            image: "/svg/spring.svg",
            temperature: "77ºF",
          },
          {
            name: "Summer",
            image: "/svg/summer.svg",
            temperature: "82ºF",
          },
          {
            name: "Fall",
            image: "/svg/fall.svg",
            temperature: "81ºF",
          },
        ],
      },
      packages: [
        {
          id: 10,
          name: "Cancun Palmar",
          slug: "cancun-palmar-all-inclusive",
          image: "/cancun/packages/palmar/palmar-hotel-7.jpg",
          includeInHome: true,
          soldOut: false,
          nights: 4,
          adults: 2,
          children: 2,
          plan: "All Inclusive",
          retailPriceUSD: 1497,
          priceUSD: 599,
          savings: "60%",
          headers: [
            {
              url: "/cancun/packages/palmar/palmar-hotel.jpg",
              text: "",
            },
            {
              url: "/cancun/packages/palmar/palmar-hotel4.jpg",
              text: "",
            },
            {
              url: "/cancun/packages/palmar/palmar-hotel-5.jpg",
              text: "",
            },
          ],
          offer: {
            rating: 5,
            includes: [
              "This amazing package includes 5 days and 4 nights for 2 adults and up to 2 children 12 and under.",
              "All Inclusive plan.",
              "Stay in a super-comfortable, fully furnished One Bedroom Suite with one king plus, 1 queen murphy beds and balcony.",
              "Complimentary fully staffed Kids Club with all day activities. Nannie and babysitting services available for an extra charge.",
            ],
            description:
              "<p><em>*Additional nights are available starting at $229USD.</em></p>",
            allInclusive: [
              "Beach Front with expansive private beach area",
              "Buffet locations are subject to change based on season.",
              "Daily Breakfast Buffet and a la Carte",
              "Lunch a la carte at Zama Restaurant",
              "Lunch & Snacks at the Tiki Beach Bar, and poolside",
              "Buffet Dinner on the Terrace (seasonal)",
              "Dinner Theme Nights (Daily, weather permitting) Terrace & Beach",
              "Dinner at Davino and Zama Restaurants",
              "Alcoholic Drinks Include:Flavored and regular margaritas, standard tequilas, house domestic liquors, domestic beer, soft drinks, chilled juices and local mineral water. House wines by the glass and domestic liquors are included. Wine by the bottle and premium international brands will be charged accordingly.",
              "Non-Motorized Water Sports, aquaerobics, bingo, snorkel, volleyball, etc.",
              "Use of fitness room",
            ],
          },
          resort: {
            description:
              "<p>Welcome to the newest, most exotic and luxurious resort in Cancun! The 5 Star Cancun Beach Resort, where Mexican hospitality meets classic Caribbean relaxation. We invite you to visit. . . but your senses will beg you to stay. The 5 Star Cancun Beach Resort, Where Paradise is the Routine. Enjoy stunning views from the 1200 square foot One Bedroom Suite, tastefully decorated and outfitted down to the last detail. Perfect for a romantic honeymoon or effortless getaway, this Suite boasts the opportunity to relax and rediscover yourself with the mesmerizing turquoise Caribbean Sea as your backdrop.</p><p>Designer elements include one king size bed in separate bedroom, en-suite bathroom with dual sinks, shower and whirlpool tub. The full size kitchen is enclosed by rich hardwoods, granite countertops and dressed with state-of-the-art stainless steel appliances. The affix dining and living room features seating for six, large flat screen TV and entertainment center embellished in a warm earth tone palate</p><p>The 5 Star Cancun VBeach Resort is an ocean front resort featuring Italian, Mexican and International Cuisine at Davino and Zama Restaurants and Bites Grill; it also features an al fresco lounge, the Palmita Market, a Tiki Beach bar with swings and a poolside bar.</p><p>Wired high-speed Internet access is available. the 5 Star Cancun Beach Resort features an outdoor swimming pool, outdoor jetted tubs and a fitness room. Business services and currency exchange can be provided. Onsite parking is complimentary.</p><p>Mouth watering delights, many of which are caught fresh from the shore await you at the resort restaurants. In the mood for fine dining and a dash of romance? No problem. Or prefer to simply lounge poolside with a burger? We have that too.</p>",
            features: [
              {
                feature: "La Casona STK",
                description: "<p><em>Cuisine:</em> Modern Steakhouse</p><p>",
              },
              {
                feature: "Davino Restaurant",
                description:
                  "<p><em>Cuisine:</em> Mediterranean</p><p> Fresh fish and seafood with wooden grill, large wine cellar, wood pizza oven</p>",
              },
              {
                feature: "Zama Restaurant",
                description:
                  "<p><em>Cuisine:</em> Mexican/Regional</p><p>  Mexican and regional specialties and seafood</p>",
              },
              {
                feature: "Hiroshi",
                description:
                  "<p><em>Cuisine:</em> Japanese</p><p> Large sushi bar and large section of sake and beers</p>",
              },
              {
                feature: "Caprichos",
                description: "<p><em>Cuisine:</em> International</p>",
              },
              {
                feature: "Bite Bar",
                description: "<p><em>Cuisine:</em> Snacks</p>",
              },
            ],
            gallery: [
              {
                url: "/cancun/packages/palmar/palmar-pool.jpg",
                text: "",
              },
              {
                url: "/cancun/packages/palmar/palmar-pool-2.jpg",
                text: "",
              },
              {
                url: "/cancun/packages/palmar/palmar-pool-3.jpg",
                text: "",
              },
              {
                url: "/cancun/packages/palmar/palmar-pool-4.jpg",
                text: "",
              },
              {
                url: "/cancun/packages/palmar/palmar-resort.jpg",
                text: "",
              },
              {
                url: "/cancun/packages/palmar/palmar-resort-2.jpg",
                text: "",
              },
              {
                url: "/cancun/packages/palmar/palmar-resort-3.jpg",
                text: "",
              },
              {
                url: "/cancun/packages/palmar/palmar-resort-4.jpg",
                text: "",
              },
              {
                url: "/cancun/packages/palmar/palma-restaurant.jpg",
                text: "",
              },
              {
                url: "/cancun/packages/palmar/palmar-beach.jpg",
                text: "",
              },
              {
                url: "/cancun/packages/palmar/palmar-kids.jpg",
                text: "",
              },
              {
                url: "/cancun/packages/palmar/palmar-spa.jpg",
                text: "",
              },
              {
                url: "/cancun/packages/palmar/palmar-spa-2.jpg",
                text: "",
              },
              {
                url: "/cancun/packages/palmar/palmar-spa-3.jpg",
                text: "",
              },
            ],
          },
          rooms: [
            {
              name: "One Bedroom Suite",
              nights: 4,
              priceUSD: 599,
              description:
                "<p>Enjoy stunning views of palm thronged gardens from the tranquility of your suite or the luxury of your private balcony. Tastefully decorated and designed down to the last detail, this is a perfect suite for a romantic getaway or small family. Designer elements include one king size bed, a murphy bed in the living room, an en-suite bathroom with his and her sinks, shower and whirlpool tub. The full size kitchen is adorned by rich hardwoods, granite countertops and accompanied by state-of-the-art stainless steel appliances. The dining room and living area, embellished in warm hues, features seating for up to 4 people and boasts a large flat screen TV. You will not be disappointed as this is 4 times larger than a normal hotel room with 2 bathrooms</p>",
              galleryDescription: "Be our guest and see it for yourself.",
              gallery: [

                {
                  url: "/cancun/packages/palmar/palmar-room-2.jpg",
                  text: "",
                },
                {
                  url: "/cancun/packages/palmar/palmar-room-3.jpg",
                  text: "",
                },

                {
                  url: "/cancun/packages/palmar/palmar-room-8.jpg",
                  text: "",
                },
                {
                  url: "/cancun/packages/palmar/palmar-room-9.jpg",
                  text: "",
                },
                {
                  url: "/cancun/packages/palmar/palmar-room-7A.jpg",
                  text: "",
                },
              ],
            },
            /*{
              name: "Deluxe Suite",
              nights: 5,
              priceUSD: 599,
              description:
                "<p>Enjoy stunning views of either palm thronged gardens or the mesmerizing Caribbean Sea from the tranquility of your suite or the luxury of your private balcony. Tastefully decorated and designed down to the last detail, this is a perfect suite for a romantic getaway or small family.</p><p>Designer elements include one king size bed, a murphy bed in the living room, an en-suite bathroom with his and her sinks, shower and whirlpool tub. The full size kitchen is adorned by rich hardwoods, granite countertops and accompanied by state-of-the-art stainless steel appliances. The dining room and living area, embellished in warm hues, features seating for up to four guests and boasts a large flat screen TV.</p>",
              galleryDescription: "Be our guest and see it for yourself.",
              gallery: [

                {
                  url: "/cancun/packages/palmar/palmar-room-5.jpg",
                  text: "",
                },
                {
                  url: "/cancun/packages/palmar/palmar-room-6.jpg",
                  text: "",
                },
                {
                  url: "/cancun/packages/palmar/palmar-room-11.jpg",
                  text: "",
                },
                {
                  url: "/cancun/packages/palmar/palmar-room-12.jpg",
                  text: "",
                },
                {
                  url: "/cancun/packages/palmar/palmar-room-13.jpg",
                  text: "",
                },
                {
                  url: "/cancun/packages/palmar/palmar-room-7.jpg",
                  text: "",
                },
              ],
            },*/
          ],
          amenities: [
            "24 Hour Room Service",
            "24-Hour Front Desk",
            "All-Inclusive",
            "ATM Machine",
            "Banquet Facility",
            "Beach Front",
            "Beach Service",
            "Business Services",
            "Car Rental Desk",
            "Children's Play Area",
            "Children's Program",
            "Coffee Shop",
            "Concierge",
            "Currency Exchange",
            "Dry Cleaning Service",
            "Elevator / Lift",
            "Fine Dining",
            "Fishing (nearby)",
            "Fitness Center",
            "FREE Area Shuttle",
            "Gift Shop",
            "Guest Activity Desk",
            "Honeymoon Amenities",
            "Ice Machine",
            "Jacuzzi/Hot Tub",
            "Kiddie Pool",
            "Lounge/Bar",
            "Massage Therapist",
            "Medical Services",
            "Multilingual Staff",
            "Multiple Swimming Pools",
            "Non-Motorized Water Sports",
            "On-Site Convenience Store",
            "On-Site Entertainment",
            "On-Site Travel Agency",
            "Parking",
            "Pool Area Bar",
            "Sun Deck",
            "Valet Parking",
            "Water Sports",
            "Wireless Internet Access",
          ],
          location: {
            map:
              '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.0049277530034!2d-86.805414484454!3d21.231653185888803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2e3fda2f7e81%3A0x6d2a3c7f61e592a6!2sVilla%20del%20Palmar%20Cancun!5e0!3m2!1ses-419!2smx!4v1617756243810!5m2!1ses-419!2smx"  style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
          },
          reviews: [
            {
              author: "Megan M",
              city: "",
              comments:
                "Where do I begin!!!! We had the best time on this trip! We were a party of 12! 4 kids under the age of 3, we did the family 3 bedroom suite and it was perfect. Out butler, Otikio was incredible! The concierges even went to Walmart to buy a pacifier for my daughter when we lost it! Julio at the STK restaurant was amazing! Jesus at the beach, the best!! Every. Staff. Member!! Service is above and beyond!",
              date: "April 2021",
              rating: 5,
            },
            {
              author: "Emili C",
              city: "",
              comments:
                "I visited Villa del Palmar with my family in March 2021. This is by far the most “vacation” vacation ever. Not only is the resort absolutely breathtaking, but the service is equally impressive. From the amazing breakfast room service (Thank you SO much Jesue!) to anything you could need poolside (MOISES will truly do anything and everything to help make your stay amazing) this place is the best! We did the all inclusive package and the food did not disappoint. Being able to order food and drinks pool or beachside makes things so simple and relaxing (thank you Martin and Benito!) I also loved the aqua Zumba with Pepe and Alex each day. THANK YOU THANK YOU villa del palmar for a wonderful week :)",
              date: "March 2021",
              rating: 5,
            },
            {
              author: "Kathy G",
              city: "Huntington, New York",
              comments:
                "From start to finish, the Villa del Palmar Cancun Beach Resort and Spa was top of the line. We have stayed in many nice hotels, including the Cove at the Atlantis in the Bahamas, and top hotels in Bermuda and Puerto Rico. This hotel was my favorite yet. The food, the service, the property, the staff and service, everything receives 5 stars. Not to mention our room which was absolutely beautiful, well maintained, and incredibly comfortable! We LOVED the food, unlike most all-inclusive resorts, this property had incredible, well curated dishes. I HIGHLY recommend Zama the mexican restaurant for both breakfast and dinner. While sitting on the beach, be sure to order the Ceviche Cancun, delicious! Families, couples, friends, for a great relaxing vacation, at an unbelievable price, you must must must visit the Villas del Palmar. PS - before our trip, I read the reviews, and went expecting service that was below par, and average food and drinks. I booked anyway because it was such a great deal. Needless to say, I my expectations were far exceeded. Oh - and I almost forgot, the bed was SO comfortable!",
              date: "",
              rating: 5,
            },
          ],
        },
        {
          id: 11,
          name: "Cancun Lite",
          slug: "cancun-lite-all-inclusive",
          image: "/cancun/packages/lite/lite-pool-2.jpg",
          includeInHome: false,
          soldOut: true,
          nights: 4,
          adults: 2,
          children: 2,
          plan: "All Inclusive",
          retailPriceUSD: 1606,
          priceUSD: 499,
          savings: "69%",
          headers: [
            {
              url: "/cancun/packages/lite/lite.jpg",
              text: "",
            },
            {
              url: "/cancun/packages/lite/lite-pool.jpg",
              text: "",
            },
            {
              url: "/cancun/packages/lite/lite-panoramic.jpg",
              text: "",
            },
          ],
          offer: {
            rating: 4.5,
            includes: [
              "This amazing package includes 5 days and 4 nights for 2 adults and up to 2 children 12 and under.",
              "Stay in a comfortable Standard Room in All Inclusive plan. ",
              "Beachfront property.",
              "amily-friendly hotel.",
            ],
            description:
              "<p><em>Additional nights are available starting at $249USD.</em></p>",
            allInclusive: [
              "Luxury Accommodation’s.",
              "Daily Breakfast, Lunch, and Dinner A-la-Carte in any of the 7 restaurants.",
              "Unlimited alcoholic & non-alcoholic drinks, domestic brands in any of the 7 bars.",
              "Activities 10am-5pm (volleyball, shuffle board, pool activities, etc.).",
              "Lunch & Snacks at the Tiki Beach Bar, and poolside",
              "Non-motorized water sports.",
              "Fully equipped fitness center.",
              "Currency exchange from US or Canadian dollars to Pesos.",
            ],
          },
          resort: {
            description:
              "<p>This budget-friendly all-inclusive resort offers everything you need. Located on the Grand Oasis Cancun resort complex, Oasis Cancun Lite features basic amenities and services with limited access to restaurants and bars.</p><p>The Hotel has an area of half a mile of beach and one of the largest pools of Cancun. Thes Resort has 192 rooms newly renovated and located on the first level from where you can see the beautiful gardens or the golf course, creating a relaxed and friendly atmosphere.</p><p>You will enjoy 7 restaurants as Tatish, Mr. Wimpy, Happy Chicken, Taco`s, Trattoria, Ibiza, among others, as well you can make use of 7 bars such as the Scirocco Sports Bar, Wet Bar, La Placita, Sand, Ibiza Bar. The hotel offers daily activities such as aerobics, yoga, pilates, and non-motorized water sports such as kayaking and snorkeling are installation offer a state of the art, kids club and fascinating gym.</p>",
            features: [],

            gallery: [
              {
                url: "/cancun/packages/lite/lite-beach.jpg",
                text: "",
              },
              {
                url: "/cancun/packages/lite/lite-beach-2.jpg",
                text: "",
              },
              {
                url: "/cancun/packages/lite/lite-beach-3.jpg",
                text: "",
              },
              {
                url: "/cancun/packages/lite/lite-pool-2.jpg",
                text: "",
              },
              {
                url: "/cancun/packages/lite/lite-pool-3.jpg",
                text: "",
              },
              {
                url: "/cancun/packages/lite/lite-relax.jpg",
                text: "",
              },
            ],
          },
          rooms: [
            {
              name: "Standard Room",
              priceUSD: 499,
              description:
                "<p>All rooms are air-conditioned with private balcony, king size / two double beds,cable TV, direct-dial telephone ($), mini-bar ($), safety-deposit box ($), internet access ($), hair dryer, radio alarm clock and amenities</p>",
              galleryDescription: "Be our guest and see it for yourself.",
              gallery: [
                {
                  url: "/cancun/packages/lite/lite-room.jpg",
                  text: "",
                },

                {
                  url: "/cancun/packages/lite/lite-room-2.jpg",
                  text: "",
                },
                {
                  url: "/cancun/packages/lite/lite-room-3.jpg",
                  text: "",
                },
              ],
            },
          ],
          amenities: [
            "7 Restaurants",
            "7 Bars",
            "Multi Use Court",
            "Kids club",
            "Entertainment",
            "Gym",
            "Quarter-mile pool – the longest in Cancun (with 3 swim-up bars)",
            "Spa: body and beauty treatments ($)",
            "Daily activities: Aerobics, Yoga, Pilates, Spinning, Zumba and Water Fitness classes; bartending, cooking and dancing lessons; pool and beach activities and games.",
            "2 Beach clubs",
          ],
          location: {
            map:
              '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.8653625155353!2d-86.77705448445595!3d21.078038985971688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2837daeb2a77%3A0x670b3425bfc778ce!2sOasis%20Cancun%20Lite!5e0!3m2!1ses-419!2smx!4v1617762527555!5m2!1ses-419!2smx"  style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
          },
          reviews: [
            {
              author: "Samirah",
              city: "Philadelphia, Pennsylvania",
              comments:
                "The Hotel was amazing, I loved every bit of it. The food was great and I will be coming back to stay at this hotel. The pool was huge and the staff was very nice and pleasant. The entertainment was fun everyday they had something going on. It was amazing.",
              date: "",
              rating: 5,
            },
            {
              author: "Viking",
              city: "Portland, Oregon",
              comments:
                "My husband and I found this jewel on our first trip to cancun and have never stayed any where else while visiting Cancun. Great staff very friendly and caring have made many friends over the years. Great options for eating with all the resturant choices. The pool it the best I've ever been in, in our lives 1/4 mile long with 3 swim up bars. Nice beaches. Great nightly entertainment. Clean rooms. We've gone every year for the last 8 yrs. and will continue to do so. We love the Grand Oasis, thanks to the staff for making this our happy place. Lauren & Carla Jackson",
              date: "",
              rating: 5,
            },
            {
              author: "Mario M",
              city: "Eagle Pass, Texas",
              comments:
                "Excellent Hotel , the service , the amenities, the nightly entertainment was awesome .The personnel at every restraint and bar are very very friendly and courteous . I misplaced my IPhone 6 and even management were involved in helping me find it Stayed September 2016, traveled with family",
              date: "",
              rating: 5,
            },
          ],
        },
        {
          id: 12,
          name: "Cancun Palm",
          slug: "cancun-palm-all-inclusive",
          image: "/cancun/packages/palm/palm-pool-3.jpg",
          includeInHome: false,
          soldOut: false,
          nights: 4,
          adults: 2,
          children: 2,
          plan: "All Inclusive",
          retailPriceUSD: 1606,
          priceUSD: 499,
          savings: "69%",
          headers: [
            {
              url: "/cancun/packages/palm/palm-beach-2.jpg",
              text: "",
            },
            {
              url: "/cancun/packages/palm/palm-hotel.jpg",
              text: "",
            },
            {
              url: "/cancun/packages/palm/palm-beach.jpg",
              text: "",
            },
          ],
          offer: {
            rating: 5,
            includes: [
              "This amazing package includes 5 days and 4 nights for 2 adults and up to 2 children 12 and under.",
              "Stay in a comfortable Standard Room in All Inclusive plan. ",
              "Beachfront property.",
              "Family-friendly hotel.",
            ],
            description:
              "<p><em>Additional nights are available starting at $249USD.</em></p>",
            allInclusive: [
              "Room Accommodations with 2 Double Beds",
              "In-Room Amenities: Cable TV with remote control, direct dial Telephone, Bath with Tub/Shower or Shower, Bath Amenities",
              "All Meals included Every Day (Buffet Breakfast, Buffet Lunch, Buffet or A la Carte Dinner)",
              "Snacks",
              "11 Restaurants including Buffets and A la carte Specialty",
              "7 Bars including 1 Swim-up Bar and 1 Beach Bar",
              "Unlimited Beverages Including Domestic Alcoholic and Non-Alcoholic at any of the Resort Bars",
              "Planned activities by resort entertainment staff throughout the day",
              "Kids Club for Kids from 4 to 12 years, with planned activities by the entertainment staff throughout the day",
              "Complimentary use of Paddle Boats, Kayaks and Surfboards at the Marina located at the Oasis Cancun",
              "Unlimited Golf Par 3 Executive 9-hole course",
              "Unlimited access to on-site Gymnasium for daily work-outs",
              "Nightly entertainment that includes two live theme shows weekly - Mexican and Caribbean",
              "SPA ($)",
              "Beautiful Beach with very calm waters that is especially Great for Kids",
              "NEW serpentine pool that winds through beautiful tropical gardens with sun loungers located throughout the area",
            ],
          },
          resort: {
            description:
              "<p>TAre you looking for an all-inclusive hotel to stay with your family and be part of the Mexican Culture Oasis Palm is the place to be. A Hundred per cent Mexican flavor, the lifestyle and culture that represent this beautiful country are reflected in this hotel. Over 650 feet of fine white sand with palapas and chaise lounges provide pure relaxation. Also we have special surprises for the little ones, such as theme bedrooms and the best Kids club</p><p>Oasis Palm is located at the entrance to the Hotel Zone, within walking distance of shopping, bars and restaurants, this magnificent beachfront resort is just 13 miles (25 minutes) from the Airport and 3 miles (5 minutes) from downtown Cancun. The Oasis Palm is a family-friendly, all-inclusive resort located oceanfront in beautiful Cancun. This resort features exciting amenities, many activities for all ages, exceptional cuisine, and much more.</p><p>OASIS PALM OFFERS FAMILY-FRIENDLY FUN IN A FANTASTIC LOCATION</p><p>The Oasis Palm is an all-inclusive beachfront resort where ample spaces of relaxation and diversion will provide maximum enjoyment for a family vacation. Oasis Palm with its pyramidal structure provides splendid views of the Caribbean Sea or the Nichupte Lagoon. The resort features 471 rooms decorated in modern Mexican style with individual controlled air conditioning, private bath, one king size bed or two double beds, remote control, cable TV, direct dial telephone and a safe deposit box.</p><p>Focusing on the family, this resort offers rooms for up to five Guests. The stellar new ``Kids Club`` offers a secure environment for the children with a fully supervised staff and numerous activity rooms and a kids only pool with water slides. The animation team provides activities for all ages to entertain during the day, and exciting live entertainment at night</p><p>Satisfy your appetite at one of the resort's restaurants, offering buffet, a la carte and snack bar options.</p>",
            features: [
              {
                feature: "Xtabentun",
                description:
                  "<p>Buffet offering Mexican specialties, available for breakfast and lunch.</p>",
              },
              {
                feature: "Dos Lunas",
                description:
                  "<p>Offering pizza and other Italian specialties for lunch.</p>",
              },
              {
                feature: "Sushi Bar",
                description:
                  "<p>Freshly-made sushi options, available for lunch.</p>",
              },
              {
                feature: "La Bamba",
                description:
                  "<p>A la carte fish and seafood dishes, available for lunch and dinner.</p>",
              },
              {
                feature: "Los Agaves",
                description:
                  "<p>Offering Jalisco cuisine, available for dinner.</p>",
              },
              {
                feature: "Isla Mujeres Snack Bar",
                description: "<p>Available from 11am to 6pm.</p>",
              },
            ],

            gallery: [
              {
                url: "/cancun/packages/palm/palm-pool.jpg",
                text: "",
              },
              {
                url: "/cancun/packages/palm/palm-pool-3.jpg",
                text: "",
              },
              {
                url: "/cancun/packages/palm/palm-kids.jpg",
                text: "",
              },
              {
                url: "/cancun/packages/palm/palm-kid.jpg",
                text: "",
              },
              {
                url: "/cancun/packages/palm/palm-kayak.jpg",
                text: "",
              },
              {
                url: "/cancun/packages/palm/palm-bar.jpg",
                text: "",
              },
            ],
          },
          rooms: [
            {
              name: "Standard Room",
              priceUSD: 499,
              description:
                "<p>Rooms are located throughout the two buildings of Oasis Palm. All rooms are air-conditioned with private bath, 2 double beds, cable TV, direct-dial telephone ($), mini-bar ($), safety-deposit box ($), internet access ($), hair dryer, radio alarm clock and amenities</p>",
              galleryDescription: "Be our guest and see it for yourself.",
              gallery: [
                {
                  url: "/cancun/packages/palm/palm-room.jpg",
                  text: "",
                },

                {
                  url: "/cancun/packages/palm/palm-room-2.jpg",
                  text: "",
                },
                {
                  url: "/cancun/packages/palm/palm-room-3.jpg",
                  text: "",
                },
              ],
            },
          ],
          amenities: [
            "24 Hour Room Service",
            "24-Hour Front Desk",
            "All-Inclusive",
            "ATM Machine",
            "Babysitting",
            "Banquet Facility",
            "Beach Front",
            "Beach Service",
            "Beauty Shop/Salon",
            "Business Services",
            "Car Rental Desk",
            "Children's Play Area",
            "Children's Program",
            "Coffee Shop",
            "Complimentary Use of Bathrobe and Slippers",
            "Concierge",
            "Currency Exchange",
            "Dry Cleaning Service",
            "Exterior Corridors",
            "Fine Dining",
            "Fishing (nearby)",
            "Fitness Center",
            "FREE Area Shuttle",
            "FREE Parking",
            "Gift Shop",
            "Golf",
            "Guest Activity Desk",
            "Ice Machine",
            "Jacuzzi/Hot Tub",
            "Kiddie Pool",
            "Kids Club",
            "Lounge/Bar",
            "Massage Therapist",
            "Medical Services",
            "Multilingual Staff",
            "Multiple Swimming Pools",
            "Non-Motorized Water Sports",
            "On-Site Convenience Store",
            "On-Site Travel Agency",
            "Outdoor Pool",
            "Parking",
            "Pool Area Bar",
            "Restaurant",
            "Room Service",
            "Security Guard",
            "Spa Services",
            "Sun Deck",
            "Valet Parking",
            "Valet Parking",
            "Wake-Up Service",
            "Water Sports",
            "Wireless Internet Access",
          ],
          location: {
            map:
              '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14886.45397289656!2d-86.76781906847903!3d21.12797005297402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c28bfe2a88abd%3A0x85d16faf7030da20!2sOasis%20Palm%20All%20Inclusive!5e0!3m2!1ses-419!2smx!4v1617765771112!5m2!1ses-419!2smx"  style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
          },
          reviews: [
            {
              author: "Stephanie P",
              city: "Costa Rica",
              comments:
                "Cancun is gorgeous! It is a paradise! and the Oasis Palm Hotel All Inclusive is lovely! The structure is beautiful! Loved the different and various restaurants included in the hotel. The food was great with a lot of variety from Mexican food to traditional American food as well, from tacos, nachos, pork, meat, drinks, desserts etc. The beach is super nice with light blue colors and white sand. The staff was very friendly and helped me with certain doubts I had. The room was neat, I was on the 6th floor with a beautiful view. If you want Wifi you have to pay but it's as cheap as $5 to $30 depending on the amount of time you want it, and it has great connection. If you want to go to Mexican stores or Cocobongo ( bar) or other restaurants in Cancun, you can take a taxi for 350 Mexican pesos roundtrip ( about $20) or take a bus. I was travelling with a child so I wasn't sure about taking the bus, yet I did and I do NOT regret it. It's much cheaper, 20 Mexican pesos per person roundtrip (about $1) and the buses go by every 2 minutes. The stores are great, they sell tequila and many souvenirs, they have plenty of stores to shop. Indeed, I would definitely visit The Oases Palm again! They also have kids club and sports bar and have many acitivities throughout the day and at night live music bands and mariachis! My family and I enjoyed it and are very satisfied! We hope to visit soon!",
              date: "",
              rating: 5,
            },
            {
              author: "Ashleyygina",
              city: "Minnetonka, Minnesota",
              comments:
                "They are so nice and welcoming! I was there on spring break but got there a day early before my friends. Traveling out of the country especially if you are on your own can be scary. They made feel so comfortable and welcomed. Like a family member. It is a family resort so if you're looking for a spring break experience I would advice you to go to the pyramid their other sister hotel.",
              date: "",
              rating: 5,
            },
            {
              author: "Lisa C, Milton Keynes",
              city: "United Kingdom",
              comments:
                "Angel entertainment team brilliant food fantastic thank you - we had great ten days staff so lovely and friendly Only negative was waiting for lifts we were upgraded our room to the grande beautiful room Snack bar team fantastic and best burgers watch out for the birds though if you eat in beach Beach again was lovely and so was the ocean",
              date: "",
              rating: 5,
            },
          ],
        },
        {
          id: 13,
          name: "Cancun Grand Palm",
          slug: "cancun-grand-palm-all-inclusive",
          image: "/cancun/packages/grand-palm/grand-palm-bar.jpg",
          includeInHome: false,
          soldOut: false,
          nights: 4,
          adults: 2,
          children: 2,
          plan: "All Inclusive",
          retailPriceUSD: 1879,
          priceUSD: 599,
          savings: "69%",
          headers: [
            {
              url: "/cancun/packages/grand-palm/grand-palm-hotel.jpg",
              text: "",
            },
            {
              url: "/cancun/packages/grand-palm/grand-palm-hotel-4.jpg",
              text: "",
            },
            {
              url: "/cancun/packages/grand-palm/grand-palm-hotel-2.jpg",
              text: "",
            },
          ],
          offer: {
            rating: 5,
            includes: [
              "This amazing package includes 5 days and 4 nights for 2 adults and up to 2 children 12 and under.",
              "Stay in a comfortable Standard Room in All Inclusive plan. ",
              "Beachfront property.",
              "Family-friendly hotel.",
            ],
            description:
              "<p><em>Additional nights are available starting at $USD.</em></p>",
            allInclusive: [
              "Room Accommodations with 2 Double Beds",
              "All meals included daily [buffet breakfast/lunch/dinner or a la carte dinner.",
              "Snacks.",
              "8 restaurants with buffets and a la carte specialties plus restaurant at Palm Beach Hotel next door",
              "11 bars including 1 swim up bar, 1 beach bar, 1 sports bar and 1 lounge bar including the bars at the sister hotel Oasis Palm Beach next door.",
              "All drinks at any bar, lounge or restaurant on the property.",
              "24 hour room service. (surcharge)",
              "Unlimited access to the on-site gym.",
              "Planned activities by the entertainment staff throughout the day.",
              "KIDS CLUB: Planned activities throughout the day for kids of all ages including arts and crafts, a game room and pool with waterslides, theater and disco. The kids can also enjoy their own buffet! Located at the Oasis Palm Beach Resort, next door. For Kids 12 years and under, kids from 3 years and under require parental supervision.",
              "New Captain Hook ship & sailing experience",
              "Nightly live entertainment.",
              "Complimentary use of paddle boats, kayaks and surfboards at the marina.",
              "Unlimited golf on the executive 9-hole Par-3 course can be enjoyed by all at the sister hotel, Grand Oasis Cancun [rental clubs and balls are available at additional fee, transportation is not included.",
            ],
          },
          resort: {
            description:
              "<p>Grand Palm Cancun is an all-inclusive family resort and spa that is conveniently located at the north entrance to Cancun`s hotel zone. The Grand Palm sits within walking distance of shopping, bars and restaurants and features an on-site spa when it`s time to relax after a fun-filled day in Cancun. The Grand Palm offers endless activities without compromising the areas for rest and relaxation. The Kids Club offers a fully supervised secure environment for the children with a trained staff and numerous activity rooms. All age groups have many choices of activities including a kids only pool with water slides, restaurant, rest areas, overnight camp and amphitheater.</p><p>The Grand Palm is all about the kid-stuff: endless entertainment, family-friendly accommodations, child-centric restaurants and a Kids Club that`s cool as can be. But the Grand Palm also has a pampered, indulgent side, too, as a visit to the Kin Ha Spa shows there's always plenty of fun stuff for parents to do while the kids are having fun. Grand Palm is like the sister resort, Grand Palm but a bit more upscale, with the extra amenities you`re looking for. At the Grand Palm, the dancing, dining and decor reflect the culture of Cancun, with delicious Mexican food in the cantina and lots of activities for everyone</p><p>Succulent plates of gastronomical varieties are offered in each of the 8 restaurants. All restaurants and indoor bars require appropriate attire for admittance. Reservations required for dinner at the A-la-carte Restaurants. No bare feet or wet clothing are permitted. Alcoholic beverages are available until 1:00 am</p>",
            features: [
              {
                feature: "SISAL",
                description:
                  "<p>International buffet and Yocatan Corner with indoor and outdoor seating, serves lunch and dinner. Casual attire for dining.</p>",
              },
              {
                feature: "DOS LUNAS",
                description:
                  "<p>Italian corner with indoor and outdoor seating, serves breakfast, lunch and dinner. Casual attire for dining.</p>",
              },
              {
                feature: "DOS LUNAS PIZZERÍA",
                description:
                  "<p>Pizzas & pastas, serves lunch and dinner. Casual attire for dining.</p>",
              },
              {
                feature: "LA BAMBA",
                description:
                  "<p>A la carte fish and seafood dishes, available for lunch and dinner.</p>",
              },
              {
                feature: "LAS AGAVES",
                description:
                  "<p>Guadalajara restaurant with indoor and outdoor seating, serves dinner. Reservations are required and dining is exclusive for Grand guests. Casual attire for dining.</p>",
              },
              {
                feature: "ISLA MUJERES",
                description:
                  "<p>Outdoor snacks, open for lunch. Casual attire for dining.</p>",
              },
              {
                feature: "LOS AGAVES TERRAZA TACOS & TORTAS",
                description:
                  "<p>Indoor buffet and Rodizzio, serves breakfast, lunch and dinner exclusively for Grand guests. Las Palmas has a casual dress code.</p>",
              },
              {
                feature: "TEQUILA LOUNGE LAS PALMAS",
                description: "<p>Available from 11am to 6pm.</p>",
              },
              {
                feature: "SUSHI BAR",
                description:
                  "<p>Outdoor Mexican sushi fusion, open for lunch. Casual attire for dining.</p>",
              },
              {
                feature: "LA CATINA",
                description:
                  "<p>Mexican tapas with indoor and outdoor seating, serves lunch and dinner. Casual attire for dining.</p>",
              },
            ],

            gallery: [
              {
                url: "/cancun/packages/grand-palm/grand-palm-hotel-3.jpg",
                text: "",
              },
              {
                url: "/cancun/packages/grand-palm/grand-palm-family.jpg",
                text: "",
              },
              {
                url: "/cancun/packages/grand-palm/grand-palm-family-2.jpg",
                text: "",
              },
              {
                url: "/cancun/packages/grand-palm/grand-palm-beach.jpg",
                text: "",
              },
              {
                url: "/cancun/packages/grand-palm/grand-palm-bar.jpg",
                text: "",
              },
              {
                url: "/cancun/packages/grand-palm/grand-palm-kids-2.jpg",
                text: "",
              },
              {
                url: "/cancun/packages/grand-palm/grand-palm-kids.jpg",
                text: "",
              },
              {
                url: "/cancun/packages/grand-palm/grand-palm-pool.jpg",
                text: "",
              },
              {
                url: "/cancun/packages/grand-palm/grand-palm-spa.jpg",
                text: "",
              },
              {
                url: "/cancun/packages/grand-palm/grand-palm-restaurant.jpg",
                text: "",
              },
              {
                url: "/cancun/packages/grand-palm/grand-palm-restaurant-2.jpg",
                text: "",
              },
            ],
          },
          rooms: [
            {
              name: "Deluxe Room",
              priceUSD: 599,
              description:
                "<p>Deluxe Rooms feature beautiful decor and marble throughout. All rooms provide individually controlled air-conditioning, a luxury private bath with marble countertops and shower/tub combos, a king size bed or two double beds, a small table and two chairs, a sofa, blackout drapes, 42-inch flat screen TV with cable and PPV [pay-per-view] service, direct-dial telephone, mini-bar with water, soft drinks and beer, safety-deposit box, Wi-Fi access, daily housekeeping, hair dryer, radio alarm clock, iPod charger, spa quality amenities, and complimentary toiletries.</p>",
              galleryDescription: "Be our guest and see it for yourself.",
              gallery: [
                {
                  url: "/cancun/packages/grand-palm/grand-palm-room.jpg",
                  text: "",
                },

                {
                  url: "/cancun/packages/grand-palm/grand-palm-room-2.jpg",
                  text: "",
                },
                {
                  url: "/cancun/packages/grand-palm/grand-palm-room-3.jpg",
                  text: "",
                },
              ],
            },
          ],
          amenities: [
            "24-Hour Front Desk",
            "All-Inclusive",
            "ATM Machine",
            "Babysitting",
            "Banquet Facility",
            "Beach Front",
            "Beach Service",
            "Beauty Shop/Salon",
            "Business Services",
            "Car Rental Desk",
            "Children's Play Area",
            "Children's Program",
            "Coffee Shop",
            "Complimentary Use of Bathrobe and Slippers",
            "Concierge",
            "Currency Exchange",
            "Dry Cleaning Service",
            "Exterior Corridors",
            "Fine Dining",
            "Fishing (nearby)",
            "Fitness Center",
            "FREE Area Shuttle",
            "FREE Parking",
            "Gift Shop",
            "Golf",
            "Guest Activity Desk",
            "Ice Machine",
            "Jacuzzi/Hot Tub",
            "Kiddie Pool",
            "Kids Club",
            "Lounge/Bar",
            "Massage Therapist",
            "Medical Services",
            "Multilingual Staff",
            "Multiple Swimming Pools",
            "Non-Motorized Water Sports",
            "On-Site Convenience Store",
            "On-Site Travel Agency",
            "Outdoor Pool",
            "Parking",
            "Pool Area Bar",
            "Restaurant",
            "Room Service",
            "Security Guard",
            "Spa Services",
            "Sun Deck",
            "Valet Parking",
            "Valet Parking",
            "Wake-Up Service",
            "Water Sports",
            "Wireless Internet Access",
          ],
          location: {
            map:
              '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.2288083505396!2d-86.78851638445515!3d21.143290685936424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c28bd77f94499%3A0x87a5f3a48c734835!2sGrand%20Oasis%20Palm!5e0!3m2!1ses-419!2smx!4v1617767734129!5m2!1ses-419!2smx"  style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
          },
          reviews: [
            {
              author: "John C",
              city: "",
              comments:
                "What an amazing stay! We had a great time, great rooms, clean, amazing selection of food, not far from airport. We had a great time with Alfredo, Alex, Blast, and Syri Activities. Highly recommended!!",
              date: "April 2021",
              rating: 5,
            },
            {
              author: "Anatoliy P",
              city: "",
              comments:
                "We had a great time beautiful beaches great games to play. Volleyball soccer football. The rooms were very clean good people great workers friendly Alex the lion was super friendly and Alfredo. Weather was amazing",
              date: "March 2021",
              rating: 5,
            },
          ],
        },
        /*{
          id: 14,
          name: "Cancun Grand",
          slug: "cancun-grand-all-inclusive",
          image: "/cancun/packages/grand-cancun/grand-cancun-hotel.jpg",
          includeInHome: false,
          soldOut: false,
          nights: 4,
          adults: 2,
          children: 2,
          plan: "All Inclusive",
          retailPriceUSD: 2472,
          priceUSD: 599,
          savings: "76%",
          headers: [
            {
              url: "/cancun/packages/grand-cancun/grand-cancun-hotel.jpg",
              text: "",
            },
            {
              url: "/cancun/packages/grand-cancun/grand-cancun-hotel-2.jpg",
              text: "",
            },
            {
              url: "/cancun/packages/grand-cancun/grand-cancun-hotel-3.jpg",
              text: "",
            },
          ],
          offer: {
            rating: 5,
            includes: [
              "This amazing package includes 6 days and 4 nights for 2 adults and up to 2 children 12 and under.",
              "Stay in a comfortable Standard Room in All Inclusive plan. ",
              "Beachfront property.",
              "Family-friendly hotel.",
            ],
            description:
              "<p><em>Additional nights are available starting at $USD.</em></p>",
            allInclusive: [
              "Room Accommodations with 2 Double Beds",
              "All meals included daily [buffet breakfast/lunch/dinner or a la carte dinner.",
              "Snacks.",
              "8 restaurants with buffets and a la carte specialties plus restaurant at Palm Beach Hotel next door",
              "11 bars including 1 swim up bar, 1 beach bar, 1 sports bar and 1 lounge bar including the bars at the sister hotel Oasis Palm Beach next door.",
              "All drinks at any bar, lounge or restaurant on the property.",
              "24 hour room service. (surcharge)",
              "Unlimited access to the on-site gym.",
              "Planned activities by the entertainment staff throughout the day.",
              "KIDS CLUB: Planned activities throughout the day for kids of all ages including arts and crafts, a game room and pool with waterslides, theater and disco. The kids can also enjoy their own buffet! Located at the Oasis Palm Beach Resort, next door. For Kids 12 years and under, kids from 3 years and under require parental supervision.",
              "New Captain Hook ship & sailing experience",
              "Nightly live entertainment.",
              "Complimentary use of paddle boats, kayaks and surfboards at the marina.",
              "Unlimited golf on the executive 9-hole Par-3 course can be enjoyed by all at the sister hotel, Grand Oasis Cancun [rental clubs and balls are available at additional fee, transportation is not included.",
            ],
          },
          resort: {
            description:
              "<p>Rated the #1 Entertainment Resort in Mexico. The Grand Oasis Cancun Resort is the Grandmaster of fun, hosting live concerts, festivals and shows, even themed parties. Plus everyday surprises like dancers in the lobby, and comedy skits by the longest pool in Cancun. The Grand Oasis Cancun Resort is more exclusive than it's sister resort, Oasis Cancun, with extra amenities to make you feel special. The Grand Cancun Resort throws great parties with its famous friends, and gets a Little naughty after-hours with its Late-Night Kinky Burlesque Cabaret. The GrandOais Cancun resort is hip, happening and high-class.</p><p>Succulent plates of gastronomical varieties are offered in each of the restaurants. All restaurants and indoor bars require appropriate attire for admittance. Reservations required for dinner at the A-la-carte Restaurants. No bare feet or wet clothing are permitted. Alcoholic beverages are available until 1:00 am</p>",
            features: [
              {
                feature: "MAKITACO",
                description: "<p>Mexican-Japanese fusion</p>",
              },
              {
                feature: "SARAPE",
                description: "<p>Tex Mex Restaurant & Grill</p>",
              },
              {
                feature: "BAHIA RODIZZIO",
                description: "<p>Steak house & Rodizio</p>",
              },
              {
                feature: "DOS LUNA",
                description: "<p>Steak house & Rodizio</p>",
              },
              {
                feature: "TATISH",
                description: "<p>International Buffet</p>",
              },
              {
                feature: "IL FORNO DOS LUNA",
                description: "<p>Pizzas & Pastas</p>",
              },
              {
                feature: "LA PLACITA",
                description: "<p>Food Court Terrace</p>",
              },
              {
                feature: "SEVILLA",
                description: "<p>Wine & Tapas</p>",
              },
              {
                feature: "HIPPIE CHIC GRILL",
                description: "<p>Grill & BBQ</p>",
              },
              {
                feature: "SCIROCCO",
                description: "<p>Cocktail Bar</p>",
              },
            ],

            gallery: [
              {
                url: "/cancun/packages/grand-cancun/grand-cancun-beach-2.jpg",
                text: "",
              },
              {
                url: "/cancun/packages/grand-cancun/grand-cancun-beach.jpg",
                text: "",
              },
              {
                url: "/cancun/packages/grand-cancun/grand-cancun-pool.jpg",
                text: "",
              },
              {
                url: "/cancun/packages/grand-cancun/grand-cancun-pool-2.jpg",
                text: "",
              },
              {
                url: "/cancun/packages/grand-cancun/grand-cancun-pool-3.jpg",
                text: "",
              },
              {
                url: "/cancun/packages/grand-cancun/grand-cancun-hotel-4.jpg",
                text: "",
              },
              {
                url: "/cancun/packages/grand-cancun/grand-cancun-hotel-5.jpg",
                text: "",
              },
              {
                url: "/cancun/packages/grand-cancun/grand-cancun-hotel-6.jpg",
                text: "",
              },
            ],
          },
          rooms: [
            {
              name: "Deluxe Room",
              priceUSD: 399,
              description:
                "<p>Deluxe Room at the Grand Oasis Cancun is distinguished by the grand pyramid structure as the center point of the property with 613 rooms in the center pyramid two additional buildings. Under an impressive crystal cupola the lobby of the hotel is characterized by its hanging plants and exotic gardens. All rooms are redecorated in a minimalistic Mexican style, with spectacular views individually controlled air conditioning, bath with a shower/tub, two beds, TV with cable service and remote control, direct dial telephone, bath amenities, hair dryer, mini-bar, 24 hour room service (charge for delivery), safety deposit box.",
              gallery: [
                {
                  url: "/cancun/packages/grand-cancun/grand-cancun-room.jpg",
                  text: "",
                },

                {
                  url: "/cancun/packages/grand-cancun/grand-cancun-room-2.jpg",
                  text: "",
                },
                {
                  url: "/cancun/packages/grand-cancun/grand-cancun-room-3.jpg",
                  text: "",
                },
              ],
            },
          ],
          amenities: [
            "24 Hour Room Service (charge for delivery)",
            "Banquet Facility",
            "Beach Front",
            "Business Services",
            "Concierge",
            "Conference facilities",
            "Dry Cleaning Service",
            "Fitness Center",
            "Golf",
            "Ice Machine",
            "Laundry Facilities",
            "Lounge/Bar",
            "Multilingual Staff",
            "Non-Smoking Rooms",
            "Outdoor Pool",
            "Parking",
            "Restaurant",
            "Spa Services",
            "Wheelchair Accessible",
            "Wireless Internet Access",
          ],
          location: {
            map:
              '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29782.914767038725!2d-86.79240370066537!3d21.078079580496176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2831a6459669%3A0x74a1be3cced8a726!2sGrand%20Oasis%20Canc%C3%BAn!5e0!3m2!1ses-419!2smx!4v1617809797708!5m2!1ses-419!2smx"  style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
          },
          reviews: [
            {
              author: "Sunlay P ",
              city: "",
              comments:
                "Yanin’s service was spectacular in our stay at Grand Oasis! She has always gone above and beyond for my boyfriend and I. During our check in, they didnt have a king size bed available for us initially, after a couple of days she found one and made sure to relocate us asap! Without us asking, she made us a reservations for a show at the red cabaret and it was the best part of the trip. Food and beach was amazing as usual",
              date: " February 2021",
              rating: 5,
            },
            {
              author: "Steven Colon",
              city: "",
              comments:
                "Hotel is amazing, Alfredo and Alex were amazing host at the pool area. Very respectful and the food was amazing at makitaco and sarape were amazing. I had a great time and will def come back. Great!!!",
              date: "February 2021",
              rating: 5,
            },
          ],
        },*/
      ],
    },
    {
      id: 5,
      name: "Loreto",
      slug: "loreto",
      image: "/home/destination-loreto.jpg",
      video: "https://www.youtube.com/embed/YbQvqjUsCYc?controls=0",
      carousel: [
        {
          url: "/loreto/destination/loreto-paddle.jpg",
          text: "Loreto",
        },
        {
          url: "/loreto/destination/loreto-costa.jpg",
          text: "Loreto",
        },
        {
          url: "/loreto/destination/loreto-family.jpg",
          text: "Loreto",
        },
        {
          url: "/loreto/destination/loreto-relax.jpg",
          text: "Loreto",
        },
        {
          url: "/loreto/destination/loreto-snorkel.jpg",
          text: "Loreto",
        },
      ],
      description:
        "<p>A hidden paradise located in the middle of Baja California Peninsula. It is an island bay where you can find all kinds of beaches, being a perfect blend between desert and ocean fauna and flora. </p><p>As one of Baja California's Magical towns or \"Pueblo Mágico\", you'll be in touch with Mexico's tradition and the natural wonders, a perfect place to escape the noise of the city and enjoy the serenity of Loreto.</p>",
      activities: {
        description:
          "<p>Something like you’ve never seen in Mexico before. This place offers a real escape from the city’s noise and presents the stillness of a hidden island bay.  Around Loreto, you’ll find the intact beauty of its natural landscapes and diverse beaches, flora, and fauna.</p><p>Loreto is the ideal destination to do a wellness getaway, start by a yoga class for relaxation, then leave all stress in a spa day, after, have a delicious Mexican-traditional meal and ending with a stroll by the beach watching the sun go down the amazing view of its many islands.</p><p>But if you are more of an explorer, Loreto has something else for you. Take an ATV tour around the shoreline discovering incredible paths and views of this mar de California Gulf bay, or what about a boat tour to explore each of the islands, where you’ll find all kinds of beaches and incredible spots for swimming or scuba diving. Don’t forget to try paddling or kayak, since is the best way to know the islands on your own.</p>",
        gallery: [
          {
            url: "/loreto/activities/activities-1.jpg",
            text: "Yoga",
          },
          {
            url: "/loreto/activities/activities-7.jpg",
            text: "Snorkeling",
          },
          {
            url: "/loreto/activities/activities-3.jpg",
            text: "Golf",
          },
          {
            url: "/loreto/activities/activities-4.jpg",
            text: "Paddle & Kayak",
          },

          {
            url: "/loreto/activities/activities-6.jpg",
            text: "Beach",
          },
        ],
      },
      flights: [
        {
          city: "Los Angeles",
          flightsPerDay: 1,
          time: "2 hrs 04 min",
        },
      ],
      weather: {
        description:
          "<p>As atown in the middle of the desert and by the Baja California Shore, is a hot place with almost no rains throughout the year.  </p>",
        seasons: [
          {
            name: "Winter",
            image: "/svg/winter.svg",
            temperature: "73ºF",
          },
          {
            name: "Spring",
            image: "/svg/spring.svg",
            temperature: "77ºF",
          },
          {
            name: "Summer",
            image: "/svg/summer.svg",
            temperature: "95ºF",
          },
          {
            name: "Fall",
            image: "/svg/fall.svg",
            temperature: "91ºF",
          },
        ],
      },
      packages: [
        {
          id: 15,
          name: "Loreto Palmar All Inclusive",
          slug: "loreto-palmar-all-inclusive",
          image: "/loreto/packages/villa-loreto/VillaLoreto_Hotel3.jpg",
          includeInHome: false,
          soldOut: false,
          nights: 4,
          adults: 2,
          children: 2,
          plan: "All Inclusive",
          retailPriceUSD: 1998,
          priceUSD: 699,
          savings: "66%",
          headers: [
            {
              url: "/loreto/packages/villa-loreto/VillaLoreto_Resort.jpg",
              text: "",
            },
            {
              url: "/loreto/packages/villa-loreto/VillaLoreto_Resor2t.jpg",
              text: "",
            },
            {
              url: "/loreto/packages/villa-loreto/VillaLoreto_Resor3t.jpg",
              text: "",
            },
          ],
          offer: {
            rating: 5,
            includes: [
              "This amazing package includes 5 days and 4 nights for 2 adults and up to 2 children 12 and under.",
              "All Inclusive plan.",
              "Stay in a super-comfortable, fully furnished Deluxe Suite with either two double or one queen size beds and balcony.",
              "Complimentary fully staffed Kids Club with all day activities. Nannie and babysitting services available for an extra charge.",
            ],
            description:
              "<p><em>Additional nights are available starting at $235USD.</em></p>",
            allInclusive: [
              "Breakfast: Enjoy a breakfast buffet and/or a la carte meal at the Market Restaurant",
              "Lunch: At the Market Restaurant, at Casa Mia, and at Clubhouse ",
              "Dinner: At the Market Restaurant, at Mexican Corner, at Casa Mia",
              "Alcoholic Beverages",
              "In-Room Amenities",
              "In-Room Services",
              "Hotel Amenities",
              "Unlimited Access To resort fitness and recreation facilities, pools, and hot tub",
            ],
          },
          resort: {
            description:
              '<p>The hotel epitomizes luxury within a small town while also offering complete privacy and every modern touch. The perfect place for everyone from honeymooners to large families.</p><p>The resort features 3,600 acres of unspoiled beauty. Boasting three restaurants and 20,000 square feet of turtle-shaped pools,it is minutes away from Downtown Islands of Loreto, extraordinary beaches, and world class golf courses.</p><p>Our restaurants are not limited to just extraordinary Mexican food; featuring restaurants that serve delicious steaks to fine Italian food that tempts every palate. You can even cook up dinner your own room in the private "gourmet chef\'s kitchen". Naturally, all the amenities that guests have come to expect are here too.</p>',
            features: [],
            gallery: [
              {
                url: "/loreto/packages/villa-loreto/VillaLoreto_Hotel.jpg",
                text: "",
              },
              {
                url: "/loreto/packages/villa-loreto/VillaLoreto_Hotel2.jpg",
                text: "",
              },
              {
                url: "/loreto/packages/villa-loreto/VillaLoreto_Hotel3.jpg",
                text: "",
              },
              {
                url: "/loreto/packages/villa-loreto/VillaLoreto_Beach.jpg",
                text: "",
              },
              {
                url: "/loreto/packages/villa-loreto/VillaLoreto_Paddle.jpg",
                text: "",
              },
              {
                url: "/loreto/packages/villa-loreto/VillaLoreto_Restl.jpg",
                text: "",
              },
              {
                url: "/loreto/packages/villa-loreto/VillaLoreto_Spa.jpg",
                text: "",
              },
              {
                url: "/loreto/packages/villa-loreto/VillaLoreto_Spa2jpg.jpg",
                text: "",
              },
              {
                url: "/loreto/packages/villa-loreto/VillaLoreto_Golf.jpg",
                text: "",
              },
              {
                url: "/loreto/packages/villa-loreto/VillaLoreto_Gym.jpg",
                text: "",
              },
            ],
          },
          rooms: [
            {
              name: "Deluxe Suite",
              priceUSD: 499,
              description:
                "Your deluxe suite invites you to enjoy cool days of relaxation in our air conditioned rooms, or just the soothing breeze from one of the palapa-inspired ceiling fans. And of course, an afternoon siesta is always awaiting you on your luxurious balcony with amazing views. Here at the resort of relaxation and luxury, you're guaranteed a 'perfect-moment' whether you want to snack on a meal you made with ease in your kitchenette or just had delivered onto your balcony.</p><p>Each luxurious accommodation in the Villa Del Palmar Resort offers every 'home-away-from-home' necessity you may need. The Deluxe Suite offers 2 double or 1 queen beds.</p>",
              galleryDescription: "Be our guest and see it for yourself.",
              gallery: [
                {
                  url: "/loreto/packages/villa-loreto/VillaLoreto_Room.jpg",
                  text: "",
                },

                {
                  url: "/loreto/packages/villa-loreto/VillaLoreto_Room1.jpg",
                  text: "",
                },
                {
                  url: "/loreto/packages/villa-loreto/VillaLoreto_Room2.jpg",
                  text: "",
                },
                {
                  url: "/loreto/packages/villa-loreto/VillaLoreto_Room4.jpg",
                  text: "",
                },
              ],
            },
          ],
          amenities: [
            "Four fire-pits on the beach which feature low level lighting to allow Loreto’s night sky to sparkle even more",
            "Full-service water activities center",
            "Tennis courts ($)",
            "18 hole golf course at the Loreto Bay project, 30min. away from the Resort ($)",
            "Free form, multi-level swimming pools",
            "Fun hiking trails that lead to awe-inspiring waterfalls at la Sierra de la Giganta ($)",
            "Restaurants, convenience stores ($), and bars",
            "Full kitchen",
            "Full furnishing with finely crafted wood furniture",
            "LCD televisions",
            "Marble floors",
            "Granite countertops",
            "Spacious 10ft balconies with patio furniture to enjoy the amazing views",
            "Seafood restaurant that serves the fresh catch of the day",
          ],
          location: {
            map:
              '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.562303777733!2d-111.2357167843905!3d25.718912083656214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8cdb6209025%3A0x328727e664043480!2sVilla%20del%20Palmar%20at%20The%20Islands%20of%20Loreto!5e0!3m2!1ses-419!2smx!4v1617845743736!5m2!1ses-419!2smx"  style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
          },
          reviews: [
            {
              author: "Kathy Lynn Thompson",
              city: "Salem",
              comments:
                "We had some wonderful servers that we appreciated very much! Yasor (spelling ?), Marco, Guillimo and Jorge down on the beach! Ramon at the paddle board station was most helpful and such a gentleman! The gentlemen went out of their way to please. We appreciated every effort they put in. All of the staff was exceptional to us. I'm sure I am leaving some names out. We thank you for provided the best staff to guests as you have.",
              date: "",
              rating: 5,
            },
            {
              author: "Craig NICHOLS",
              city: "Laguna Niguel",
              comments:
                "We would like to acknowledge the exceptional customer service provided by YARIZ, MANNY, GIRARDO, CANDELARIO, & SANTIAGO. In fact, the entire restaurant/serving staff was fantastic. We would also like to acknowledge OSCAR TORRES for his gracious efforts. Also, we LOVED your activities team, EDUARDO, ZAZIL, GENESIS, KAREN, DUVIS & RAMON. The shows were enjoyable and made our stay so much fun! CARLOS ZAMORA in Premium Services and OMAR, the shuttle driver, were extremely professional, helpful and wonderful to work with. We would also like to mention that MARIO from Wild Tours was terrific! Our vacation at Villa del Palmar was one of our best ever!!!",
              date: "",
              rating: 5,
            },
            {
              author: "Loren Gardner",
              city: "Sherman Oaks",
              comments:
                "We couldn't have been more happy with the food and service we received during our stay. The staff was unbelievable. They were always greeting us with a smile, and many learned our names and greeting us on a first name basis. On our anniversary night at Dazante restaurant they had a placard with our names on it, and brought us dessert with a firework in it and captured that moment on camera for us. I've never been treated better anywhere in my life! At the pool, Manny was exceptional and had another drink (usually 2) ready for me once my current drink was nearing the bottom :) We have already been recommending Villa Del Palmar Loreto to family and friends!",
              date: "",
              rating: 5,
            },
          ],
        },
        {
          id: 16,
          name: "Loreto Bay All Inclusive",
          slug: "loreto-bay-all-inclusive",
          image: "/loreto/packages/bay/bay-hotel.jpg",
          includeInHome: false,
          soldOut: false,
          nights: 4,
          adults: 2,
          children: 2,
          plan: "All Inclusive",
          retailPriceUSD: 1261,
          priceUSD: 599,
          savings: "53%",
          headers: [
            {
              url: "/loreto/packages/bay/bay_resort.jpg",
              text: "",
            },
            {
              url: "/loreto/packages/bay/bay-resort-2.jpg",
              text: "",
            },
            {
              url: "/loreto/packages/bay/bay-resort-3.jpg",
              text: "",
            },
          ],
          offer: {
            rating: 5,
            includes: [
              "This amazing package includes 5 days and 4 nights for 2 adults and up to 2 children 12 and under.",
              "All Inclusive plan.",
              "Stay in a super-comfortable, fully furnished Deluxe Room",
            ],
            description:
              "<p><em>Additional nights are available starting at $235USD.</em></p>",
            allInclusive: [
              "Daily Breakfast, Lunch, and Dinner A-la-Carte.",
              "Unlimited alcoholic & non-alcoholic drinks.",
              "Activities(volleyball, shuffle board, pool activities, etc.).",
              "Non-motorized water sports.",
            ],
          },
          resort: {
            description:
              "<p>Loreto Bay Golf Resort & Spa is nestled on the shores of the Mar de Cortes, in the exclusive Nopolo Bay. The Sierra La Giganta Mountains and the vast desert join together to create a magical setting and a heavenly ambiance.</p><p>The beauty of this paradise emerges from each grain of sand, each wave and also from the majestic rock formations that create magnificent scenic views. In this exclusive enclave, you will enjoy the most attentive and sophisticated service.</p><p>We invite you to enjoy with us the nature and beauty of Loreto, Baja California South.</p>",
            features: [],
            gallery: [
              {
                url: "/loreto/packages/bay/bay-hotel.jpg",
                text: "",
              },
              {
                url: "/loreto/packages/bay/bay-hotel-2.jpg",
                text: "",
              },
              {
                url: "/loreto/packages/bay/bay-hotel-3.jpg",
                text: "",
              },
              {
                url: "/loreto/packages/bay/bay-hotel-4.jpg",
                text: "",
              },
              {
                url: "/loreto/packages/bay/ bay-hotel-5.jpg",
                text: "",
              },
              {
                url: "/loreto/packages/bay/bay-pool.jpg",
                text: "",
              },
              {
                url: "/loreto/packages/bay/bay-loreto.jpg",
                text: "",
              },
            ],
          },
          rooms: [
            {
              name: "Deluxe Room ",
              priceUSD: 399,
              description:
                "Large and comfortable rooms with a balcony. All the rooms feature oversized bathroom with luxurious amenities.</p>",
              galleryDescription: "Be our guest and see it for yourself.",
              gallery: [
                {
                  url: "/loreto/packages/bay/bay-room-3.jpg",
                  text: "",
                },

                {
                  url: "/loreto/packages/bay/bay-room-4.jpg",
                  text: "",
                },
                {
                  url: "/loreto/packages/bay/bay-room-3.jpg",
                  text: "",
                },
                {
                  url: "/loreto/packages/bay/bay-room-5.jpg",
                  text: "",
                },
              ],
            },
          ],
          amenities: [
            "Sports Bar",
            "Pools",
            "2 Restaurants",
            "Spa",
            "Activities",
            "Loreto Bay Golf Course",
            "Tennis courts",
            "Gym",
          ],
          location: {
            map:
              '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.444087345616!2d-111.35029648255616!3d25.920639399999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86b43d8ec8fc75cf%3A0x4387a1eec45d00e4!2sHotel%20Loreto%20Bay%20Golf%20Resort%20%26%20Spa!5e0!3m2!1ses-419!2smx!4v1617847288802!5m2!1ses-419!2smx"  style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
          },
          reviews: [
            {
              author: "Albrecht",
              city: "USA",
              comments:
                "I chose Loreto Bay for a special week-long family holiday and was not disappointed... what a fantastic place! No crowds at the pool or the pool bar, no dirt on the beach, nice quiet rooms with great views and, above and beyond, incredible hospitality. Carlos, Jose Luis and Itzel at reception, Tulio and his team at the restaurant, and every other member of the staff are incredibly friendly and honest people. They organized an exclusive candle-light dinner on the beach and brought me my wallet back after I'd forgotten it on the table",
              date: "",
              rating: 5,
            },
            {
              author: "Steve and Family",
              city: "California",
              comments:
                "Loreto Bay Golf Resort was friendly and welcoming. Service was outstanding and the staff was always happy to help. We had one of the best trips as a family and look forward to coming back. Kitchen prepared the Dorado we caught in an amazing fashion. Only thing I had to say is I wish they had ice machines and vending for soft drinks after hours. Other than that we are planning on returning annually as a family. Great job to Carlos and his staff of Victor, Oscar, Eloy, Eduardo and all else that welcomed us every day when we were there. Thanks again",
              date: "",
              rating: 5,
            },
          ],
        },
      ],
    },
  ],
};
