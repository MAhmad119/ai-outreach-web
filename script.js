document.getElementById('generateBtn').addEventListener('click', () => {
  const name = document.getElementById('prospectName').value.trim();
  const goal = document.getElementById('goal').value;
  const outputBox = document.getElementById('output');
  const badge = document.getElementById('badge');

  if (!name) {
    outputBox.value = "Please enter a prospect name or company first!";
    return;
  }

  const templates = {
    sales: [
      `Hi ${name},\n\nI came across your work and was really impressed by your recent growth. I help businesses like yours automate workflows and save 10+ hours weekly.\n\nWould you be open to a quick 5-minute chat this week?`,
      `Hey ${name},\n\nNotice you're scaling operations at ${name}. We recently built a tool that cuts lead response time in half.\n\nMind if I send over a 1-minute video demo?`
    ],
    collaboration: [
      `Hello ${name},\n\nLoved your latest project! Your approach to design and product structure is super clean.\n\nI’m currently working on similar micro-SaaS assets and would love to connect and explore potential synergies.`,
      `Hi ${name},\n\nFollowing your updates for a while now. I think a joint effort between our workflows could add massive value for both our audiences. Let's touch base!`
    ],
    freelance: [
      `Hi ${name},\n\nI noticed a few areas where your web platform performance could be optimized for higher conversion rates.\n\nI specialize in clean frontend tools and modern UIs. Would love to share 2 quick ideas with you!`
    ]
  };

  const selectedList = templates[goal] || templates.sales;
  const randomMessage = selectedList[Math.floor(Math.random() * selectedList.length)];

  outputBox.value = randomMessage;
  badge.classList.remove('hidden');
});

document.getElementById('copyBtn').addEventListener('click', () => {
  const outputBox = document.getElementById('output');
  if (outputBox.value && !outputBox.value.startsWith("Please enter")) {
    navigator.clipboard.writeText(outputBox.value);
    alert('Message copied to clipboard!');
  }
});
