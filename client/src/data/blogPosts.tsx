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

      <p>We left campus around midnight, caught a 5:30 am flight, and reached Guwahati half-asleep but excited. I found a cheap backpackers’ hostel near her place — Gibbon Backpackers — just ₹400 a night. Best decision ever. The vibe? Unreal.</p>

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

      <p>By around 10 p.m., the streets of Police Bazar were still buzzing softly. After a full day, our little group craved something comforting — and Shillong’s street food did not disappoint.</p>

      <p>We dove into the local flavors:<br>
      Jadoh, a traditional Khasi dish of pork and rice, rich and comforting.<br>
      Smoked pork, tender and aromatic — every bite felt like a story from the hills.<br>
      Then came Dohneiiong, cooked in black sesame — a unique, earthy blend of spice and nuttiness.<br>
      And finally, Pukhlein, a warm, sweet rice cake — the perfect gentle note to end on.</p>
      <img src="/images/meghalaya/street_food.jpeg" alt="Street food Pukhlein" style="width:100%; margin: 20px 0;" />

      <p>Bellies full, Priya’s two friends headed back to the hotel, but neither of us felt like calling it a night just yet.</p>

      <p>So, around 1 a.m., it was just me and Priya walking through the quiet streets of Shillong.</p>

      <p>No honking. No crowd.<br>
      Just yellow streetlights, cool mountain air, and a calm that’s hard to find in cities.</p>

      <p>It felt like a peaceful indie movie — the kind where silence says more than words.<br>
      We didn’t talk much, just strolled. Took it all in. Sometimes that's all you need — a good friend and an empty street.</p>

      <p>Later, still somehow hungry, we made our way to Barbeque Chinese Restaurant — one of Shillong’s classics.<br>
      Every dish? Spot on. Hot, flavorful, and the kind of food you remember later when you're hungry at midnight again.</p>

      <p>Back at the hotel, we played a few rounds of cards, shared a few laughs, and called it a night.</p>

      <h2>Caves, Forests & Biryani</h2>

      <p>The following morning, our taxi awaited, ready to transport us into the heart of nature. Our destination: Balpakram National Park, often referred to as the "Land of Perpetual Winds" by the local Garo people. As we ventured into this untouched wilderness, the landscape unfolded into a tapestry of deep gorges, dense forests, and dramatic cliffs.</p>

      <p>Trekking through the park, we were enveloped by the symphony of chirping birds and rustling leaves. The air was crisp, carrying with it tales of ancient legends whispered by the winds. We paused at a vantage point, gazing upon the vast expanse that stretched into the horizon, feeling both humbled and invigorated by nature's grandeur.</p>
      <img src="/images/meghalaya/gallery_25.jpeg" alt="Balpakram National Park" style="width:100%; margin: 20px 0;" />

      <p>By evening, we were back in Guwahati. Last stop? Mughal Garden Biryani — the perfect goodbye meal.</p>

      <h2>And That’s a Wrap… For Now</h2>

      <p>It wasn’t a luxury trip. Nothing was planned perfectly. But it had soul — good people, good food, and places that make you pause.</p>

      <p>Still many corners of the Northeast left to explore — and I know I’ll be back.</p>

      <p>Until then, this one stays in the top shelf of my memory drawer.</p>

    `
  }
];
