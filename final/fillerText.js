// Auto-generated text for project pages
const text = [
'Create a “School Events Dashboard” that auto-populates upcoming club meetings, sports games, and school events from a shared calendar or spreadsheet. The page could dynamically update with event descriptions, times, and locations, and even highlight featured events of the week with images or announcements.',
'Build a “Student Project Showcase” page that automatically displays technology projects submitted by club members. Each project card could include a title, description, screenshots, and links, all pulled from a simple database or form submission so new entries instantly appear on the site.',
'Develop a “Tech Tip of the Day” generator that auto-populates useful tips about coding, cybersecurity, or productivity. The system could rotate through a stored collection or randomly generate tips using templates, refreshing content daily to keep students engaged.',
'Design a “Club Member Spotlight” page that automatically features a different student each week. It could pull from a list of members and display their interests, favorite tech tools, and recent projects, helping build community within the club.',
'Create a “Beginner Coding Challenge Board” that auto-populates simple programming challenges for students to try. Each challenge could include instructions, sample input/output, and a hidden solution, with new problems appearing on a schedule or at random.',
'Build a “Tech News for Students” page that aggregates and auto-populates simplified technology news stories relevant to teens. The site could filter and summarize articles, making them easy to understand and refreshing content regularly.',
'Develop a “Resource Library” that auto-populates helpful links, tutorials, and videos for learning programming and technology skills. Students could submit resources through a form, and the page would dynamically update with categorized content.',
'Create a “Quiz Generator” that auto-populates fun tech-related quizzes (e.g., coding basics, hardware knowledge, internet safety). The system could randomly assemble questions from a question bank and display scores instantly after completion.',
'Design a “Hackathon Idea Generator” that auto-populates creative project prompts for club events. Each idea could combine a theme, problem, and required feature set, giving teams instant inspiration during brainstorming sessions.',
'Build a “Daily Fun Fact About Tech” page that auto-populates interesting facts about computers, the internet, and innovation. The facts could rotate daily or randomly, making the page a quick and engaging stop for students.'
];

const result = document.querySelector('.fillerText');

article.addEventListener("load", function(e) {
  e.preventDefault();
  const random = Math.floor(Math.random() * text.length);
  fillerText.innerHTML = '<p class="filler-text">${text[random]</p>';
});