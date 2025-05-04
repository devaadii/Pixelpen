import React from "react";
import { motion } from "framer-motion";
import { FaQuoteRight } from "react-icons/fa";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Nora Wallace",
    role: "Creative Director",
    text: "Their attention to detail made our brand video unforgettable. The feedback from our clients was incredible.",
    image: "https://randomuser.me/api/portraits/women/31.jpg",
    stars: 5,
  },
  {
    name: "Arjun Mehta",
    role: "Financial Advisor",
    text: "Professional, fast, and visually stunning. These edits gave my online presence a serious upgrade.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    stars: 4,
  },
  {
    name: "Grace Liu",
    role: "Mental Health Advocate",
    text: "They created a video that felt emotionally powerful yet calming. I couldn't have asked for better.",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    stars: 5,
  },
  {
    name: "Carlos Martínez",
    role: "Bartender & Mixologist",
    text: "Their editing made my drink tutorials pop! I started getting brand deals within a month.",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
    stars: 5,
  },
  {
    name: "Zoe Harper",
    role: "Children's Author",
    text: "They brought my stories to life with colorful visuals and whimsical touches. Kids and parents love it!",
    image: "https://randomuser.me/api/portraits/women/35.jpg",
    stars: 5,
  },
  {
    name: "Dmitry Ivanov",
    role: "Drone Videographer",
    text: "Their color grading and pacing made my footage look like a blockbuster movie. Seriously next level.",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    stars: 5,
  },
  {
    name: "Aaliyah Johnson",
    role: "Online Educator",
    text: "I’ve never had students stay so focused. These edits made my lessons truly engaging.",
    image: "https://randomuser.me/api/portraits/women/37.jpg",
    stars: 4,
  },
  {
    name: "Jamal Knight",
    role: "Sneaker Reviewer",
    text: "My unboxings look way more premium now. The edits add hype and polish in all the right places.",
    image: "https://randomuser.me/api/portraits/men/38.jpg",
    stars: 5,
  },
  {
    name: "Freya Lindholm",
    role: "Nature Photographer",
    text: "They preserved the raw beauty of my clips while enhancing the flow and storytelling. Perfect.",
    image: "https://randomuser.me/api/portraits/women/39.jpg",
    stars: 5,
  },
  {
    name: "Mateo Silva",
    role: "Tattoo Artist",
    text: "Their edits gave my portfolio the edge it needed. It’s helped bring in serious clients.",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
    stars: 4,
  },
];

// Helper to shuffle array
const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

// Break into 3 columns and shuffle each
const [col1, col2, col3] = (() => {
  const shuffled = shuffle(testimonials);
  const chunkSize = Math.ceil(shuffled.length / 3);
  return [
    shuffle(shuffled.slice(0, chunkSize)),
    shuffle(shuffled.slice(chunkSize, chunkSize * 2)),
    shuffle(shuffled.slice(chunkSize * 2)),
  ];
})();

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <div className="fade-top"></div>
      <div className="fade-bottom"></div>

      <div className="testimonials-columns">
        {[col1, col2, col3].map((column, colIndex) => (
          <motion.div
            key={colIndex}
            className="scroll-loop"
            initial={{ y: 0 }}
            animate={{ y: ["0%", "-100%"] }}
            transition={{
              duration: 30 + colIndex * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="column-inner">
              {column.concat(column).map((t, index) => (
                <div key={index} className="testimonial-card">
                  <p className="testimonial-text">"{t.text}"</p>
                  <div className="testimonial-footer">
                    <img src={t.image} alt={t.name} className="avatar" />
                    <div>
                      <p className="name">{t.name}</p>
                      <p className="role">{t.role}</p>
                      <div className="stars">{"★".repeat(t.stars)}</div>
                    </div>
                  </div>
                  <FaQuoteRight className="quote-icon" />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;