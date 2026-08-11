let arrayBooks = [
  {
    id: 0,
    bookname: "1984",
    author: "George Orwell",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/0/0e/1984_%28first_book-cover%29.jpg",
    plot: "The main character - Winston Smith - lives in London, works in the Ministry of Truth and is a member of an external party. He does not share party slogans and ideology and deeply doubts the party surrounding reality and in general all that can be doubted. In order to “let off steam” and not to commit any reckless act, he keeps a diary in which he tries to express all his doubts. In public, he pretends to be an adherent of party ideas. However, she fears that the girl Julia, who works in the same ministry, is spying on him and wants to expose him.",
  },
  {
    id: 1,
    bookname: "The Green Mile",
    author: "Stephen King",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/0/01/%D0%9C%D0%B8%D0%BB%D1%8F.jpeg",
    plot: "The story is narrated on behalf of Paul Edgecombe, former superintendent of the Louisiana Federal Prison Cold Mountain, and currently resident of the Georgia Pines Nursing Home. Paul tells his girlfriend Elaine Connelly about events that happened more than 50 years ago.1932 year. Paul is the Senior Overseer of Prison Block E, which contains those sentenced to death by electric chair. In prison, this block, covered with linoleum of dark green color, is called the “Green Mile” (by analogy with the “Last Mile”, which the condemned person passes for the last time).",
  },
  {
    id: 2,
    bookname: "Le Comte de Monte-Cristo",
    author: "Alexandre Dumas",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Louis_Fran%C3%A7ais-Dant%C3%A8s_sur_son_rocher.jpg/800px-Louis_Fran%C3%A7ais-Dant%C3%A8s_sur_son_rocher.jpg",
    plot: 'The protagonist of the novel is the Marseille sailor Edmond Dantes from the ship "Pharaoh". During one of the flights, he went to Elba Island, where he met with Marshal Bertrand (later said to be with Murat), who instructs him to deliver a letter to Paris. This Edmond fulfills the last will of the captain of the "Pharaoh" who died shortly before this. Upon arrival in Marseille, the ships owner Morrell wants to appoint Dantes as captain, and Edmond himself is going to marry Mercedes, a resident of the neighboring fishing village of Catalana.',
  },
];
let serialObj = JSON.stringify(arrayBooks);
localStorage.setItem("books", serialObj);
