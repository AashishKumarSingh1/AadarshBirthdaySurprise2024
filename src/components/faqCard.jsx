import React from "react";
import "../App.css";
const questions = [
  'What is the purpose of this website?',
  'Who is Aadarsh?',
  'How can I leave a birthday message for Aadarsh?',
  'What kind of content can I find on this website?',
  'How long will this website be available?',
  'Who created this website?',
  'How can I contact the creator of the website?'
];
const answers = [
  'This website is a special dedication to celebrate the 14th birthday of Aadarsh Kumar Singh. It aims to showcase memories and create a memorable experience for him and his loved ones.',
  'Aadarsh is my younger brother. He is an incredible person who brings joy and happiness to everyone around him. This website is a tribute to his wonderful personality and to celebrate his special day.',
  'You can leave a birthday message for Aadarsh by navigating to the "Say Happy Birthday " section on the website. There, you can write your heartfelt wishes and share your memories with him.',
  'The website features a variety of content including: a photo gallery showcasing memorable moments with Aadarsh, a message board for friends and family to leave birthday wishes and trivia about Aadarsh.',
  'This website will be available for a long time period as a digital keepsake for Aadarsh and his loved ones. It can be revisited anytime from 4 June 2024 to relive the memories and celebrations.',
  'This website was lovingly created by me(Aashish Kumar Singh), as a special project to celebrate Aadarsh\'s 14th birthday. It is a token of love and appreciation for all the wonderful moments shared with Aadarsh.',
  'If you have any questions or need assistance, you can contact me at munnimanoj1973@gmail.com. I would be happy to help! or you can leave a message below.'
];
const FaqCard = () => {
  return (
    <>
      <FAQ questions={questions} answers={answers} />
    </>
  );
};

export default FaqCard;

const FAQ = ({ questions, answers }) => (
  <>
    <h2 className="text-2xl font-bold text-white mb-4 text-center cursor-pointer mt-3">
      Frequently Asked Questions
    </h2>
    <div className="flex flex-wrap justify-center mt-8 mb-8 items-stretch self-stretch">
      {questions.map((question, index) => (
        <div
          key={index}
          className="w-full self-stretch h-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/3 p-6 hover:shadow-blue-800 cursor-pointer shadow-blue-800 gap-8 flex hover:shadow-xl" 
        >
          <div className="bg-slate-600 self-stretch text-white rounded-2xl shadow-lg p-6 flex-grow flex flex-col">
            <div className="mb-4 self-stretch">
              <h3 className="text-xl font-semibold mb-2 ">{question}</h3>
              <p className="text-gray-300">{answers[index]}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
);
