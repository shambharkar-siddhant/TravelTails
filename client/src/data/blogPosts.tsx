export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  date: string;
  location: string;
  excerpt: string;
  coverImage: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Lost in Meghalaya: Unplanned Moments & Untouched Beauty",
    slug: "wandering through clouds",
    date: "October 8, 2022",
    location: "Meghalaya",
    excerpt: "",
    coverImage: "/images/meghalaya/blog_4.jpeg",
    content: `
      <h1 className="text-white">Wandering Northeast: From Kharagpur to Shillong</h1>

      <p>It all started back in my first semester of M.Tech at IIT Kharagpur. My friend (let's call her Angel Priya) had just wrapped up her internship and was heading home to Guwahati. On a random instinct, I told her, “What if I come drop you?” She smiled — and just like that, the trip began.</p>

      <p>We left campus around midnight, caught a 5:30 am flight, and reached Guwahati half-asleep but excited. I found a cheap backpackers' hostel near her place — Gibbon Backpackers — just ₹400 a night. Best decision ever. The vibe? Unreal.</p>

      <p>I met travelers with wild stories —<br>
      One left home searching for freedom and happiness.<br>
      Another was doing a PhD on mountain tribes.<br>
      One was an IITG student just looking to connect.</p>

      <p>I spent hours chatting with strangers, each conversation opening new worlds.</p>
      <img src="/images/meghalaya/gallery_28.jpeg" alt="Travelers at Gibbon Hostel" style="width:100%; margin: 20px 0;" />

      <p>Later that day, I wandered through Guwahati on my own. Talked to locals, tried street food, visited a mall — and unexpectedly, it felt like walking through a slice of Japan or Korea. The lifestyle there is heavily East Asian–inspired — minimal, aesthetic, peaceful.</p>

      <h2>The Meghalaya Escape</h2>

      <p>Next day, we headed to Meghalaya — me, Angel Priya, and her two friends. A 3-hour bus ride took us to Shillong, where we grabbed a tourist taxi (₹3.5k for the two days). First stop? NohKaLikai Falls.</p>

      <p>It's hard to explain the view —<br>
      A waterfall spilling through clouds,<br>
      Falling from the sky like a secret.</p>

      <p>We stood still, not saying much. Just breathing it all in.</p>

      <p>Then came Umiam Lake Park — quiet, scenic, touristy. We sat by the lake and devoured authentic momos. Real stuff. Not the fake ones you get in cities.</p>

      <p>Later, we visited Lady Hydari Park — a blend of zoo and garden. Saw a flamingo for the first time (those eyes are wild), clicked pictures near small waterfalls, and soaked in the calm.</p>
      <img src="/images/meghalaya/gallery_13.jpeg" alt="Lady Hydari Park" style="width:100%; margin: 20px 0;" />

      <p>Evening rolled in and we checked into a cozy cottage. After freshening up, we stepped out again — this time to explore Police Bazar at night.</p>

      <h2>Midnight in Shillong</h2>

      <p>By around 10 p.m., the streets of Police Bazar were still buzzing softly. After a full day, our little group craved something comforting — and Shillong's street food did not disappoint.</p>

      <p>We dove into the local flavors:<br>
      Jadoh, a traditional Khasi dish of pork and rice, rich and comforting.<br>
      Smoked pork, tender and aromatic — every bite felt like a story from the hills.<br>
      Then came Dohneiiong, cooked in black sesame — a unique, earthy blend of spice and nuttiness.<br>
      And finally, Pukhlein, a warm, sweet rice cake — the perfect gentle note to end on.</p>
      <img src="/images/meghalaya/street_food.jpeg" alt="Street food Pukhlein" style="width:100%; margin: 20px 0;" />

      <p>Bellies full, Priya's two friends headed back to the hotel, but neither of us felt like calling it a night just yet.</p>

      <p>So, around 1 a.m., it was just me and Priya walking through the quiet streets of Shillong.</p>

      <p>No honking. No crowd.<br>
      Just yellow streetlights, cool mountain air, and a calm that's hard to find in cities.</p>

      <p>It felt like a peaceful indie movie — the kind where silence says more than words.<br>
      We didn't talk much, just strolled. Took it all in. Sometimes that's all you need — a good friend and an empty street.</p>

      <p>Later, still somehow hungry, we made our way to Barbeque Chinese Restaurant — one of Shillong's classics.<br>
      Every dish? Spot on. Hot, flavorful, and the kind of food you remember later when you're hungry at midnight again.</p>

      <p>Back at the hotel, we played a few rounds of cards, shared a few laughs, and called it a night.</p>

      <h2>Caves, Forests & Biryani</h2>

      <p>The following morning, our taxi awaited, ready to transport us into the heart of nature. Our destination: Balpakram National Park, often referred to as the "Land of Perpetual Winds" by the local Garo people. As we ventured into this untouched wilderness, the landscape unfolded into a tapestry of deep gorges, dense forests, and dramatic cliffs.</p>

      <p>Trekking through the park, we were enveloped by the symphony of chirping birds and rustling leaves. The air was crisp, carrying with it tales of ancient legends whispered by the winds. We paused at a vantage point, gazing upon the vast expanse that stretched into the horizon, feeling both humbled and invigorated by nature's grandeur.</p>
      <img src="/images/meghalaya/gallery_25.jpeg" alt="Balpakram National Park" style="width:100%; margin: 20px 0;" />

      <p>By evening, we were back in Guwahati. Last stop? Mughal Garden Biryani — the perfect goodbye meal.</p>

      <h2>And That's a Wrap… For Now</h2>

      <p>It wasn't a luxury trip. Nothing was planned perfectly. But it had soul — good people, good food, and places that make you pause.</p>

      <p>Still many corners of the Northeast left to explore — and I know I'll be back.</p>

      <p>Until then, this one stays in the top shelf of my memory drawer.</p>

    `
  },
  {
    id: 2,
    title: "Riding Into the Unexpected: A Pondicherry Bike Trip",
    slug: "Crusing through strom",
    date: "May 17, 2025",
    location: "Pondicherry",
    excerpt: "",
    coverImage: "/images/pondicherry/cover_1.jpg",
    content:`
      <h1 className="text-white">Riding Into the Unexpected: A Pondicherry Bike Trip</h1>

      <p>It all started with an itch — my first ever bike trip. Late May, and the monsoon was knocking. I wanted dry skies, open roads, and just enough recklessness to feel alive. Pondicherry looked promising — the forecast said hot and sunny, Perfect! I marked the weekend: leave Saturday morning, roam for two days, and ride back Sunday night. Just me, my bike, and the open highway.</p>

      <p>While I was planning, my roommate caught wind of it and asked to join. We spent the night mapping out everything — cafes, beaches, street food, places that would make our two days feel like ten.</p>

      <p>We started at 5 a.m., hoping to cover the 320 km stretch in five hours. Two quick chai stops and that's it, I told myself. And that's what we did. Bangalore roads gave way to open highways, and as I cruised at 120 km/h, I felt it — that thrill I'd only imagined in my college days. Just wind, speed, and the road stretching endlessly ahead. Alive, finally.</p>
      <img src="/images/pondicherry/blog_1.jpg" alt="somewhere on the route" style="width:100%; margin: 20px 0;" />

      <p>We reached Pondicherry by 10 a.m. I was buzzing, but my friend on the pillion seat? Nearly dead. Five hours on a stiff bike seat had taken a toll. I hadn't considered that. Oops.</p>

      <p>First stop: <strong>Coromandel Café</strong>. French vibes, menu items I couldn't pronounce. I let Google do the talking and picked the best-rated breakfast. Good choice — but honestly, South Asians know how to use spices. Still, charming place.</p>

      <p>Our hotel cost just ₹1,400 per night — clean, cute, a bit antique. If it were in Bangalore, it'd be ₹5k easy. We crashed hard. Woke up around 3 p.m. to find it pouring outside. Damn. So much for dry skies. But then, I heard a puppy yelping outside. Through the rain, we spotted it stuck in a pothole, its mother barking helplessly nearby. We pulled it out and ran, half-laughing, half-panicked that the mother might chase us down.</p>

      <p>I still wanted to explore. The guy at reception suggested a few cafes and, seeing the rain, offered us an umbrella. Kind gesture. We ended up at <strong>Flaming Dragons</strong> — proper Asian food. Tried Kung Pao prawns and loved it. Then we hit the beachside food stalls: <em>mutton rolls, crab masala, fish bajji, banana fritters</em>. Everything deep-fried, spicy, and heartwarming.</p>
      <img src="/images/pondicherry/blog_2.jpg" alt="Street Food of Pondicherry" style="width:100%; margin: 20px 0;" />

      <p>Despite the crowds, the beach was peaceful. You could still hear the waves crashing over the noise. It was the calm I'd searched for in Bangalore and finally found here. We walked the shore, let the sea breeze wash over us. It was the kind of peace that doesn't ask for attention — it just settles quietly inside you.</p>

      <p>Dinner was split in two: first at <strong>Storytellers Resturant</strong> for some live music, then a rooftop meal at <strong>Chitra's Restaurant</strong>. The wind was perfect, the crabs were surprisingly good, and the day wrapped itself up beautifully.</p>

      <p>Next morning, we went straight to <strong>Baker Street</strong>. The name undersells it. This was sugar heaven — croissants, macarons, tiramisu, cheesecake, apple pie, egg flan, and strong black coffee to balance it all. We tried everything we'd heard of and even some we hadn't. It was indulgent. No regrets.</p>
      <img src="/images/pondicherry/blog_3.jpg" alt="Street Food of Pondicherry" style="width:100%; margin: 20px 0;" />

      <p>With sugar running through our veins, we headed to <strong>Matrimandir</strong> in Auroville — a golden geodesic dome in the middle of a spiritual commune. A vision of unity, equality, and peace. The walk from the gate to the center took 45 humid minutes, lined with shops selling handmade things. I bought a clay ghost — adorable, weird, and unique. The dome itself was impressive — a meditative space shaped like a sci-fi dream. On the way back, we skipped the hour-long wait for the free bus and walked again, sweating and satisfied.</p>
      <img src="/images/pondicherry/blog_4.jpg" alt="Street Food of Pondicherry" style="width:100%; margin: 20px 0;" />

      <p>After that, <strong>Auro Beach</strong>. Just okay. Nothing special. Locals drinking with their food, lots of noise — not really my vibe. But we did stop at a kombucha café nearby, where we were the only Indians among a dozen French tourists. The café had a laid-back, authentic feel — and the drink? Surprisingly refreshing.</p>
      <img src="/images/pondicherry/blog_5.jpg" alt="Street Food of Pondicherry" style="width:100%; margin: 20px 0;" />

      <p>Time to head back. My friend decided to take the bus back with the luggage. I was alone in the return journey. But here's what I didn't plan for: leaving at 6 p.m. was a terrible mistake. Imagine this — pitch-black highways, heavy rain, GPS barely clinging to life, no streetlights, no people, no hotels, and a creeping fear that ghost might jump at you from the next turn. For 200 km, it was just me, my bike, and a storm.</p>

      <p>I stopped once to look for shelter — found nothing. So I rode. For seven hours stright. My back felt like it had aged 10 years. My phone died at 5% just before the last turn, but I recognized the road and made it home. And though I don't believe in God, that night, I whispered a thank you to the universe. I was soaked, sore, and safe. And that was enough.</p>

      <p>By the time my friend reached home, I was already passed out after a hot shower. I'd lived a trip that tested comfort, patience, and nerve — and gifted moments I'd never trade back.</p>

      <p>No, it wasn't perfect. But it was real. It was mine. And I'd ride again in a heartbeat.</p>
    `
  }
];
