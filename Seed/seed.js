const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const dbName = "book_review_app";
const client = new MongoClient(uri);

async function seedData() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db(dbName);
    const booksCollection = db.collection("books");
    const reviewsCollection = db.collection("reviews");

    const bookData = [
      { id: 1, title: "The Lord of the Rings", author: "J.R.R. Tolkien" },
      {
        id: 2,
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
      },
      { id: 3, title: "Pride and Prejudice", author: "Jane Austen" },
      { id: 4, title: "To Kill a Mockingbird", author: "Harper Lee" },
      { id: 5, title: "1984", author: "George Orwell" },
      { id: 6, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
      { id: 7, title: "Moby-Dick", author: "Herman Melville" },
      { id: 8, title: "The Catcher in the Rye", author: "J.D. Salinger" },
      { id: 9, title: "To the Lighthouse", author: "Virginia Woolf" },
      { id: 10, title: "Brave New World", author: "Aldous Huxley" },
      { id: 11, title: "The Odyssey", author: "Homer" },
      { id: 12, title: "The Picture of Dorian Gray", author: "Oscar Wilde" },
      { id: 13, title: "The Hobbit", author: "J.R.R. Tolkien" },
      { id: 14, title: "The Alchemist", author: "Paulo Coelho" },
      { id: 15, title: "The Chronicles of Narnia", author: "C.S. Lewis" },
      { id: 16, title: "The Kite Runner", author: "Khaled Hosseini" },
      { id: 17, title: "The Grapes of Wrath", author: "John Steinbeck" },
      { id: 18, title: "The Scarlet Letter", author: "Nathaniel Hawthorne" },
      { id: 19, title: "The Sun Also Rises", author: "Ernest Hemingway" },
      { id: 20, title: "The Count of Monte Cristo", author: "Alexandre Dumas" },
      { id: 21, title: "The Brothers Karamazov", author: "Fyodor Dostoevsky" },
      { id: 22, title: "The Divine Comedy", author: "Dante Alighieri" },
      { id: 23, title: "The Adventures of Tom Sawyer", author: "Mark Twain" },
      { id: 24, title: "The Iliad", author: "Homer" },
      { id: 25, title: "The Lord of the Flies", author: "William Golding" },
      { id: 26, title: "The Shining", author: "Stephen King" },
      { id: 27, title: "The Handmaid's Tale", author: "Margaret Atwood" },
      { id: 28, title: "The Old Man and the Sea", author: "Ernest Hemingway" },
      { id: 29, title: "The Grapes of Wrath", author: "John Steinbeck" },
      { id: 30, title: "The Metamorphosis", author: "Franz Kafka" },
      {
        id: 31,
        title: "The Adventures of Huckleberry Finn",
        author: "Mark Twain",
      },
      { id: 32, title: "The Stranger", author: "Albert Camus" },
      { id: 33, title: "The Canterbury Tales", author: "Geoffrey Chaucer" },
      { id: 34, title: "The Bell Jar", author: "Sylvia Plath" },
      { id: 35, title: "The Color Purple", author: "Alice Walker" },
      { id: 36, title: "The Lord of the Rings", author: "J.R.R. Tolkien" },
      {
        id: 37,
        title: "The Hitchhiker's Guide to the Galaxy",
        author: "Douglas Adams",
      },
      { id: 38, title: "Pride and Prejudice", author: "Jane Austen" },
      { id: 39, title: "To Kill a Mockingbird", author: "Harper Lee" },
      { id: 40, title: "1984", author: "George Orwell" },
      { id: 41, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
      { id: 42, title: "Moby-Dick", author: "Herman Melville" },
      { id: 43, title: "The Catcher in the Rye", author: "J.D. Salinger" },
      { id: 44, title: "To the Lighthouse", author: "Virginia Woolf" },
      { id: 45, title: "Brave New World", author: "Aldous Huxley" },
      { id: 46, title: "The Odyssey", author: "Homer" },
      { id: 47, title: "The Picture of Dorian Gray", author: "Oscar Wilde" },
      { id: 48, title: "The Hobbit", author: "J.R.R. Tolkien" },
      { id: 49, title: "The Alchemist", author: "Paulo Coelho" },
      { id: 50, title: "The Chronicles of Narnia", author: "C.S. Lewis" },
    ];

    const reviewData = [
        {
          bookId: 1,
          review:
            "An epic journey, rich in detail and unforgettable characters. A must-read for fantasy lovers.",
        },
        {
          bookId: 1,
          review:
            "Tolkien's world-building is unparalleled. I felt transported to Middle-earth with every page.",
        },
        {
          bookId: 1,
          review:
            "A dense read, but the payoff is immense. The themes of friendship, courage, and sacrifice resonate deeply.",
        },
        {
          bookId: 1,
          review:
            "The battles are thrilling, but it's the quiet moments of fellowship that truly make this story shine.",
        },
        {
          bookId: 2,
          review:
            "Hilarious and absurd! Adams' wit is razor-sharp, and his commentary on life is both funny and thought-provoking.",
        },
        {
          bookId: 2,
          review:
            "A wild ride through space, full of bizarre encounters and philosophical musings. Don't Panic!",
        },
        {
          bookId: 2,
          review:
            "This book made me laugh out loud so many times. It's a perfect escape from reality.",
        },
        {
          bookId: 2,
          review:
            "Beneath the humor lies a surprising depth. It makes you question everything you thought you knew about the universe.",
        },
        {
          bookId: 3,
          review:
            "Austen's writing is witty and elegant. The characters are so well-developed, I felt like I knew them personally.",
        },
        {
          bookId: 3,
          review:
            "A classic love story with a sharp social commentary. It's as relevant today as it was centuries ago.",
        },
        {
          bookId: 3,
          review:
            "Elizabeth Bennet is a strong, independent female protagonist ahead of her time. I adored her spirit.",
        },
        {
          bookId: 3,
          review:
            "The banter between Elizabeth and Mr. Darcy is absolutely delightful. Their slow-burn romance is a joy to read.",
        },
        {
          bookId: 4,
          review:
            "A powerful and poignant story about racial injustice and moral courage. It left a lasting impact on me.",
        },
        {
          bookId: 4,
          review:
            "Scout's innocent perspective on the events unfolding around her is both heartbreaking and heartwarming.",
        },
        {
          bookId: 4,
          review:
            "Atticus Finch is a role model for all lawyers, and his unwavering sense of justice is inspiring.",
        },
        {
          bookId: 4,
          review:
            "This book tackles difficult subjects with grace and sensitivity. It's a must-read for all ages.",
        },
        {
          bookId: 5,
          review:
            "A chilling dystopian vision that feels all too relevant in today's world. It's a stark warning against totalitarianism.",
        },
        {
          bookId: 5,
          review:
            "Orwell's writing is masterful. The atmosphere of paranoia and oppression is palpable.",
        },
        {
          bookId: 5,
          review:
            "Winston's struggle against the Party is both agonizing and inspiring. It's a testament to the human spirit.",
        },
        {
          bookId: 5,
          review:
            "This book forces you to think critically about the power of language, surveillance, and control.",
        },
        {
          bookId: 6,
          review:
            "A dazzling portrait of the Jazz Age, filled with lavish parties and unfulfilled dreams.",
        },
        {
          bookId: 6,
          review:
            "Gatsby's pursuit of love and status is both tragic and compelling. A cautionary tale about the American Dream.",
        },
        {
          bookId: 6,
          review:
            "Fitzgerald's prose is lyrical and evocative. It captures the essence of an era.",
        },
        {
          bookId: 7,
          review:
            "A grand and ambitious novel about obsession, revenge, and the nature of good and evil.",
        },
        {
          bookId: 7,
          review:
            "Captain Ahab's relentless pursuit of the white whale is a metaphor for the destructive power of obsession.",
        },
        {
          bookId: 7,
          review:
            "Melville's language is rich and poetic, with vivid descriptions of life at sea.",
        },
        {
          bookId: 8,
          review:
            "Holden Caulfield's voice is unforgettable. His angst and alienation resonate with readers of all ages.",
        },
        {
          bookId: 8,
          review:
            "A coming-of-age story that captures the confusion and disillusionment of adolescence.",
        },
        {
          bookId: 8,
          review:
            "Salinger's writing is honest and raw. It doesn't shy away from difficult emotions.",
        },
        {
          bookId: 9,
          review:
            "A beautiful and evocative exploration of memory, loss, and the passage of time.",
        },
        {
          bookId: 9,
          review:
            "Woolf's stream-of-consciousness style is both challenging and rewarding. It immerses you in the characters' minds.",
        },
        {
          bookId: 9,
          review:
            "The descriptions of the Scottish landscape are breathtaking. It's a feast for the senses.",
        },
        {
          bookId: 10,
          review:
            "A satirical vision of a future where happiness is manufactured and individuality is suppressed.",
        },
        {
          bookId: 10,
          review:
            "Huxley's ideas about genetic engineering and social control are thought-provoking.",
        },
        {
          bookId: 10,
          review:
            "This book challenges you to question what it means to be human and what the cost of happiness might be.",
        },
        {
          bookId: 11,
          review:
            "A timeless epic about adventure, homecoming, and the power of storytelling.",
        },
        {
          bookId: 11,
          review:
            "Odysseus's journey is filled with mythical creatures, gods and goddesses, and treacherous trials.",
        },
        {
          bookId: 11,
          review:
            "Homer's language is beautiful and evocative. It transports you to ancient Greece.",
        },
        {
          bookId: 12,
          review:
            "A darkly fascinating exploration of vanity, hedonism, and the consequences of moral corruption.",
        },
        {
          bookId: 12,
          review:
            "Dorian Gray's portrait is a chilling metaphor for the hidden sins and decay of the soul.",
        },
        {
          bookId: 12,
          review:
            "Wilde's writing is witty and elegant, with sharp observations about society and morality.",
        },
        {
          bookId: 13,
          review:
            "A delightful prequel to The Lord of the Rings, full of adventure and charm.",
        },
        {
          bookId: 13,
          review:
            "Bilbo Baggins's journey is a testament to the power of stepping outside your comfort zone.",
        },
        {
          bookId: 13,
          review:
            "Tolkien's world-building is just as captivating as in his later works.",
        },
        {
          bookId: 14,
          review:
            "A heartwarming story about following your dreams and listening to your heart.",
        },
        {
          bookId: 14,
          review:
            "Santiago's journey to Egypt is filled with valuable lessons about life, love, and the pursuit of personal legend.",
        },
        {
          bookId: 14,
          review:
            "Coelho's writing is simple yet profound. It speaks to the soul.",
        },
        {
          bookId: 15,
          review:
            "A magical series for children and adults alike, full of wonder and adventure.",
        },
        {
          bookId: 15,
          review:
            "The Pevensie siblings' journey to Narnia is a classic tale of good versus evil.",
        },
        {
          bookId: 15,
          review:
            "Lewis's allegory is rich with Christian themes, but it's also a captivating story on its own merits.",
        },
        {
          bookId: 16,
          review:
            "A heart-wrenching story about friendship, betrayal, and redemption.",
        },
        {
          bookId: 16,
          review:
            "Amir's guilt and regret over his childhood actions drive the narrative.",
        },
        {
          bookId: 16,
          review:
            "Hosseini's depiction of Afghanistan is both beautiful and tragic.",
        },
        {
          bookId: 17,
          review:
            "A powerful portrayal of the struggles faced by migrant workers during the Great Depression.",
        },
        {
          bookId: 17,
          review:
            "The Joad family's journey is a testament to the resilience of the human spirit in the face of hardship.",
        },
        {
          bookId: 17,
          review:
            "Steinbeck's social commentary is as relevant today as it was then.",
        },
        {
          bookId: 18,
          review:
            "A haunting tale of sin, shame, and redemption in Puritan New England.",
        },
        {
          bookId: 18,
          review:
            "Hester Prynne's scarlet letter is a symbol of societal judgment and the consequences of breaking moral codes.",
        },
        {
          bookId: 18,
          review: "Hawthorne's writing is atmospheric and thought-provoking.",
        },
        {
          bookId: 19,
          review:
            "A poignant depiction of the Lost Generation and the disillusionment that followed World War I.",
        },
        {
          bookId: 19,
          review:
            "Jake Barnes and Brett Ashley's tumultuous relationship is a central theme.",
        },
        {
          bookId: 19,
          review:
            "Hemingway's spare prose style is both powerful and evocative.",
        },
        {
          bookId: 20,
          review:
            "An epic adventure of revenge, forgiveness, and the triumph of justice.",
        },
        {
          bookId: 20,
          review:
            "Edmond Dantès' transformation from an innocent man to a vengeful count is captivating.",
        },
        {
          bookId: 20,
          review:
            "Dumas' storytelling is masterful, with twists and turns that keep you hooked.",
        },

        {
          bookId: 21,
          review:
            "A philosophical masterpiece exploring faith, doubt, morality, and the human condition.",
        },
        {
          bookId: 21,
          review:
            "The Karamazov brothers represent different facets of human nature: faith, intellect, sensuality, and rebellion.",
        },
        {
          bookId: 21,
          review:
            "Dostoevsky's psychological insights are profound and unsettling.",
        },
        {
          bookId: 22,
          review:
            "An epic poem that takes the reader on a journey through Hell, Purgatory, and Paradise.",
        },
        {
          bookId: 22,
          review:
            "Dante's allegorical vision is rich with symbolism and religious themes.",
        },
        {
          bookId: 22,
          review:
            "A challenging but rewarding read that offers a glimpse into medieval Christian theology.",
        },
        {
          bookId: 23,
          review:
            "A classic coming-of-age story filled with boyhood adventures and mischief.",
        },
        {
          bookId: 23,
          review:
            "Tom Sawyer's escapades capture the spirit of youth and the allure of the unknown.",
        },
        {
          bookId: 23,
          review:
            "Twain's humor and social commentary shine through in this beloved novel.",
        },
        {
          bookId: 24,
          review:
            "An epic poem recounting the Trojan War and the rage of Achilles.",
        },
        {
          bookId: 24,
          review:
            "Homer's vivid descriptions of battles and the heroism of ancient warriors are captivating.",
        },
        {
          bookId: 24,
          review:
            "The themes of honor, glory, and the futility of war resonate deeply.",
        },
        {
          bookId: 25,
          review:
            "A chilling allegory about the dark side of human nature and the fragility of civilization.",
        },
        {
          bookId: 25,
          review:
            "The boys' descent into savagery is a cautionary tale about the loss of innocence and the dangers of unchecked power.",
        },
        {
          bookId: 25,
          review:
            "Golding's exploration of societal breakdown is both disturbing and thought-provoking.",
        },
        {
          bookId: 26,
          review:
            "A psychological horror masterpiece that will keep you up at night.",
        },
        {
          bookId: 26,
          review:
            "The Overlook Hotel is a character in itself, filled with malevolent spirits and dark secrets.",
        },
        {
          bookId: 26,
          review:
            "King's writing is suspenseful and terrifying. The isolation and claustrophobia are palpable.",
        },
        {
          bookId: 27,
          review:
            "A chilling dystopian novel about a totalitarian regime that oppresses women.",
        },
        {
          bookId: 27,
          review:
            "Offred's narrative is a powerful testament to the resilience of the human spirit in the face of oppression.",
        },
        {
          bookId: 27,
          review:
            "Atwood's writing is both terrifying and hopeful. It's a warning and a call to action.",
        },
        {
          bookId: 28,
          review:
            "A simple yet profound story about an old fisherman's struggle against a giant marlin.",
        },
        {
          bookId: 28,
          review:
            "Santiago's perseverance and dignity in the face of adversity are inspiring.",
        },
        {
          bookId: 28,
          review:
            "Hemingway's prose is spare and evocative, capturing the beauty and brutality of nature.",
        },
        {
          bookId: 29,
          review:
            "A gritty and realistic portrayal of the Dust Bowl era and the plight of migrant workers.",
        },
        {
          bookId: 29,
          review:
            "The Joad family's resilience in the face of hardship is a testament to the human spirit.",
        },
        {
          bookId: 29,
          review:
            "Steinbeck's social commentary is both powerful and timeless.",
        },
        {
          bookId: 30,
          review:
            "A surreal and unsettling novella about a man who transforms into a giant insect.",
        },
        {
          bookId: 30,
          review:
            "Gregor Samsa's metamorphosis is a metaphor for alienation and the absurdity of existence.",
        },
        {
          bookId: 30,
          review:
            "Kafka's writing is sparse and precise, creating a dreamlike atmosphere of unease.",
        },
        {
          bookId: 31,
          review:
            "A classic American novel about a boy's adventures on the Mississippi River.",
        },
        {
          bookId: 31,
          review:
            "Huck Finn's journey is a coming-of-age story with themes of friendship, freedom, and morality.",
        },
        {
          bookId: 31,
          review:
            "Twain's satire and social commentary are sharp and insightful.",
        },
        {
          bookId: 32,
          review:
            "A philosophical novel exploring the themes of absurdity, alienation, and the meaning of life.",
        },
        {
          bookId: 32,
          review:
            "Meursault's indifference to societal norms and his acceptance of the absurd are both disturbing and thought-provoking.",
        },
        {
          bookId: 32,
          review:
            "Camus's prose is clear and concise, yet packed with philosophical depth.",
        },
        {
          bookId: 33,
          review:
            "A collection of tales told by pilgrims on their way to Canterbury, offering a glimpse into medieval society.",
        },
        {
          bookId: 33,
          review:
            "Chaucer's characters are diverse and vividly drawn, representing various social classes and professions.",
        },
        {
          bookId: 33,
          review:
            "The tales are bawdy, humorous, and sometimes poignant, reflecting the complexities of human nature.",
        },
        {
          bookId: 34,
          review:
            "A semi-autobiographical novel about a young woman's descent into mental illness.",
        },
        {
          bookId: 34,
          review:
            "Esther Greenwood's struggles with depression and societal expectations are painfully relatable.",
        },
        {
          bookId: 34,
          review:
            "Plath's writing is raw and unflinching, yet also poetic and insightful.",
        },
        {
          bookId: 35,
          review:
            "A powerful story about the resilience of African American women in the face of racism and abuse.",
        },
        {
          bookId: 35,
          review:
            "Celie's journey from oppression to empowerment is both heartbreaking and inspiring.",
        },
        {
          bookId: 35,
          review:
            "Walker's prose is lyrical and authentic, capturing the voices of her characters.",
        },
        {
          bookId: 36,
          review:
            "A second copy of The Lord of the Rings. Same epic journey, different reading experience.",
        },
        {
          bookId: 37,
          review:
            "A second copy of The Hitchhiker's Guide to the Galaxy. Twice the absurdity, twice the fun.",
        },
        {
          bookId: 38,
          review:
            "A second copy of Pride and Prejudice. Revisit the witty banter and timeless romance.",
        },
        {
          bookId: 39,
          review:
            "A second copy of To Kill a Mockingbird. Experience the powerful story anew.",
        },
        {
          bookId: 40,
          review:
            "A second copy of 1984. Delve into the dystopian world once more.",
        },
        {
          bookId: 41,
          review:
            "A second copy of The Great Gatsby. Immerse yourself in the Jazz Age again.",
        },
        {
          bookId: 42,
          review:
            "A second copy of Moby-Dick. Embark on another whaling adventure with Captain Ahab.",
        },
        {
          bookId: 43,
          review:
            "A second copy of The Catcher in the Rye. Relive Holden Caulfield's angst and alienation.",
        },
        {
          bookId: 44,
          review:
            "A second copy of To the Lighthouse. Explore memory, loss, and the passage of time once more.",
        },
        {
          bookId: 45,
          review:
            "A second copy of Brave New World. Revisit the unsettling vision of a manufactured happiness.",
        },
        {
          bookId: 46,
          review:
            "A second copy of The Odyssey. Embark on another epic journey with Odysseus.",
        },
        {
          bookId: 47,
          review:
            "A second copy of The Picture of Dorian Gray. Witness the consequences of vanity and moral decay again.",
        },
        {
          bookId: 48,
          review:
            "A second copy of The Hobbit. Join Bilbo Baggins on his unexpected journey.",
        },
        {
          bookId: 49,
          review:
            "A second copy of The Alchemist. Follow your dreams and listen to your heart once more.",
        },
        {
          bookId: 50,
          review:
            "A second copy of The Chronicles of Narnia. Return to the magical land of Narnia.",
        },
    ];

    await booksCollection.insertMany(bookData);
    await reviewsCollection.insertMany(reviewData);

    console.log("Seed data inserted successfully");
  } catch (e) {
    console.error("Error seeding data:", e);
  } finally {
    client.close();
  }
}

seedData();
