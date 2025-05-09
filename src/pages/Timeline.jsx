import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';

// const timelineData = [
//   {
//     year: 2015,
//     title: "First School Interaction",
//     description: "The day we first spoke in school. I remember how you wrote in my slam book with that purple pen you always carried.",
//     icon: "🏫",
//     category: "School Days"
//   },
//   {
//     year: 2016,
//     title: "First Call After School",
//     description: "Our first long phone call after school hours. We talked about everything and nothing for hours, and I didn't want it to end.",
//     icon: "📱",
//     category: "School Days"
//   },
//   {
//     year: 2017,
//     title: "Late Night Messages",
//     description: "Our secret late-night chats when everyone else was asleep. You'd always send that sleepy emoji when you were about to doze off.",
//     icon: "💬",
//     category: "School Days"
//   },
//   {
//     year: 2018,
//     title: "Missing You During Inter College Days",
//     description: "When we went to different colleges, every day felt longer. I counted days until we could meet again during holidays.",
//     icon: "🏢",
//     category: "College Days"
//   },
//   {
//     year: 2020,
//     title: "B.Tech Meetup in Anantapur",
//     description: "Our reunion at Sreekantam circle in Anantapur. Seeing your smile after so long made everything feel right again.",
//     icon: "🎓",
//     category: "College Days"
//   },
//   {
//     year: 2021,
//     title: "Memorable Lunch & Street Food",
//     description: "That impromptu lunch date where we tried every street food around campus. You couldn't handle the spicy pani puri but kept eating it anyway.",
//     icon: "🍜",
//     category: "Food & Fun"
//   },
//   {
//     year: 2022,
//     title: "Movie Marathon Day",
//     description: "When we watched three movies back-to-back and still wanted more. You fell asleep during the last one, but I didn't wake you.",
//     icon: "🎬",
//     category: "Entertainment"
//   },
//   {
//     year: 2023,
//     title: "Exam Failure Fear & Confession",
//     description: "That emotional night before results when you were so worried about failing. I promised everything would be okay, and finally found the courage to tell you how I really felt.",
//     icon: "📝",
//     category: "Emotional Moments"
//   },
//   {
//     year: 2024,
//     title: "Your Job Celebration at Mehefil",
//     description: "Celebrating your job offer at Mehefil restaurant. I've never seen you so happy and proud, and I was even happier for you.",
//     icon: "🎉",
//     category: "Celebrations"
//   },
//   {
//     year: 2024,
//     title: "Shopping Day at Trends",
//     description: "Our shopping spree at Trends where you tried on dozens of outfits but picked the very first one you liked. Your excitement over the smallest things makes every day brighter.",
//     icon: "🛍️",
//     category: "Shopping & Fun"
//   },
//   {
//     year: 2025,
//     title: "Today's Birthday Celebration",
//     description: "Today, celebrating another year of your beautiful existence. Looking back at our journey, I'm grateful for every moment and excited for many more to come.",
//     icon: "🎂",
//     category: "Celebrations"
//   }
// ];


const timelineData = [
  {
    year: "1",
    title: "First Connection in School",
    description: "We met in school and slowly became friends. Our casual talks during school hours became something I looked forward to every day.",
    icon: "🏫",
    category: "School Days"
  },
  {
    year: "2",
    title: "I Wrote Her Slam Book",
    description: "I wrote in her slam book back in school. That simple act became the start of something deeper—I didn't expect it to matter so much, but it did.",
    icon: "📓",
    category: "School Days"
  },
  {
    year: "3",
    title: "She Called Me First Time",
    description: "After I wrote her slam, she called me for the first time. That moment made me so happy—it felt like something special had started.",
    icon: "📞",
    category: "Early Bond"
  },
  {
    year: "3",
    title: "Diploma Days: Waiting for Her Call",
    description: "During my diploma, she didn’t have her own phone. I waited and hoped she would call. One day, she tried reaching me through her friend's parent's mobile. That surprise made me the happiest person in the world.",
    icon: "📱",
    category: "Distance & Effort"
  },
  {
    year: "4",
    title: "College Phase: Communication Gaps",
    description: "Our lives got busy during college. We didn't talk much, but my thoughts always wandered to her. I kept those memories close.",
    icon: "🎓",
    category: "College Days"
  },
  {
    year: "5",
    title: "Reunion in Anantapur",
    description: "We finally met again at Sreekantam circle after a long time. I tried to stay calm, but inside, it was such a meaningful and emotional moment.",
    icon: "📍",
    category: "Reunions"
  },
  {
    year: "6",
    title: "Lunch at Mehefil",
    description: "That lunch we had at Mehefil was simple but unforgettable. Being together again in person made me feel warm and happy.",
    icon: "🍽️",
    category: "Memories"
  },
  {
    year: "7",
    title: "Shopping Together at Trends",
    description: "We went shopping at Trends. Watching her pick things and smile was one of those moments where time felt slower, and I wished it lasted longer.",
    icon: "🛍️",
    category: "Good Times"
  },
  {
    year: "8",
    title: "Her First Job Offer",
    description: "She got a job and I was genuinely proud of her. Watching her reach that step in life filled me with admiration and silent joy.",
    icon: "💼",
    category: "Milestones"
  },
  {
    year: "9",
    title: "Late-Night Chats and Real Talks",
    description: "We sometimes talked late into the night. It wasn’t just the time—it was the real connection, the way we shared our thoughts without filters.",
    icon: "🌙",
    category: "Deep Bond"
  },
  {
    year: "10",
    title: "Today: Her Birthday",
    description: "It’s her birthday today, and all I can think of is how beautiful our journey has been—quiet, unspoken in many ways, but deeply felt.",
    icon: "🎂",
    category: "Present"
  }
];


const Timeline = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredData, setFilteredData] = useState(timelineData);
  
  useEffect(() => {
    document.title = "Our Journey | Happy Birthday Naina!";
    
    if (selectedCategory === "All") {
      setFilteredData(timelineData);
    } else {
      setFilteredData(timelineData.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory]);
  
  // Extract unique categories
  const categories = ["All"];
  // const categories = ["All", ...new Set(timelineData.map(item => item.category))];
  
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-title"
          >
            Our Journey Together
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            A timeline of our special moments from 2015 to 2025. Each memory is a treasure that I hold close to my heart.
          </motion.p>
        </div>
        
        {/* Category Filter */}
        <div className="mb-8 overflow-x-auto">
          {/* <div className="flex space-x-2 pb-2 min-w-max text-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm transition-colors whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div> */}
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary-200 transform -translate-x-1/2"></div>
          
          <div className="relative space-y-8">
            {filteredData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Year Bubble - Middle for Desktop */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center z-10">
                    <span className="text-sm font-bold">{item.year}</span>
                  </div>
                </div>
                
                {/* Content Box */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className={`timeline-card ${
                    index % 2 === 0 ? 'border-primary-500' : 'border-secondary-500'
                  }`}>
                    {/* Mobile Year Badge */}
                    <div className="flex md:hidden items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center mr-3">
                        <span className="text-xs font-bold">{item.year}</span>
                      </div>
                      <span className="text-gray-500 text-sm flex items-center">
                        <FaCalendarAlt className="mr-1" />
                        {item.category}
                      </span>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="text-3xl mr-4">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Empty Div for Spacing on Alternate Sides */}
                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;