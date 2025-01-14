import { CreateUserDto } from "../modules/users/dto/create-user.dto";
import { UserRole } from "../common/enums/roles.enum";
import { CreateBookDto } from "../modules/books/dtos/create-book.dto";
import { BookGenre } from "../common/enums/book-genre.enum";
import { CreateBookCopyDto } from "../modules/book-copy/dtos/create-book-copy.dto";
import { BookCopyStatus } from "../common/enums/book-copy-status.enum";
import { BookCopyCondition } from "../common/enums/book-copy-condition.enum";
import { CreateBorrowRequestDto } from "../modules/borrow-requests/dtos/create-borrow-request.dto";
import { BorrowRequestStatus } from "../modules/borrow-requests/borrow-request.schema";

// Seed Users
export const seedUsers: CreateUserDto[] = [
  {
    fullName: "Admin User",
    email: "admin@example.com",
    password: "password123",
    role: UserRole.Admin,
    phoneNumber: "1234567890",
  },
  {
    fullName: "John Doe",
    email: "john.doe@example.com",
    password: "password123",
    role: UserRole.User,
    phoneNumber: "0987654321",
  },
  {
    fullName: "Jane Smith",
    email: "jane.smith@example.com",
    password: "password123",
    role: UserRole.User,
    phoneNumber: "1122334455",
  },
  {
    fullName: "Alice Johnson",
    email: "alice.johnson@example.com",
    password: "password123",
    role: UserRole.User,
    phoneNumber: "2233445566",
  },
  {
    fullName: "Bob Brown",
    email: "bob.brown@example.com",
    password: "password123",
    role: UserRole.User,
    phoneNumber: "3344556677",
  },
];

// Seed Books
export const seedBooks: CreateBookDto[] = [
  {
    id: "book-001",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: BookGenre.FICTION,
    rating: 4.5,
    description:
      "Set in the Roaring Twenties, 'The Great Gatsby' is a timeless exploration of the American Dream, wealth, and the pursuit of happiness. The story follows Jay Gatsby, a mysterious millionaire, as he throws lavish parties in hopes of winning back his lost love, Daisy Buchanan. Through the eyes of Nick Carraway, the novel delves into themes of love, ambition, and the moral decay of society.",
    coverColor: "#1b3390",
    coverUrl:
      "https://i0.wp.com/americanwritersmuseum.org/wp-content/uploads/2018/02/CK-3.jpg",
    summary: `People in Glass Houses by Jayne Castle (a pseudonym for Jayne Ann Krentz) is a science fiction romance set in a future world where people with psychic abilities live in harmony with advanced technology. The story follows the main characters, Harriet and Sam, who are drawn together under unusual circumstances.

Harriet, a talented psychic, works for a company that offers psychic services in a futuristic society. When she finds herself tangled in a dangerous situation involving a mysterious conspiracy, she enlists the help of Sam, a former investigator with a dark past. As they uncover the secrets surrounding a glass house—a mysterious structure tied to their investigation—they must navigate their growing attraction while facing hidden dangers.

The novel combines elements of mystery, suspense, and romance, with a focus on psychic abilities, futuristic technology, and the complexities of relationships. The title, "People in Glass Houses," symbolizes the fragile nature of the world the characters inhabit and the vulnerabilities they face in their personal and professional lives.`,
  },
  {
    id: "book-002",
    title: "1984",
    author: "George Orwell",
    genre: BookGenre.FICTION,
    rating: 4.7,
    description:
      "George Orwell's '1984' is a chilling dystopian novel that explores the dangers of totalitarianism, surveillance, and the manipulation of truth. Set in a future society ruled by the oppressive Party and its enigmatic leader, Big Brother, the story follows Winston Smith as he struggles against the regime's control over every aspect of life. The novel introduces concepts like Newspeak, thoughtcrime, and the ever-watchful Big Brother, which have become synonymous with authoritarianism.",
    coverColor: "#e80000",
    coverUrl: "https://m.media-amazon.com/images/I/71rpa1-kyvL.jpg",
    summary: `People in Glass Houses by Jayne Castle (a pseudonym for Jayne Ann Krentz) is a science fiction romance set in a future world where people with psychic abilities live in harmony with advanced technology. The story follows the main characters, Harriet and Sam, who are drawn together under unusual circumstances.

    Harriet, a talented psychic, works for a company that offers psychic services in a futuristic society. When she finds herself tangled in a dangerous situation involving a mysterious conspiracy, she enlists the help of Sam, a former investigator with a dark past. As they uncover the secrets surrounding a glass house—a mysterious structure tied to their investigation—they must navigate their growing attraction while facing hidden dangers.
    
    The novel combines elements of mystery, suspense, and romance, with a focus on psychic abilities, futuristic technology, and the complexities of relationships. The title, "People in Glass Houses," symbolizes the fragile nature of the world the characters inhabit and the vulnerabilities they face in their personal and professional lives.`,
  },
  {
    id: "book-003",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: BookGenre.FICTION,
    rating: 4.8,
    description:
      "Harper Lee's 'To Kill a Mockingbird' is a profound exploration of racial injustice, moral growth, and the loss of innocence. Set in the racially segregated American South during the 1930s, the novel follows young Scout Finch as she witnesses her father, Atticus Finch, defend a Black man falsely accused of raping a white woman. Through Scout's eyes, the story addresses themes of prejudice, empathy, and the complexities of human nature.",
    coverColor: "#fbf5d5",
    coverUrl:
      "https://www.dramaticpublishing.com/media/catalog/product/cache/1/image/300x436/9df78eab33525d08d6e5fb8d27136e95/t/o/to_kill_a_mockingbird_cover-t34.jpg",
    summary: `People in Glass Houses by Jayne Castle (a pseudonym for Jayne Ann Krentz) is a science fiction romance set in a future world where people with psychic abilities live in harmony with advanced technology. The story follows the main characters, Harriet and Sam, who are drawn together under unusual circumstances.

    Harriet, a talented psychic, works for a company that offers psychic services in a futuristic society. When she finds herself tangled in a dangerous situation involving a mysterious conspiracy, she enlists the help of Sam, a former investigator with a dark past. As they uncover the secrets surrounding a glass house—a mysterious structure tied to their investigation—they must navigate their growing attraction while facing hidden dangers.
    
    The novel combines elements of mystery, suspense, and romance, with a focus on psychic abilities, futuristic technology, and the complexities of relationships. The title, "People in Glass Houses," symbolizes the fragile nature of the world the characters inhabit and the vulnerabilities they face in their personal and professional lives.`,
  },
  {
    id: "book-004",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: BookGenre.FICTION,
    rating: 4.6,
    description:
      "Jane Austen's 'Pride and Prejudice' is a witty and romantic novel that explores the societal norms and expectations of 19th-century England. The story revolves around Elizabeth Bennet, a sharp and independent young woman, and Mr. Darcy, a wealthy and aloof gentleman. As their initial misunderstandings and prejudices give way to mutual respect and love, the novel delves into themes of class, marriage, and personal growth.",
    coverColor: "#0d2a3c",
    coverUrl:
      "https://m.media-amazon.com/images/I/712P0p5cXIL._AC_UF1000,1000_QL80_.jpg",
    summary: `People in Glass Houses by Jayne Castle (a pseudonym for Jayne Ann Krentz) is a science fiction romance set in a future world where people with psychic abilities live in harmony with advanced technology. The story follows the main characters, Harriet and Sam, who are drawn together under unusual circumstances.

    Harriet, a talented psychic, works for a company that offers psychic services in a futuristic society. When she finds herself tangled in a dangerous situation involving a mysterious conspiracy, she enlists the help of Sam, a former investigator with a dark past. As they uncover the secrets surrounding a glass house—a mysterious structure tied to their investigation—they must navigate their growing attraction while facing hidden dangers.
    
    The novel combines elements of mystery, suspense, and romance, with a focus on psychic abilities, futuristic technology, and the complexities of relationships. The title, "People in Glass Houses," symbolizes the fragile nature of the world the characters inhabit and the vulnerabilities they face in their personal and professional lives.`,
  },
  {
    id: "book-005",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: BookGenre.FICTION,
    rating: 4.4,
    description:
      "J.D. Salinger's 'The Catcher in the Rye' is a seminal work of American literature that captures the angst and alienation of adolescence. The novel follows Holden Caulfield, a disenchanted teenager, as he navigates the complexities of growing up and the phoniness he perceives in the adult world. Through Holden's candid and often cynical narration, the story explores themes of identity, loss, and the search for meaning.",
    coverColor: "#e6561a",
    coverUrl:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1398034300i/5107.jpg",
    summary: `People in Glass Houses by Jayne Castle (a pseudonym for Jayne Ann Krentz) is a science fiction romance set in a future world where people with psychic abilities live in harmony with advanced technology. The story follows the main characters, Harriet and Sam, who are drawn together under unusual circumstances.

    Harriet, a talented psychic, works for a company that offers psychic services in a futuristic society. When she finds herself tangled in a dangerous situation involving a mysterious conspiracy, she enlists the help of Sam, a former investigator with a dark past. As they uncover the secrets surrounding a glass house—a mysterious structure tied to their investigation—they must navigate their growing attraction while facing hidden dangers.
    
    The novel combines elements of mystery, suspense, and romance, with a focus on psychic abilities, futuristic technology, and the complexities of relationships. The title, "People in Glass Houses," symbolizes the fragile nature of the world the characters inhabit and the vulnerabilities they face in their personal and professional lives.`,
  },
  {
    id: "book-006",
    title: "Moby Dick",
    author: "Herman Melville",
    genre: BookGenre.FICTION,
    rating: 4.3,
    description:
      "Herman Melville's 'Moby Dick' is an epic tale of obsession, revenge, and the struggle between man and nature. The novel follows Captain Ahab's relentless pursuit of the elusive white whale, Moby Dick, which had previously destroyed his ship and severed his leg. Through the eyes of Ishmael, the story explores themes of fate, free will, and the human condition, set against the backdrop of the whaling industry.",
    coverColor: "#011935",
    coverUrl: "https://m.media-amazon.com/images/I/610qaD5PskL.jpg",
    summary: `People in Glass Houses by Jayne Castle (a pseudonym for Jayne Ann Krentz) is a science fiction romance set in a future world where people with psychic abilities live in harmony with advanced technology. The story follows the main characters, Harriet and Sam, who are drawn together under unusual circumstances.

    Harriet, a talented psychic, works for a company that offers psychic services in a futuristic society. When she finds herself tangled in a dangerous situation involving a mysterious conspiracy, she enlists the help of Sam, a former investigator with a dark past. As they uncover the secrets surrounding a glass house—a mysterious structure tied to their investigation—they must navigate their growing attraction while facing hidden dangers.
    
    The novel combines elements of mystery, suspense, and romance, with a focus on psychic abilities, futuristic technology, and the complexities of relationships. The title, "People in Glass Houses," symbolizes the fragile nature of the world the characters inhabit and the vulnerabilities they face in their personal and professional lives.`,
  },
  {
    id: "book-007",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: BookGenre.FICTION,
    rating: 4.9,
    description:
      "J.R.R. Tolkien's 'The Hobbit' is a beloved fantasy novel that introduces readers to the enchanting world of Middle-earth. The story follows Bilbo Baggins, a hobbit who embarks on an unexpected adventure with a group of dwarves and the wizard Gandalf. Their quest to reclaim the dwarves' homeland from the dragon Smaug is filled with danger, discovery, and personal growth.",
    coverColor: "#2a254e",
    coverUrl:
      "https://d3ddkgxe55ca6c.cloudfront.net/assets/t1496538667/a/af/64/147470-ml-1141823.jpg",
    summary: `People in Glass Houses by Jayne Castle (a pseudonym for Jayne Ann Krentz) is a science fiction romance set in a future world where people with psychic abilities live in harmony with advanced technology. The story follows the main characters, Harriet and Sam, who are drawn together under unusual circumstances.

    Harriet, a talented psychic, works for a company that offers psychic services in a futuristic society. When she finds herself tangled in a dangerous situation involving a mysterious conspiracy, she enlists the help of Sam, a former investigator with a dark past. As they uncover the secrets surrounding a glass house—a mysterious structure tied to their investigation—they must navigate their growing attraction while facing hidden dangers.
    
    The novel combines elements of mystery, suspense, and romance, with a focus on psychic abilities, futuristic technology, and the complexities of relationships. The title, "People in Glass Houses," symbolizes the fragile nature of the world the characters inhabit and the vulnerabilities they face in their personal and professional lives.`,
  },
  {
    id: "book-008",
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: BookGenre.FICTION,
    rating: 4.5,
    description:
      "Paulo Coelho's 'The Alchemist' is an inspirational novel that follows Santiago, a young shepherd, on his journey to discover his personal legend. Along the way, he encounters a series of mentors and challenges that teach him about the importance of listening to one's heart and pursuing one's dreams. The novel is a celebration of self-discovery and the transformative power of faith.",
    coverColor: "#cf1f12",
    coverUrl:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg",
    summary: `People in Glass Houses by Jayne Castle (a pseudonym for Jayne Ann Krentz) is a science fiction romance set in a future world where people with psychic abilities live in harmony with advanced technology. The story follows the main characters, Harriet and Sam, who are drawn together under unusual circumstances.

    Harriet, a talented psychic, works for a company that offers psychic services in a futuristic society. When she finds herself tangled in a dangerous situation involving a mysterious conspiracy, she enlists the help of Sam, a former investigator with a dark past. As they uncover the secrets surrounding a glass house—a mysterious structure tied to their investigation—they must navigate their growing attraction while facing hidden dangers.
    
    The novel combines elements of mystery, suspense, and romance, with a focus on psychic abilities, futuristic technology, and the complexities of relationships. The title, "People in Glass Houses," symbolizes the fragile nature of the world the characters inhabit and the vulnerabilities they face in their personal and professional lives.`,
  },
  {
    id: "book-009",
    title: "The Da Vinci Code",
    author: "Dan Brown",
    genre: BookGenre.FICTION,
    rating: 4.2,
    description:
      "Dan Brown's 'The Da Vinci Code' is a fast-paced thriller that combines art, history, and religion into a gripping narrative. The story follows Harvard symbologist Robert Langdon and French cryptologist Sophie Neveu as they unravel a series of clues hidden in the works of Leonardo da Vinci. Their quest leads them to a secret that could shake the foundations of Christianity.",
    coverColor: "#c3302c",
    coverUrl: "https://m.media-amazon.com/images/I/811nqCf7o1L._SL1500_.jpg",
    summary: `People in Glass Houses by Jayne Castle (a pseudonym for Jayne Ann Krentz) is a science fiction romance set in a future world where people with psychic abilities live in harmony with advanced technology. The story follows the main characters, Harriet and Sam, who are drawn together under unusual circumstances.

    Harriet, a talented psychic, works for a company that offers psychic services in a futuristic society. When she finds herself tangled in a dangerous situation involving a mysterious conspiracy, she enlists the help of Sam, a former investigator with a dark past. As they uncover the secrets surrounding a glass house—a mysterious structure tied to their investigation—they must navigate their growing attraction while facing hidden dangers.
    
    The novel combines elements of mystery, suspense, and romance, with a focus on psychic abilities, futuristic technology, and the complexities of relationships. The title, "People in Glass Houses," symbolizes the fragile nature of the world the characters inhabit and the vulnerabilities they face in their personal and professional lives.`,
  },
  {
    id: "book-010",
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: BookGenre.FICTION,
    rating: 4.9,
    description:
      "J.R.R. Tolkien's 'The Lord of the Rings' is an epic fantasy trilogy that chronicles the quest to destroy the One Ring and defeat the dark lord Sauron. The story follows Frodo Baggins, a humble hobbit, and his companions as they journey through Middle-earth, facing unimaginable dangers and forging unbreakable bonds of friendship.",
    coverColor: "#2d2d2d",
    coverUrl:
      "https://m.media-amazon.com/images/I/913sMwNHsBL._AC_UF894,1000_QL80_.jpg",
    summary: `People in Glass Houses by Jayne Castle (a pseudonym for Jayne Ann Krentz) is a science fiction romance set in a future world where people with psychic abilities live in harmony with advanced technology. The story follows the main characters, Harriet and Sam, who are drawn together under unusual circumstances.

    Harriet, a talented psychic, works for a company that offers psychic services in a futuristic society. When she finds herself tangled in a dangerous situation involving a mysterious conspiracy, she enlists the help of Sam, a former investigator with a dark past. As they uncover the secrets surrounding a glass house—a mysterious structure tied to their investigation—they must navigate their growing attraction while facing hidden dangers.
    
    The novel combines elements of mystery, suspense, and romance, with a focus on psychic abilities, futuristic technology, and the complexities of relationships. The title, "People in Glass Houses," symbolizes the fragile nature of the world the characters inhabit and the vulnerabilities they face in their personal and professional lives.`,
  },
];
// Seed Book Copies
export const seedBookCopies: CreateBookCopyDto[] = [
  // Copies for "The Great Gatsby"
  {
    copyId: "copy-001",
    bookId: "book-001",
    status: BookCopyStatus.AVAILABLE,
    condition: BookCopyCondition.GOOD,
    location: "Shelf A1",
    notes: "New copy",
  },
  {
    copyId: "copy-002",
    bookId: "book-001",
    status: BookCopyStatus.AVAILABLE,
    condition: BookCopyCondition.FAIR,
    location: "Shelf A2",
    notes: "Slightly worn",
  },
  {
    copyId: "copy-003",
    bookId: "book-001",
    status: BookCopyStatus.LOANED,
    condition: BookCopyCondition.GOOD,
    location: "Shelf A3",
    notes: "Currently on loan",
  },

  // Copies for "1984"
  {
    copyId: "copy-004",
    bookId: "book-002",
    status: BookCopyStatus.AVAILABLE,
    condition: BookCopyCondition.EXCELLENT,
    location: "Shelf B1",
    notes: "Brand new",
  },
  {
    copyId: "copy-005",
    bookId: "book-002",
    status: BookCopyStatus.AVAILABLE,
    condition: BookCopyCondition.GOOD,
    location: "Shelf B2",
    notes: "Minor wear",
  },

  // Copies for "To Kill a Mockingbird"
  {
    copyId: "copy-006",
    bookId: "book-003",
    status: BookCopyStatus.AVAILABLE,
    condition: BookCopyCondition.GOOD,
    location: "Shelf C1",
    notes: "Good condition",
  },
  {
    copyId: "copy-007",
    bookId: "book-003",
    status: BookCopyStatus.LOANED,
    condition: BookCopyCondition.FAIR,
    location: "Shelf C2",
    notes: "Currently on loan",
  },

  // Copies for "Pride and Prejudice"
  {
    copyId: "copy-008",
    bookId: "book-004",
    status: BookCopyStatus.AVAILABLE,
    condition: BookCopyCondition.EXCELLENT,
    location: "Shelf D1",
    notes: "New copy",
  },

  // Copies for "The Catcher in the Rye"
  {
    copyId: "copy-009",
    bookId: "book-005",
    status: BookCopyStatus.AVAILABLE,
    condition: BookCopyCondition.GOOD,
    location: "Shelf E1",
    notes: "Good condition",
  },
  {
    copyId: "copy-010",
    bookId: "book-005",
    status: BookCopyStatus.LOANED,
    condition: BookCopyCondition.FAIR,
    location: "Shelf E2",
    notes: "Currently on loan",
  },

  // Copies for "Moby Dick"
  {
    copyId: "copy-011",
    bookId: "book-006",
    status: BookCopyStatus.AVAILABLE,
    condition: BookCopyCondition.GOOD,
    location: "Shelf F1",
    notes: "Good condition",
  },

  // Copies for "The Hobbit"
  {
    copyId: "copy-012",
    bookId: "book-007",
    status: BookCopyStatus.AVAILABLE,
    condition: BookCopyCondition.EXCELLENT,
    location: "Shelf G1",
    notes: "New copy",
  },
  {
    copyId: "copy-013",
    bookId: "book-007",
    status: BookCopyStatus.LOANED,
    condition: BookCopyCondition.GOOD,
    location: "Shelf G2",
    notes: "Currently on loan",
  },

  // Copies for "The Alchemist"
  {
    copyId: "copy-014",
    bookId: "book-008",
    status: BookCopyStatus.AVAILABLE,
    condition: BookCopyCondition.GOOD,
    location: "Shelf H1",
    notes: "Good condition",
  },

  // Copies for "The Da Vinci Code"
  {
    copyId: "copy-015",
    bookId: "book-009",
    status: BookCopyStatus.AVAILABLE,
    condition: BookCopyCondition.EXCELLENT,
    location: "Shelf I1",
    notes: "New copy",
  },

  // Copies for "The Lord of the Rings"
  {
    copyId: "copy-016",
    bookId: "book-010",
    status: BookCopyStatus.AVAILABLE,
    condition: BookCopyCondition.GOOD,
    location: "Shelf J1",
    notes: "Good condition",
  },
  {
    copyId: "copy-017",
    bookId: "book-010",
    status: BookCopyStatus.LOANED,
    condition: BookCopyCondition.FAIR,
    location: "Shelf J2",
    notes: "Currently on loan",
  },
];

// Seed Borrow Requests
export const seedBorrowRequests: CreateBorrowRequestDto[] = [
  {
    userId: "admin@example.com",
    bookCopyId: "copy-001",
    status: BorrowRequestStatus.PENDING,
  },
  {
    userId: "john.doe@example.com",
    bookCopyId: "copy-002",
    status: BorrowRequestStatus.APPROVED,
  },
  {
    userId: "jane.smith@example.com",
    bookCopyId: "copy-003",
    status: BorrowRequestStatus.RETURNED,
  },
  {
    userId: "alice.johnson@example.com",
    bookCopyId: "copy-004",
    status: BorrowRequestStatus.PENDING,
  },
  {
    userId: "bob.brown@example.com",
    bookCopyId: "copy-005",
    status: BorrowRequestStatus.APPROVED,
  },
  {
    userId: "john.doe@example.com",
    bookCopyId: "copy-006",
    status: BorrowRequestStatus.PENDING,
  },
  {
    userId: "jane.smith@example.com",
    bookCopyId: "copy-007",
    status: BorrowRequestStatus.APPROVED,
  },
  {
    userId: "alice.johnson@example.com",
    bookCopyId: "copy-008",
    status: BorrowRequestStatus.RETURNED,
  },
  {
    userId: "bob.brown@example.com",
    bookCopyId: "copy-009",
    status: BorrowRequestStatus.PENDING,
  },
  {
    userId: "admin@example.com",
    bookCopyId: "copy-010",
    status: BorrowRequestStatus.APPROVED,
  },
];
