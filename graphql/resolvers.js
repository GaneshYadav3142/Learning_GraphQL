import { books, chapters } from "./db.js"


export const resolvers = {
    Query : {
        books : ()=>books,
        bookName : async (_, args) => {
            const {title} = args
            const getBook = books.find((el)=>el.title === title)
            console.log(getBook)
            if (!getBook) {
                throw new Error(`Book with title "${title}" not found.`);
              }
      
              return getBook;
        },
        chapterByBookName: async(_,args)=>{
          const {title}=args
          const getChapter=chapters.filter((chapter)=>chapter.book===title)
          if (!getChapter) {
            throw new Error(`No Chapter for ${title}`);
          }
  
          return getChapter;
        }
        
    },

    Book :{
      chapters: (parent,args)=>chapters.filter((el)=>el.book === parent.title)
    },

    Mutation : {
      add : async (root, args, context) => {
        // const {title, author} = args
        const bookExists = books.find((el)=>el.title === args.addBook.title)
        if(bookExists){
          return new Error("Book already exist")
        }
        const addNewBook = books.push(args.addBook)

        return args.addBook
      },
      deleteBook : async (root,args,context)=>{
        const {title} = args
        const getBook = books.filter((el)=>el.title !== title)
        console.log(getBook)
        if (!getBook) {
            throw new Error(`Empty array.`);
          }
  
          return getBook;
    }
    }
}