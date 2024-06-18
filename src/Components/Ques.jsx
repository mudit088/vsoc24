import React from 'react';
import Faqs from './Faqs';
import Footerb from './Footerb';

const Ques = () => {
  const questions = [
    {
      id: '1',
      ques: 'I do not have any prior knowledge of git and/or any programming language. Can I do this?',
      ans: 'Absolutely. This program is specifically catered to the growth and smooth transition of people like you who want to learn. KOSS and the mentors will help you wherever possible.'
    },
    {
      id: '2',
      ques: 'What is the purpose of this program? Is this some kind of internship?',
      ans: 'No, VSOC is a program which aims at helping participants learn how to contribute in the open-source world.'
    },
    {
      id: '3',
      ques: 'Can I participate in VSOC as both a mentor and a student?',
      ans: 'No, you can not.'
    },
    {
      id: '4',
      ques: 'Will I receive a certificate at the end of the VSOC?',
      ans: 'If you remain with us till the end of the program, then you will receive a certificate for completion of the program. You would have to clear both the mid and end evaluation to get the certificate. More details can be found in our manual.'
    },
    {
      id: '5',
      ques: 'Which programming language(s) do I need to be fluent in?',
      ans: 'It is sufficient to know one or two, but the more you know the better it is. You can also learn a language during VSOC.'
    },

    {
      id: '6',
      ques: 'Can I work on more than one project?',
      ans: 'Yes! You can even work in parallel on them. Well, if you are a beginner it is advisable to focus your attention at one thing at a time. But the choice rests with you.'
    },

    {
      id: '7',
      ques: 'Will this programme help me in improving competitive coding skills?',
      ans: 'Participating in Open Source contribution improves your skills of software development and of a particular programming language. Depending on your project, you might be able to use some algorithms too. But you should not relate to direct improvement on your competitive coding skills.'
    },

    {
      id: '8',
      ques: 'What are the minimum contributions I have to do to get successfully recognized as to have completed the programme?',
      ans: 'That will based on mentors feedback. You need to have at least one merged PR by the mid-evals to be eligible for continuing the program.'
    },
  ];

  return (
    <div>
      <Faqs Quest={questions} />
      <Footerb/>
    </div>
  );
}

export default Ques;
